import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

// @ts-ignore
const importAll = (r) => {
  const images = r.keys().reduce((acc: string[], item: string) => {
    const image = r(item);
    return [...acc, image];
  }, []);
  return images;
};

const imagesArts: string[] = importAll(
  // @ts-ignore
  require.context('../../assets/images/pupilsArts', false, /.jpg/),
);
const imagesCertificates: string[] = importAll(
  // @ts-ignore
  require.context('../../assets/images/pupilsCertificates', false, /.jpg/),
);

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
          {t('pupils.arts.header')}
        </Typography>
        <Grid container spacing={1} sx={{ mb: 10 }}>
          {imagesArts.map((image, index) => (
            <Grid item xs={4} md={4} key={index}>
              <Box component='img' src={image} sx={{ width: '100%', height: '100%' }} />
            </Grid>
          ))}
        </Grid>
        <Typography variant='h3' component='h1' align='center' sx={{ mb: 3 }}>
          {t('pupils.achivments.header')}
        </Typography>
        <Grid container spacing={1}>
          {imagesCertificates.map((image, index) => (
            <Grid item xs={4} md={3} key={index}>
              <Box component='img' src={image} sx={{ width: '100%', height: '100%' }} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Container>
  );
};

export default Pupils;
