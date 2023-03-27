// ------------ import external dependencies -------------
import styled from "styled-components";
import { Card } from "antd";
import { Link } from "react-router-dom";

// ------------ import internal dependencies ------------
import LayoutHeading from "../../components/LayoutHeading";
import CirclePlaceholder from "../../components/CirclePlaceholder";
import Attachment from "../../components/AttachmentIndicator";
import { ReactComponent as Attach } from "../../assets/svg/attachment.svg";

function BusinessVerificationDetails() {
  return (
    <>
      {/* ------ layout heading section ------- */}
      <LayoutHeading heading="View Job > Business Verification > Details" />

      <Card
        className=" mt-12"
        title="JOB DETAILS"
        extra={
          <span className="font-inter font-semibold">
            Date Requested: Fri, Feb 21, 2022
          </span>
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
                <span className="title">Job Type:</span>
                <span className="info">BUSINESS VERIFICATION </span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">Contact First Name:</span>
                <span className="info">MUHAMMED</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">Contact Last Name:</span>
                <span className="info">Adamu</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">Business/company Name:</span>
                <span className="info">Adamu construction Ltd</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">Business/company No :</span>
                <span className="info">RC 234576</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">Address:</span>
                <span className="info">
                  73 Allen Ave, Allen 101233, IkejaLagos.
                </span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">State:</span>
                <span className="info">Lagos</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">City:</span>
                <span className="info">Ikeja</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">Closest Landmark:</span>
                <span className="info">MTN Allen Centre</span>
              </DetailsRow>
              <DetailsRow>
                <span className="title">Payment Status:</span>
                <span className="info text-green-500">Paid</span>
              </DetailsRow>

              <DetailsRow>
                <span className="title">Expected Date of Completion:</span>
                <span className="info ">MTN Allen Centre</span>
              </DetailsRow>
              <DetailsRow className="block">
                <span className="title">Additional Information:</span>
                <span className="info">
                  With the growing population, demand for agriculture is also
                  increasing. To meet the demands, farmers have switched to
                  advanced ways and machinery.{" "}
                </span>
              </DetailsRow>
            </div>
          </Card>

          {/* ------- status ------- */}
          <div>
            <div className="flex justify-end items-center gap-2">
              <span className="font-semibold text-grey-500">Job Status:</span>
              <span className="font-semibold text-green-500">Ongoing</span>
            </div>
            <div className="flex justify-end mt-7">
              <Attachment name="Authorization  Letter" />
            </div>
            <CompanyLink to="#">
              <span className="block text-center font-inter text-sm font-bold py-4">
                Company Link
              </span>
              <Attach />
            </CompanyLink>
          </div>
        </div>
        <div className=" mt-12">
          <button className="btn btn-blue w-full max-w-[480px] block ml-auto">
            View Detailed Report
          </button>
          {/* <button className="btn text-white-50">Back</button> */}
        </div>
      </Card>
    </>
  );
}

export default BusinessVerificationDetails;

// ------- component styles -------
export const DetailsRow = styled.div`
  border-bottom: 1px solid var(--ash50);
  padding: 0.875rem;
  display: flex;
  column-gap: 10px;
  font-family: "Montserrat";
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

const CompanyLink = styled(Link)`
  border: 1px solid var(--ash200);
  border-radius: 5px;
  display: flex;
  width: 250px;
  margin-left: auto;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  height: 45px;
  gap: 5px;
  color: var(--black50);

  &:hover {
    color: var(--black50);
  }
`;
