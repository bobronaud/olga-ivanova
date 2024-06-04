import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import preloader from '../../assets/images/preloaders/smile.png';

import ImgWithPreloader from '../ImgWithPreloader';
import { ImageList, ImageListItem } from '@mui/material';

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
        <ImageList variant='masonry' cols={3} gap={8}>
          {imagesArts.map((image) => (
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
        <Typography variant='h3' component='h1' align='center' sx={{ mb: 3 }}>
          {t('pupils.achivments')}
        </Typography>
        <ImageList variant='masonry' cols={3} gap={8}>
          {imagesCertificates.map((image) => (
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

export default Pupils;
