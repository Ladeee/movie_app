import styled from "styled-components";
import { VerificationTopButtons } from "../verification/button";

export const PopContainer = styled.div`
  display: flex;
  justify-content: center;
  white-space: nowrap;
  height: 100%;
`;

export const PopWrapper = styled.div`
  width: 95%;
  border: 1px solid #e4e4e7;
  border-radius: 0.625rem;
  margin-top: 2%;

  #headerline {
    width: 100%;
  }
`;

export const CreateBtn = styled(VerificationTopButtons)`
  background-color: #333382;
  border: 1px solid #333382;
`;

export const PopBox = styled.section`
  width: 38.75rem;
  height: 26rem;
  border: 1px solid #e2e2e2;
  border-radius: 0.5rem;
  color: #333382;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.5rem;
  margin-top: 0.9375rem;
  margin-bottom: 6%;
`;

export const JobType = styled.p`
  margin-left: 4.875rem;
  font-weight: 600;
  margin-top: 3.3125rem;
  margin-bottom: 0.625rem;
`;

export const Select = styled.div`
  margin-top: 5.25rem;
  /* margin-left: 4.875rem; */

  p {
    cursor: pointer;
    margin-left: 4.875rem;
  }

  #textline {
    width: 90%;
    margin-right: inherit;
    margin-top: 1rem;
  }
`;

export const Dropdown = styled.div`
  display: flex;
  justify-content: space-between;

  #rightArrow {
    cursor: pointer;
    display: inline-block;
    width: 0.6rem;
    height: 1.05rem;
    margin-right: 1.4375rem;
  }
`;

// select address verification

export const SelectionBox = styled.section``;

// multiple address

export const MultipleAddressContainer = styled.div`
  color: #333382;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    width: 80%;
    margin: auto;
  }
`;

export const FileWrapper = styled.section`
  width: 95%;
  border: 1px solid #e4e4e7;
  border-radius: 0.625rem;
  margin-top: 2rem;

  @media (max-width: 1024px) {
    margin-top: 4rem;
  }
`;

// export const Templates = styled.div`
//   box-sizing: border-box;
//   background: #f8f8f8;
//   border: 1px solid #d0d0d0;
//   width: 16.3125rem;
//   height: 22.625rem;
//   border-radius: 0.25rem;
// `;

export const FileBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6.1875rem;
  margin: 2rem 0;
  div {
    box-sizing: border-box;
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid #d0d0d0;
    width: 16.3125rem;
    height: 22.625rem;
    border-radius: 0.25rem;
  }

  #text {
    text-align: center;
    font-weight: 700;
    font-size: 1.125rem;
    line-height: 1.5rem;
    margin-top: 5.0625rem;
  }

  #filebtn {
    margin-top: 3.5rem;
  }

  #img {
    width: 5rem;
    height: 5rem;
    margin-top: 1.9375rem;
  }
`;

export const FileButton = styled(VerificationTopButtons)`
  background-color: #333382;
  margin-top: 2.3125rem;
`;
