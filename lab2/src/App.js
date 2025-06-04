import './App.css';
import CardComponent from './components/CardComponent';
import CarouselComponent from './components/CarouselComponent';
import Navbar from './components/NavbarComponent';
import ReservationForm from './components/ReservationForm';
function App(){
  return (
    <div className="App">
       <Navbar/>
       <CarouselComponent/>
       <CardComponent/>
       <ReservationForm/>
    </div>
  );
}

export default App;