import './style.css'

const Collaborator = ({ name, office, image, primaryColor }) => {
    return (
        <div className='collaborator'>
            <div className='header' style={{ backgroundColor: primaryColor }}>
                <img src={image} alt={name} />
            </div>
            <div className='baseboard'>
                <h4>{name}</h4>
                <h5>{office}</h5>
            </div>
        </div>
    )
}

export default Collaborator