
import "./featuredProperties.css";
import img1 from '../../assets/images/room1.jpg'
import img2 from '../../assets/images/room2.jpg'
import img3 from '../../assets/images/room3.jpg'
import img4 from '../../assets/images/room4.jpg'
import img5 from '../../assets/images/room5.jpg'
import img6 from '../../assets/images/room6.jpg'
import img7 from '../../assets/images/forward.png'


const FeaturedProperties = () => {
  
  const data = [
    {
      img: img1,
      name: 'Suite Room',
      price: '$120.00',
      detail: 'View Room Details',
      cheapestPrice: "$100.00"
    }, 
    {
      img: img2,
      name: 'Family room',
      price: '$20.00',
      detail: 'View Room Details',
      cheapestPrice: "$100.00",
      cheapestPrice: "$100.00"
    },
    {
      img: img3,
      name: 'Deluxe Room',
      price: '$150.00',
      detail: 'View Room Details',
      cheapestPrice: "$100.00"
    },
    {
      img: img4,
      name: 'Classic Room',
      price: '$130.00',
      detail: 'View Room Details',
      cheapestPrice: "$100.00"
    },
    {
      img: img5,
      name: 'Superior Room',
      price: '$300.00',
      detail: 'View Room Details',
      cheapestPrice: "$100.00"
    },
    {
      img: img6,
      name: 'Luxury Room',
      price: '$500.00',
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
        <div style={{display: 'flex'}}>
        <span className="fpPrice">{item.price}</span>
        <span style={{opacity: '0.3'}}> per night</span>
        </div>
        <hr></hr>
        <span className="detail">View Room Details
          <img src={img7} style={{width: '20px', height: '20px', marginLeft: '5px'}}></img>
        </span>

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
