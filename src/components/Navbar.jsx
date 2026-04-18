// On importe Link pour la navigation sans rechargement de page
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar">
      {/* Logo / titre cliquable qui renvoie à l'accueil */}
      <Link to="/" className="navbar-logo">
        Mon Portfolio
      </Link>

      <div className="navbar-liens">
        {/* Lien vers la liste des projets */}
        <Link to="/" className="navbar-lien">
          Mes Projets
        </Link>
      </div>
    </nav>
  )
}

export default Navbar