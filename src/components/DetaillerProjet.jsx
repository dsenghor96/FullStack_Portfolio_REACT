import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function DetaillerProjet() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [projet, setProjet] = useState(null)
  const [modeEdition, setModeEdition] = useState(false)
  const [libelle, setLibelle] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [technologie, setTechnologie] = useState('')
  const [lien, setLien] = useState('')

  useEffect(() => {
    fetch(`http://localhost:3001/projets/${id}`)
      .then(response => response.json())
      .then(data => {
        setProjet(data)
        setLibelle(data.libelle)
        setImage(data.image)
        setDescription(data.description)
        setTechnologie(data.technologie)
        setLien(data.lien)
      })
  }, [id])

  function handleEditer(e) {
    e.preventDefault()

    const projetModifie = { libelle, image, description, technologie, lien }

    fetch(`http://localhost:3001/projets/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(projetModifie)
    })
      .then(response => response.json())
      .then(data => {
        setModeEdition(false)
      })
  }

  if (!projet) return <p>Chargement...</p>

  return (
    <div className="detail-projet">

      {/* Affichage conditionnel : mode édition ou mode affichage */}
      {modeEdition ? (

        <form className="formulaire-ajout" onSubmit={handleEditer}>
          <h2>Editer le projet</h2>

          <div className="champ">
            <label>Libellé</label>
            <input
              type="text"
              value={libelle}
              onChange={(e) => setLibelle(e.target.value)}
            />
          </div>

          <div className="champ">
            <label>URL de l'image</label>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>

          <div className="champ">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="champ">
            <label>Technologies</label>
            <input
              type="text"
              value={technologie}
              onChange={(e) => setTechnologie(e.target.value)}
            />
          </div>

          <div className="champ">
            <label>Lien GitHub</label>
            <input
              type="text"
              value={lien}
              onChange={(e) => setLien(e.target.value)}
            />
          </div>

          <div className="boutons-detail">
            <button type="submit" className="btn-valider">Sauvegarder</button>
            {/* Annuler l'édition sans sauvegarder */}
            <button
              type="button"
              className="btn-annuler"
              onClick={() => setModeEdition(false)}
            >
              Annuler
            </button>
          </div>
        </form>

      ) : (

        <div>
          <h2>{projet.libelle}</h2>
          <img src={projet.image} alt={projet.libelle} className="projet-image" />
          <p><strong>Description :</strong> {projet.description}</p>
          <p><strong>Technologies :</strong> {projet.technologie}</p>
          <p><strong>Lien :</strong> <a href={projet.lien} target="_blank">{projet.lien}</a></p>

          <div className="boutons-detail">
            {/* Bouton Annuler : retourne à la liste des projets */}
            <button
              className="btn-annuler"
              onClick={() => navigate('/')}
            >
              Annuler
            </button>

            {/* Bouton Editer : active le mode édition */}
            <button
              className="btn-editer"
              onClick={() => setModeEdition(true)}
            >
              Editer
            </button>
          </div>
        </div>

      )}

    </div>
  )
}
export default DetaillerProjet