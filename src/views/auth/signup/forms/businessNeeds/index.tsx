// import { useForm } from "react-hook-form";
import {
  SignupContainer,
  Heading,
  FormTwoContainer,
  BoxWrapper,
  Box,
} from "../../pages.styled";

export default function BusinessNeeds({
  formData,
  setFormData,
  handleBusinessNeedsChange,
}: any) {
  return (
    <SignupContainer>
      <Heading className="sm:text-center md:text-left">
        Select Your Business Needs
      </Heading>
      <FormTwoContainer>
        <BoxWrapper style={{ width: "80%", position: "relative" }}>
          <Box>Address Verification</Box>
          <input
            name="addressVerification"
            type="checkbox"
            onChange={(event) => handleBusinessNeedsChange(event, 0)}
          />
        </BoxWrapper>

        <BoxWrapper style={{ width: "80%", position: "relative" }}>
          <Box>Identity Verification</Box>
          <input
            name="identityVerification"
            type="checkbox"
            value={formData.company.businessNeeds}
            onChange={(event) => handleBusinessNeedsChange(event, 1)}
          />
        </BoxWrapper>

        <BoxWrapper style={{ width: "80%", position: "relative" }}>
          <Box>Business Verification</Box>
          <input
            name="businessVerification"
            type="checkbox"
            onChange={(event) => handleBusinessNeedsChange(event, 2)}
          />
        </BoxWrapper>

        <BoxWrapper style={{ width: "80%", position: "relative" }}>
          <Box>Account Opening</Box>
          <input
            name="accountOpening"
            type="checkbox"
            onChange={(event) => handleBusinessNeedsChange(event, 3)}
          />
        </BoxWrapper>

        <BoxWrapper
          className="mb-6"
          style={{ width: "80%", position: "relative" }}
        >
          <Box>Insurance</Box>
          <input
            name="insurance"
            type="checkbox"
            onChange={(event) => handleBusinessNeedsChange(event, 4)}
          />
        </BoxWrapper>
      </FormTwoContainer>
    </SignupContainer>
  );
}
