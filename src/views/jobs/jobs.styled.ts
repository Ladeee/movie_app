import styled from "styled-components";
import { sizes } from "../../utils/screenSizes";

// accept job styles

export const AcceptJobContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  height: 100vh;
`;

export const AcceptJobWrapper = styled.section`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f3f3f3;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  width: 48%;
  height: 30.375rem;
  padding-top: 7rem;

  @media (max-width: ${sizes.tablet}) {
    width: 80%;
    height: 50%;
    padding-top: 3rem;
  }
`;

export const Info = styled.h1`
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.75rem;

  @media (max-width: 568px) {
    font-size: 1.5rem;
  }
`;

export const Rate = styled.div`
  margin-top: 3.625rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;

  @media (max-width: 568px) {
    gap: 2rem;
  }
`;

export const RateText = styled.h1`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2.75rem;
`;

export const Stars = styled.div`
  display: flex;
  gap: 0.125rem;
`;

export const Star = styled.span`
  cursor: pointer;

  .starIcon {
    width: 2rem;
    height: 2rem;

    @media (max-width: ${sizes.tablet}) {
      width: 1.25rem;
      height: 1.25rem;
    }
  }
`;

export const Button = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  border: none;
  background: var(--blue100);
  color: var(--white50);
  border: 1px solid var(--blue100);
  border-radius: 0.5rem;
  width: 17rem;
  height: 2.75rem;
  margin-top: 7.125rem;

  @media (max-width: ${sizes.tablet}) {
    width: 40%;
    margin-top: 3.125rem;
  }
`;

// reject job styles

export const RejectJobContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  height: 100vh;
`;

export const RejectJobWrapper = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f3f3f3;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  width: 48%;
  height: 34.5rem;
  padding-top: 7rem;

  @media (max-width: ${sizes.tablet}) {
    width: 85%;
    height: 70%;
    padding-top: 3rem;
  }
`;

export const RejectText = styled.p`
  color: #000000;
  text-align: center;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.5125rem;
  margin-top: 1.25rem;

  @media (max-width: 568px) {
    font-size: 1rem;
  }
`;

export const InputWrapper = styled.div`
  margin-top: 0.875rem;
  textarea {
    background: var(--white50);
    outline: none;
    resize: none;
    width: 39.1875rem;
    height: 5.1875rem;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
    padding-left: 0.3125rem;

    @media (max-width: ${sizes.tablet}) {
      width: 100%;
    }
  }

  @media (max-width: ${sizes.tablet}) {
    width: 80%;
  }
`;

export const Label = styled.p`
  color: #000000;
  font-weight: 400;
  font-size: 1rem;
  line-height: 2.75rem;
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 0.875rem;
  line-height: 1.25rem;
  gap: 1.875rem;
  margin-top: 4rem;

  @media (max-width: ${sizes.tablet}) {
    display: flex;
    margin-top: 2rem;
  }
`;

export const Cancel = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white50);
  width: 14.9375rem;
  height: 4.25rem;
  background-color: #939393;
  border: 1px solid #939393;
  border-radius: 8px;

  @media (max-width: 677px) {
    width: 7.9375rem;
  }
`;

export const Reject = styled.button`
  cursor: pointer;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white50);
  width: 14.9375rem;
  height: 4.25rem;
  background-color: var(--blue100);
  border: 1px solid #939393;
  border-radius: 8px;

  @media (max-width: 677px) {
    width: 7.9375rem;
  }
`;
