import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Info from './Info';

// @ts-ignore
const importAll = (r) => {
  const images = r.keys().reduce((acc: string[], item: string) => {
    const image = r(item);
    return [...acc, image];
  }, []);
  return images;
};

const images: string[] = importAll(
  // @ts-ignore
  require.context('../../assets/images/myCertificates', false, /.jpg/),
);

const About = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth={false} id='about-wrap'>
      <Container
        maxWidth='md'
        id='obo-mne'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 5,
        }}>
        <Typography variant='h2' component='h1' sx={{ mb: 3 }}>
          {t('about.header')}
        </Typography>
        <Info />
        <Typography variant='h4' component='h2' sx={{ mb: 3 }}>
          {t('about.achivments.header')}
        </Typography>
        <Grid container spacing={1}>
          {images.map((image, index) => (
            <Grid item xs={4} md={3} key={index}>
              <Box component='img' src={image} sx={{ width: '100%', height: '100%' }} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default About;
