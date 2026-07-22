import './index.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Auth, Dashboard, Receitas, Despesas, Metas } from '@pages/index';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/login" element={<Auth />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/receitas" element={<Receitas />} />
        <Route path="/despesas" element={<Despesas />} />
        <Route path="/metas" element={<Metas />} />
      </Routes>
    </Router>
  );
}

export default App;
