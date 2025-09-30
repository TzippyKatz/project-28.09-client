import logo from './logo.svg';
import './App.css';
import CarList from './components/CarList';
import Login from './components/Login';
import Logout from './components/Logout';

function App() {
  return (
    <div className="App">
      <Login />
      <Logout />
      <CarList />
    </div>
  );
}

export default App;
