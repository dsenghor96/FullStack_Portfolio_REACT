import { useState, useEffect } from 'react'
import Projet from './Projet'
import AjouterProjet from './AjouterProjet'

// Dossier reçoit l'état du formulaire depuis App
function Dossier({ afficherFormulaire, setAfficherFormulaire }) {
  const [projets, setProjets] = useState([])

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

  function supprimerProjet(id) {
    fetch(`http://localhost:3001/projets/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        setProjets(projets.filter(projet => projet.id !== id))
      })
  }

  return (
    <div className="dossier">

      {/* Affichage conditionnel du formulaire */}
      {afficherFormulaire && (
        <AjouterProjet onAjouter={ajouterProjet} />
      )}

      {/* Affichage conditionnel : liste vide ou liste de projets */}
      {projets.length === 0 ? (
        <div className="liste-vide-container">
          <p className="liste-vide">Aucun projet pour le moment.</p>
          <p className="liste-vide-hint">Cliquez sur "+ Ajouter un projet" pour commencer.</p>
        </div>
      ) : (
        <div className="liste-projets">
          {projets.map(projet => (
            <Projet
              key={projet.id}
              projet={projet}
              onSupprimer={supprimerProjet}
            />
          ))}
        </div>
      )}

    </div>
  )
}

export default Dossier