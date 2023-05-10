import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons"

import "./reserve.css"
import useFetch from "../../hooks/useFetch";
import { useContext, useState } from "react";
import { SearchContext } from "../../context/SearchContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
const Reserve = ({setOpen, hotelId, hotelName, price}) => {
  const { user } = useContext(AuthContext);
  const [selectedRooms, setSelectedRooms] = useState([]);
  const {data, loading, error} = useFetch(`/hotels/room/${hotelId}`);
  const { dates } = useContext(SearchContext);

  const handleSelect = (e) => {
    const checked = e.target.checked;
    const value = e.target.value;
    setSelectedRooms(
      checked
        ? [...selectedRooms, value]                               // add(operation) if it is checked takes the previous room and add one more add
        : selectedRooms.filter((item) => item !== value)          // remove(operation) we will gonna pull id from selected room 
    );
  };

  const getDatesInRange = (startDate, endDate) => {               // it give timestamp which is easier to compare
    const start = new Date(startDate);
    const end = new Date(endDate);

    const date = new Date(start.getTime());

    const dates = [];

    while (date <= end) {
      dates.push(new Date(date).getTime());
      date.setDate(date.getDate() + 1);
    }

    return dates;
  };

  const alldates = getDatesInRange(dates[0].startDate, dates[0].endDate);

  // for checking if the room is available or not
  const isAvailable = (roomNumber) => {                                        
    const isFound = roomNumber.unavailableDates.some((date) =>         // some method - check whether it include some of them or not 
      alldates.includes(new Date(date).getTime())
    );

    return !isFound;          // isFound true means date is unavailable
  };

  const navigate = useNavigate();

  const handleClick = async () => {
    try {
      const userId = user ? user._id : null; 

      // Retrieve the room numbers from the selected rooms
      const selectedRoomNumbers = selectedRooms.map((roomId) => {
        const room = data.find((item) => item.roomNumbers.some((number) => number._id === roomId));
        return room ? room.roomNumbers.find((number) => number._id === roomId).number : null;
      });

      // Log the room numbers to the console
      console.log(selectedRoomNumbers);

      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.post(`/bookings/${userId}`, {
            hotelName,
            roomNumber: selectedRoomNumbers[0],
            price,
            startDate: alldates[1],
            endDate: alldates[alldates.length-0],
          });
          //console.log(userId);
          console.log("ASDSDJADLKADJKALDJAKDLJADKLAJDKLADJALKDJA")
          console.log(hotelName);
          console.log(selectedRoomNumbers[0]);
          console.log(price);
          return res.data;
        })
      );
      await Promise.all(
        selectedRooms.map((roomId) => {
          const res = axios.put(`/rooms/availability/${roomId}`, {
            dates: alldates,
          });
          return res.data;
        })
      );
      setOpen(false);
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    
    <div className="reserve">
        <div className="rContainer">
            <FontAwesomeIcon icon={faCircleXmark} className="rClose" onClick={()=>setOpen(false)}/>
            <span>Select your rooms:</span>
            {data.map((item) => (
          <div className="rItem" key={item._id}>
            <div className="rItemInfo">
              <div className="rTitle">{item.title}</div>
              <div className="rDesc">{item.desc}</div>
              <div className="rMax">
                Max people: <b>{item.maxPeople}</b>
              </div>
              <div className="rPrice">{item.price}</div>
            </div>
            <div className="rSelectRooms">
              {item.roomNumbers.map((roomNumber) => (
                <div className="room">
                  <label>{roomNumber.number}</label>
                  <input
                    type="checkbox"
                    value={roomNumber._id}
                    onChange={handleSelect}
                    disabled={!isAvailable(roomNumber)}            // disable if not available
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
        <button onClick={handleClick} className="rButton">
          Reserve Now!
        </button>
      </div>
    </div>
  );
};

export default  Reserve

