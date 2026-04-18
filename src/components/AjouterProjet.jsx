import { useState } from 'react'

function AjouterProjet({ onAjouter }) {
    const [libelle, setLibelle] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [technologie, setTechnologie] = useState('')
    const [lien, setLien] = useState('')

    function handleSubmit(e) {
    e.preventDefault()

    if (!libelle) return

    const nouveauProjet = { libelle, image, description, technologie, lien }

    onAjouter(nouveauProjet)

    setLibelle('')
    setImage('')
    setDescription('')
    setTechnologie('')
    setLien('')
  }

  return (
    <form className="formulaire-ajout" onSubmit={handleSubmit}>
      <h2>Ajouter un projet</h2>

      {/* Champ libellé */}
      <div className="champ">
        <label>Libellé *</label>
        <input
          type="text"
          value={libelle}
          // onChange met à jour l'état local à chaque frappe
          onChange={(e) => setLibelle(e.target.value)}
          placeholder="Nom du projet"
        />
      </div>

      {/* Champ image */}
      <div className="champ">
        <label>URL de l'image</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="https://..."
        />
      </div>

      {/* Champ description */}
      <div className="champ">
        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description du projet"
        />
      </div>

      {/* Champ technologie */}
      <div className="champ">
        <label>Technologies</label>
        <input
          type="text"
          value={technologie}
          onChange={(e) => setTechnologie(e.target.value)}
          placeholder="React, AWS, ..."
        />
      </div>

      {/* Champ lien */}
      <div className="champ">
        <label>Lien GitHub</label>
        <input
          type="text"
          value={lien}
          onChange={(e) => setLien(e.target.value)}
          placeholder="https://github.com/..."
        />
      </div>

      {/* Bouton de soumission du formulaire */}
      <button type="submit" className="btn-valider">
        Valider
      </button>

    </form>
  )
}