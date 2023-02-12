import './App.css';
import Admission from './components/Admission/Admission';
import Home from './components/Home/Home';
import Introduction from './components/Introduction/Introduction';
import Navbar from './components/Navbar/Navbar';
import Academy from './components/Academy/Academy';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/introduction" element={<Introduction />} />
          <Route path="/academy-programs" element={<Academy />} />
          <Route path="/admission" element={<Admission />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
