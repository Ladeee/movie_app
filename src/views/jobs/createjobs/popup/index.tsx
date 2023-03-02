// Importing external dependencies
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

// Importing internal dependencies

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
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
        <div className="flex justify-end mr-9 mt-5 mb-5" id="headerline">
          <button className="btn bg-[var(--blue100)] text-[var(--white100)] mr-9 cursor-pointer">
            Create Job
          </button>
        </div>

        <PopBox>
          {!open ? (
            <>
              <JobType>
                <p className="boxline">Select Job Type</p>
              </JobType>
              <Select>
                <Dropdown>
                  <p onClick={click}>Address Verification</p>
                  <i onClick={click}>
                    <MdOutlineKeyboardArrowRight id="rightArrow" />
                  </i>
                </Dropdown>
                <Dropdown>
                  <p>Business Verification</p>
                </Dropdown>
                <Dropdown>
                  <p>Identity Verification</p>
                </Dropdown>
                <Dropdown>
                  <p>Business Address Verification</p>
                  <i>
                    <MdOutlineKeyboardArrowRight id="rightArrow" />
                  </i>
                </Dropdown>
              </Select>
            </>
          ) : (
            <>
              <JobType>
                <p className="boxline">Select an Open to Continue</p>
              </JobType>
              <Select>
                <Dropdown>
                  <p onClick={csv}>Create Multiple Jobs Using Excel/CSV</p>
                  <i onClick={csv}>
                    <MdOutlineKeyboardArrowRight id="rightArrow" />
                  </i>
                </Dropdown>
                <Dropdown onClick={next}>
                  <p>Create single job using web form</p>
                </Dropdown>
              </Select>
            </>
          )}
        </PopBox>
      </PopWrapper>
    </PopContainer>
  );
}
