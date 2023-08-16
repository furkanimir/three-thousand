import React from 'react'
import { useEffect, useState } from 'react';

const Deneme = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);


  const fetchData = async () => {
    try {
      const response = await fetch('https://official-joke-api.appspot.com/random_joke');
      const json = await response.json();
      setUsers(json);
      setLoading(false);
    } catch (error) {
      console.error('veri getirme hatasi: ', error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []); // Boş dependency array ile sadece bir kez çalışmasını sağlar

  return (
    <div>
      {loading ? 'Loading ... ' : (
        <div>
          <p>{users.setup}</p>
          <p>Answer : {users.punchline}</p>
        </div>
      )}
    </div>
  );
}

export default Deneme;