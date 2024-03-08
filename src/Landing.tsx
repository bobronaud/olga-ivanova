import Box from '@mui/material/Box';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Parents from './components/Parents';

const Landing = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Intro />
        <About />
        <Parents />
      </Box>
    </>
  );
};

export default Landing;
