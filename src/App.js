
import './App.css';
import Create from './components/Create';
import { BrowserRouter as Router, Route,Routes  } from 'react-router-dom';
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
   // <Changes/>
    
    <Router>
      
         <div className='main'>
      <h2 className='main-header'> react crud operations</h2>
      <Routes>
          <Route exact path='/create' element={<Create />} /> 
          <Route exact path='/read' element={<Read />} /> 
          <Route path='/update' element={<Update />} />

      </Routes>
      
    </div>
    
        
    </Router>
  );
}

export default App;
