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

export const AccountContainer = styled.div`
  width: 100%;
  .ant-table-selection-col,
  .ant-table-selection-column {
    display: none;
  }

  .link {
    color: inherit !important;
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
    font-size: 0.625rem;
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

// payment status

export const PaymentStatusContainer = styled.div`
  white-space: nowrap;

  .ant-card .ant-card-body {
    @media (max-width: ${sizes.tablet}) {
      padding: 14px !important;
      font-size: 0.625rem !important;
    }
  }

  @media (max-width: ${sizes.tablet}) {
    button {
      font-size: 0.625rem !important;
      min-width: auto !important;
      width: 30%;
      padding: 0.25rem !important;
    }
  }

  @media (max-width: ${sizes.mobileM}) {
    button {
      font-size: 0.625rem !important;
      min-width: auto !important;
      width: 48%;
    }
  }
`;

export const AccountIdBox = styled.div`
  width: 50%;
  height: 19.9375rem;
  border-radius: 0.25rem;

  .id {
    border-bottom: 1px solid var(--ash50);
    padding: 0.875rem 0;
    margin-left: 0.875rem;
  }

  @media (max-width: ${sizes.mobileL}) {
    width: 95%;
    height: 17rem;
  }
`;

export const UploadImage = styled.div`
  cursor: pointer;
  background-color: var(--white300);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 7.6875rem;
  height: 7.6875rem;

  .uploadInput {
    color: transparent;
    background-color: transparent;
    cursor: pointer;
    width: 7.6875rem;
    height: 7.6875rem;
    border-radius: 50%;
    opacity: 0;
    z-index: 9;

    @media (max-width: ${sizes.tablet}) {
      width: 5rem;
      height: 5rem;
    }
  }

  .uploadedImage {
    position: absolute;
    width: 7.6875rem;
    height: 7.6875rem;
    border-radius: 50%;
    z-index: 1;

    @media (max-width: ${sizes.tablet}) {
      width: 5rem;
      height: 5rem;
    }
  }

  @media (max-width: ${sizes.tablet}) {
    width: 5rem;
    height: 5rem;
  }
`;

export const CustomerAccountInfo = styled.div`
  .customer-info {
    gap: 1.625rem;

    @media (max-width: ${sizes.mobileS}) {
      gap: 0.75rem;

      h3 {
        font-size: 10px !important;
      }
    }
  }
  .icon-signature {
    margin-top: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${sizes.tablet}) {
      margin-top: 0.875rem;
      align-items: flex-start;
    }
  }

  .icon {
    font-size: 8rem;

    @media (max-width: ${sizes.tablet}) {
      font-size: 4rem;
    }
  }

  .textarea {
    resize: none;
    display: flex;
    flex-direction: column;
  }

  textarea {
    outline: none;
    width: 95%;
    border-radius: 0.3125rem;
    padding-left: 0.6125rem;
  }
`;

// customer info
export const CustomerInfoContainer = styled.div`
  white-space: nowrap;
  .customer-info {
    border-bottom: 1px solid var(--ash50);
    @media (max-width: ${sizes.mobileL}) {
      font-size: 0.875rem !important;
    }
  }

  .ant-card .ant-card-body {
    padding-left: 24px !important;
    padding-right: 0 !important;
  }

  .customer-buttons {
    margin-right: 6%;
  }

  @media (max-width: ${sizes.tablet}) {
    button {
      font-size: 0.625rem !important;
      min-width: auto !important;
      width: 30%;
      padding: 0.25rem !important;
    }
  }

  @media (max-width: ${sizes.mobileM}) {
    button {
      font-size: 0.625rem !important;
      min-width: auto !important;
      width: 48%;
    }
  }

  .info-value {
    @media (max-width: ${sizes.mobileL}) {
      font-size: 0.875rem !important;
    }
  }

  .account-card {
    margin-top: 3.5rem;

    @media (max-width: ${sizes.tablet}) {
      margin-top: 2.1875rem;
    }
  }
`;

export const KinInfo = styled.div``;

export const PersonalDetails = styled.div``;

export const IDdetails = styled.div`
  .idbox {
    width: 50%;

    @media (max-width: ${sizes.mobileL}) {
      width: 95%;
    }
  }

  .id-icon {
    font-size: 10rem;

    @media (max-width: ${sizes.tablet}) {
      font-size: 5rem;
    }
  }

  .id-icon-sign {
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media (max-width: ${sizes.mobileL}) {
      margin-left: 2%;
    }
  }

  @media (max-width: ${sizes.mobileL}) {
    display: flex;
    flex-direction: column;
    align-items: flex-start !important;
    gap: 0.625rem;
  }
`;

export const AccountDetailsIdBox = styled.div`
  width: 50%;
  height: 25.875rem;
  border-radius: 0.25rem;

  .img-info {
    @media (max-width: ${sizes.mobileL}) {
      margin-left: 1rem !important;
    }
  }

  @media (max-width: ${sizes.mobileL}) {
    width: 95%;
  }
`;

export const UploadedIdImage = styled.div`
  cursor: pointer;
  background-color: var(--white300);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 7.6875rem;
  height: 7.6875rem;

  .uploadInput {
    color: transparent;
    background-color: transparent;
    cursor: pointer;
    width: 7.6875rem;
    height: 7.6875rem;
    border-radius: 50%;
    opacity: 0;
    z-index: 9;

    @media (max-width: ${sizes.tablet}) {
      width: 5rem;
      height: 5rem;
    }
  }

  .uploadedImage {
    position: absolute;
    width: 7.6875rem;
    height: 7.6875rem;
    border-radius: 50%;
    z-index: 1;

    @media (max-width: ${sizes.tablet}) {
      width: 5rem;
      height: 5rem;
    }
  }

  @media (max-width: ${sizes.tablet}) {
    width: 5rem;
    height: 5rem;
    margin-left: 2% !important;
  }
`;
