import './App.css';
import AlbumCard from './Components/AlbumCard';
import Hero from './Components/Hero';
import Navbar from "./Components/Navbar"
import Section from './Components/Section';
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Hero />
        {/* <Section showButton={true} sectionHeader = {"top"}/>
        <Section showButton={true} sectionHeader={"new"}/> */}
        <Section showButton={false} sectionHeader={"songs"}/>

      </div>
    </>
  );
}

export default App;
