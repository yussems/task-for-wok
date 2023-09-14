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
        native
      }
      name
      native
      phone
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <CustomLoading />;
  if (error) return <CustomError />;

  return <main className="my-2">{JSON.stringify(data,2, null)}</main>;
}
