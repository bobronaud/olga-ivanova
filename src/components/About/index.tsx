import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import Info from './Info';
import ImgWithPreloader from '../ImgWithPreloader';
import preloader from '../../assets/images/preloaders/smile.png';

const certificates = require.context(
  '../../assets/images/myCertificates',
  false,
  /\.(png|jpe?g|svg)$/,
);
const images = certificates.keys().map(certificates) as string[];

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
          {images.map((image) => (
            <Grid item xs={4} md={3} key={image}>
              <a href={image}>
                <ImgWithPreloader preloader={preloader} image={image} />
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default About;
