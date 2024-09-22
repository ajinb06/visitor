import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AddVisitor from './components/AddVisitor';
import Navbar from './components/Navbar';
import ViewAllVisitors from './components/ViewAllVisitors';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AddVisitor />} />
          <Route path='/navbar' element={<Navbar/>} />
          <Route path='/viewallvisitors' element={<ViewAllVisitors/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
