import { useState } from 'react';
import Banner from './components/Banner';
import Form from './components/Form';

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
    </div>
  );
}

export default App;
