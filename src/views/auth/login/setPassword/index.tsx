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
            <input
              type="password"
              required
              id="new_password"
              data-testid="new_password"
            />
          </InputWrapper>
          <InputWrapper>
            <label htmlFor="confirm_password">Confirm Password</label>
            <input
              type="password"
              required
              id="confirm_password"
              data-testid="confirm_password"
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
