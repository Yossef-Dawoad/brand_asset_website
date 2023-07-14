interface FormProps {
    pormpt: string;
    characterLimit: number;
    setPrompt: any;
    onSubmit: any;
    onReadData: any;
    isFetchingResult: boolean;
}


const Form: React.FC<FormProps> = (props) => {


    const ManualSubmitDisable = false; //[FIXME] disable submit cuz it has errors for now
    const isPromptPasslimit = props.pormpt.length >= props.characterLimit;
    const updatePromptWhenValid = (textInput: string) => {
        if (textInput.length <= props.characterLimit) {
            props.setPrompt(textInput);
        }
    }

    let statusColor = "text-slate-500";
    let inputErrorMsg = null;
    if (isPromptPasslimit) {
        statusColor = "text-red-600";
        inputErrorMsg = `Input must be less than ${props.characterLimit} characters`;
    }
    return (
        <>
            <div className="mb-6 text-slate-400 text-center">
                <p>
                    Tell me about your business, and I&apos;ll tell you how to get to the moon.
                </p>
            </div>
            <input
                autoComplete="true"
                name="business input"
                className="p-2 w-full rounded-md focus:outline-red-600 foucs:outline text-slate-800"
                type="text"
                placeholder="coffee"
                value={props.pormpt}
                onChange={(e) => updatePromptWhenValid(e.currentTarget.value)}
            />
            <div className={statusColor + " flex justify-between mt-2 mb-6 text-sm"}>
                <div> {inputErrorMsg} </div>
                <div>
                    {props.pormpt.length} / {props.characterLimit}
                </div>
            </div>
            <button
                className="bg-gradient-to-r from-orange-500 
             to-red-600 disabled:opacity-50 w-full p-2 rounded-md text-lg"
                onClick={props.onSubmit} disabled={isPromptPasslimit || props.isFetchingResult || ManualSubmitDisable}>
                Submit
            </button>

            {/* <button onClick={props.onReadData} >ReadData</button> */}
        </>
    )
};

export default Form;