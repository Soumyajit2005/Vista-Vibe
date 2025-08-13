import  styles from './App.module.css';
import About from './Components/About/About';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import Services from './Components/Services/Services';

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <Services />
      <About />
    </div>
  )
}

export default App
