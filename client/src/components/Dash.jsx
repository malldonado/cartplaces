import Navbar from "./dashboard/Navbar"
import Panel from "./dashboard/Panel";
import './index.css';

function Dash() {
  return (
   <div className="h-screen bg-[#f5f7f8] flex">
        <Navbar/>
        <Panel/>
   </div>
  )
}

export default Dash