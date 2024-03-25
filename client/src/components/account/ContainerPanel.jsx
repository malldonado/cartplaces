import React from "react";
import PanelTable from "./PanelTable";
import PanelOrder from "./PanelOrder";
import SplineLineChart from './SplineLineChart';

function ContainerPanel() {
  return (
    <div className="w-full">
      <div className="flex mt-14">
        <PanelTable/>
        {/* <PanelOrder/> */}
        <SplineLineChart />
      </div>
    </div>
  );
}

export default ContainerPanel;
