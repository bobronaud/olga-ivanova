import Box from '@mui/material/Box';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Parents from './components/Parents';
import Pupils from './components/Pupils';
import Techniques from './components/Techniques';
import WebResources from './components/WebResources';
import Footer from './components/Footer';

const Landing = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Intro />
        <About />
        <Parents />
        <Pupils />
        <Techniques />
        <WebResources />
      </Box>
      <Footer />
    </>
  );
};

export default Landing;
