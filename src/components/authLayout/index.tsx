import React from "react";
import {
  Forms,
  AuthContainer,
  AuthWrapper,
  AuthNav,
  Welcome,
  Contents,
  Greetings,
  Logo,
  Clarity,
  BottomIconImg,
} from "./authLayout.styled";
import NesterLogo from "../../assets/logo-light.png";
import AuthNavbar from "./authNavbar";
import BottomIcon from "../../assets/images/authentification/shapeTwo.png";

interface Props {
  children: React.ReactNode;
  color?: string;
  bottom?: any;
}

export default function AuthLayout({
  children,
  color = "#1F2041",
  bottom = 0,
}: Props) {
  return (
    <AuthContainer>
      <AuthNav>
        <AuthNavbar />
      </AuthNav>
      <AuthWrapper>
        <Welcome color={color} bottom={bottom}>
          <Contents>
            <Logo>
              <img src={NesterLogo} alt="" />
            </Logo>
            <Greetings>
              Welcome to <br /> Nester Verify
            </Greetings>
            <Clarity>
              With Nester Verify, you are able to verify addresses <br />
              easily, from anywhere in the world
            </Clarity>
          </Contents>
          <BottomIconImg>
            <img className="img" src={BottomIcon} alt="bottom icon" />
          </BottomIconImg>
        </Welcome>

        <Forms>{children}</Forms>
      </AuthWrapper>
    </AuthContainer>
  );
}
