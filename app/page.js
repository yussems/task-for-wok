"use client";
import Image from "next/image";
import { useQuery, gql } from "@apollo/client";

const GET_LOCATIONS = gql`
  query ExampleQuery {
    countries {
      name
    }
  }
`;

export default function Home() {
  const { loading, error, data } = useQuery(GET_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return <div> {JSON.stringify( data)}</div>;
}
