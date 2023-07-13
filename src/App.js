import './App.css';
import {Routes,Route} from "react-router-dom"
import { Home } from './pages/home/home';
import { EventPage } from './pages/eventPage/eventPage';
import { Navbar } from './components/navbar/navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/event/:eventId" element={<EventPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
