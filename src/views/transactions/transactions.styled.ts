import styled from "styled-components";
import { sizes } from "../../utils/screenSizes";

export const Headers = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
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

  @media (max-width: ${sizes.tablet}) {
    width: 100%;
    display: flex !important;
    gap: 1rem;
    align-items: center;
    overflow-x: auto;
    scrollbar-width: none; /* hide scrollbar for Firefox */
    -ms-overflow-style: none; /* hide scrollbar for IE and Edge */
    ::-webkit-scrollbar {
      display: none; /* hide scrollbar for Chrome, Safari and Opera */
    }
  }
`;

export const TransactionsContainer = styled.div`
  width: 100%;

  .table .ant-table-thead > tr > th {
    font-size: 0.875rem !important;
  }

  .table .ant-table-tbody > tr > td {
    font-size: 1rem !important;
  }

  .table .ant-table-wrapper .ant-table-thead > tr > th,
  .ant-table-wrapper tfoot > tr > td {
    padding: 1.25rem 0.75rem !important;
  }

  .link {
    color: inherit !important;
  }

  width: 100%;
  .ant-table-selection-col,
  .ant-table-selection-column {
    display: none;
  }

  .wallet-balance {
    width: 17.75rem;
    height: 5.6875rem;
    border-radius: 0.625rem;

    @media (max-width: ${sizes.tablet}) {
      width: 9rem;
      height: 5rem;
      font-size: 0.75rem !important;
    }
  }

  #history-wallet {
    @media (max-width: ${sizes.tablet}) {
      width: 14rem;
    }
  }
`;

export const TableBox = styled.div`
  width: 100%;
  background: var(--white50);
  border: 1px solid var(--ash50);
  border-radius: 0.625rem;

  .table {
    width: 100%;
  }

  .ant-table-wrapper .ant-table-pagination {
    flex-wrap: nowrap !important;
  }

  .ant-card-bordered {
    @media (max-width: ${sizes.tablet}) {
      width: max-content !important;
    }
  }

  @media (max-width: ${sizes.tablet}) {
    width: 100%;
    display: flex !important;
    flex-direction: column;
    align-items: center;
    align-items: initial;
    overflow-x: auto;
  }
`;

export const TableDisplay = styled.div`
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

// transaction details
export const TransactionDetailsContainer = styled.div`
  white-space: nowrap;

  .ant-card .ant-card-body {
    padding-right: 0 !important;
  }

  .history-card {
    width: 40%;

    .history-details {
      border-bottom: 1px solid var(--ash50);
      padding: 0.75rem 0;
    }

    @media (max-width: ${sizes.tablet}) {
    }

    @media (max-width: ${sizes.tablet}) {
      width: 100%;
    }
  }

  .history-btn {
    margin-top: 2.125rem;

    button {
      @media (max-width: ${sizes.mobileM}) {
        min-width: auto;
        width: auto;
        padding: 0 1.5625rem;
      }
    }
  }
`;

// invoice
export const InvoiceContainer = styled.div`
  white-space: nowrap;
  .history-img {
    width: 9.4375rem;
    height: 4.1875rem;
    margin-top: 1rem;
    object-fit: cover;
  }

  .ant-card .ant-card-body {
    padding-right: 0 !important;

    @media (max-width: ${sizes.mobileL}) {
      padding-left: 0.625rem !important;
    }
  }
`;

export const HistoryBox = styled.div`
  width: 50%;

  .history-details {
    border-bottom: 1px solid var(--ash50);
    padding: 0.75rem 0;
  }

  @media (max-width: ${sizes.tablet}) {
    width: 100%;
  }
`;

export const JobDetails = styled.div`
  width: 90%;
  margin-top: 1.375rem;
  padding-bottom: 8.125rem;

  .row {
    flex: 1;
    border-bottom: 1px solid black;
    padding-bottom: 3.5rem;
    margin: 0 2.75rem;

    @media (max-width: ${sizes.tablet}) {
      p {
        font-size: 0.75rem !important;
      }

      margin: 0 0.75rem;
    }
  }

  .header {
    padding: 0 2.75rem;

    @media (max-width: ${sizes.tablet}) {
      p {
        font-size: 0.75rem !important;
      }
      padding: 0 0.75rem;
    }
  }

  .numbers {
    flex: 0.07;

    @media (max-width: ${sizes.mobileM}) {
      p {
        font-size: 0.7rem !important;
      }
    }
  }

  .details {
    flex: 0.33;

    @media (max-width: ${sizes.mobileM}) {
      p {
        font-size: 0.7rem !important;
      }
    }
    flex: 0.38;
  }

  .quantity {
    flex: 0.2;

    @media (max-width: ${sizes.mobileM}) {
      p {
        font-size: 0.7rem !important;
      }
    }
    flex: 0.2;
  }

  .unit {
    flex: 0.2;

    @media (max-width: ${sizes.mobileM}) {
      p {
        font-size: 0.7rem !important;
      }
    }
    flex: 0.2;
  }

  .cost {
    flex: 0.2;
    @media (max-width: ${sizes.mobileM}) {
      p {
        font-size: 0.7rem !important;
      }
      flex: 0.1;
    }
  }

  .account-row {
    margin-left: 2.75rem;
    font-weight: 700;
    font-size: 1rem;
    line-height: 1.125rem;

    @media (max-width: ${sizes.tablet}) {
      margin-left: 0.75rem;
    }
  }

  @media (max-width: ${sizes.tablet}) {
    width: 100%;
  }
`;

export const AgentInfo = styled.div``;
