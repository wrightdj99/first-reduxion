import './App.css';
import Profile from './components/Profile';
import Login from './components/Login';
import ChangeColor from './components/ChangeColor';

function App() {
  return (
    <div className="App">
      <h1>Redux Slice Proof Of Concept</h1>
      <Profile/>
      <Login/>
      <ChangeColor/>
    </div>
  );
}

export default App;
