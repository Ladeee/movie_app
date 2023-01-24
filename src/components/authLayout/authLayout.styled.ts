import styled from "styled-components";
import TopIcon from "../../assets/images/authentification/shapeOne.png";
import BottomIcon from "../../assets/images/authentification/shapeTwo.png";

// layout
export const AuthContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const AuthWrapper = styled.div`
  display: flex;
  gap: 8.375rem;
`;

export const AuthNav = styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 3.375rem;
  position: absolute;
  left: 50%;
  right: 50%;
`;

export const Welcome = styled.section<{ color: string; bottom: any }>`
  font-family: "Poppins", sans-serif;
  background-color: ${(props) => props.color};
  position: relative;
  width: 46%;
  min-height: 100vh;
  overflow: hidden;
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
    bottom: ${(props) => props.bottom};
    z-index: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Contents = styled.div`
  display: grid;
  place-content: center;
  margin-top: 12.0625rem;
`;

export const Logo = styled.figure`
  width: 10.9375rem;
  height: 3.5625rem;
`;

export const Greetings = styled.header`
  font-weight: 600;
  font-size: 3.75rem;
  line-height: 5.375rem;
  margin-top: 1.5625rem;
  color: #ffffff;
`;

export const Clarity = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.875rem;
  margin-top: 0.5625rem;
  color: #cbd5e1;
`;

export const Forms = styled.section`
  z-index: 1;

  @media (max-width: 768px) {
    position: absolute;
    left: 50%;
    right: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

// signup navbar

export const AuthNavbarContainer = styled.ul`
  font-family: "Inter", sans-serif;
  display: flex;
  list-style-type: none;
  gap: 2.5rem;
  font-weight: 600;
  font-size: 1rem;
  line-height: 1.5rem;
  text-transform: uppercase;
  z-index: 2;
  margin: 0;
  padding: 0;
`;

export const Company = styled.li`
  cursor: pointer;
  transition: ease-in 0.5s;
  /* border-bottom: 0.375rem solid transparent; */

  &:hover {
    /* border-bottom: 0.375rem solid #ffffff; */
    /* color: #ffffff; */
  }
`;

export const Individual = styled.li`
  cursor: pointer;
`;

export const Agent = styled.li`
  cursor: pointer;
`;
