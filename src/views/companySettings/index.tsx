import LayoutHeading from "../../components/LayoutHeading";
import changeProfileImage from "../../assets/changeProfileImage.png";
import Tabulate from "./components/Tabulate";
import { NavLink } from "react-router-dom";

const Settings = () => {
  // Some dummy user data
  const userData = {
    firstName: "Thomas",
    lastName: "Amadi",
    userCode: 2894,
    emailAddress: "mail@mail.com",
  };

  return (
    <>
      {/* ----- The header component ----- */}
      <LayoutHeading heading="Settings" />

      {/* ----- The profile image section ----- */}
      <div className="w-64 bg-gray-100 flex flex-col items-center justify-between mt-5 rounded-lg overflow-hidden">
        <img alt="user profile" src={changeProfileImage} className="py-5" />
        <div className="bg-white-50 w-full py-2 border-t-2 border-gray-800">
          <button className="btn btn-tran border-0 w-full font-normal text-blue-100">
            Change profile image
          </button>
        </div>
      </div>

      {/* ----- The tabulated user details section ----- */}
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <Tabulate
          heading="Profile details"
          className="mt-8 w-full rounded-lg font-montserrat text-sm"
        >
          <div className="bg-white-50 px-8 py-4 flex gap-2 text-blue-100">
            <span>First Name:</span>
            <span className="font-semibold">{userData.firstName}</span>
          </div>
          <div className="bg-white-50 px-8 py-4 flex gap-2 text-blue-100">
            <span>Last Name:</span>
            <span className="font-semibold">{userData.lastName}</span>
          </div>
          <div className="bg-white-50 px-8 py-4 flex gap-2 text-blue-100">
            <span>User:</span>
            <span className="font-semibold">{userData.userCode}</span>
          </div>
          <div className="bg-white-50 px-8 py-4 flex gap-2 text-blue-100">
            <span>Email Address:</span>
            <span className="font-semibold">{userData.emailAddress}</span>
          </div>
          <div className="py-8 bg-[white]"></div>
        </Tabulate>
        <NavLink to="/company/settings/edit" className="w-[80%]">
          <button className="btn btn-blue w-full mt-8 cursor-pointer">
            Edit Profile Settings
          </button>
        </NavLink>
      </div>
    </>
  );
};

export default Settings;
