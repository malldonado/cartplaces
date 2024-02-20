import React from "react";
import PanelTable from "./PanelTable";
import PanelOrder from "./PanelOrder";
import PanelGraphics from "./PanelGraphics";
import PanelGraphicsTwo from "./PanelGraphicsTwo";
import PanelGraphicsThree from "./PanelGraphicsThree";
import PanelOne from "./PanelOne";

function ContainerPanel() {
  return (
    <div className="w-[80%]">
      <div className="flex mt-[30px]">
        {/* <div className="mr-6">
          <PanelGraphics />
        </div>
        <div className="mr-6">
          <PanelGraphicsTwo />
        </div>  */}
        {/* <div className="mr-6">
          <PanelGraphicsThree />
        </div> */}
         {/* <PanelTable/>
          <PanelOrder/> */}
      </div>
      {/* <PanelOne/> */}
    </div>
  );
}

export default ContainerPanel;
