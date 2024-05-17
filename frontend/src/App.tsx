import { Route, Routes } from 'react-router-dom'
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage />}  />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </div>
  );
}

export default App
