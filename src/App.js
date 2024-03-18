import Navbar from './Components/NavBar/Navbar';
import SubNavBar from './Components/SubNavBar/SubNavBar';
import Banner from './Components/Banner/Banner';
import RecommendedMovieCard from './Components/Cards/RecommendedMovieCard';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SubNavBar/>
      <Banner />
      <RecommendedMovieCard />
    </div>
  );
}

export default App;
