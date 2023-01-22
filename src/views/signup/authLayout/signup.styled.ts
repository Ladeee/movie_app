import styled from "styled-components";
import TopIcon from "../../../assets/images/auth/shapeOne.png";
import BottomIcon from "../../../assets/images/auth/shapeTwo.png";

// layout
export const AuthContainer = styled.div`
  position: relative;
`;

export const AuthWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SignupNavbar = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 3.375rem;
  position: absolute;
  left: 50%;
  right: 50%;
`;

export const Welcome = styled.div<{ color: string }>`
  width: 42.625rem;
  background-color: ${(props) => props.color};
  position: relative;
  min-height: 100vh;
  &::before {
    content: "";
    background-image: url(${TopIcon});
    background-size: contain;
    position: absolute;
    background-repeat: no-repeat;
    width: 7.125rem;
    height: 8.875rem;
  }
  &::after {
    content: "";
    background-image: url(${BottomIcon});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    width: 28.75rem;
    height: 13.9375rem;
    right: -9.75rem;
    bottom: 0;
    z-index: 1;
  }
`;

export const Contents = styled.div`
  display: grid;
  place-content: center;
`;

export const Logo = styled.div`
  width: 10.9375rem;
  height: 3.5625rem;
  margin-top: 12.0625rem;
`;

export const Greetings = styled.div`
  font-weight: 600;
  font-size: 3.75rem;
  line-height: 5.375rem;
  margin-top: 1.5625rem;
  color: #ffffff;
`;

export const Clarity = styled.div`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.875rem;
  margin-top: 0.5625rem;
  color: #cbd5e1;
`;

export const Forms = styled.div`
  margin-right: 10.625rem;
  z-index: 99;
`;

// signup navbar

export const SignupNavContainer = styled.div`
  display: flex;
  gap: 2.5rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  text-transform: uppercase;
  z-index: 2;
`;

export const Company = styled.div`
  cursor: pointer;
  transition: ease-in-out 0.5s;
  border-bottom: 0.375rem solid transparent;

  &:hover {
    border-bottom: 0.375rem solid #ffffff;
    color: #ffffff;
  }
`;

export const Individual = styled.div`
  cursor: pointer;
`;

export const Agent = styled.div`
  cursor: pointer;
`;
