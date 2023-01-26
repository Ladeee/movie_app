import { Link } from "react-router-dom";
import AuthLayout from "../../../../components/authLayout";
import {
  Container,
  Heading,
  Addresses,
  FormContainer,
  Button,
  Acc,
} from "../login.styled";

export default function RecoverPassword() {
  return (
    <AuthLayout color="#2C2F6D">
      <Container>
        <Heading>Recover your password easily!</Heading>
        <Addresses>
          With Nester Verify, you are able to verify addresses <br />
          easily, from anywhere in the world
        </Addresses>
        <FormContainer>
          <label>Email Address</label>
          <input type="text" required />
        </FormContainer>

        <Link to="/setpassword">
          <Button>Reset</Button>
        </Link>

        <Link to="/signup">
          <Acc>Create Account</Acc>
        </Link>
      </Container>
    </AuthLayout>
  );
}