import { useTranslation } from 'react-i18next';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import ImgWithPreloader from '../ImgWithPreloader';

import photo from '../../assets/images/ownPhoto.jpg';
import preloader from '../../assets/images/preloaders/ownPhotoMock.jpg';

const Info = () => {
  const { t } = useTranslation();

  return (
    <Grid container spacing={2} sx={{ mb: 7 }}>
      <Grid item xs={12} md={6}>
        <Box className='photo-wrap' sx={{ width: '100%' }}>
          <a href={photo}>
            <ImgWithPreloader
              preloader={preloader}
              image={photo}
              className='img'
              sx={{ width: '100%', height: '100%' }}
            />
          </a>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box>
          <Typography gutterBottom>
            <b>{t('about.info.education.name')}</b>: {t('about.info.education.p1')}
          </Typography>
          <Typography gutterBottom> {t('about.info.education.p2')}</Typography>
          <Typography gutterBottom>{t('about.info.education.p3')}</Typography>
          <Typography>{t('about.info.education.p4')}</Typography>
          <hr />
          <Typography>
            <b>{t('about.info.workExpirience.name')}</b> -{' '}
            {t('about.info.workExpirience.value')}
          </Typography>
          <hr />
          <Typography>
            <b>{t('about.info.workExpirienceInSpecialty.name')}</b> -{' '}
            {t('about.info.workExpirienceInSpecialty.value')}
          </Typography>
          <hr />
          <Typography>
            <b>{t('about.info.qualificationCategory.name')}</b> -{' '}
            {t('about.info.qualificationCategory.value')}
          </Typography>
          <hr />
          <Typography gutterBottom>
            <b>{t('about.info.implementedProgram.name')}</b>:{' '}
            {t('about.info.implementedProgram.p1')}{' '}
            <a
              href='https://drive.google.com/file/d/1aGQAu8y8vnTCNhvc5DlUMmmyU_T8YxOT/preview'
              rel='noreferrer'
              target='_blank'>
              {t('about.info.implementedProgram.link')}
            </a>
          </Typography>
          <Typography gutterBottom> {t('about.info.implementedProgram.p2')}</Typography>
          <Typography> {t('about.info.implementedProgram.p3')}</Typography>
          <hr />
          <Typography gutterBottom>
            <b>{t('about.info.retraining.name')}</b>:
          </Typography>
          <Typography gutterBottom> {t('about.info.retraining.p1')}</Typography>
          <Typography> {t('about.info.retraining.p2')}</Typography>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Info;
