// ---------------- import internal dependencies -----------------
import { ReactComponent as FilterIcon } from "../../assets/svg/filter.svg";

function Filter() {
  return (
    <>
      <button className="btn btn-tran text-sm font-semibold justify-between flex items-center">
        Filter <FilterIcon />
      </button>
    </>
  );
}

export default Filter;
