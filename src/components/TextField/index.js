import './style.css'

const TextField = (props) => {
    const enteredValue = (e) => {
        props.changed(e.target.value)
    }

    return (
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={enteredValue} required={props.required} placeholder={props.placeholder} />
        </div>
    )
}

export default TextField