import styled from "styled-components";

// accept job styles

export const AcceptJobContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const AcceptJobWrapper = styled.div`
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
`;

export const Info = styled.p`
  font-weight: 600;
  font-size: 2.25rem;
  line-height: 2.75rem;
`;

export const Rate = styled.div`
  margin-top: 3.625rem;
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

export const RateText = styled.div`
  font-weight: 600;
  font-size: 1.5rem;
  line-height: 2.75rem;
`;

export const Stars = styled.div`
  display: flex;
  gap: 0.125rem;
`;

export const Star = styled.div`
  cursor: pointer;
`;

export const Button = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  background: #1f2041;
  color: #ffffff;
  border: 1px solid #1f2041;
  border-radius: 0.5rem;
  width: 17rem;
  height: 2.75rem;
  margin-top: 7.125rem;
`;

// reject job styles

export const RejectJobContainer = styled.div`
  font-family: "Inter", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #f3f3f3;
  border: 1px solid #e4e4e4;
  border-radius: 8px;
  width: 52.125rem;
  height: 34.5rem;
`;
