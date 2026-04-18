import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dossier from './components/Dossier'
import DetaillerProjet from './components/DetaillerProjet'
import './App.css'

function App() { 
  return (
    
    <BrowserRouter>
      <div className="app">
        <h1 className="titre-app">Gestion de Portfolio</h1>

        {/* Routes définit l'ensemble des chemins possibles de l'application */}
        <Routes>

          {/* La route "/" affiche le composant Dossier (liste des projets) */}
          <Route path="/" element={<Dossier />} />

          {/* La route "/projet/:id" affiche le détail d'un projet selon son id */}
          <Route path="/projet/:id" element={<DetaillerProjet />} />

        </Routes>
      </div>
    </BrowserRouter>
  )
}