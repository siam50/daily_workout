import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Workouts from './components/Workouts/Workouts';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Workouts></Workouts>
      <Blog></Blog>
    </div>
  );
}

export default App;
