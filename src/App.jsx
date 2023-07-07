import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Club from './Components/Club';
import FixtureTable from './Components/FixtureTable';
import './App.css';

function App() {
  return (
    <div className='app'>
        <Navbar />
        <Club />
        <FixtureTable />
        <Footer />
    </div>
  )
}

export default App;
