import {
  ReactElement,
  JSXElementConstructor,
  ReactNode,
  PromiseLikeOfReactNode,
  JSX,
} from "react";

interface ResultsProps {
  prompt: string;
  tagline: string;
  keywords: string[];
  onBackClick: any;
}

const Results: React.FC<ResultsProps> = (props) => {
  const keywordElements: JSX.Element[] = [];

  props.keywords.forEach((elem, idx) => {
    const element: JSX.Element = (
      <div
        key={idx}
        className="bg-orange-600 text-orange-100 p-1 rounded-md text-sm"
      >
        #{elem}
      </div>
    );
    keywordElements.push(element);
  });

  const renderSection = (title: string, body: any, customCSSRules?: string) => {
    return (
      <div className="bg-slate-700 my-3 p-4 rounded-md">
        <div>
          <div className="text-slate-400 font-bold text-sm mb-4">{title}</div>
        </div>
        <div className={customCSSRules}> {body} </div>
      </div>
    );
  };
  return (
    <>
      <div>
        {renderSection(
          "business",
          <div className="text-lg font-bold">{props.prompt}</div>
        )}
        {renderSection("tagline", props.tagline)}
        {renderSection(
          "keywords",
          <div className="flex flex-wrap gap-2">{keywordElements}</div>
        )}
      </div>
      <button
        className="bg-gradient-to-r from-orange-500 
            to-red-600 disabled:opacity-50 w-full p-2 rounded-md text-lg"
        onClick={props.onBackClick}
      >
        Back
      </button>
    </>
  );
};

export default Results;
