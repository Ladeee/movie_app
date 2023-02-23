import Tabulate from "./components/Tabulate";
import { NavLink } from "react-router-dom";
import { Input } from "antd";
import { useState } from "react";

const EditProfile = () => {
  // Some dummy user data
  const [userData, setUserData] = useState({
    firstName: "Thomas",
    lastName: "Amadi",
    userCode: 2894,
    phone: "+234802272883",
    emailAddress: "mail@mail.com",
  });

  return (
    <>
      {/* ----- The header component ----- */}
      <div className="text-blue-100 flex gap-2 font-montserrat">
        <NavLink to="/company/settings">
          <h2>Settings</h2>
        </NavLink>
        <h2>{">"}</h2>
        <h2>Edit Profile</h2>
      </div>

      {/* ----- The tabulated user details section ----- */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <Tabulate
          heading="Profile details"
          className="mt-8 w-full rounded-lg font-montserrat text-sm"
        >
          <div>
            <div className="bg-white-50 px-8 py-4 flex flex-col gap-2 text-blue-100">
              <span>First Name:</span>
              <Input
                value={userData.firstName}
                onChange={(e: any) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
              />
            </div>
            <div className="bg-white-50 px-8 py-4 flex flex-col gap-2 text-blue-100">
              <span>Last Name:</span>
              <Input
                value={userData.lastName}
                onChange={(e: any) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
              />
            </div>
            <div className="bg-white-50 px-8 py-4 flex flex-col gap-2 text-blue-100">
              <span>Phone:</span>
              <Input
                value={userData.phone}
                onChange={(e: any) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
              />
            </div>
            <div className="bg-white-50 px-8 py-4 flex flex-col gap-2 text-blue-100">
              <span>Email Address:</span>
              <Input
                value={userData.emailAddress}
                onChange={(e: any) =>
                  setUserData({ ...userData, emailAddress: e.target.value })
                }
              />
            </div>
            <NavLink
              to="password"
              className="py-8 bg-white-50 flex justify-center"
            >
              <button className="btn btn-tran text-blue-100 w-[80%] cursor-pointer">
                Change Password
              </button>
            </NavLink>
          </div>
        </Tabulate>
        <div className="w-full flex justify-center">
          <button className="btn btn-blue w-[80%] mt-8 cursor-pointer">
            Save Changes
          </button>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
