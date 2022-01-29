import { Route, Routes } from 'react-router-dom';
import './App.css';
import { BrowserRouter as Router} from 'react-router-dom';
import CreationPage from './components/Creation_page/CreationPage';
import DetailPage from './components/Detail_page/DetailPage';
import Homepage from './components/Homepage/Homepage';
import LadingPage from './components/Lading_page/LadingPage';
import './index.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route  path= "/" element={<LadingPage/>} />
          <Route  path= "/homepage" element={<Homepage/>}/>
          <Route  path= "/Dogs/:DogsId" element={<DetailPage/>}/>
          <Route  path= "/Dog/create" element={<CreationPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
