import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import creation_page from './components/Creation_page/creation_page';
import Detail_page from './components/Detail_page/Detail_page';
import Homepage from './components/Homepage/Homepage';
import Lading_page from './components/Lading_page/Lading_page';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path= "/" element={<Lading_page/>} />
          <Route  path= "/homepage" element={<Homepage/>}/>
          <Route  path= "/Dogs/:DogsId" element={<Detail_page/>}  />
          <Route  path= "/Dog/create" element={<creation_page/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
