import React from 'react'

function DashboardCenter() {
  return (
    <div className="w-full">
        <div>Welcome, Gorry</div>
        <p>Tuesday 2 Feb, 2021</p>

        <div className="flex gap-6">
            <card className="flex my-8 mx-12 flex-col h-36 w-80 p-4 bg-gray-900 rounded-lg gap-y-3">
                <span className="flex text-white items-center">$10,243.00</span>
                <p className="text-white">Total Revenue</p>
            </card>
            {/* <card className="flex flex-col  p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3">
                <span>23,456</span>
                <p>Total Dish Ordered</p>
            </card>
            <card className="flex flex-col  p-4 w-1/3 bg-gray-900 rounded-lg gap-y-3">
                <span>1,234</span>
                <p>Total Customer</p>
            </card> */}
        </div>

    </div>
  )
}

export default DashboardCenter