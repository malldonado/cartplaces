import React, { useState, useEffect } from "react";
import { IoIosArrowForward, IoIosArrowBack  } from "react-icons/io";
import Image from '../../images/index/1.png'

function Categories() {

  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8000/categories");
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        const jsonData = await response.json();
        setData(jsonData);
        console.log(jsonData)
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>Carregando...</div>;
  }

  if (error) {
    return <div>Erro: {error.message}</div>;
  }

  return (
    <div className="max-w-[1200px] mx-auto mt-[70px]">
      <div className="flex w-full">
        <h2 className="font-bold text-[30px] w-[80%]">Main categories</h2>
        <div className="flex">
          <p className="flex items-center mr-4 text-[#2144e1] font-bold">View All<IoIosArrowForward className="text-[20px]"/></p>
          <button className="bg-[#2144e1] w-[50px] h-[50px] rounded-full mr-3">
            <IoIosArrowBack className="text-white text-[30px] m-auto" />
          </button>
          <button className="bg-[#2144e1] w-[50px] h-[50px] rounded-full">
            <IoIosArrowForward className="text-white text-[30px] m-auto" />
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center h-auto mt-10">
       <div className="cursor-pointer relative">
         {data.map(datas => (
          <div key={datas._id}>
            <img className="h-[150px]" src={datas.src} alt="" />
            <p className="text-center text-[16px] font-bold mt-2">{datas.name}</p>
          </div>
        ))}
       </div>
      </div>
    </div>
  );
}

export default Categories;
