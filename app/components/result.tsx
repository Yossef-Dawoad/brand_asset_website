import { ReactElement, JSXElementConstructor, ReactNode, PromiseLikeOfReactNode, JSX } from "react";

interface ResultsProps {
    prompt: string;
    tagline: string;
    keywords: string[];
    onBackClick: any;
}

const Results: React.FC<ResultsProps> = (props) => {
    const keywordElements: JSX.Element[] = [];

    props.keywords
        .forEach((elem, idx) => {
            const element: JSX.Element = <div key={idx}>#{elem}</div>;
            keywordElements.push(element);
        });

    return (
        <>
            <div>
                <div>
                    <div>
                        <b>business</b>
                    </div>
                    <div> {props.prompt}</div>
                </div>
                <div>
                    <div>
                        <b>tagline</b>
                    </div>
                    <div> {props.tagline}</div>
                </div>
                <div>
                    <div>
                        <b>keywords</b>
                    </div>
                    <div>{keywordElements}</div>
                </div>
            </div>
            <button onClick={props.onBackClick}>Back</button>
        </>
    );
};

export default Results;