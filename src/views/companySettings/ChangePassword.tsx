import Tabulate from "./components/Tabulate";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { useState } from "react";

const ChangePassword = () => {
  const [password, setPassword] = useState({
    new: "",
    cnfNew: "",
  });

  return (
    <>
      {/* ----- The header component ----- */}
      <div className="text-blue-100 flex gap-2 font-montserrat">
        <NavLink to="/company/settings">
          <h2>Settings</h2>
        </NavLink>
        <h2>{">"}</h2>
        <NavLink to="../" className="text-blue-100">
          <h2>Edit Profile</h2>
        </NavLink>
      </div>

      {/* ----- The tabulated user details section ----- */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <Tabulate
          heading="Change Password"
          className="mt-8 w-full rounded-lg font-montserrat text-sm"
        >
          <div>
            <div className="bg-white-50 px-8 py-4 flex flex-col gap-2 text-blue-100">
              <span>Enter New Password:</span>
              <Input
                type="password"
                value={password.new}
                onChange={(e: any) =>
                  setPassword({ ...password, new: e.target.value })
                }
              />
            </div>
            <div className="bg-white-50 px-8 py-4 flex flex-col gap-2 text-blue-100">
              <span>Enter New Password:</span>
              <Input
                type="password"
                value={password.cnfNew}
                onChange={(e: any) =>
                  setPassword({ ...password, cnfNew: e.target.value })
                }
              />
            </div>
            <div className="py-8 bg-white-50 flex justify-center">
              <button className="btn btn-blue w-[80%] cursor-pointer">
                Save Changes
              </button>
            </div>
          </div>
        </Tabulate>
      </div>
    </>
  );
};

export default ChangePassword;
