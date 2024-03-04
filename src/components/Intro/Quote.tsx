import { useTranslation } from 'react-i18next';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Quote = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'start',
        px: 0,
      }}>
      <Typography variant='h4' component='div' className='quote-start'></Typography>
      <Typography variant='h4' component='p' sx={{ pb: 3 }} className='quote'>
        {t('intro.quote.text.p1')}
        <span className='quote-span'>{t('intro.quote.text.span1')}</span>
        {t('intro.quote.text.p2')}
        <span className='quote-span'>{t('intro.quote.text.span2')}</span>
        {t('intro.quote.text.p3')}
        <span className='quote-span'>{t('intro.quote.text.span3')}</span>
        {t('intro.quote.text.p4')}
      </Typography>
      <Typography variant='h4' component='div' className='quote-end'></Typography>
      <Typography variant='h5' component='p'>
        <i>{t('intro.quote.author')}</i>
      </Typography>
    </Box>
  );
};

export default Quote;
