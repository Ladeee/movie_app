import AuthLayout from "../../../../../components/authLayout";
import {
  SignupContainer,
  Industry,
  IndustryIcon,
  Heading,
  Addresses,
  FormContainer,
  Button,
} from "../pages.styled";
import Indust from "../../../../../assets/images/authentification/industry.png";
import { Link } from "react-router-dom";

export default function CompanyDetails() {
  return (
    <AuthLayout>
      <SignupContainer>
        <Heading>Input Your Company Details</Heading>
        <Addresses>
          With Nester Verify, you are able to verify addresses <br />
          easily, from anywhere in the world
        </Addresses>

        <FormContainer>
          <label>Company Name</label>
          <input type="text" required />
          <label>CAC Registration Number</label>
          <input type="text" required />
          <label>Industry</label>
          <Industry>
            <input type="text" required />
            <IndustryIcon>
              <img src={Indust} alt="" />
            </IndustryIcon>
          </Industry>
          <label id="create">Company Address</label>
          <input type="text" required />
          <label>Role</label>
          <input type="text" required />
        </FormContainer>

        <Link to="/confirmemail">
          <Button>Create Account</Button>
        </Link>
      </SignupContainer>
    </AuthLayout>
  );
}
