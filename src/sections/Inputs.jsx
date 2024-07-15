import { GrDownload } from "react-icons/gr";
import { GoPlus } from "react-icons/go";

function Inputs() {
  return (
    <div className="w-[25%]">
      <div className="flex flex-col border-r border-t border-b border-solid">
        <div className="flex flex-row items-center px-6 py-4">
          <GrDownload />
          <span className="ml-2 ">Inputs (2)</span>
          <button className="btn block btn-primary p-0 min-h-[2rem] h-0 ml-auto">
            <GoPlus color="#fff" size={28} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Inputs;
