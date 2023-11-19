import image from "../src/assets/e commerce completed order.png";
import { SetStateAction, useState } from "react";
import { useNavigate } from "react-router-dom";
const TrackOrder = () => {
//     const [searchTerm, setSearchTerm] = useState('');

//   const handleInputChange = (event: { target: { value: SetStateAction<string>; }; }) => {
//     setSearchTerm(event.target.value);
//   };

  
//   const navigate = useNavigate();
//   const handleViewOrderClick = (trackingCode:any) => {
       
//     navigate(`/track-your-order?trackingCode=${trackingCode}`);
//   };
    return ( 
        <div>
            <div className="w-full  py-48 flex flex-col lg:flex-row lg:m-auto lg:py-48  items-center space-y-24 lg:justify-center ">
                <div className="w-1/2 lg:pr-48 flex justify-center items-center">
                    <img src={image}  className="lg:w-full lg:h-full text-orange-500 " alt="" />
                </div>
                <div className="lg:pr-32 ">
                <div>
                <h1 className="text-lg font-medium pl-32 lg:pl-0 mb-2">Order Tracking </h1>
                <h1 className="text-sm font-light sm:pr-4 pl-24 lg:pl-0 sm:text-center lg:text-left mb-6">Input your tracking code below </h1>
                </div>
                <div >
                <input type="text"
                className="w-96 mx-auto border border-gray-300 p-2 rounded-md "
                placeholder="eg. 160-060-QNH"
                //value={searchTerm}
                //onChange={handleInputChange}
                />
                </div>
                <div>
                <button 
                className="px-4 ml-36 lg:ml-0  my-8  bg-pink-600 text-white text-sm h-8 rounded-full"
                //onClick={() => handleViewOrderClick(searchTerm)}
                >Track order</button>
                </div>
                </div>
                
            </div>
        </div>
     );
}
 
export default TrackOrder;