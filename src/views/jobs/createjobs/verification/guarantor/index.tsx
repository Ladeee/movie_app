// import React, { useState } from "react";
import {
  FormWrapper,
  Upload,
  Input,
  InputWrapper,
  VerificationButtons,
  Submit,
  ImageWrapper,
  Info,
} from "../verifications.styled";

import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { CiCalendarDate } from "react-icons/ci";
import { ImFilePicture } from "react-icons/im";
import { useState } from "react";
import styled from "styled-components";
import VerificationNavbar from "../verificationNavbar";

export default function GuarantorVerification() {
  const [uploadedImage, setUploadedImage] = useState<string>("");

  const convertFile = (files: FileList | null) => {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      console.log("This file upload is of type:", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        setUploadedImage(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  };

  return (
    <GuarantorContainer>
      <VerificationNavbar />
      <Upload>
        <p className="text-base font-semibold text-[#333382]">
          Upload guarantor image
        </p>
        <ImageWrapper>
          <input
            type="file"
            title=""
            className="uploadInput"
            onChange={(e) => convertFile(e.target.files)}
          />
          <i>
            <ImFilePicture className="w-10 h-10" />
          </i>

          {uploadedImage.indexOf("image/") > -1 && (
            <img
              src={uploadedImage}
              width={300}
              className="uploadedImage"
              alt="uploaded"
            />
          )}
        </ImageWrapper>
      </Upload>
      <FormWrapper>
        <Info>
          <InputWrapper>
            <label>First Name</label>
            <Input
              type="text"
              className="border-[#333382]"
              placeholder="First name"
            />
          </InputWrapper>
          <InputWrapper>
            <label>Last Name</label>
            <Input
              type="text"
              className="border-[#333382]"
              placeholder="Last name"
            />
          </InputWrapper>
        </Info>

        <Info>
          <InputWrapper>
            <label>Email</label>
            <Input
              type="email"
              className="border-[#333382]"
              placeholder="you@gmail.com"
            />
          </InputWrapper>
          <InputWrapper>
            <label>Phone Number</label>
            <Input
              type="tel"
              className="border-[#333382]"
              placeholder="+1 (555)"
            />
          </InputWrapper>
        </Info>

        <Info>
          <InputWrapper>
            <label>Address</label>
            <Input
              type="text"
              className="border-[#333382]"
              placeholder="111, Williams st Yaba"
            />
          </InputWrapper>
          <InputWrapper>
            <label>Closest Landmark</label>
            <Input
              type="text"
              className="border-[#333382]"
              placeholder="you@company.com"
            />
          </InputWrapper>
        </Info>

        <Info>
          <InputWrapper>
            <label>State</label>
            <Input type="text" className="border-[#333382]" />
            <i>
              <MdOutlineKeyboardArrowDown />
            </i>
          </InputWrapper>
          <InputWrapper>
            <label>L.G.A</label>
            <Input type="text" className="border-[#333382]" />
            <i id="lgaIcon">
              <MdOutlineKeyboardArrowDown />
            </i>
          </InputWrapper>
        </Info>
        <Info id="reverse">
          <InputWrapper>
            <label>Additional Information</label>
            <textarea className="border-[#333382]" />
          </InputWrapper>
          <InputWrapper>
            <label>Verification Due Date</label>
            <Input type="text" className="border-[#333382]" />
            <i id="calender">
              <CiCalendarDate className="w-6 h-6" />
            </i>
          </InputWrapper>
        </Info>

        <Info>
          <VerificationButtons>
            <Submit className="bg-#333382">Submit and Pay</Submit>
          </VerificationButtons>
        </Info>
      </FormWrapper>
    </GuarantorContainer>
  );
}

const GuarantorContainer = styled.div`
  label {
    color: #333382;
  }
`;
