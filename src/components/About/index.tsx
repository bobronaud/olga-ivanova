import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';

import Info from './Info';
import ImgWithPreloader from '../ImgWithPreloader';
import preloader from '../../assets/images/preloaders/smile.png';
import { ImageList, ImageListItem } from '@mui/material';

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
        <ImageList variant='masonry' cols={3} gap={8}>
          {images.map((image) => (
            <ImageListItem key={image}>
              <a href={image}>
                <ImgWithPreloader
                  preloader={preloader}
                  image={`${image}?w=248&fit=crop&auto=format`}
                />
              </a>
            </ImageListItem>
          ))}
        </ImageList>
      </Container>
    </Container>
  );
};

export default About;
