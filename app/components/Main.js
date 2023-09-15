"use client";
import React, { useState } from "react";
import Navbar from "./Navbar";
import Country from "./Country";

const Main = () => {
  const [currency, setCurrency] = useState("ALLCURREN");
  const [language, setLanguage] = useState("");
  console.log(currency,language);

  
  return (
    <>
      <Navbar setCurrency={setCurrency} setLanguage={setLanguage} />
      <main className="my-2">
        <Country currency={currency} language={language} />
      </main>
    </>
  );
};

export default Main;
