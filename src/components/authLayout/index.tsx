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
} from "./authLayout.styled";
import NesterLogo from "../../assets/images/authentification/nesterLogo.png";
import AuthNavbar from "./authNavbar";

interface Props {
  children: React.ReactNode;
  color?: string;
}

export default function AuthLayout({ children, color = "#0D2AAB" }: Props) {
  return (
    <AuthContainer>
      <AuthNav>
        <AuthNavbar />
      </AuthNav>
      <AuthWrapper>
        <Welcome color={color}>
          <Contents>
            <Logo>
              <img src={NesterLogo} alt="" />
            </Logo>
            <Greetings>
              Welcome to <br /> Nestify Verify
            </Greetings>
            <Clarity>
              Claritty gives you the blocks & components you <br />
              need to create a truly professional website.
            </Clarity>
          </Contents>
        </Welcome>

        <Forms>{children}</Forms>
      </AuthWrapper>
    </AuthContainer>
  );
}
