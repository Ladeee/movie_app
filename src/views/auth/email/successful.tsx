import { Link } from "react-router-dom";
import AuthLayout from "../authLayout";
import {
  EmailContainer,
  ConfirmEmail,
  ConfirmText,
  SignIn,
  SuccessButton,
} from "./email.styled";

export default function Successful() {
  return (
    <AuthLayout color="#3F3F46">
      <EmailContainer>
        <ConfirmEmail>Email Confirmation Successful</ConfirmEmail>
        <ConfirmText>Welcome to Nester Verify!</ConfirmText>
        <SignIn>
          Kindly click this link to sign in and enjoy Nester <br />
          Services!
        </SignIn>
        <Link to="/login">
          <SuccessButton>Login</SuccessButton>
        </Link>
      </EmailContainer>
    </AuthLayout>
  );
}
