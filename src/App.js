import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SurahList from './components/SurahList';
import Surah from './components/Surah';

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('/surah/surah.json', {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
      .then(function (response) {
        return response.json();
      })
      .then((res) => {
        setData(res);
        console.log(res);
      });
  }, []);
  return (
    <Router>
      <div className='app-container'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={() => <SurahList surah={data} />} />
          <Route path='/:nomorSurah' exact component={() => <Surah surah={data} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
