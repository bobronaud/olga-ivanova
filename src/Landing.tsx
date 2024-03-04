import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Navbar from './components/Navbar';
import Intro from './components/Intro';

const Landing = () => {
  return (
    <>
      <Navbar />
      <Box>
        <Intro />
      </Box>
    </>
  );
};

export default Landing;
