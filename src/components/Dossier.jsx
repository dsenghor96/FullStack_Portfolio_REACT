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

}