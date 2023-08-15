import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './style.css'

const Form = (props) => {
    const [name, setName] = useState('')
    const [office, setOffice] = useState('')
    const [image, setImage] = useState('')
    const [team, setTeam] = useState('')

    const saved = (e) => {
        e.preventDefault()
        props.registeredUser({
            name,
            office,
            image,
            team
        })
    }

    return (
        <section className='form'>
            <form onSubmit={saved}>
                <h2>Preencha os dados para criar o card do colaborador</h2>

                <TextField 
                    required={true} 
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    value={name}
                    changed={value => setName(value)}
                />
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    value={office}
                    changed={value => setOffice(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    value={image}
                    changed={value => setImage(value)}
                />
                <DropdownList 
                    required={true} 
                    label='Time' 
                    itens={props.teams}
                    value={team}
                    changed={value => setTeam(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form