import { Card } from "antd";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { sizes } from "../../../utils/screenSizes";
import PermissionBox from "./permissionbox";
import { Headers } from "../management.styled";

export default function Permissions() {
  return (
    <PermissionContainer>
      <Headers>
        <div className="flex items-center gap-2 text-[var(--grey900)]">
          <h2 className="text-lg md:text-2xl font-semibold">User Management</h2>
        </div>
        <div>
          <Link to="/company/users/subuser">
            <button className="btn min-w-max w-28 btn-blue md:bg-[var(--blue100)] text-[var(--white100)] cursor-pointer">
              Create
            </button>
          </Link>
        </div>
      </Headers>
      <Card title="Permissions" bordered={false} className="card">
        <PermissionBox />
        <div
          id="btngrp"
          className="pl-10 sm:pr-32 flex justify-between items-center mt-8"
        >
          <button className="btn btn-blue w-2/4 cursor-pointer">
            SET PERMISSION
          </button>
          <button className="btn w-1/4 bg-[var(--grey400)] border-[var(--grey500)] text-[var(--white50)] cursor-pointer">
            BACK
          </button>
        </div>
      </Card>
    </PermissionContainer>
  );
}

// permission styling

const PermissionContainer = styled.div`
  margin-top: 3.5rem;

  #btngrp {
    white-space: nowrap;
    @media (max-width: ${sizes.mobileL}) {
      padding: 0 !important;
    }

    button {
      @media (max-width: ${sizes.mobileM}) {
        min-width: 0 !important;
        width: 37% !important;
        font-size: 0.6rem;
        padding: 0.3rem;
      }
    }
  }
`;
