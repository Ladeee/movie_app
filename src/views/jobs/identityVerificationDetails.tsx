// ------------ import external dependencies -------------
import styled from "styled-components";
import { Card } from "antd";

// ------------ import internal dependencies ------------
import LayoutHeading from "../../components/LayoutHeading";
import ImgPreview from "../../assets/images/preview.png";
import CirclePlaceholder from "../../components/CirclePlaceholder";

function IdentityVerificationDetails() {
  return (
    <>
      {/* ------ layout heading section ------- */}
      <LayoutHeading heading="Identity Verification> Details " />

      <Card
        className=" mt-12"
        title="VERIFICATION DETAILS"
        extra={
          <button className="btn btn-blue min-w-[200px]">
            Download Report
          </button>
        }
      >
        <div className="grid md:grid-cols-2 md:gap-20 gap-5">
          <Card>
            {/* ------- job credentials ------- */}
            <div className="flex gap-4 items-center">
              <CirclePlaceholder />
              <div>
                <div className="font-inter text-lg">
                  JOB ID: <span className="font-semibold">33455</span>
                </div>
                <span className="font-semibold block">
                  Date Created: 8th June 2022
                </span>
              </div>
            </div>

            {/* ------ job infos ------ */}
            <div className="mt-12">
              <DetailsRow>
                <span className="title">Mode of Identification:</span>
                <span className="info">NIN</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">Job Type:</span>
                <span className="info">Identity Verification</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">First Name:</span>
                <span className="info">c/o COCIN LCC Mado Tudun wada jos</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">ID Card Number:</span>
                <span className="info">0000000000000000</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">Date of birth:</span>
                <span className="info">Jan 12 2022</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">Gender:</span>
                <span className="info">Male</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">Phone Num:</span>
                <span className="info">+2349282892922</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">Payment Status:</span>
                <span className="info">Successful</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">Verification Status:</span>
                <span className="info text-green-500">Verified</span>
              </DetailsRow>
            </div>
          </Card>

          {/* ------- status ------- */}
          <div>
            <div className="flex justify-end items-center gap-2">
              <span className="font-semibold text-grey-500">Job Status:</span>
              <span className="font-semibold text-green-500">Completed</span>
            </div>
            <img
              src={ImgPreview}
              alt="Job status"
              className="md:mt-20 mt-5 ml-auto block "
            />
          </div>
        </div>
        <div className="flex justify-between items-center mt-12">
          <button className="btn btn-blue w-full max-w-[480px]">
            Reorder Request
          </button>
          <button className="btn text-white-50">Back</button>
        </div>
      </Card>
    </>
  );
}

export default IdentityVerificationDetails;

// ------- component styles -------
const DetailsRow = styled.div`
  border-bottom: 1px solid var(--ash50);
  padding: 0.875rem;
  display: flex;
  column-gap: 10px;
  font-family: "Inter";
  font-weight: 500;
  align-items: center;

  &:last-child {
    border-bottom: none;
  }

  & > .title {
    display: block;
    color: var(--ash200);
    font-size: 1rem;
  }
`;
