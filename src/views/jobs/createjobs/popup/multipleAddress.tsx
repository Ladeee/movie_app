import React from "react";
// Importing external dependencies

import { IoIosArrowForward } from "react-icons/io";

// Importing internal dependencies
import {
  FileBox,
  FileWrapper,
  MultipleAddressContainer,
  UploadImage,
} from "./popup.styled";
import {
  Header,
  LeftHeader,
  RightHeader,
} from "../verification/verifications.styled";

import { Link } from "react-router-dom";
import Download from "../../../../assets/images/verification/download.png";
import Upload from "../../../../assets/images/verification/upload.png";

export default function MultipleAddress() {
  const XLSX_FILE = "http://localhost:3000/template.xlsx";

  const download = (url: any) => {
    const fileName = url.split("/").pop();
    const aTag = document.createElement("a");
    aTag.href = url;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <MultipleAddressContainer>
      {/* Header section */}
      <Header>
        <LeftHeader>
          <p className="font-semibold font-montserrat" id="job-text">
            Create Job
          </p>
          <IoIosArrowForward id="job-text" />
          <p className="font-semibold font-montserrat">Address Verification</p>
        </LeftHeader>
        <RightHeader>
          <button className="btn text-sm font-semibold font-inter bg-[var(--blue100)] text-[var(--white100)]">
            Continue
          </button>
          <Link to="/company/jobs/popup">
            <button className="btn bg-[var(--blue100)] text-[var(--white100)] cursor-pointer">
              Create Job
            </button>
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
            <button
              className="btn bg-[var(--blue100)] text-[var(--white100)] mt-8 min-w-0 w-2/3"
              onClick={() => {
                download(XLSX_FILE);
              }}
              id="download"
            >
              Download
            </button>
          </div>

          <UploadImage>
            <input type="file" name="file" className="uploadInput" />
            <p id="text">
              Upload your <br /> document file
            </p>
            <img src={Upload} alt="upload file" id="img" />
            <button
              className="btn bg-[var(--blue100)] text-[var(--white100)] min-w-0 w-2/3"
              id="filebtn"
            >
              Download
            </button>
          </UploadImage>
        </FileBox>
      </FileWrapper>
    </MultipleAddressContainer>
  );
}
