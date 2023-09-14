"use client";
import React, { useState } from "react";
import CustomLoading from "./CustomLoading";
import CustomError from "./CustomError";
import { useQuery, gql } from "@apollo/client";
import { getRandomColor } from "../utils/utils";

const GET_LOCATIONS = gql`
  query Query {
    countries {
      code
      currency
      languages {
        name
      }
      name
      native
      phone
    }
  }
`;

const Country = () => {
  const [selectedColor, setSelectedColor] = useState({});
  const [check, setCheck] = useState(false)
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <CustomLoading />;
  if (error) return <CustomError />;

  const handleClick = (name) => {
    const newColor = getRandomColor();
    setCheck(!check)
    setSelectedColor(() => ({ [name]: newColor }));
  };
  return (
    <div className="flex flex-wrap gap-2">
            <input className="hidden" type="checkbox" checked={check}  />
      
      {data.countries.map((item) => {
        const { code, currency, languages, name, phone } = item;
        return (
          <div
            onClick={() => handleClick(name)}
            style={{ backgroundColor: check && selectedColor[name] }}
            key={name}
            className="w-[240px] bg-violet-600 rounded-2xl p-2 text-white text-xl"
          >
            <h3 className="text-yellow-400">{name}</h3>
            <p>
              Code: <span>{code}</span>
            </p>
            <p>
              Currency: <span>{currency}</span>
            </p>
            <p>
              Language: <span>{languages[0]?.name}</span>
            </p>
            <p className="text-end text-gray-400">+{phone}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Country;
