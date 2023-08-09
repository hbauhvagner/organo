import { useState } from 'react'
import Button from '../Button'
import DropdownList from '../DropdownList'
import TextField from '../TextField'
import './style.css'

const Form = (props) => {
    const [inputName, setInputName] = useState('')
    const [inputOffice, setInputOffice] = useState('')
    const [inputImage, setInputImage] = useState('')
    const [team, setTeam] = useState('')

    const saved = (e) => {
        e.preventDefault()
        props.registeredUser({
            inputName,
            inputOffice,
            inputImage,
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
                    value={inputName}
                    changed={value => setInputName(value)}
                />
                <TextField 
                    required={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    value={inputOffice}
                    changed={value => setInputOffice(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    value={inputImage}
                    changed={value => setInputImage(value)}
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