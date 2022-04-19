import Row from './Row';
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
// CSS
import './App.css';

function App() {
  return (
    <div className='app' >
      
      <Nav />
      <Banner />

      <Row id='121' title='NETFLIX ORIGINALS' fetchUrl={requests.fetchNetflixOriginals} isLargeRow={true} />
      <Row id='0251' title='TRENDING NOW' fetchUrl={requests.fetchTrending} />
      <Row id='344' title='TOP RATED' fetchUrl={requests.fetchTopRated} />
      <Row id='4451' title='ACTION MOVIES' fetchUrl={requests.fetchActionMovies} />
      <Row id='54541' title='COMEDY MOVIES' fetchUrl={requests.fetchComedyMovies} />
      <Row id='4545144' title='HORROR MOVIES' fetchUrl={requests.fetchHorrorMovies} />
      <Row id='745844444444' title='ROMANCE MOVIES' fetchUrl={requests.fetchRomanceMovies} />
      <Row id='847454' title='DOCUMENTARIES' fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
