import ContainerPanel from "./dashboard/ContainerPanel";
import NavbarLeft from "./dashboard/NavbarLeft"
import './index.css';

function Dash() {
  return (
   <div className="h-screen bg-[#f5f7f8] flex">
        <NavbarLeft/>
        <ContainerPanel/>
   </div>
  )
}

export default Dash