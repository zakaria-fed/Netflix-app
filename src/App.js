import './App.css';
import Row from './Row';
import requests from './Requests'
import Banner from './Banner';

function App() {
  return (
    <div className="App">

      {/* Navbar */}

      {/* Banner */}
      <Banner />

      <Row isLargeRow={true} title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row isLargeRow={false} title="Tranding Now" fetchUrl={requests.fetchTrending} />
      <Row isLargeRow={false} title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row isLargeRow={false} title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row isLargeRow={false} title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row isLargeRow={false} title="Horor Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row isLargeRow={false} title="Romance Movies" fetchUrl={requests.fetchRommanceMovies} />
      <Row isLargeRow={false} title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
