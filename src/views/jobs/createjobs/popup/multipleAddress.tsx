import React from "react";
import {
  FileBox,
  FileButton,
  FileWrapper,
  MultipleAddressContainer,
  // Templates,
} from "./popup.styled";
import {
  Continue,
  CreateBtn,
  Header,
  LeftHeader,
  RightHeader,
} from "../verification/verifications.styled";

import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import Download from "../../../../assets/images/verification/download.png";
import Upload from "../../../../assets/images/verification/upload.png";
export default function MultipleAddress() {
  return (
    <MultipleAddressContainer>
      <Header>
        <LeftHeader>
          <p className="font-semibold font-montserrat" id="job-text">
            Create Job
          </p>
          <IoIosArrowForward id="job-text" />
          <p className="font-semibold font-montserrat">Address Verification</p>
        </LeftHeader>
        <RightHeader>
          <Continue className="text-sm font-semibold font-inter bg-[#333382]">
            Continue
          </Continue>
          <Link to="popup">
            <CreateBtn className="bg-[#333382]">Create Job</CreateBtn>
          </Link>
        </RightHeader>
      </Header>

      <FileWrapper>
        <h2 className="mt-8 ml-16 text-base">Multiple Address Verification</h2>
        <FileBox>
          <div>
            <p id="text">
              Download <br /> Sample Templates <br />
              document
            </p>
            <img src={Download} alt="download file" id="img" />
            <FileButton>Download</FileButton>
          </div>

          <div>
            <p id="text">
              Upload your <br /> document file
            </p>
            <img src={Upload} alt="upload file" id="img" />
            <FileButton id="filebtn">Download</FileButton>
          </div>
        </FileBox>
      </FileWrapper>
    </MultipleAddressContainer>
  );
}
