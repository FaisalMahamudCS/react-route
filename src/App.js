import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import Friends from './components/Home/Friends/Friends';
import About from './components/About/About';
import{Route,Routes} from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';
function App() {
  return (
    <div className="App">
<h1>Weklcome to routes</h1>
<Routes >
<Route path='/' element={<Home/>}></Route>
<Route path='/friends' element={<Friends></Friends>}></Route>
<Route path='/about' element={<About></About>}></Route>
<Route path='*' element={<NotFound></NotFound>}></Route>
</Routes>
    </div>
  );
}

export default App;
