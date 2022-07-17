import React from 'react'
import DashboardCenter from './dashboard/main/DashboardCenter.jsx';
import Header from './dashboard/main/Header.jsx';
import DashboardOrder from './dashboard/main/DashboardOrder.jsx';

function dashboard() {
  return (
    <div className="h-screen w-screen flex bg-gray-200">
        <Header />
        <DashboardCenter />
        <DashboardOrder />
    </div>
  )
}

export default dashboard