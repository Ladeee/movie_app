import { Link } from "react-router-dom";
import AuthLayout from "../../authLayout";
import {
  EmailContainer,
  ConfirmEmail,
  ConfirmText,
  ConfirmButton,
} from "../email.styled";

export default function Confirm() {
  return (
    <AuthLayout color="#3F3F46">
      <EmailContainer>
        <ConfirmEmail>Please Confirm Your Email Address</ConfirmEmail>
        <ConfirmText>
          To complete the sign up process, kindly <br />
          confirm your email account by clicking the <br />
          link contained in the email you just received!
        </ConfirmText>
        <Link to="/emailsuccessful">
          <ConfirmButton>Login</ConfirmButton>
        </Link>
      </EmailContainer>
    </AuthLayout>
  );
}
