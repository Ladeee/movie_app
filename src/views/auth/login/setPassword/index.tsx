import AuthLayout from "../../../../components/authLayout";
import {
  Container,
  Heading,
  Addresses,
  FormContainer,
  InputWrapper,
  Reset,
} from "../login.styled";

export default function SetPassword() {
  return (
    <AuthLayout color="#007C23">
      <Container>
        <Heading>Welcome Back!</Heading>
        <Addresses>
          With Nester Verify, you are able to verify addresses <br />
          easily, from anywhere in the world
        </Addresses>
        <FormContainer>
          <InputWrapper>
            <label>New Password</label>
            <input type="text" required />
          </InputWrapper>
          <InputWrapper>
            <label id="create">Confirm Password</label>
            <input type="text" required />
          </InputWrapper>
        </FormContainer>

        {/* <Link to="/"> */}
        <Reset className="mt-107">Reset</Reset>
        {/* </Link> */}
      </Container>
    </AuthLayout>
  );
}
