import Navbar from './Components/NavBar/Navbar';
import SubNavBar from './Components/SubNavBar/SubNavBar';
import Banner from './Components/Banner/Banner';
import RecommendedMovieCard from './Components/Cards/js/RecommendedMovieCard';
import LiveEvent from './Components/Cards/js/LiveEvent';
import Premiere from './Components/Cards/js/Premiere';
import MusicStudio from './Components/Cards/js/MusicStudio';
import OutdoorEvent from './Components/Cards/js/OutdoorEvent';
import LaughterTherapy from './Components/Cards/js/LaughterTherapy';
import PopularEvent from './Components/Cards/js/PopularEvent';
import LatestPlay from './Components/Cards/js/LatestPlay';
import TopGame from './Components/Cards/js/TopGame';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <SubNavBar/>
      <Banner />
      <RecommendedMovieCard />
      <LiveEvent />
      <Premiere />
      <MusicStudio />
      <OutdoorEvent />
      <LaughterTherapy />
      <PopularEvent />
      <LatestPlay />
      <TopGame />
    </div>
  );
}

export default App;
