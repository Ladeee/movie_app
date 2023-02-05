// ------------ import external dependencies -------------
import React from "react";
import styled from "styled-components";
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

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
  BarElement,
} from "chart.js";
import { Bar } from "react-chartjs-2";

// ---------- import internal dependencies ----------
import LayoutHeading from "../../components/LayoutHeading";
import { accountSummary, locationSummary } from "../../utils/chartData";

// ------- initialize chartjs -------
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  Filler
);

function CompanyAccountDashbaord() {
  return (
    <>
      <LayoutHeading heading="Dashboard" />

      {/* ------- dashboard summary cards ------- */}
      <CardWrapper className="flex justify-center mt-5">
        <div className="grid md:grid-cols-3 grid-cols-1 gap-6">
          <BoxWrapper>
            <span className="text-grey-500">Total ACCOUNT Opened</span>
            <div className="content-count">
              <span>12,426</span>
              <div className="text-green-500">
                <span>+36%</span>
                <AiOutlineArrowUp />
              </div>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <span className="text-brown-100">Business/Current Acct</span>
            <div className="content-count">
              <span>23,8485</span>
              <div className="text-red-500">
                <span>+14%</span>
                <AiOutlineArrowDown />
              </div>
            </div>
          </BoxWrapper>
          <BoxWrapper>
            <span className="text-green-teal">Savings Account</span>
            <div className="content-count">
              <span>84,382</span>
              <div className="text-green-500">
                <span>+36%</span>
                <AiOutlineArrowUp />
              </div>
            </div>
          </BoxWrapper>
        </div>
      </CardWrapper>

      {/* ------ accounts opened summary ------- */}
      <div className="mt-7 grid md:grid-cols-3 grid-cols-1 gap-6">
        <CardWrapper className="shadow-sm p-0 pb-3">
          <AccountSummary>
            <span className="font-montserrat font-semibold text-grey-500 block">
              Total: Accounts Opened{" "}
            </span>
            <span className="text-grey-900 block font-medium text-4xl font-montserrat">
              6,890
            </span>
            <span className="font-montserrat text-sm font-semibold text-grey-500 block">
              All Month
            </span>
          </AccountSummary>
          <div className="p-4" style={{ minHeight: "300px" }}>
            <Bar data={accountSummary.data} options={accountSummary.options} />
          </div>
        </CardWrapper>

        <CardWrapper className="md:col-span-2">
          <div className="flex gap-4 mb-6">
            <SummaryWrap>
              <span className="text-grey-500 font-montserrat block ">
                Total Acct Opened
              </span>
              <span className="text-grey-900 block font-bold text-xl font-montserrat">
                12,426
              </span>
            </SummaryWrap>
            <SummaryWrap>
              <span className="text-grey-500 font-montserrat block ">
                Wallet account
              </span>
              <span className="text-grey-900 block font-bold text-xl font-montserrat">
                23,499
              </span>
            </SummaryWrap>
            <SummaryWrap>
              <span className="text-grey-500 font-montserrat block ">
                Savings Acct
              </span>
              <span className="text-grey-900 block font-bold text-xl font-montserrat">
                84,828
              </span>
            </SummaryWrap>
          </div>
          <div>
            <div className="mt-2 flex gap-1 items-center">
              <LegendIndicator className="bg-green-300 " />
              <span className="text-grey-800 text-xs font-montserrat">
                Lagos
              </span>
            </div>
            <div className="mt-2 flex gap-1 items-center">
              <LegendIndicator className="bg-green-700 " />
              <span className="text-grey-800 text-xs font-montserrat">
                Abuja
              </span>
            </div>
            <div className="mt-2 flex gap-1 items-center">
              <LegendIndicator className="bg-green-900 " />
              <span className="text-grey-800 text-xs font-montserrat">
                Kano
              </span>
            </div>
          </div>
          <div className="p-4" style={{ minHeight: "300px" }}>
            <Bar
              data={locationSummary.data}
              options={locationSummary.options}
            />
          </div>
        </CardWrapper>
      </div>

      {/* ------- Job saving section------- */}
      <div className="mt-7 grid md:grid-cols-4 grid-cols-1 gap-6">
        <CardWrapper>
          <div>
            <span className="text-purple-100 block font-montserrat text-sm font-bold">
              Tier 1 Savings
            </span>
            <span className=" font-semibold text-4xl pt-1 font-montserrat block">
              650
            </span>
          </div>
        </CardWrapper>
      </div>
    </>
  );
}

export default CompanyAccountDashbaord;

const CardWrapper = styled.div`
  background: var(--white50);
  border: 1px solid var(--grey200);
  border-radius: 10px;
  padding: 0.8rem;
`;

const BoxWrapper = styled.div`
  background: var(--white50);
  border: 1px solid var(--grey200);
  border-radius: 10px;
  padding: 0.5rem 0.8rem;

  & > span {
    font-size: 0.875rem;
    font-weight: 500;
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

const LegendIndicator = styled.span`
  display: block;
  height: 10px;
  width: 10px;
  border-radius: 50px;
`;

const AccountSummary = styled.div`
  border-bottom: 2px solid #ececec;
  padding: 1rem;
`;

const SummaryWrap = styled.div`
  border-left: 1px solid #e7eaee;
  padding: 0.5rem;
`;
