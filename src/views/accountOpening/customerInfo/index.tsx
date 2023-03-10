// import external dependencies
import { Card } from "antd";
import { useState } from "react";
import { IoIosArrowForward } from "react-icons/io";
import { FaSignature } from "react-icons/fa";

// import internal dependencies
import {
  AccountDetailsIdBox,
  CustomerAccountInfo,
  CustomerInfoContainer,
  IDdetails,
  KinInfo,
  PersonalDetails,
  UploadedIdImage,
} from "../account.styled";

export default function CustomerInfo() {
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
    <CustomerInfoContainer>
      <div className=" gap-2 flex items-center text-[var(--grey900)] mt-7">
        <h2 className="text-lg md:text-2xl font-semibold">Account</h2>
        <IoIosArrowForward className="icon" />
        <p className="text-lg md:text-2xl font-semibold">Account Details</p>
      </div>

      <div>
        <Card
          title={
            <div className="subheading flex items-center justify-between">
              <p className="text-sm font-semibold sm:text-base">
                Customer Information
              </p>
              <button className="btn btn-blue text-[var(--white50)] text-base font-semibold">
                Download PDF
              </button>
            </div>
          }
          className="account-card"
        >
          <AccountDetailsIdBox className=" border border-solid border-gray-300">
            <div className="mt-0 py-6">
              <div className="image ml-0 md:ml-8 flex items-center">
                <UploadedIdImage className="border-solid border border-gray-300">
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
                </UploadedIdImage>
                <div className="img-info ml-4">
                  <div className="">
                    <h2 className="text-base md:text-3xl font-semibold">
                      Account ID:{" "}
                      <span className="text-base font-bold md:text-3xl md:font-semibold">
                        32455
                      </span>
                    </h2>
                  </div>
                  <div className=" mt-3.5">
                    <p className="text-sm md:text-base font-bold">
                      Date created:{" "}
                      <span className="text-sm md:text-base font-bold ml-2">
                        8th June, 2022
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className=" mt-9">
                <div className="customer-info mt-6 flex items-center text-base pb-2.5">
                  <p className="ml-6 text-blue-gray-400">
                    Account ID:{" "}
                    <span className="text-grey-900 font-bold ml-2">32455</span>
                  </p>
                </div>
                <div className="customer-info mt-6 flex items-center text-base pb-2.5">
                  <p className="ml-6 text-blue-gray-400">
                    Date created:{" "}
                    <span className="text-grey-900 font-bold ml-2">
                      8th June 2022
                    </span>
                  </p>
                </div>
                <div className="customer-info mt-6 flex items-center text-base pb-2.5">
                  <p className="ml-6 text-blue-gray-400">
                    BVN:{" "}
                    <span className="text-grey-900 font-bold ml-2">
                      822828223
                    </span>
                  </p>
                </div>
                <div className="customer-info mt-6 flex items-center text-base pb-2.5">
                  <p className="ml-6 text-blue-gray-400">
                    Tier:{" "}
                    <span className="text-grey-900 font-bold ml-2">Tier 3</span>
                  </p>
                </div>
              </div>
            </div>
          </AccountDetailsIdBox>

          <CustomerAccountInfo>
            <PersonalDetails>
              <Card
                title={<h3>Personal Details</h3>}
                className="mt-10"
                style={{ width: "95%" }}
              >
                <div className="customer">
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      First Name:
                    </p>
                    <div className="">
                      <h3 className="info-value font-bold text-base">Adamu</h3>
                    </div>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Middle Name:
                    </p>
                    <div className="">
                      <h3 className="info-value font-bold text-base">
                        Mohammed
                      </h3>
                    </div>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Surname:
                    </p>
                    <div className="">
                      <h3 className="info-value font-bold text-base">Peter</h3>
                    </div>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Gender:
                    </p>
                    <div className="">
                      <h3 className="info-value font-bold text-base">Female</h3>
                    </div>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Mother's Maiden Name:
                    </p>
                    <h3 className="info-value font-bold text-base">Tode</h3>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Marital Status:
                    </p>
                    <h3 className="info-value font-bold text-base">Single</h3>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      House Address:
                    </p>
                    <h3 className="info-value font-bold text-base">
                      3, Ikeja road, Lagos
                    </h3>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Date of Birth:
                    </p>
                    <h3 className="info-value font-bold text-base">
                      06-10-2000
                    </h3>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Email:
                    </p>
                    <h3 className="info-value font-bold text-base">
                      doe@gmail.com
                    </h3>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Phone Number:
                    </p>
                    <h3 className="info-value font-bold text-base">
                      +2349122443355
                    </h3>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Nationality:
                    </p>
                    <h3 className="info-value font-bold text-base">Nigeria</h3>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      State of Origin:
                    </p>
                    <h3 className="info-value font-bold text-base">Lagos</h3>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      LGA of Origin:
                    </p>
                    <h3 className="info-value font-bold text-base">Ikeja</h3>
                  </div>
                </div>
              </Card>
            </PersonalDetails>

            <KinInfo>
              <Card
                title={<h3>Next of Kin Information</h3>}
                className="mt-10"
                style={{ width: "95%" }}
              >
                <div className="customer">
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Title:
                    </p>
                    <div className="">
                      <h3 className="info-value font-bold text-base">Ms</h3>
                    </div>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      First Name:
                    </p>
                    <div className="">
                      <h3 className="info-value font-bold text-base">Layo</h3>
                    </div>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Middle Name:
                    </p>
                    <div className="">
                      <h3 className="info-value font-bold text-base">
                        Deborah
                      </h3>
                    </div>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Surname:
                    </p>
                    <div className="">
                      <h3 className="info-value font-bold text-base">Peter</h3>
                    </div>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Gender:
                    </p>
                    <div className="">
                      <h3 className="info-value font-bold text-base">Female</h3>
                    </div>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Date of Birth:
                    </p>
                    <h3 className="info-value font-bold text-base">
                      06-10-2000
                    </h3>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Relationship:
                    </p>
                    <h3 className="info-value font-bold text-base">Sister</h3>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Phone Number:
                    </p>
                    <h3 className="info-value font-bold text-base">
                      +2349122443355
                    </h3>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      House Address:
                    </p>
                    <h3 className="info-value font-bold text-base">
                      14, Yaba road, Lagos
                    </h3>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Nationality:
                    </p>
                    <h3 className="info-value font-bold text-base">Nigeria</h3>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      State of Origin:
                    </p>
                    <h3 className="info-value font-bold text-base">Lagos</h3>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      LGA of Origin:
                    </p>
                    <h3 className="info-value font-bold text-base">Ikeja</h3>
                  </div>
                </div>
              </Card>
            </KinInfo>

            <IDdetails className="card-details-info flex items-center mt-10">
              <Card title={<h3>ID Details</h3>} className="idbox">
                <div className="customer">
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      ID Type:
                    </p>
                    <div className="">
                      <h3 className="info-value font-bold text-base">NIN</h3>
                    </div>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      ID Number:
                    </p>
                    <div className="">
                      <h3 className="info-value font-bold text-base">
                        82282822
                      </h3>
                    </div>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Issue Date:
                    </p>
                    <h3 className="info-value font-bold text-base">
                      06-12-2022
                    </h3>
                  </div>
                  <div className="customer-info mt-4 flex pb-2.5 items-center">
                    <p className="text-base font-normal text-gray-400">
                      Expiry Date:
                    </p>
                    <h3 className="info-value font-bold text-base">
                      06-12-2022
                    </h3>
                  </div>
                </div>
              </Card>
              <div className="id-icon-sign">
                <FaSignature className="id-icon" />
                <h2 className="font-bold text-base">Signature</h2>
              </div>
            </IDdetails>
          </CustomerAccountInfo>

          <div className="customer-buttons flex items-center justify-between mt-9">
            <button className="btn bg-[var(--grey400)] text-[var(--white50)]">
              Back
            </button>
            <button className="btn btn-blue text-[var(--white50)]">
              Forward for Verification
            </button>
          </div>
        </Card>
      </div>
    </CustomerInfoContainer>
  );
}
