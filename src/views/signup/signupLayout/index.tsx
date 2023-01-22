import React from "react";
import {
  Forms,
  SignupContainer,
  SignupWrapper,
  SignupNavbar,
  Welcome,
  Contents,
  Greetings,
  Logo,
  Clarity,
} from "./signup.styled";
import NesterLogo from "../../../assets/images/auth/nesterLogo.png";
import SignupNav from "./signupNav";

interface Props {
  children: React.ReactNode;
  color?: string;
}

function SignupLayout({ children, color = "#0D2AAB" }: Props) {
  return (
    <SignupContainer>
      <SignupNavbar>
        <SignupNav />
      </SignupNavbar>
      <SignupWrapper>
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
              need to create a truly professional website
            </Clarity>
          </Contents>
        </Welcome>
        <Forms>{children}</Forms>
      </SignupWrapper>
    </SignupContainer>
  );
}

export default SignupLayout;
