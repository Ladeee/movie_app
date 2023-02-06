import AuthLayout from "../../../../components/authLayout";
import {
  Container,
  Heading,
  FormContainer,
  InputWrapper,
  Reset,
} from "../login.styled";

export default function SetPassword() {
  return (
    <AuthLayout color="#007C23">
      <Container>
        <Heading>Welcome Back!</Heading>
        <FormContainer>
          <InputWrapper>
            <label htmlFor="new_password">New Password</label>
            <input type="password" required id="new_password" minLength={6} />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              required
              id="confirm_password"
              minLength={6}
            />
          </InputWrapper>
        </FormContainer>

        {/* <Link to="/"> */}
        <Reset className="mt-107">Reset</Reset>
        {/* </Link> */}
      </Container>
    </AuthLayout>
  );
}
