// ------------- import external dependencies ------------
import { useState } from "react";
import styled from "styled-components";
import { Table, Dropdown, Space, Select } from "antd";
import { DownOutlined } from "@ant-design/icons";

// --------------- import internal dependencies ----------------
import LayoutHeading from "../../components/LayoutHeading";
import Filter from "../../components/Filter";
import { allJobs, pendingJobs } from "../../utils/data";

const columns = [
  {
    title: "Job ID",
    dataIndex: "id",
  },
  {
    title: "Date Created",
    dataIndex: "date",
  },
  {
    title: "Entity to be verified",
    dataIndex: "entity",
  },
  {
    title: "Job Type",
    dataIndex: "type",
  },
  {
    title: "Created By",
    dataIndex: "created",
  },
  {
    title: "Job Status",
    dataIndex: "status",
  },
  {
    title: "Verification Status",
    dataIndex: "verificationStatus",
  },
  {
    title: "Payment Status",
    dataIndex: "paymentStatus",
  },
];

const pendingColumns = [
  {
    title: "Job ID",
    dataIndex: "id",
  },
  {
    title: "Date Created",
    dataIndex: "date",
  },
  {
    title: "Entity to be verified",
    dataIndex: "entity",
  },
  {
    title: "Job Type",
    dataIndex: "type",
  },
  {
    title: "Created By",
    dataIndex: "created",
  },
  {
    title: "Job Status",
    dataIndex: "status",
  },
  {
    title: "TAT (hours)",
    dataIndex: "hours",
  },
  {
    title: "",
    dataIndex: "",
    render: (text: string) => (
      <button className="btn btn-blue-tran">Edit</button>
    ),
  },
];

const items = [
  {
    key: "1",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Re-Assign job
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a target="_blank" rel="noopener noreferrer" href="#">
        Edit job
      </a>
    ),
  },
];

const rejectedColumns = [
  {
    title: "Job ID",
    dataIndex: "id",
  },
  {
    title: "Date Created",
    dataIndex: "date",
  },
  {
    title: "Entity to be verified",
    dataIndex: "entity",
  },
  {
    title: "Job Type",
    dataIndex: "type",
  },
  {
    title: "Created By",
    dataIndex: "created",
  },
  {
    title: "Job Status",
    dataIndex: "status",
  },

  {
    title: "",
    dataIndex: "",
    render: (text: string) => (
      <Dropdown menu={{ items }}>
        <button className="btn btn-blue">
          <Space>
            Edit
            <DownOutlined />
          </Space>
        </button>
      </Dropdown>
    ),
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys: React.Key[], selectedRows: any[]) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: (record: any) => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name,
  }),
};

function JobsOverview() {
  // ------- component state managers --------
  const [filter, setfilter] = useState("all");
  return (
    <>
      <LayoutHeading heading="Jobs Overview">
        <button className="btn btn-blue">Create Job</button>
      </LayoutHeading>

      {/* -------- jobs metric summary -------- */}
      <ContainerWrapper className="mt-8">
        <div className="border-0 border-solid border-b border-ash-50 py-5 pl-5">
          <h2 className="font-inter font-bold text-sm">Metrics</h2>
        </div>
        <div className="p-5 grid md:grid-cols-4 grid-cols-1 gap-6">
          <MetricWraper className="bg-[#e3f5ff]">
            <span className="title">Total Jobs</span>
            <span className="metric-count">12,400</span>
          </MetricWraper>
          <MetricWraper className="bg-[#e5ecf6]">
            <span className="title">Pending Jobs</span>
            <span className="metric-count">11,400</span>
          </MetricWraper>
          <MetricWraper className="bg-[#adffce]">
            <span className="title">Verified Jobs</span>
            <span className="metric-count">11,400</span>
          </MetricWraper>
          <MetricWraper className="bg-[#ffb6b6]">
            <span className="title">Timed-Out </span>
            <span className="metric-count">400</span>
          </MetricWraper>
        </div>
      </ContainerWrapper>

      {/* ------- jobs status tables -------- */}
      <ContainerWrapper className="mt-8">
        <div className="border-0 border-solid border-b border-ash-50 py-5 pr-5 flex justify-end items-center gap-6">
          <button className="btn btn-blue">CSV Download</button>
          <Filter />
        </div>
        <div className="mt-8 px-5">
          <div className="flex mb-5 justify-end">
            <Select
              value={filter}
              className="min-w-[120px]"
              onChange={(val) => setfilter(val)}
              options={[
                { value: "all", label: "All" },
                { value: "pending", label: "Pending" },
                { value: "accepted", label: "Accepted" },
                { value: "ongoing", label: "ONGOING" },
                { value: "timeout", label: "TIME-OUT" },
                { value: "completed", label: "COMPLETED" },
                { value: "failed", label: "FAILED" },
                { value: "rejected", label: "REJECTED" },
              ]}
            />
          </div>

          {/* -------- all job status table -------- */}

          {filter === "all" && (
            <Table
              columns={columns}
              dataSource={allJobs}
              pagination={{
                showSizeChanger: true,
                pageSize: 10,
                defaultCurrent: 1,
                total: 10,
              }}
            />
          )}

          {/* -------- pending job tables -------- */}

          {filter === "pending" && (
            <Table
              rowSelection={{
                type: "checkbox",
                ...rowSelection,
              }}
              columns={pendingColumns}
              dataSource={pendingJobs}
              pagination={{
                showSizeChanger: true,
                pageSize: 10,
                defaultCurrent: 1,
                total: 10,
              }}
            />
          )}

          {filter === "accepted" && (
            <Table
              columns={columns}
              dataSource={allJobs}
              pagination={{
                showSizeChanger: true,
                pageSize: 10,
                defaultCurrent: 1,
                total: 10,
              }}
            />
          )}

          {filter === "ongoing" && (
            <Table
              columns={columns}
              dataSource={allJobs}
              pagination={{
                showSizeChanger: true,
                pageSize: 10,
                defaultCurrent: 1,
                total: 10,
              }}
            />
          )}

          {filter === "timeout" && (
            <Table
              columns={columns}
              dataSource={allJobs}
              pagination={{
                showSizeChanger: true,
                pageSize: 10,
                defaultCurrent: 1,
                total: 10,
              }}
            />
          )}

          {/* -------- all completed jobs table -------- */}

          {filter === "completed" && (
            <Table
              columns={columns}
              dataSource={allJobs}
              pagination={{
                showSizeChanger: true,
                pageSize: 10,
                defaultCurrent: 1,
                total: 10,
              }}
            />
          )}

          {filter === "failed" && (
            <Table
              columns={columns}
              dataSource={allJobs}
              pagination={{
                showSizeChanger: true,
                pageSize: 10,
                defaultCurrent: 1,
                total: 10,
              }}
            />
          )}

          {/* -------- rejected job tables -------- */}

          {filter === "rejected" && (
            <Table
              rowSelection={{
                type: "checkbox",
                ...rowSelection,
              }}
              columns={rejectedColumns}
              dataSource={pendingJobs}
              pagination={{
                showSizeChanger: true,
                pageSize: 10,
                defaultCurrent: 1,
                total: 10,
              }}
            />
          )}
        </div>
      </ContainerWrapper>
    </>
  );
}

export default JobsOverview;

const ContainerWrapper = styled.section`
  background: var(--white50);
  border-radius: 5px;
  border: 1px solid var(--ash50);
`;

const MetricWraper = styled.div`
  min-height: 100px;
  border-radius: 16px;
  padding: 1.2rem;

  & > span {
    font-family: "Inter";
    font-weight: 600;
    font-weight: 0.875rem;
    display: block;

    &:last-child {
      font-size: 1.5rem;
    }
  }
`;

// const StyledTab = styled(Tab)`
//   min-width: 95px;
//   min-height: 36px;
//   background: transparent;
//   border: 1px solid var(--purple300);
//   color: var(--purple300);
//   font-weight: 500;

//   &[data-selected] {
//     background: var(--purple300);
//     color: var(--white50);
//   }
// `;
