import React, { useState, useEffect, useMemo } from 'react';

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

  // só executa techs.length quando tech sofrer  alterações
  const techSize = useMemo(() => techs.length, [techs]);

  return (
    <>
      <ul>
        {techs.map(t => (
          <li key={t}>{t}</li>
        ))}
      </ul>
      <b>Você tem {techSize} tecnologias</b>
      <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
