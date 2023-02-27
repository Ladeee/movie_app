import styled from "styled-components";
import TopIcon from "../../assets/images/authentification/shapeOne.png";
import BottomIcon from "../../assets/images/authentification/shapeTwo.png";
import { sizes } from "../../utils/screenSizes";

// layout
export const AuthContainer = styled.div`
  position: relative;
  max-width: 100%;

  @media (max-width: ${sizes.tabletL}) {
    flex: 1;
  }
`;

export const AuthWrapper = styled.div`
  display: flex;
  gap: 8.375rem;

  @media (max-width: ${sizes.tabletL}) {
    justify-content: space-between;
    gap: 0;
    margin-right: 5%;
  }
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
  overflow: auto;
  &::before {
    content: "";
    background-image: url(${TopIcon});
    background-size: contain;
    position: fixed;
    background-repeat: no-repeat;
    width: 7.125rem;
    height: 8.875rem;
  }
  &::after {
    content: "";
    background-image: url(${BottomIcon});
    background-size: contain;
    position: fixed;
    background-repeat: no-repeat;
    width: 28.75rem;
    height: 10.9375rem;
    right: 39.5%;
    bottom: ${(props) => props.bottom};
    z-index: 1;

    @media (max-width: ${sizes.tabletL}) {
      display: none;
    }
  }
  @media (max-width: ${sizes.tablet}) {
    display: none;
  }
`;

export const BottomIconImg = styled.div`
  display: none;

  @media (max-width: ${sizes.tabletL}) {
    display: block;
    position: absolute;
    width: inherit;
  }

  img {
    @media (max-width: ${sizes.tabletL}) {
      position: fixed;
      width: inherit;
      object-fit: contain;
      height: 25%;
      right: 50%;
      left: 15%;
      top: 82%;
    }
  }
`;

export const Contents = styled.div`
  display: grid;
  place-content: flex-end;
  margin-top: 12.0625rem;
  margin-left: 8.5rem;
  position: fixed;

  @media (max-width: ${sizes.tabletL}) {
    display: grid;
    place-content: center;
    margin-left: 0;
    margin-right: 0;
    width: inherit;
    white-space: nowrap;
  }
`;

export const Logo = styled.figure`
  display: flex;
  align-items: center;
  width: 10.9375rem;
  height: 3.5625rem;
`;

export const Greetings = styled.header`
  font-weight: 600;
  font-size: 3.75rem;
  line-height: 5.375rem;
  margin-top: 1.5625rem;
  color: var(--white50);

  @media (max-width: ${sizes.tabletL}) {
    font-size: 2.063rem;
    line-height: 3rem;
  }
`;

export const Clarity = styled.p`
  font-weight: 400;
  font-size: 1.125rem;
  line-height: 1.875rem;
  margin-top: 0.5625rem;
  color: #cbd5e1;

  @media (max-width: ${sizes.tabletL}) {
    font-size: 0.825rem;
  }
`;

export const Forms = styled.section`
  z-index: 1;
  max-width: 44%;

  @media (max-width: ${sizes.tablet}) {
    /* position: absolute; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* left: 50%;
    right: 50%; */
    width: 100%;
  }

  @media (max-width: ${sizes.tabletL}) {
    max-width: 100%;
  }
`;

// signup navbar

export const AuthNavbarContainer = styled.ul`
  font-family: "Montserrat", sans-serif;
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

  @media (max-width: 568px) {
    font-size: 14px;
    gap: 20px;
  }
`;

export const Company = styled.li`
  cursor: pointer;
  transition: ease-in 0.5s;
  color: var(--white50);
  display: flex;
  flex-direction: column;

  &::after {
    content: "";
    width: 5.625rem;
    height: 0.375rem;
    background-color: var(--white50);
    border: 1px solid var(--white50);
    border-radius: 0.1875rem;
    margin-top: 0.3125rem;

    @media (max-width: ${sizes.tablet}) {
      display: none;
    }
  }

  @media (max-width: ${sizes.tablet}) {
    color: #000000;
    font-size: 0.875rem;
  }
`;

export const Individual = styled.li`
  cursor: pointer;
  padding: 0 0.8125rem;

  @media (max-width: ${sizes.tablet}) {
    font-size: 0.875rem;
  }
`;

export const Agent = styled.li`
  cursor: pointer;

  @media (max-width: ${sizes.tablet}) {
    font-size: 0.875rem;
  }
`;
