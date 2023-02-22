import styled from "styled-components";

export const VerificationTopButtons = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--blue100);
  border-radius: 0.25rem;
  background-color: var(--blue100);
  color: var(--white50);
  width: 8.8125rem;
  height: 2.7388rem;
`;

export const VerificationDownButtons = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--blue100);
  border-radius: 0.5rem;
  width: 30rem;
  height: 2.75rem;
  font-size: 0.875rem;
  line-height: 1.25rem;
`;

export const VerificationInput = styled.input`
  outline: none;
  background-color: var(--white50);
  border: 1px solid #d0d5dd;
  border-radius: 8px;
  width: 30rem;
  height: 3rem;

  ::placeholder {
    color: #667085;
    opacity: 0.4;
  }
`;
