import { Link } from "react-router-dom";
import SignupLayout from "../../signupLayout";
import {
  PageOneContainer,
  Heading,
  Addresses,
  FormContainer,
  Button,
} from "../pages.styled";

function SignupPageOne() {
  return (
    <SignupLayout color="#0D2AAB">
      <PageOneContainer>
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
        <Link to="/signupPageTwo">
          <Button>Next</Button>
        </Link>
      </PageOneContainer>
    </SignupLayout>
  );
}

export default SignupPageOne;
