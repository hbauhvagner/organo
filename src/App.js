import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';
import Team from './components/Team';

function App() {
  const [users, setUsers] = useState([])

  const newUserAdded = (user) => {
    console.log(user)
    setUsers([...users, user])
  }

  return (
    <div className="App">
      <Banner />
      <Form registeredUser={user => newUserAdded(user)} />
      <Team name='Programação' />
      <Team name='Front-end' />
      <Team name='Data Science' />
    </div>
  );
}

export default App;
