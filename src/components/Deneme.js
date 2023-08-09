import React from 'react'
import { useEffect, useState } from 'react';

const Deneme = () => {
  const [users, setUsers] = useState([]);


  const fetchData = () => {
    fetch("https://demoapiyy.azurewebsites.net/api/SuperHero/1")
      .then(response => {
        return response.json()
      })
      .then(data => {
        setUsers(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <p>{users}</p>
    </div>
  )
}

export default Deneme