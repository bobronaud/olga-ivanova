import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Parents = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth={false} id='parents-wrap'>
      <Container
        maxWidth='md'
        id='roditelyam'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 5,
        }}>
        <Typography align='center' variant='h2' component='h1' sx={{ mb: 3 }}>
          {t('parents.header')}
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Accordion className='accordion' defaultExpanded>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel1-content'
              id='panel1-header'>
              <Typography variant='h6'>
                {t('parents.accordion.recommendations')}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                src='https://drive.google.com/file/d/1W83dd5H4TSgwz__on3QzJYRJ81dxVjJ2/preview'
                title='Рекомендации для родителей в PDF'
                width='100%'
                height='600'
                allow='autoplay'></iframe>
            </AccordionDetails>
          </Accordion>
          <Accordion className='accordion'>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls='panel2-content'
              id='panel2-header'>
              <Typography variant='h6'>{t('parents.accordion.club')}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <iframe
                src='https://drive.google.com/file/d/15Ba2I9VJNazsqXpfIb_-JJwogkkTPaxn/preview'
                title="Кружок 'Радужка' в PDF"
                width='100%'
                height='600'
                allow='autoplay'></iframe>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Container>
    </Container>
  );
};

export default Parents;
