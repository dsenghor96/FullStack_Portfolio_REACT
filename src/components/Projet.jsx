import { Link } from 'react-router-dom'

function Projet({ projet, onSupprimer }) {
  return (
    <div className="projet-card">

      {/* On affiche l'image du projet */}
      <img src={projet.image} alt={projet.libelle} className="projet-image" />

      {/* Le libellé est un lien qui navigue vers la page de détail du projet */}
      <Link to={`/projet/${projet.id}`} className="projet-libelle">
        {projet.libelle}
      </Link>

      {/* Bouton supprimer qui appelle la fonction onSupprimer avec l'id du projet */}
      <button
        className="btn-supprimer"
        onClick={() => onSupprimer(projet.id)}
      >
        Supprimer
      </button>

    </div>
  )
}

export default Projet