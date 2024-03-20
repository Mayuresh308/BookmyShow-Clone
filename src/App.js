import Navbar from './Components/NavBar/Navbar';
import SubNavBar from './Components/SubNavBar/SubNavBar';
import Banner from './Components/Banner/Banner';
import RecommendedMovieCard from './Components/Cards/js/RecommendedMovieCard';
import LiveEvent from './Components/Cards/js/LiveEvent';
import Premiere from './Components/Cards/js/Premiere';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SubNavBar/>
      <Banner />
      <RecommendedMovieCard />
      <LiveEvent />
      <Premiere />
    </div>
  );
}

export default App;
