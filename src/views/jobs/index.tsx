// ------------- import external dependencies ------------
import styled from "styled-components";
import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@reach/tabs";

// --------------- import internal dependencies ----------------
import LayoutHeading from "../../components/LayoutHeading";
import Filter from "../../components/Filter";
import TableWrapper from "../../components/TableWrapper";

function JobsOverview() {
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
          <Tabs>
            <TabList className="gap-5 flex">
              <StyledTab className="btn">ALL</StyledTab>
              <StyledTab className="btn">PENDING</StyledTab>
              <StyledTab className="btn">ACCEPTED</StyledTab>
              <StyledTab className="btn">ONGOING</StyledTab>
              <StyledTab className="btn">TIME-OUT</StyledTab>
              <StyledTab className="btn">COMPLETED</StyledTab>
              <StyledTab className="btn">FAILED</StyledTab>
              <StyledTab className="btn">REJECTED</StyledTab>
            </TabList>

            <TabPanels className="my-7">
              {/* -------- all job status table -------- */}
              <TabPanel>
                <TableWrapper>
                  <thead>
                    <tr>
                      <th>Job ID</th>
                      <th>Date Created</th>
                      <th>Entity Verified</th>
                      <th>Job Type</th>
                      <th>Created By</th>
                      <th>Job Status</th>
                      <th>Verification Status</th>
                      <th>Payment Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>210</td>
                      <td>23 - 08 - 2021</td>
                      <td>NIN</td>
                      <td>ID Verification</td>
                      <td>Paul Kagame</td>
                      <td>Completed</td>
                      <td>Verified</td>
                      <td>Paid</td>
                    </tr>
                  </tbody>
                </TableWrapper>
              </TabPanel>

              {/* -------- pending job tables -------- */}
              <TabPanel>
                <TableWrapper>
                  <thead>
                    <tr>
                      <th>
                        <div>
                          <span id="job" className="hidden">
                            Job Checkbox
                          </span>
                          <input type="checkbox" aria-labelledby="job" />
                        </div>
                      </th>
                      <th>Job ID</th>
                      <th>Date Created</th>
                      <th>Entity Verified</th>
                      <th>Job Type</th>
                      <th>Created By</th>
                      <th>Status</th>
                      <th>TAT(hours)</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>
                          <span id="job-1" className="hidden">
                            Job Checkbox
                          </span>
                          <input type="checkbox" aria-labelledby="job-1" />
                        </div>
                      </td>
                      <td>210</td>
                      <td>23 - 08 - 2021</td>
                      <td>NIN</td>
                      <td>ID Verification</td>
                      <td>Paul Kagame</td>
                      <td>Completed</td>
                      <td>24 </td>
                      <td>
                        <button className="btn btn-blue-tran">Edit</button>
                      </td>
                    </tr>
                  </tbody>
                </TableWrapper>
              </TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>
              <TabPanel></TabPanel>

              {/* -------- all completed jobs table -------- */}
              <TabPanel>
                <TableWrapper>
                  <thead>
                    <tr>
                      <th>Job ID</th>
                      <th>Date Created</th>
                      <th>Entity Verified</th>
                      <th>Job Type</th>
                      <th>Created By</th>
                      <th>Job Status</th>
                      <th>Verification Status</th>
                      <th>Payment Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>210</td>
                      <td>23 - 08 - 2021</td>
                      <td>NIN</td>
                      <td>ID Verification</td>
                      <td>Paul Kagame</td>
                      <td>Completed</td>
                      <td>Verified</td>
                      <td>Paid</td>
                    </tr>
                  </tbody>
                </TableWrapper>
              </TabPanel>
              <TabPanel></TabPanel>

              {/* -------- rejected job tables -------- */}
              <TabPanel>
                <TableWrapper>
                  <thead>
                    <tr>
                      <th>
                        <div>
                          <span id="job" className="hidden">
                            Job Checkbox
                          </span>
                          <input type="checkbox" aria-labelledby="job" />
                        </div>
                      </th>
                      <th>Job ID</th>
                      <th>Date Created</th>
                      <th>Entity Verified</th>
                      <th>Job Type</th>
                      <th>Created By</th>
                      <th>Status</th>
                      <th>TAT(hours)</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <div>
                          <span id="job-1" className="hidden">
                            Job Checkbox
                          </span>
                          <input type="checkbox" aria-labelledby="job-1" />
                        </div>
                      </td>
                      <td>210</td>
                      <td>23 - 08 - 2021</td>
                      <td>NIN</td>
                      <td>ID Verification</td>
                      <td>Paul Kagame</td>
                      <td>Completed</td>
                      <td>24 </td>
                      <td>
                        <div className="flex gap-5">
                          <button className="btn btn-blue-tran">
                            Re-Assign job
                          </button>
                          <button className="btn btn-blue-tran">Edit</button>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </TableWrapper>
              </TabPanel>
            </TabPanels>
          </Tabs>
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

const StyledTab = styled(Tab)`
  min-width: 95px;
  min-height: 36px;
  background: transparent;
  border: 1px solid var(--purple300);
  color: var(--purple300);
  font-weight: 500;

  &[data-selected] {
    background: var(--purple300);
    color: var(--white50);
  }
`;
