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
}