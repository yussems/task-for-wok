import React, { useEffect, useState } from "react";
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

const Country = ({ currency, language }) => {
  const [selectedColor, setSelectedColor] = useState({});
  const [check, setCheck] = useState(false);
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <CustomLoading />;
  if (error) return <CustomError />;

  const newColor = getRandomColor();
  const handleClick = (name) => {
    setCheck(!check);
    setSelectedColor(() => ({ [name]: newColor }));
  };
  const filteredList = data.countries.filter(
    (item) =>
      item?.languages[0]?.name.toLowerCase() === language.toLowerCase() ||
      currency === item.currency
  );
  filteredList.filter((item) => item.currency === currency);
  console.log(filteredList[10]);

  const message = filteredList.length <= 0;
  
  

  return (
    <>
      {/* { message && <p>Arama kriterinizle uyuşan bir şey bulunamadı.</p> } */}
      <div className="flex flex-wrap gap-2 justify-center">
        <input className="hidden" type="checkbox" checked={check} />

        {(filteredList.length > 0 ? filteredList : data.countries).map(
          (item, index) => {
            const { code, currency, languages, name, phone } = item;

            return (
              <div
                onClick={() => handleClick(name)}
                style={{ backgroundColor: check && selectedColor[name] }}
                key={name}
                className="w-56 bg-violet-600 rounded-2xl p-2 text-white text-xl"
              >
                <h3 className="text-yellow-400">{name}</h3>
                <p>
                  Code: <span>{code}</span>
                </p>
                <p className="truncate">
                  Currency:  {currency}
                </p>
                <p>
                  Language: <span>{languages[0]?.name}</span>
                </p>
                <p className="text-end text-gray-400">+{phone}</p>
              </div>
            );
          }
        )}
      </div>
    </>
  );
};

export default Country;
