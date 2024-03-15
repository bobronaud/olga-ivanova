import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const techniquesData = [
  {
    name: 'graphics-texture',
    src: 'https://drive.google.com/file/d/1X-bypmaDHLOkPrdYfjs1qQWy7eCFsnBw/preview',
  },
  {
    name: 'painting-of-berries&leaves',
    src: 'https://drive.google.com/file/d/1JZOiauUaL2Uw7g1LhzEFDFoK9UCI1DnT/preview',
  },
  {
    name: 'strokes-in-a-circle',
    src: 'https://drive.google.com/file/d/1M0XB2WOnC9G2ZTQJPgVGcfqASd8uWBVF/preview',
  },
  {
    name: 'composition',
    src: 'https://drive.google.com/file/d/1Eh993KYrz_cTZRjQrYeruurippWIjXNt/preview',
  },
  {
    name: 'winter-tree',
    src: 'https://drive.google.com/file/d/1s6c_OXf1m-CkMg7ZzNiA7Z4s9cKA5qPi/preview',
  },
  {
    name: 'practice-drawing',
    src: 'https://drive.google.com/file/d/1KDiim4g7F19ljALiZ0GOeMXI_a_zb6hJ/preview',
  },
  {
    name: 'millefiori-technique',
    src: 'https://drive.google.com/file/d/18i05XUe09MsqyThxqpoNRpej_vFujP_f/preview',
  },
  {
    name: 'space-landscape',
    src: 'https://drive.google.com/file/d/1tKfa9dA0Qjh1mw8k5g8832OhqJ0TwbQ9/preview',
  },
  {
    name: 'techniques-art',
    src: 'https://drive.google.com/file/d/1PXJY3LLM5YgpaA4C9YkPWzejkNPjNoGA/preview',
  },
  {
    name: 'formation-of-color-perception',
    src: 'https://drive.google.com/file/d/1r1no8L4IAaPr1M_1cn9Vkjk7NMKsiHFP/preview',
  },
  {
    name: 'right-hemisphere-drawing',
    src: 'https://drive.google.com/file/d/1ImYKuL9OTNqxWZsVMJhHbbMTOD5FDO_Y/preview',
  },
];

const Techniques = () => {
  const { t } = useTranslation();

  return (
    <>
      <Box id='metodicheskiy-fond' />
      <Container maxWidth={false} id='techniques-wrap'>
        <Container
          maxWidth='md'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            py: 5,
          }}>
          <Typography align='center' variant='h2' component='h1' sx={{ mb: 3 }}>
            {t('techniques.header')}
          </Typography>
          <Box sx={{ width: '100%' }}>
            {techniquesData.map((item, index) => (
              <Accordion className='accordion'>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={`panel${index + 1}-content`}
                  id={`panel${index + 1}-header`}>
                  <Typography variant='h6'>
                    {t(`techniques.accordion.${item.name}`)}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <iframe
                    src={item.src}
                    title={t(`techniques.accordion.${item.name}`)}
                    width='100%'
                    height='600'
                    allow='autoplay'></iframe>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Container>
      </Container>
    </>
  );
};

export default Techniques;
