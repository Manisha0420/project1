import React from "react";
// import { Outlet, useNavigate } from "react-router";
import { useNavigate } from "react-router";

const Products = () => {
  const navigate = useNavigate();
 
  return (
    <div className="  px-15 w-[100%]">
      <div className="w-[42%] flex justify-between gap-5 border px-5 py-4 m-2">
        <h1 className="text-3xl  font-bold">Product 1</h1>
        <div className="flex gap-3">
          <button 
            onClick={()=>navigate("/details")}
            className="px-4 py-2 bg-red-500 text-white">
            Description
          </button>
          <button
            onClick={()=>navigate('/description/Product 1')}
            className="px-4 py-2 bg-red-500 text-white"
          >
            See Details
          </button>
        </div>
      </div>

       <div className="w-[42%] flex justify-between gap-5 border px-5 py-4 m-2">
        <h1 className="text-3xl  font-bold">Product 2</h1>
        <div className="flex gap-3">
          <button 
            onClick={()=>navigate("/details")}
            className="px-4 py-2 bg-red-500 text-white">
            Description
          </button>
          <button
            onClick={()=>navigate("/description/Product 2")}
            className="px-4 py-2 bg-red-500 text-white"
          >
            See Details
          </button>
        </div>
      </div>
{/* 
      <Outlet /> */}
    </div>
  );
};

export default Products;
