"use client";

import Image from "next/image";
import logo from "@/public/websitelogo.svg";

import React from "react";
import Form from "./form";
import Results from "./result";

const StartupBooster: React.FC = () => {
  const LOCAL_DEV = false;
  const HOST_URL: string = LOCAL_DEV
    ? "http://localhost:8002"
    : "https://startup_booster-1-o7910799.deta.app";
  // endpoint_1 has no embeded db
  const ENDPOINT_2: string = "api/v2/businesses"; // add '/' at the end give cors error
  const ENDPOINT_1: string = "api/v1/business"; // add '/' at the end give cors error
  const CHARCTER_LIMIT: number = 22;

  const [prompt, setPrompt] = React.useState("");
  const [tagline, settagline] = React.useState("");
  const [keywords, setkeywords] = React.useState([]);
  const [hasResult, setHasResult] = React.useState(false);
  const [isfetchingResult, setIsfetchingResult] = React.useState(false);

  ////////////////////////// get the data form the endpoints //////////////////////
  const onReadData = async () => {
    try {
      setIsfetchingResult(true);
      const response = await fetch(`${HOST_URL}/${ENDPOINT_2}`);
      const data = await response.json();
      onReceiveResult(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  ////////////////////////// post new data to the endpoints //////////////////////
  const onSubmit = async () => {
    console.log(`Submitting: ${prompt}`);
    setIsfetchingResult(true);
    const data = {
      name: prompt,
    };

    // Create a post request options object
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };

    try {
      const response = await fetch(`${HOST_URL}/${ENDPOINT_2}`, options);
      const data = await response.json();
      console.log(data);
      onReceiveResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  ////////////////////////// GET new data from the endpoints //////////////////////
  const onSubmit_V1_NO_DB = async () => {
    setIsfetchingResult(true);
    try {
      const response = await fetch(
        `${HOST_URL}/${ENDPOINT_1}?prompt=${prompt}`
      );
      const data = await response.json();
      console.log(data);
      onReceiveResult(data);
    } catch (error) {
      console.error(error);
    }
  };

  ////////////////////////// on response from the endpoint //////////////////////
  const onReceiveResult = (data: any) => {
    settagline(data.snippet);
    setkeywords(data.keywords);
    setHasResult(true);
  };

  ////////////////////////// back button handling //////////////////////
  const onReset = () => {
    setHasResult(false);
    setPrompt("");
    setIsfetchingResult(false);
  };

  ////////////////////////// condtioning with server result //////////////////////
  let displyedElement = null;
  displyedElement = hasResult ? (
    <Results
      tagline={tagline}
      keywords={keywords}
      onBackClick={onReset}
      prompt={prompt}
    />
  ) : (
    <Form
      pormpt={prompt}
      setPrompt={setPrompt}
      onSubmit={onSubmit_V1_NO_DB}
      onReadData={onReadData}
      isFetchingResult={isfetchingResult}
      characterLimit={CHARCTER_LIMIT}
    />
  );

  const gradientTextStyle =
    "text-white text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600 font-light w-fit mx-auto";
  return (
    <div className="h-screen flex">
      <div className="max-w-md m-auto p-2">
        <div className="bg-slate-800  p-6 rounded-md text-white">
          <div className="text-center my-6">
            <Image
              src={logo}
              width={42}
              height={42}
              alt="website logo"
              className="mx-auto"
            />
            <h1 className={gradientTextStyle + " text-3xl"}>
              Stratup Booster{" "}
              <span className="text-sm rounded-md bg-red-500 p-1">ALPHA</span>
            </h1>
            <div className={gradientTextStyle}>Your AI branding Assistant</div>
          </div>

          {displyedElement}
        </div>
      </div>
    </div>
  );
};

export default StartupBooster;
