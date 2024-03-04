import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <Box
      className='banner-box'
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: 5,
      }}>
      <Box className='banner-text'>
        <Typography variant='h3' component='p'>
          {t('intro.banner.fullname')}
        </Typography>
        <Typography variant='h4' component='p'>
          {t('intro.banner.title')}
        </Typography>
        <Typography variant='h5' component='p'>
          {t('intro.banner.text')}
        </Typography>
      </Box>
    </Box>
  );
};

export default Banner;
