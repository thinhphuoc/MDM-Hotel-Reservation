
import "./featuredProperties.css";
import img1 from '../../assets/images/room1.jpg'
import img2 from '../../assets/images/room2.jpg'
import img3 from '../../assets/images/room3.jpg'
import img4 from '../../assets/images/room4.jpg'
import img5 from '../../assets/images/room5.jpg'
import img6 from '../../assets/images/room6.jpg'


const FeaturedProperties = () => {
  
  const data = [
    {
      img: img1,
      name: 'Suite Room',
      price: 'per night $120.00',
      detail: 'View Room Details',
      cheapestPrice: "$100.00"
    }, 
    {
      img: img2,
      name: 'Suite Room',
      price: 'per night $120.00',
      detail: 'View Room Details',
      cheapestPrice: "$100.00",
      cheapestPrice: "$100.00"
    },
    {
      img: img3,
      name: 'Suite Room',
      price: 'per night $120.00',
      detail: 'View Room Details',
      cheapestPrice: "$100.00"
    },
    {
      img: img4,
      name: 'Suite Room',
      price: 'per night $120.00',
      detail: 'View Room Details',
      cheapestPrice: "$100.00"
    },
    {
      img: img5,
      name: 'Suite Room',
      price: 'per night $120.00',
      detail: 'View Room Details',
      cheapestPrice: "$100.00"
    },
    {
      img: img6,
      name: 'Suite Room',
      price: 'per night $120.00',
      detail: 'View Room Details',
      cheapestPrice: "$100.00"
    },
  ] 

  return (
    <div className="fp">
    {data.map(item=>(

      <div className="fpItem" key={item._id}>
        <img
          style={{
            width: '325px',
            height: '230px'
          }}
          src={item.img}
          alt=""
          className="fpImg"
          />
        <span className="fpName">{item.name}</span>
        <span className="fpCity">{item.city}</span>
        <span className="fpPrice">Starting from Rs. {item.cheapestPrice}</span>
        {item.rating && 
          <div className="fpRating">
          <button>{item.rating}</button>
          <span>Excellent</span>
          </div>
        }
        </div>
          ))
        }  
        
    </div>
  );
};

export default FeaturedProperties;
