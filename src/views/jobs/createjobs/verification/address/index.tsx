import React, { useState } from "react";
import {
  AddGuarantor,
  AddressContainer,
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

export default function AddressVerification({
  nextPage,
}: {
  nextPage: () => void;
}) {
  const [uploadedImage, setUploadedImage] = useState<string>("");

  // const formSubmit = (e: any) => {
  //   e.preventDefault();
  //   // Submit your form with the uploadedImage as one of your fields
  //   console.log({ uploadedImage });
  //   alert(
  //     "here you'd submit the form using\n the uploadedImage like any other field"
  //   );
  // };

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
    <AddressContainer>
      <Upload>
        <p className="text-base font-semibold">Upload individual image</p>
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
            <Input type="text" placeholder="First name" />
          </InputWrapper>
          <InputWrapper>
            <label>Last Name</label>
            <Input type="text" placeholder="Last name" />
          </InputWrapper>
        </Info>

        <Info>
          <InputWrapper>
            <label>Email</label>
            <Input type="email" placeholder="you@gmail.com" />
          </InputWrapper>
          <InputWrapper>
            <label>Phone Number</label>
            <Input type="tel" placeholder="+1 (555)" />
          </InputWrapper>
        </Info>

        <Info>
          <InputWrapper>
            <label>Address</label>
            <Input type="text" placeholder="111, Williams st Yaba" />
          </InputWrapper>
          <InputWrapper>
            <label>Closest Landmark</label>
            <Input type="text" placeholder="you@company.com" />
          </InputWrapper>
        </Info>

        <Info>
          <InputWrapper>
            <label>State</label>
            <Input type="text" />
            <i>
              <MdOutlineKeyboardArrowDown />
            </i>
          </InputWrapper>
          <InputWrapper>
            <label>L.G.A</label>
            <Input type="text" />
            <i id="lgaIcon">
              <MdOutlineKeyboardArrowDown />
            </i>
          </InputWrapper>
        </Info>
        <Info id="reverse">
          <InputWrapper>
            <label>Additional Information</label>
            <textarea />
          </InputWrapper>
          <InputWrapper>
            <label>Verification Due Date</label>
            <Input type="text" />
            <i id="calender">
              <CiCalendarDate className="w-6 h-6" />
            </i>
          </InputWrapper>
        </Info>

        <Info>
          <VerificationButtons>
            <AddGuarantor onClick={nextPage}>Add Guarantor</AddGuarantor>
            <Submit>Submit and Pay</Submit>
          </VerificationButtons>
        </Info>
      </FormWrapper>
    </AddressContainer>
  );
}
