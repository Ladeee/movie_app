import React, { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  CreateBtn,
  Dropdown,
  JobType,
  PopBox,
  PopContainer,
  PopWrapper,
  Select,
} from "./popup.styled";

export default function JobPopup() {
  const [open, setOpen] = useState(false);

  const click = () => {
    setOpen(true);
  };

  const navigate = useNavigate();

  const next = () => {
    navigate("/company/verifications");
  };

  const csv = () => {
    navigate("csv");
  };
  return (
    <PopContainer>
      <PopWrapper>
        <div className="flex justify-end mr-9 mt-5 mb-5">
          <CreateBtn>Create Job</CreateBtn>
        </div>
        <hr id="headerline" />

        <PopBox>
          {!open ? (
            <>
              <JobType>Select Job Type</JobType>
              <hr id="boxline" />
              <Select>
                <Dropdown>
                  <p>Address Verification</p>
                  <i onClick={click}>
                    <MdOutlineKeyboardArrowRight id="rightArrow" />
                  </i>
                </Dropdown>
                <hr id="textline" />
                <Dropdown>
                  <p>Business Verification</p>
                </Dropdown>
                <hr id="textline" />
                <Dropdown>
                  <p>Identity Verification</p>
                </Dropdown>
                <hr id="textline" />
                <Dropdown>
                  <p>Business Address Verification</p>
                  <i>
                    <MdOutlineKeyboardArrowRight id="rightArrow" />
                  </i>
                </Dropdown>
                <hr id="textline" />
              </Select>
            </>
          ) : (
            <>
              <JobType>Select an Open to Continue</JobType>
              <hr id="boxline" />
              <Select>
                <Dropdown>
                  <p>Create Multiple Jobs Using Excel/CSV</p>
                  <i onClick={csv}>
                    <MdOutlineKeyboardArrowRight id="rightArrow" />
                  </i>
                </Dropdown>
                <hr id="textline" />
                <Dropdown onClick={next}>
                  <p>Create single job using web form</p>
                </Dropdown>
                <hr id="textline" />
              </Select>
            </>
          )}
        </PopBox>
      </PopWrapper>
    </PopContainer>
  );
}
