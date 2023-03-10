// import external dependencies
import { Card } from "antd";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaSignature } from "react-icons/fa";

// import internal dependencies
import {
  AccountIdBox,
  CustomerAccountInfo,
  PaymentStatusContainer,
  UploadImage,
} from "../account.styled";

export default function PaymentStatus() {
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
    <PaymentStatusContainer>
      <div className="flex items-center gap-2 text-[var(--grey900)] mt-7">
        <h2 className="text-lg md:text-2xl font-semibold">Account</h2>
        <IoIosArrowForward className="icon" />
        <p className="text-lg md:text-2xl font-semibold">Account Details</p>
      </div>

      <div>
        <Card
          title={
            <div className="subheading flex items-center justify-between">
              <p>Payment Status</p>
              <button className="btn btn-blue text-[var(--white50)] text-base font-semibold">
                Download PDF
              </button>
            </div>
          }
          className="payment-card mt-6 md:mt-8"
        >
          <AccountIdBox className="border-solid border border-gray-300">
            <div className="mt-0 py-6">
              <div className="image ml-1 sm:ml-8 flex items-center">
                <UploadImage className="border-solid border border-gray-300">
                  <input
                    type="file"
                    title=""
                    className="uploadInput"
                    onChange={(e) => convertFile(e.target.files)}
                  />

                  {uploadedImage.indexOf("image/") > -1 && (
                    <img
                      src={uploadedImage}
                      width={300}
                      className="uploadedImage"
                      alt="uploaded"
                    />
                  )}
                </UploadImage>
                <div className="img-info ml-1 sm:ml-4">
                  <div className="display-info">
                    <h2 className="text-base md:text-3xl font-semibold">
                      Account ID:{" "}
                      <span className="text-base font-bold md:text-3xl md:font-semibold">
                        32455
                      </span>
                    </h2>
                  </div>
                  <div className="display-info mt-3.5">
                    <p className="text-sm md:text-base font-bold">
                      Date created:{" "}
                      <span className="text-sm md:text-base font-bold ml-2">
                        8th June, 2022
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="acc-info mt-9">
                <div className="id text-base">
                  <p className="ml-6 text-blue-gray-400">
                    Account ID:{" "}
                    <span className="text-grey-900 font-bold ml-2">32455</span>
                  </p>
                </div>
                <div className="id text-base">
                  <p className="ml-6 text-blue-gray-400">
                    Date created:{" "}
                    <span className="text-grey-900 font-bold ml-2">
                      8th June 2022
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </AccountIdBox>

          <CustomerAccountInfo>
            <Card
              title={
                <h2 className="font-semibold text-xl">Customer Informations</h2>
              }
              style={{ marginTop: 40, width: "95%" }}
            >
              <div className="px-0 flex-col md:flex-row md:px-8 customers flex justify-between">
                <div>
                  <div className="customer-info mt-10 flex items-center">
                    <h3 className="font-bold sm:font-semibold text-sm sm:text-base">
                      First Name:
                    </h3>
                    <div className="grid-cols-2 gap-2 grid">
                      <p className="font-semibold sm:font-normal">Adamu</p>
                    </div>
                  </div>
                  <div className="customer-info mt-10 flex items-center">
                    <h3 className="font-bold sm:font-semibold text-sm sm:text-base">
                      Last Name:
                    </h3>
                    <div className="grid-cols-2 gap-2 grid">
                      <p className="font-semibold sm:font-normal">Mohammed</p>
                    </div>
                  </div>
                  <div className="customer-info mt-10 flex items-center">
                    <h3 className="font-bold sm:font-semibold text-sm sm:text-base">
                      Customers Address:
                    </h3>
                    <div className="grid-cols-2 gap-2 grid">
                      <p className="font-semibold sm:font-normal">
                        3 Tundo Wada, Kano
                      </p>
                    </div>
                  </div>
                  <div className="customer-info mt-10 flex items-center">
                    <h3 className="font-bold sm:font-semibold text-sm sm:text-base">
                      Phone Number:
                    </h3>
                    <p className="font-semibold sm:font-normal">
                      +2349133445566
                    </p>
                  </div>
                  <div className="customer-info mt-10 flex items-center">
                    <h3 className="font-bold sm:font-semibold text-sm sm:text-base">
                      Account Type:
                    </h3>
                    <p className="font-semibold sm:font-normal">Savings</p>
                  </div>
                  <div className="customer-info mt-10 flex items-center">
                    <h3 className="font-bold sm:font-semibold text-sm sm:text-base">
                      Mode of Identification:
                    </h3>
                    <p className="font-semibold sm:font-normal">NIN</p>
                  </div>
                  <div className="customer-info mt-10 flex items-center">
                    <h3 className="font-bold sm:font-semibold text-sm sm:text-base">
                      BVN:
                    </h3>
                    <p className="font-semibold sm:font-normal">Tier 1</p>
                  </div>
                  <div className="customer-info mt-10 flex items-center">
                    <h3 className="font-bold sm:font-semibold text-sm sm:text-base">
                      Tier:
                    </h3>
                    <p className="font-semibold sm:font-normal">NIN</p>
                  </div>
                  <div className="customer-info mt-10 flex items-center">
                    <h3 className="font-bold sm:font-semibold text-sm sm:text-base">
                      Email:
                    </h3>
                    <p className="font-semibold sm:font-normal">
                      doe@gmail.com
                    </p>
                  </div>
                  <div className="customer-info mt-10 flex items-center">
                    <b className="text-sm md:text-lg">Created by:</b>
                    <b className="text-sm md:text-lg">Daniels Edward</b>
                  </div>
                  <div className="customer-info mt-10 flex items-center">
                    <b className="text-sm md:text-lg">Agent code:</b>
                    <b className="text-sm md:text-lg">NGSSO01</b>
                  </div>
                </div>

                <div className="right-texts">
                  <div className="customer-info mt-10 flex items-center">
                    <h3 className="font-bold sm:font-semibold text-sm sm:text-base">
                      Expected Date of Completion:
                    </h3>
                    <p className="font-semibold sm:font-normal">
                      10th June 2022
                    </p>
                  </div>
                  <div className="customer-info mt-10 flex items-center">
                    <h3 className="font-bold sm:font-semibold text-sm sm:text-base">
                      Actual Date of Completion:
                    </h3>
                    <p className="font-semibold sm:font-normal">
                      10th June 2022
                    </p>
                  </div>
                  <div className="icon-signature">
                    <FaSignature className="icon" />
                    <h2 className="font-bold text-base">Signature</h2>
                  </div>
                </div>
              </div>

              <div className="text-area ml-0 md:ml-8 mt-14">
                <label
                  htmlFor="textarea"
                  className="text-sm sm:text-base font-semibold"
                >
                  Additional Information
                </label>
                <textarea className="textarea h-32 mt-2 bg-gray-100 border border-gray-300" />
              </div>

              <div className="customer-buttons px-2 sm:px-10 flex items-center justify-between mt-12">
                <button className="btn bg-[var(--grey400)] text-[var(--white50)]">
                  Back
                </button>
                <button className="btn btn-blue text-[var(--white50)]">
                  Download PDF
                </button>
              </div>
            </Card>
          </CustomerAccountInfo>
        </Card>
      </div>
    </PaymentStatusContainer>
  );
}
