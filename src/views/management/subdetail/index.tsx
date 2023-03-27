// import external dependencies
import { Card, Col } from "antd";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

// import internal depencies
import {
  SubdetailButtons,
  SubdetailContainer,
  Headers,
} from "../management.styled";
import PermissionBox from "../permission/permissionbox";

export default function SubDetail() {
  return (
    <SubdetailContainer>
      <Headers>
        <div className="flex items-center gap-1 text-grey-900">
          <h2 className="text-lg md:text-2xl font-semibold">User Management</h2>
          <IoIosArrowForward className="icon" />
          <p className="text-lg md:text-2xl font-semibold">Sub Details</p>
        </div>
        <div>
          <Link to="/company/users/subuser">
            <button className="btn min-w-max w-28 btn-blue md:bg-[var(--blue100)] text-[var(--white100)] cursor-pointer">
              Create
            </button>
          </Link>
        </div>
      </Headers>
      <Card title="johnmalinto@gmail.com">
        <Col xs={24} sm={17} md={10}>
          <Card style={{ width: "100%", height: 208, marginBottom: 39 }}>
            <hr />
            <div className="flex gap-6 items-center">
              <p className="font-semibold text-base text-[var(--grey400)]">
                Name:
              </p>
              <p className="font-bold text-black text-base">John Johnson</p>
            </div>
            <hr />
            <div className="flex gap-6 items-center">
              <p className="font-semibold text-base text-[var(--grey400)]">
                Role:
              </p>
              <p className="font-bold text-black text-base">Sub user</p>
            </div>
            <hr />
            <div className="flex gap-6 items-center">
              <p className="font-semibold text-base text-[var(--grey400)]">
                Date Created:
              </p>
              <p className="font-bold text-black text-base">
                Fri, Feb 21, 2022
              </p>
            </div>
            <hr />
          </Card>
        </Col>

        <PermissionBox />

        <SubdetailButtons>
          <button className="btn bg-[var(--red600)] text-[var(--white50)]">
            DE-ACTIVATE
          </button>
          <button className="btn btn-blue">RE-ACTIVATE</button>
          <Link to="/company/users/subuser">
            <button className="btn btn-blue">EDIT USERS</button>
          </Link>
        </SubdetailButtons>
      </Card>
    </SubdetailContainer>
  );
}
