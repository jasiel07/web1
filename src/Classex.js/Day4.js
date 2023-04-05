import {useState} from 'react';
import React from 'react';
const   Name = () => {
  const [Name, setName] = useState('');
  const [favfruit, setfavfruit] = useState('');

  const [message, setMessage] = useState('');

  const handleSubmit = event => {
    console.log('handleSubmit ran');
    event.preventDefault(); 

    
    console.log('Name ', Name);
    console.log('favfruit 👉️', favfruit);

    setMessage(`Hey, ${Name} YOUR FAVOURITE FRUIT IS ${favfruit}`);

    
    setName('');
    setfavfruit('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          id="first_name"
          name="first_name"
          type="text"
          placeholder="Name"
          onChange={event => setName(event.target.value)}
          value={Name}
        />

        <br />
        <select id="favfruit" onChange={event => setfavfruit(event.target.value)}>
        <option >Choose a fruit</option>
            <option >Apple</option>
            <option >Banana</option>
            <option >Orange</option>
            <option >Mango</option>
            <option >Strawberry</option>
      </select>
        <br />

        <button type="submit">Submit form</button>

        <h2>{message}</h2>
      </form>
    </div>
  );
};

export default Name;