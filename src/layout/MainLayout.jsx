import { Inputs, Formulas, Outputs } from "../sections";

function MainLayout() {
  return (
    <div className="bg-white h-[50vh] shadow-xl rounded-md">
      <div className="flex">
        <Inputs />
        <Formulas />
        <Outputs />
      </div>
    </div>
  );
}

export default MainLayout;
