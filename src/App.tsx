import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';
import VocabularyPage from './pages/VocabularyPage';
import GrammarPage from './pages/GrammarPage';
import PracticePage from './pages/PracticePage';
import DictionaryPage from './pages/DictionaryPage';
import VerbConjugationPage from './pages/VerbConjugationPage';

function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="vocabulary" element={<VocabularyPage />} />
            <Route path="grammar" element={<GrammarPage />} />
            <Route path="practice" element={<PracticePage />} />
            <Route path="dictionary" element={<DictionaryPage />} />
            <Route path="verb-conjugation" element={<VerbConjugationPage />} />
          </Route>
        </Routes>
      </Router>
    </LanguageProvider>
  );
}

export default App;