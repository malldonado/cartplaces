import React from "react";
import { LuUser } from "react-icons/lu";

function Settings() {
  return (
    <div className="w-[30%]">
      <h2 className="mt-10 font-bold text-[18px]">Settings</h2>
      <div className="mt-4 h-[60px] w-[80%] bg-[#f3f4ff] text-left text-black border-2 rounded-[15px] border-[#4e60ff] flex justify-start">
        <LuUser />
        <div>
            <h2 className="font-bold">Account</h2>
            <p>Personal information</p>
        </div>
      </div>
      {/* <div>
        <h2>Address</h2>
        <p>Shippings address</p>
      </div>
      <div>
        <h2>Payment method</h2>
        <p>Connected credit cards</p>
      </div>    
      <div>
        <h2>Security</h2>
        <p>Password</p>
        <p>2FA</p>
      </div> */}
    </div>
  );
}

export default Settings;
