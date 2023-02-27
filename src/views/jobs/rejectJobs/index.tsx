import React from "react";
import {
  Buttons,
  Cancel,
  Info,
  InputWrapper,
  Label,
  Reject,
  RejectJobContainer,
  RejectJobWrapper,
  RejectText,
} from "../jobs.styled";

export default function RejectJobs() {
  return (
    <RejectJobContainer>
      <RejectJobWrapper>
        <Info>Reject Job?</Info>
        <RejectText>
          Are you sure you want to reject <br /> this job?
        </RejectText>

        <InputWrapper>
          <Label>Reason for rejection.</Label>
          <textarea />
        </InputWrapper>

        <Buttons>
          <Cancel>Cancel</Cancel>
          <Reject>Reject Jobs</Reject>
        </Buttons>
      </RejectJobWrapper>
    </RejectJobContainer>
  );
}
