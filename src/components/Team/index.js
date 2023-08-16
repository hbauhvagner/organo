import Collaborator from '../Collaborator'
import './style.css'

const Team = (props) => {
    return (
        (props.collaborators.length > 0) ? <section className='team' style={{ backgroundColor: props.secondaryColor }}>
            <h3 style={{ borderColor: props.primaryColor }}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map(collaborator => <Collaborator 
                    primaryColor={props.primaryColor}
                    key={collaborator.name}
                    name={collaborator.name} 
                    office={collaborator.office} 
                    image={collaborator.image} 
                />)}
            </div>
        </section> 
        : ''
    )
}

export default Team