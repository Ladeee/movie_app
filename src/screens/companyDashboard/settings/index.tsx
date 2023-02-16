import React from "react";
import LayoutHeading from "../../../components/LayoutHeading";
import changeProfileImage from "../../../assets/changeProfileImage.png";
import Tabulate from "../../../components/Tabulate";
import Button from "../../../components/Button";

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
      <LayoutHeading heading="Settings" />
      <div className="w-64 bg-[#DCDCDC] flex flex-col items-center justify-between pt-16 mt-5 rounded-lg overflow-hidden">
        <img alt="profile image" src={changeProfileImage} />
        <button className="w-full border-none bg-white py-4 text-sm text-gray-600">
          {" "}
          Change profile image{" "}
        </button>
      </div>
      <div className="w-full lg:w-1/2 flex flex-col items-center">
        <Tabulate heading="Profile details" className="mt-8 w-full rounded-lg">
          <div className="bg-[white] px-8 py-4 flex gap-2 text-[#333382]">
            <p className="text-sm font-montserrat font-normal"> First Name: </p>
            <h2 className="text-sm font-montserrat"> {userData.firstName} </h2>
          </div>
          <div className="bg-[white] px-8 py-4 flex gap-2 text-[#333382]">
            <p className="text-sm font-montserrat font-normal"> Last Name: </p>
            <h2 className="text-sm font-montserrat"> {userData.lastName} </h2>
          </div>
          <div className="bg-[white] px-8 py-4 flex gap-2 text-[#333382]">
            <p className="text-sm font-montserrat font-normal"> User: </p>
            <h2 className="text-sm font-montserrat"> {userData.userCode} </h2>
          </div>
          <div className="bg-[white] px-8 py-4 flex gap-2 text-[#333382]">
            <p className="text-sm font-montserrat font-normal">
              {" "}
              Email Address:{" "}
            </p>
            <h2 className="text-sm font-montserrat">
              {" "}
              {userData.emailAddress}{" "}
            </h2>
          </div>
          <div className="py-8 bg-[white]"></div>
        </Tabulate>
        <Button className="w-[80%] mt-8 font-montserrat text-sm font-semibold">
          {" "}
          Edit Profile Settings{" "}
        </Button>
      </div>
    </>
  );
};

export default Settings;
