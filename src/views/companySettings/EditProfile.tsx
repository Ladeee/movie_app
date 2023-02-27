import Tabulate from "./components/Tabulate";
import LayoutHeading from "../../components/LayoutHeading";
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
      <div className="text-blue-100">
        <LayoutHeading heading="Setting > Edit Profile" />
      </div>

      {/* ----- The tabulated user details section ----- */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <Tabulate
          heading="Profile details"
          className="mt-8 w-full rounded-lg font-montserrat text-sm"
        >
          <div>
            <div className="bg-white-50 px-8 py-4 flex flex-col gap-2 text-blue-100">
              <label htmlFor="firstName">First Name:</label>
              <Input
                id="firstName"
                value={userData.firstName}
                onChange={(e: any) =>
                  setUserData({ ...userData, firstName: e.target.value })
                }
              />
            </div>
            <div className="bg-white-50 px-8 py-4 flex flex-col gap-2 text-blue-100">
              <label htmlFor="lastName">Last Name:</label>
              <Input
                id="lastName"
                value={userData.lastName}
                onChange={(e: any) =>
                  setUserData({ ...userData, lastName: e.target.value })
                }
              />
            </div>
            <div className="bg-white-50 px-8 py-4 flex flex-col gap-2 text-blue-100">
              <label htmlFor="phone">Phone:</label>
              <Input
                id="phone"
                value={userData.phone}
                onChange={(e: any) =>
                  setUserData({ ...userData, phone: e.target.value })
                }
              />
            </div>
            <div className="bg-white-50 px-8 py-4 flex flex-col gap-2 text-blue-100">
              <label htmlFor="emailAddress">Email Address:</label>
              <Input
                id="emailAddress"
                value={userData.emailAddress}
                onChange={(e: any) =>
                  setUserData({ ...userData, emailAddress: e.target.value })
                }
              />
            </div>
            <div className="py-8 bg-white-50 flex justify-center">
              <NavLink
                to="password"
                className="btn btn-tran text-blue-100 w-[80%] cursor-pointer text-center"
              >
                Change Password
              </NavLink>
            </div>
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
