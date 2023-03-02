// import external dependencies
import { Card, Col, Switch } from "antd";

// import internal dependencies
import styled from "styled-components";

// function for the switch component
export default function PermissionBox() {
  const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <PermissionBoxWrapper>
      <Col xs={24} sm={22} md={15}>
        <Card title="Permission" style={{ width: "100%" }}>
          <div className="permissionlists pt-0">
            <p className="text-sm md:text-xl lg:text-base font-semibold text-black">
              Dashboard
            </p>
            <span>
              <Switch defaultChecked={false} onChange={onChange} />
            </span>
          </div>
          <div className="permissionlists">
            <p className="text-sm md:text-xl lg:text-base font-semibold text-black">
              Insights
            </p>
            <span>
              <Switch defaultChecked={false} onChange={onChange} />
            </span>
          </div>
          <div className="permissionlists">
            <p className="text-sm md:text-xl lg:text-base font-semibold text-black">
              TAT
            </p>
            <span>
              <Switch defaultChecked={false} onChange={onChange} />
            </span>
          </div>
          <div className="permissionlists">
            <p className="text-sm md:text-xl lg:text-base font-semibold text-black">
              Account Opening
            </p>
            <span>
              <Switch defaultChecked={false} onChange={onChange} />
            </span>
          </div>
          <div className="permissionlists">
            <p className="text-sm md:text-xl lg:text-base font-semibold text-black">
              User Management
            </p>
            <span>
              <Switch defaultChecked={false} onChange={onChange} />
            </span>
          </div>
          <div className="permissionlists">
            <p className="text-sm md:text-xl lg:text-base font-semibold text-black">
              Create Jobs
            </p>
            <span>
              <Switch defaultChecked={false} onChange={onChange} style={{}} />
            </span>
          </div>
          <div className="permissionlists">
            <p className="text-sm md:text-xl lg:text-base font-semibold text-black">
              View Transactions
            </p>
            <span>
              <Switch defaultChecked={false} onChange={onChange} />
            </span>
          </div>
        </Card>
      </Col>
    </PermissionBoxWrapper>
  );
}

// styling
const PermissionBoxWrapper = styled.div`
  .permissionlists {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid var(--ash50);
    padding-top: 1.5rem;
    padding-bottom: 1.625rem;
  }
`;
