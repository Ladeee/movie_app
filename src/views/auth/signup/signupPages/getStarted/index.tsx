import { Link } from "react-router-dom";
import AuthLayout from "../../../../../components/authLayout";

import {
  SignupContainer,
  Heading,
  Addresses,
  FormContainer,
  Button,
} from "../pages.styled";
// import CompanyDetails from "../companyDetails";
// import BusinessNeeds from "../businessNeeds";

// all routes
// const ALL_TABS = [
//   BusinessNeeds,
//   CompanyDetails,
// ];

// const [page, setPage] = useState(0);

// const { isCompleted: getStartedIsCompleted } = GetStarted;
// const { isCompleted: businessNeedsIsCompleted } = GetStarted;

// const tabs = [getStartedIsCompleted, businessNeedsIsCompleted];

// const gotoTab = (index: number) => {
//   // ensure all tabs before this one are filled before the user can proceed.
//   const previousTabs = tabs.slice(0, index).every(Boolean);
//   if (previousTabs) {
//     setPage(index);
//   } else {
//     return page;
//   }
// };
// const currentPage = ALL_TABS[page];

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
