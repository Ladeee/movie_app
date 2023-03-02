import styled from "styled-components";
import { sizes } from "../../utils/screenSizes";

export const Headers = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 2.4375rem;
  margin-bottom: 1.75rem;
  margin-right: 1.5rem;

  h2,
  .icon {
    font-size: 1.5625rem;
    @media (max-width: ${sizes.mobileL}) {
      display: none;
    }
  }
`;

// user management
export const UsersContainer = styled.div`
  .ant-table-selection-col,
  .ant-table-selection-column {
    display: none;
  }

  .link {
    color: inherit !important;
  }
`;

export const UsersWrapper = styled.div`
  display: flex;
  align-items: baseline;
  gap: 1.25rem;

  @media (max-width: ${sizes.tablet}) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const TableandFilter = styled.div`
  width: 70%;
  background: var(--white50);
  border: 1px solid var(--ash50);
  border-radius: 0.625rem;

  .csv {
    justify-content: center;
    border-bottom: 1px solid var(--grey300);
  }

  #button {
    @media (max-width: ${sizes.tablet}) {
      min-width: 5rem !important;
      font-size: 0.625rem;
    }
  }

  span {
    @media (max-width: ${sizes.mobileS}) {
      width: 8.9rem !important;
    }
  }

  .table {
    width: 100%;
    display: flex !important;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${sizes.tablet}) {
      align-items: initial;
      overflow-x: auto;
    }
  }

  @media (max-width: ${sizes.tablet}) {
    width: 100%;
  }
`;

export const TableDisplay = styled.table`
  width: 95%;
  margin-top: 3.5rem;
  .ant-table-thead > tr > th {
    background: var(--ash100);
    font-size: 1rem;
    font-weight: 700;
    line-height: 1rem;
  }

  .ant-table-wrapper
    .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(
      .ant-table-row-expand-icon-cell
    ):not([colspan])::before {
    display: none;
  }
`;

export const ActivitiesLog = styled.aside`
  width: 30%;

  @media (max-width: ${sizes.tablet}) {
    width: 65%;
    position: relative;
  }

  @media (max-width: ${sizes.mobileM}) {
    width: 100%;
  }
`;

export const Activities = styled.aside`
  .ant-card .ant-card-body {
    padding: 14px;
  }

  .even {
    background-color: var(--white50);
  }

  .odd {
    background-color: var(--white200);
  }

  @media (max-width: ${sizes.tablet}) {
    width: 100%;
    position: absolute;
    z-index: 1;
    background-color: var(--white300);
  }
`;

// sub user

export const SubuserContainer = styled.div``;

export const SubuserWrapper = styled.div`
  border: 1px solid var(--grey200);
  max-width: 50%;
  border-radius: 0.625rem;

  .heading {
    border-bottom: 1px solid var(--grey300);
    width: 100%;

    h2 {
      margin-left: 8%;

      @media (max-width: ${sizes.tablet}) {
        font-size: 1rem !important;
        padding-bottom: 0.625rem !important;
      }
    }
  }

  #subUserform {
    margin-left: 8%;
  }

  .ant-col-offset-8 {
    margin-inline-start: 0 !important;
  }

  @media (max-width: ${sizes.tabletL}) {
    max-width: 70%;

    Input,
    .ant-input-affix-wrapper {
      width: 50vw !important;
    }

    .btn {
      width: 50vw !important;
      font-size: 0.75rem;

      @media (max-width: ${sizes.mobileM}) {
        font-size: 0.625rem;
      }
    }
  }

  @media (max-width: ${sizes.tablet}) {
    max-width: 85%;
  }
`;

// sub detail

export const SubdetailContainer = styled.div`
  hr {
    border-color: var(--ash50);
    margin: 0.9375rem 0;
  }

  p {
    @media (max-width: ${sizes.mobileS}) {
      font-size: 0.75rem !important;
    }
  }
`;

export const SubdetailButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 18%;
  margin-top: 3.125rem;

  @media (max-width: ${sizes.tablet}) {
    gap: 8%;
  }

  .btn {
    @media (max-width: ${sizes.mobileL}) {
      min-width: 6.25rem;
      font-size: 0.75rem;
    }

    @media (max-width: ${sizes.mobileM}) {
      min-width: 3rem;
      font-size: 0.5rem;
      padding: 0.5rem;
    }
  }
`;
