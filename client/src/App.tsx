import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './static/css/App.css';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { Draft } from './components/Draft';
import { AllSets } from './components/All-Sets';
import { Contact } from './components/Contact';
import { NotFound } from './components/Not-Found';

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
