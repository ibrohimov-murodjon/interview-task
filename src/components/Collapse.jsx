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

// import { useState } from "react";
// import { useQuery } from "@tanstack/react-query";
// import Tag from "./Tag";

// function Collapse() {
//   const API = "https://652f91320b8d8ddac0b2b62b.mockapi.io/autocomplete";

//   const [selectedProduct, setSelectedProduct] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   const [productName, setProductName] = useState("");

//   const getData = async () => {
//     const response = await fetch(API);
//     const data = await response.json();
//     return data;
//   };
//   const { data: inputData } = useQuery({
//     queryKey: ["data"],
//     queryFn: getData,
//   });

//   const handleSearch = (searchTerm) => {
//     if (searchTerm === "") {
//       setFilteredProducts([]);
//     } else {
//       const filtered = inputData.filter((product) =>
//         product.name.toLowerCase().includes(searchTerm.toLowerCase())
//       );
//       console.log(filtered);
//       setFilteredProducts(filtered);
//     }
//   };

//   const selectProduct = (product) => {
//     setSelectedProduct([...selectedProduct, product]);
//     setProductName(product.name);
//     setFilteredProducts([]);
//   };

//   const handleKeyDown = (event) => {
//     if (event.key === "Escape") {
//       setProductName("");
//       setFilteredProducts([]);
//     }
//   };

//   console.log(selectedProduct);
//   return (
//     <div className="relative">
//       <div className="collapse rounded-md mt-4 border relative">
//         <input type="checkbox" />
//         <div className="collapse-title text-[14px] font-medium bg-[#E5E7EA]">
//           New Formula
//         </div>
//         <div className="collapse-title mt-8 text-xl">
//           <span>0</span>
//         </div>
//         <div className="collapse-content bg-white">
//           <label htmlFor="formula-input">Name</label>
//           <input
//             type="text"
//             className="input input-bordered rounded-md w-full !outline-none mt-4 border-b border-solid"
//             id="formula-input"
//             value={productName}
//             onChange={(e) => {
//               setProductName(e.target.value);
//               handleSearch(e.target.value);
//             }}
//             onKeyDown={handleKeyDown}
//           />
//         </div>
//         {selectedProduct.length > 0 && (
//           <ul className="selected-products">
//             {selectedProduct.map((product) => (
//               <li key={product.id}>
//                 <Tag text={product.name} />
//               </li>
//             ))}
//           </ul>
//         )}
//       </div>
//       {filteredProducts.length > 0 && (
//         <ul className="absolute top-[155px] left-4 w-full max-w-[330px] max-h-[300px] overflow-y-auto z-30 list-none border-2 backdrop-blur-md bg-white px-2 py-3 shadow-lg">
//           {filteredProducts.map((product) => (
//             <li
//               className="cursor-pointer border-b border-solid border-[#ddd]  relative rounded p-2 hover:bg-blue-300 flex items-center justify-between"
//               key={product.id}
//               onClick={() => selectProduct(product)}
//             >
//               <span>{product.name}</span>
//               <span className="font-mono text-[12px] text-gray-600">
//                 {product.category}
//               </span>
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// }

// export default Collapse;
