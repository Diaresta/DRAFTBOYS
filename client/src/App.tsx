import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { AllSets } from './components/All-Sets';
import { Contact } from './components/Contact';
import { Draft } from './components/Draft';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { NotFound } from './components/Not-Found';
import './static/css/App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Routes>
          <Route path='' element={<Home />} />
          <Route path='all_sets' element={<AllSets />} />
          <Route path='draft' element={<AllSets />} />
          <Route path='contact' element={<Contact />} />
          <Route path={'draft/:setName'} element={<Draft />} />

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
