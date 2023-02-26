import { Link } from "react-router-dom";
import AuthLayout from "../../../../components/authLayout";
import {
  EmailContainer,
  ConfirmEmail,
  ConfirmText,
  ConfirmButton,
} from "../email.styled";

export default function Confirm() {
  return (
    <AuthLayout bottom="-6.45rem" color="#3F3F46">
      <EmailContainer>
        <ConfirmEmail>Please Confirm Your Email Address</ConfirmEmail>
        <ConfirmText className="uppercase">
          To complete the sign up process, kindly <br />
          confirm your email account by clicking the <br />
          link contained in the email you just received!
        </ConfirmText>

        <Link to="/emailsuccessful" className="mt-12">
          <ConfirmButton className="btn">Login</ConfirmButton>
        </Link>
      </EmailContainer>
    </AuthLayout>
  );
}
