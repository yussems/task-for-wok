"use client";
import Image from "next/image";
import { useQuery, gql } from "@apollo/client";
import CustomError from "./components/CustomError";
import CustomLoading from "./components/CustomLoading";

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

export default function Home() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);
  console.log(data);

  if (loading) return <CustomLoading />;
  if (error) return <CustomError />;

  return (
    <main className="my-2">
      <div className="flex flex-wrap gap-2">
        {data.countries.map((item) => {
          const { code, currency, languages, name, phone } = item;
          return (
            <div
              key={phone}
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
    </main>
  );
}
