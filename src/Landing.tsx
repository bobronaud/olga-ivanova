import Box from '@mui/material/Box';

import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Parents from './components/Parents';
import Pupils from './components/Pupils';
import Techniques from './components/Techniques';

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
      </Box>
    </>
  );
};

export default Landing;
