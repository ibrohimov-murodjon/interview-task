import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();

function Collapse() {
  const API = "https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete";

  const [selectedOptions, setSelectedOptions] = useState([]);

  const getData = async () => {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  };

  const {
    data: inputData,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  const options = inputData
    ? inputData.map((item) => ({
        value: item.id,
        label: item.name,
      }))
    : [];

  const handleChange = (selected) => {
    setSelectedOptions(selected);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading data</div>;

  return (
    <div className="relative">
      <div className="collapse rounded-md mt-4 border relative">
        <input type="checkbox" />
        <div className="collapse-title text-[14px] font-medium bg-[#E5E7EA]">
          New Formula
        </div>
        <div className="collapse-title mt-8 text-xl">
          <span>0</span>
        </div>
        <div className="collapse-content bg-white h-[22vh]">
          <Select
            closeMenuOnSelect={false}
            components={animatedComponents}
            isMulti
            options={options}
            value={selectedOptions}
            onChange={handleChange}
            className="z-[100]"
          />
        </div>
      </div>
    </div>
  );
}

export default Collapse;
