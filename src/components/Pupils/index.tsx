import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

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
          {imagesArts.map((image, index) => (
            <Grid item xs={4} md={3} key={index}>
              <a href={image}>
                <Box component='img' src={image} sx={{ width: '100%', height: '100%' }} />
              </a>
            </Grid>
          ))}
        </Grid>
        <Typography variant='h3' component='h1' align='center' sx={{ mb: 3 }}>
          {t('pupils.achivments')}
        </Typography>
        <Grid container spacing={1}>
          {imagesCertificates.map((image, index) => (
            <Grid item xs={4} md={3} key={index}>
              <a href={image}>
                <Box component='img' src={image} sx={{ width: '100%', height: '100%' }} />
              </a>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Pupils;
