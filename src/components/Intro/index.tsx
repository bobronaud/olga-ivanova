import Container from '@mui/material/Container';
import Box from '@mui/material/Box';

import Banner from './Banner';
import Image from './Image';
import Quote from './Quote';

const Intro = () => {
  return (
    <>
      <Box id='v-nachalo' />
      <Container maxWidth={false} id='intro-wrap'>
        <Container
          maxWidth='md'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 5,
          }}>
          <Banner />
          <Image />
          <Quote />
        </Container>
      </Container>
    </>
  );
};
export default Intro;
