import { TbMath } from "react-icons/tb";
import { GoPlus } from "react-icons/go";
import Collapse from "../components/Collapse";
function Formulas() {
  return (
    <div className="w-[50%]">
      <div className="flex flex-col border-r border-t border-b border-solid">
        <div className="flex flex-row items-center px-6 py-4">
          <TbMath size={24} />
          <span className="ml-2 ">Formulas (3)</span>
          <button className="btn block btn-primary p-0 min-h-[2rem] h-0 ml-auto">
            <GoPlus color="#fff" size={28} />
          </button>
        </div>
      </div>
      <Collapse />
    </div>
  );
}

export default Formulas;
