// ------------ import external dependencies ------------
import React from "react";
import styled from "styled-components";

// ------------ import internal dependencies ------------
import SearchInput from "../../../../components/SearchInput";
import { ReactComponent as Message } from "../../../../assets/svg/message.svg";
import { ReactComponent as Bell } from "../../../../assets/svg/bell.svg";
import Profile from "../../../../assets/profile.png";

function ContentHeader() {
  return (
    <>
      <div className="flex justify-between">
        <SearchInput />
        <ProfileWrapper>
          <MessageWrapper>
            <Message />
            <span>2</span>
          </MessageWrapper>
          <Bell className="cursor-pointer" />
          <img src={Profile} alt="user profile" className="cursor-pointer" />
        </ProfileWrapper>
      </div>
    </>
  );
}

export default ContentHeader;

const MessageWrapper = styled.div`
  position: relative;
  margin-top: 0.5rem;
  cursor: pointer;

  & > span {
    position: absolute;
    background: var(--indigo600);
    height: 15px;
    width: 15px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    top: -7px;
    right: 0;
    font-size: 0.75rem;
    font-family: "Plus Jakarta Sans", sans-serif;
    color: var(--white);
  }
`;

const ProfileWrapper = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
`;
