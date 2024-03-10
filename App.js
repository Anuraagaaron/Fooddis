import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, Navigate } from 'react-router-dom';
import Landingpage from './Landingpage';
import Donor from './Donor';
import SignUp from './Signup';
import Home from './Home';
import './donor.css';
import './Signup.css';
import './Home.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Landingpage />} />
        <Route path='/donor' element={<Donor />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/home' element={<Home />} />
        {/* Add a default route or redirect to handle unknown paths */}
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </div>
  );
}

export default App;
