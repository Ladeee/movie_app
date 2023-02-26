import { Link } from "react-router-dom";
import AuthLayout from "../../../../components/authLayout";
import {
  EmailContainer,
  ConfirmEmail,
  ConfirmSuccess,
  SignIn,
  ConfirmButton,
} from "../email.styled";

export default function Successful() {
  return (
    <AuthLayout bottom="-6.45rem" color="#3F3F46">
      <EmailContainer>
        <ConfirmEmail>Email Confirmation Successful</ConfirmEmail>
        <ConfirmSuccess>Welcome to Nester Verify!</ConfirmSuccess>
        <SignIn>
          Kindly click this link to sign in and enjoy Nester <br />
          Services!
        </SignIn>

        <Link to="/login">
          <ConfirmButton className="btn">Login</ConfirmButton>
        </Link>
      </EmailContainer>
    </AuthLayout>
  );
}
