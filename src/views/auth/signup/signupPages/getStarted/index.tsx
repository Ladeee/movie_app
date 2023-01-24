import { Link } from "react-router-dom";
import AuthLayout from "../../../../../components/authLayout";

import {
  SignupContainer,
  Heading,
  Addresses,
  FormContainer,
  Button,
} from "../pages.styled";

export default function GetStarted() {
  return (
    <AuthLayout color="#0D2AAB">
      <SignupContainer>
        <Heading>Get Started</Heading>
        <Addresses>
          With Nester Verify, you are able to verify addresses <br />
          easily, from anywhere in the world
        </Addresses>

        <FormContainer>
          <label>Full Name</label>
          <input type="text" required />
          <label>Phone Number</label>
          <input type="text" required />
          <label>Email Address</label>
          <input type="text" required />
          <label id="create">Create Password</label>
          <input type="text" required />
          <label>Confirm Password</label>
          <input type="text" required />
        </FormContainer>

        <Link to="/businessneeds">
          <Button>Next</Button>
        </Link>
      </SignupContainer>
    </AuthLayout>
  );
}
