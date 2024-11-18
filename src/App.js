import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './components/Home';
import CreateUser from './components/CreateUser';
import UpdateUser from './components/UpdateUser';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home} />
        <Route path='/user/create' Component={CreateUser} />
        <Route path='/update/:id' Component={UpdateUser} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
