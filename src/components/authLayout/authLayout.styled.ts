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
  gap: 17.8667vw;
`;

export const AuthNav = styled.nav`
  display: flex;
  justify-content: center;
  padding-top: 22px;
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
    width: 15.2vw;
    height: 18.9333vw;
  }
  &::after {
    content: "";
    background-image: url(${BottomIcon});
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    width: 61.3333vw;
    height: 25.4667vw;
    right: -26.6667vw;
    bottom: ${(props) => props.bottom};
    z-index: 1;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Contents = styled.div`
  display: grid;
  place-content: flex-end;
  margin-top: 25.7333vw;
  margin-right: 15.4667vw;
`;

export const Logo = styled.figure`
  width: 23.3333vw;
  height: 7.6vw;
`;

export const Greetings = styled.header`
  font-weight: 600;
  font-size: 8vw;
  line-height: 11.4667vw;
  margin-top: 3.3333vw;
  color: #ffffff;
`;

export const Clarity = styled.p`
  font-weight: 400;
  font-size: 2.4vw;
  line-height: 4vw;
  margin-top: 1.2vw;
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
  gap: 5.3333vw;
  font-weight: 600;
  font-size: 2.1333vw;
  line-height: 3.2vw;
  text-transform: uppercase;
  z-index: 2;
  margin: 0;
  padding: 0;

  @media (max-width: 567.99px) {
    font-size: 14px;
    gap: 20px;
  }
`;

export const Company = styled.li`
  cursor: pointer;
  transition: ease-in 0.5s;
  color: #ffffff;
  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    width: 12vw;
    height: 0.8vw;
    background-color: #ffffff;
    border: 0.1333vw solid #ffffff;
    border-radius: 0.4vw;
    margin-top: 0.6667vw;

    @media (max-width: 768px) {
      display: none;
    }
  }

  @media (max-width: 768px) {
    color: #000000;
    font-size: 14px;
  }
`;

export const Individual = styled.li`
  cursor: pointer;
  padding: 0 1.7333vw;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Agent = styled.li`
  cursor: pointer;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
