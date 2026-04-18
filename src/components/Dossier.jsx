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

  function supprimerProjet(id) {
    fetch(`http://localhost:3001/projets/${id}`, {
      method: 'DELETE'
    })
      .then(() => {
        // On filtre la liste pour retirer le projet supprimé
        setProjets(projets.filter(projet => projet.id !== id))
      })
  }

  return (
    <div className="dossier">

      {/* Bouton qui affiche ou cache le formulaire d'ajout selon l'état afficherFormulaire */}
      <button
        className="btn-ajouter"
        onClick={() => setAfficherFormulaire(!afficherFormulaire)}
      >
        {/* Affichage conditionnel du texte du bouton */}
        {afficherFormulaire ? 'Annuler' : 'Ajouter un projet'}
      </button>

      {/* Affichage conditionnel : on affiche AjouterProjet seulement si afficherFormulaire est true */}
      {afficherFormulaire && (
        <AjouterProjet onAjouter={ajouterProjet} />
      )}

      {/* Affichage conditionnel : message si la liste est vide */}
      {projets.length === 0 ? (
        <p className="liste-vide">Aucun projet pour le moment. Ajoutez-en un !</p>
      ) : (
        // Affichage de la liste des projets
        <div className="liste-projets">
          {/* On parcourt la liste et on crée un composant Projet pour chaque élément */}
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