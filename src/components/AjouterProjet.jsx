import { useState } from 'react'

function AjouterProjet({ onAjouter }) {
    const [libelle, setLibelle] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [technologie, setTechnologie] = useState('')
    const [lien, setLien] = useState('')
}