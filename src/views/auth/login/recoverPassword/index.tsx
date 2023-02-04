import { Link } from "react-router-dom";
import AuthLayout from "../../../../components/authLayout";
import {
  Container,
  Heading,
  FormContainer,
  Button,
  Acc,
} from "../login.styled";

export default function RecoverPassword() {
  return (
    <AuthLayout color="#2C2F6D">
      <Container>
        <Heading>Recover your password easily!</Heading>
        <FormContainer>
          <label htmlFor="email">Email Address</label>
          <input type="email" required id="email" data-testid="email" />
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
