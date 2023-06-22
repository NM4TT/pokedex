import './App.css';
import 'antd/dist/reset.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './pages/Layout';
import { HomePage } from './pages/HomePage'
import { ErrorPage } from './pages/ErrorPage'

function App() {

  return (
    <Router>
      <Routes>

        <Route path='/' element={<Layout/>} >
          <Route index element={<HomePage />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>

      </Routes>
    </Router>
  );
}

export default App;