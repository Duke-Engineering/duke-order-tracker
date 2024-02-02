
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TrackOrder from './TrackOrder';
import OrderStatusPage from './OrderStatusPage';


const App =()=>{

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<TrackOrder />}/>
        <Route path="/track-your-order" element={<OrderStatusPage/>} />
      </Routes>
    </Router>
     
    </>
  );
  }

export default App;
