interface FormProps {
    pormpt: string;
    characterLimit: number;
    setPrompt: any;
    onSubmit: any;
    onReadData: any;
    isFetchingResult: boolean;
}


const Form: React.FC<FormProps> = (props) => {


    const ManualSubmitDisable = true; //[FIXME] disable submit cuz it has errors for now
    const isPromptPasslimit = props.pormpt.length > props.characterLimit;
    const updatePromptWhenValid = (textInput: string) => {
        if (textInput.length <= props.characterLimit) {
            props.setPrompt(textInput);
        }
    }

    return (
        <>
            <p>
                Tell me about your business, and I&apos;ll tell you how to get to the moon.
            </p>
            <input
                type="text"
                placeholder="coffee"
                value={props.pormpt}
                onChange={(e) => updatePromptWhenValid(e.currentTarget.value)}
            />
            <div>{props.pormpt.length} / {props.characterLimit}</div>
            <button
                onClick={props.onSubmit} disabled={isPromptPasslimit || props.isFetchingResult || ManualSubmitDisable}>
                Submit
            </button>
            <br />
            <button onClick={props.onReadData} >ReadData</button>
        </>
    )
};

export default Form;