import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Banner = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        mb: 5,
      }}>
      <Box sx={{ textAlign: 'center' }}>
        <Typography gutterBottom variant='h3'>
          {t('intro.banner.fullname')}
        </Typography>
        <Typography gutterBottom variant='h4'>
          {t('intro.banner.title')}
        </Typography>
        <Typography variant='h5'>{t('intro.banner.text')}</Typography>
      </Box>
    </Box>
  );
};

export default Banner;
