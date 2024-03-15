import Container from '@mui/material/Container';

import Banner from './Banner';
import Image from './Image';
import Quote from './Quote';

const Intro = () => {
  return (
    <Container maxWidth={false} id='intro-wrap'>
      <Container
        maxWidth='md'
        id='v-nachalo'
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
  );
};
export default Intro;
