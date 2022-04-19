import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './components/LoginPage';
import HomePage from './components/HomePage';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/">
        <Route index path='/' element={<LoginPage />} />
        <Route path="/HomePage/:name/:compName/:id" element={<HomePage />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;