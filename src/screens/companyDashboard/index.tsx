// ------------ import external dependencies -------------
import React from "react";
import styled from "styled-components";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
import { HiOutlineDocumentDownload } from "react-icons/hi";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler,
} from "chart.js";
import { Line, Doughnut } from "react-chartjs-2";

// ---------- import internal dependencies ----------
import LayoutHeading from "../../components/LayoutHeading";
import { jobsSummary, jobStat } from "../../utils/chartData";

// ------- initialize chartjs -------
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

function CompanyDashbaord() {
  return (
    <>
      <LayoutHeading heading="Dashboard">
        <div className="flex gap-5 items-center">
          <div className="flex gap-3 items-center">
            <span className="font-montserrat text-sm ">Wallet Balance</span>
            <span className="text-2xl font-montserrat font font-semibold">
              NGN20,000.00
            </span>
          </div>
          <div className="flex gap-4">
            <button className="btn btn-blue-tran">Fund-Wallet</button>
            <button className="btn btn-blue">Create Job</button>
          </div>
        </div>
      </LayoutHeading>

      {/* ------- dashboard summary cards ------- */}
      <div className="mt-5 grid md:grid-cols-4 sm:grid-cols-1 gap-6">
        <BoxWrapper>
          <span className="text-purple-100">TOTAL CREATED JOBS</span>
          <div className="content-count">
            <span>12,426</span>
            <div className="text-green-500">
              <span>+36%</span>
              <AiOutlineArrowUp />
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <span className="text-brown-100">COMPLETED JOBS</span>
          <div className="content-count">
            <span>23,8485</span>
            <div className="text-red-500">
              <span>+14%</span>
              <AiOutlineArrowDown />
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <span className="text-green-teal">ONGOING JOBS</span>
          <div className="content-count">
            <span>84,382</span>
            <div className="text-green-500">
              <span>+36%</span>
              <AiOutlineArrowUp />
            </div>
          </div>
        </BoxWrapper>
        <BoxWrapper>
          <span className="text-red-100">FAILED JOBS</span>
          <div className="content-count">
            <span>33,493</span>
            <div className="text-green-500">
              <span>+36%</span>
              <AiOutlineArrowUp />
            </div>
          </div>
        </BoxWrapper>
      </div>

      {/* ------- Job status section ------- */}
      <div className=" mt-7 grid grid-cols-3 gap-6">
        <CardWrapper className="col-span-2">
          <div className="flex justify-between items-center">
            <h2 className="text-grey-900 font-inter font-semibold text-base">
              MoM Job Status
            </h2>
            <div className="flex items-center gap-2">
              <PillsWrapper active={true}>12 Months</PillsWrapper>
              <PillsWrapper>6 Months</PillsWrapper>
              <PillsWrapper>30 Days</PillsWrapper>
              <PillsWrapper>7 Days</PillsWrapper>
            </div>
            <button className="btn btn-tran font-jakarta text-sm font-semibold flex items-center gap-1">
              <HiOutlineDocumentDownload /> Export PDF
            </button>
          </div>
          <div>
            <Line data={jobsSummary.data} options={jobsSummary.options} />
          </div>
        </CardWrapper>
        <CardWrapper>
          <div>
            <article>
              <h2 className="text-purple-100 font-montserrat font-semibold text-sm">
                JOB STATUS
              </h2>
              <p className="text-grey-800 font-montserrat text-xs pt-3">
                Profit sharing between <br /> customers
              </p>
            </article>
          </div>
          <div className="grid grid-cols-2 mt-12 items-center">
            <div>
              <LegendIndicator>
                <div className="bg-blue-50 border-blue-200" />
                <span>20% Completed</span>
              </LegendIndicator>
              <LegendIndicator>
                <div className="bg-purple-50 border-purple-200" />
                <span>30% Delayed</span>
              </LegendIndicator>
              <LegendIndicator>
                <div className="bg-orange-50 border-orange-100" />
                <span>40% Inprogress</span>
              </LegendIndicator>
              <LegendIndicator>
                <div className="bg-blue-300 border-blue-400" />
                <span>10% Waiting on customer</span>
              </LegendIndicator>
            </div>
            <div>
              <Doughnut data={jobStat.data} options={jobStat.options} />
            </div>
          </div>
        </CardWrapper>
      </div>
    </>
  );
}

export default CompanyDashbaord;

const CardWrapper = styled.div`
  background: var(--white);
  border: 1px solid var(--grey200);
  border-radius: 10px;
  padding: 0.8rem;
`;

const BoxWrapper = styled.div`
  background: var(--white);
  border: 1px solid var(--grey200);
  border-radius: 10px;
  padding: 0.5rem 0.8rem;

  & > span {
    font-size: 0.875rem;
    font-weight: 700;
    font-family: "Montserrat";
    display: block;
  }

  & .content-count {
    margin-top: 0.5rem;
    display: flex;
    align-items: end;
    justify-content: space-between;

    & > span:first-child {
      color: var(--grey900);
      display: block;
      font-size: 1.25rem;
      font-family: "Plus Jakarta Sans";
      font-weight: 700;
    }

    & > div {
      display: flex;
      gap: 0.1rem;
      justify-content: center;
      font-family: "Plus Jakarta Sans";
      font-size: 0.75rem;

      & > svg {
        margin-top: 0.2rem;
      }
    }
  }
`;

const PillsWrapper = styled.span`
  min-width: 80px;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Plus Jakarta Sans";
  font-size: 0.75rem;
  color: ${({ active }: { active?: boolean }) =>
    active ? "var(--grey900)" : "var(--grey500)"};
  border: ${({ active }: { active?: boolean }) =>
    active ? "1px solid var(--grey400)" : "none"};
  border-radius: 5px;
  padding: 0.2rem;
`;

const LegendIndicator = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: start;
  margin-bottom: 2rem;
  & > div {
    height: 12px;
    width: 12px;
    border: 1px solid;
  }

  & > span {
    color: var(--grey800);
    font-weight: 500;
    font-size: 0.75rem;
    font-family: "Montserrat";
  }
`;
