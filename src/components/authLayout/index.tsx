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
              {/* Clarity gives you the blocks & components you <br />
              need to create a truly professional website. */}
              With Nester Verify, you are able to verify addresses <br />
              easily, from anywhere in the world
            </Clarity>
          </Contents>
        </Welcome>

        <Forms>{children}</Forms>
      </AuthWrapper>
    </AuthContainer>
  );
}
