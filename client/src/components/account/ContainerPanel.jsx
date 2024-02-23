import React from "react";
import PanelTable from "./PanelTable";
import PanelOrder from "./PanelOrder";
import SplineLineChart from './SplineLineChart';

function ContainerPanel() {
  return (
    <div className="w-[80%]">
      <div className="flex mt-[13px]">
        <PanelTable/>
        {/* <PanelOrder/> */}
        <SplineLineChart />
      </div>
    </div>
  );
}

export default ContainerPanel;
