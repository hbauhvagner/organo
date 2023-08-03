import './style.css'

const TextField = (props) => {
    let inputValue = ''

    const enteredValue = (e) => {
        inputValue = e.target.value
        console.log(inputValue)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={inputValue} onChange={enteredValue} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default TextField