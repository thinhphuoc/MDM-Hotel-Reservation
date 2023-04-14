import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {

  console.log("dfsdsd")
  const {data,loading, error} = useFetch("hotels/countByCity?cities=neemuch,mumbai,london");

  return (
    <div className="featured">
      {
      loading ? ("Loading please wait") : (
          <>
          <div className="featuredItem">
          <img
            src="https://owa.bestprice.vn/images/destinations/uploads/trung-tam-thanh-pho-ha-noi-603da1f235b38.jpg"
            alt=""
            className="featuredImg"
          />
          <div className="featuredTitles">
            <h1>Hà Nội</h1>
            <h2>{data[0]}</h2>
          </div>
        </div>
        
        <div className="featuredItem">
          <img
            src="https://vcdn1-dulich.vnecdn.net/2022/06/03/cauvang-1654247842-9403-1654247849.jpg?w=1200&h=0&q=100&dpr=1&fit=crop&s=Swd6JjpStebEzT6WARcoOA"
            alt=""
            className="featuredImg"
            />
          <div className="featuredTitles">
            <h1>Đà Nẵng</h1>
          </div>
        </div>
        <div className="featuredItem">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ed/DJI_0550-HDR-Pano.jpg/1200px-DJI_0550-HDR-Pano.jpg"
            alt=""
            className="featuredImg"
            />
          <div className="featuredTitles">
            <h1>TP Hồ Chí Minh</h1>
          </div>
        </div>
      </>
    )
      }
    </div>
  );
};

export default Featured;
