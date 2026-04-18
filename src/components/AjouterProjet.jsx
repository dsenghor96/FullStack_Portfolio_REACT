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
}