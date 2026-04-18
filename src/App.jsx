import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Dossier from './components/Dossier'
import DetaillerProjet from './components/DetaillerProjet'
import './App.css'

function App() { 
  return (
    
    <BrowserRouter>
      <div className="app">
        <h1 className="titre-app">Gestion de Portfolio</h1>
      </div>
    </BrowserRouter>
  )
}