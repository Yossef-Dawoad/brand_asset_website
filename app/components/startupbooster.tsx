'use client';

import React from "react";
import Form from "./form";
import Results from "./result";
const StartupBooster: React.FC = () => {

    // const LOCAL_HOST_URL: string = 'http://localhost:8002';
    const HOST_URL: string = 'https://startup_booster-1-o7910799.deta.app';
    const ENDPOINT_2: string = "api/v2/businesses/1"; // add '/' at the end give cors error
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
            onResult(data);
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }

    ////////////////////////// post new data to the endpoints //////////////////////
    const onSubmit = async () => {
        console.log(`Submitting: ${prompt}`);
        setIsfetchingResult(true)
        const data = {
            name: prompt
        };

        // Create a post request options object
        const options = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data)
        }

        try {
            const response = await fetch(`${HOST_URL}/${ENDPOINT_2}`, options);
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }
    }


    ////////////////////////// on response from the endpoint //////////////////////
    const onResult = (data: any) => {
        settagline(data.snippet);
        setkeywords(data.keywords);
        setHasResult(true);
    }


    ////////////////////////// back button handling //////////////////////
    const onReset = () => {
        setHasResult(false);
        setPrompt('');
        setIsfetchingResult(false);
    }


    ////////////////////////// condtioning with server result //////////////////////
    let displyedElement = null;
    if (hasResult) {
        displyedElement =
            <Results
                tagline={tagline}
                keywords={keywords}
                onBackClick={onReset}
                prompt={prompt}
            />
    } else {
        displyedElement =
            <Form
                pormpt={prompt}
                setPrompt={setPrompt}
                onSubmit={onSubmit}
                onReadData={onReadData}
                isFetchingResult={isfetchingResult}
                characterLimit={CHARCTER_LIMIT}
            />
    }

    return (
        <>
            <h1>Stratup Booster</h1>
            {displyedElement}
        </>
    );
};

export default StartupBooster;