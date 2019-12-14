import React, { useState, useEffect } from 'react';

function App() {
  // states
  const [techs, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');
  function handleAdd() {
    setTech([...techs, newTech]);
    setNewTech('');
  }
  // componentDidMount()
  useEffect(() => {
    const tech = localStorage.getItem('techs');

    if (tech) {
      setTech(JSON.parse(tech));
    }
  }, []);
  // componentDidUpdate
  useEffect(() => {
    localStorage.setItem('techs', JSON.stringify(techs));
  }, [techs]);

  return (
    <>
      <ul>
        {techs.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
