import { useState, useEffect } from 'react'
import Projet from './Projet'
import AjouterProjet from './AjouterProjet'

function Dossier() { 
    const [projets, setProjets] = useState([])
    const [afficherFormulaire, setAfficherFormulaire] = useState(false)

    useEffect(() => {
    fetch('http://localhost:3001/projets')
      .then(response => response.json())
      .then(data => setProjets(data))
  }, [])

    function ajouterProjet(nouveauProjet) {
    fetch('http://localhost:3001/projets', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(nouveauProjet)
    })
      .then(response => response.json())
      .then(projetCree => {
        setProjets([...projets, projetCree])
        setAfficherFormulaire(false)
      })
  }


}