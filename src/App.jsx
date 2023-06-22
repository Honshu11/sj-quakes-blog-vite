import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Club from './Components/Club';
import Schedule from './Components/Schedule';
import './App.css';

function App() {
  return (
    <div className='app'>
        <Navbar />
        <Club />
        <Schedule />
        <Footer />
    </div>
  )
}

export default App;
