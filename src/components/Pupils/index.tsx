import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import preloader from '../../assets/images/preloaders/smile.png';

import ImgWithPreloader from '../ImgWithPreloader';

const arts = require.context(
  '../../assets/images/pupilsArts',
  false,
  /\.(png|jpe?g|svg)$/,
);
const imagesArts = arts.keys().map(arts) as string[];

const certificates = require.context(
  '../../assets/images/pupilsCertificates',
  false,
  /\.(png|jpe?g|svg)$/,
);
const imagesCertificates = certificates.keys().map(certificates) as string[];

const Pupils = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth={false} id='pupils-wrap'>
      <Container
        maxWidth='md'
        id='vospitanniki'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 5,
        }}>
        <Typography variant='h3' component='h1' align='center' sx={{ mb: 3 }}>
          {t('pupils.arts')}
        </Typography>
        <Grid container spacing={1} sx={{ mb: 10 }}>
          {imagesArts.map((image) => (
            <Grid item xs={4} md={3} key={image}>
              <a href={image}>
                <ImgWithPreloader preloader={preloader} image={image} />
              </a>
            </Grid>
          ))}
        </Grid>
        <Typography variant='h3' component='h1' align='center' sx={{ mb: 3 }}>
          {t('pupils.achivments')}
        </Typography>
        <Grid container spacing={1}>
          {imagesCertificates.map((image) => (
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

export default Pupils;
