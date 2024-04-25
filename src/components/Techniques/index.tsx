import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

const techniquesData = [
  {
    name: 'graphics-texture',
    link: 'https://drive.google.com/file/d/1X-bypmaDHLOkPrdYfjs1qQWy7eCFsnBw/preview',
  },
  {
    name: 'painting-of-berries&leaves',
    link: 'https://drive.google.com/file/d/1JZOiauUaL2Uw7g1LhzEFDFoK9UCI1DnT/preview',
  },
  {
    name: 'strokes-in-a-circle',
    link: 'https://drive.google.com/file/d/1M0XB2WOnC9G2ZTQJPgVGcfqASd8uWBVF/preview',
  },
  {
    name: 'composition',
    link: 'https://drive.google.com/file/d/1Eh993KYrz_cTZRjQrYeruurippWIjXNt/preview',
  },
  {
    name: 'winter-tree',
    link: 'https://drive.google.com/file/d/1s6c_OXf1m-CkMg7ZzNiA7Z4s9cKA5qPi/preview',
  },
  {
    name: 'practice-drawing',
    link: 'https://drive.google.com/file/d/1KDiim4g7F19ljALiZ0GOeMXI_a_zb6hJ/preview',
  },
  {
    name: 'millefiori-technique',
    link: 'https://drive.google.com/file/d/18i05XUe09MsqyThxqpoNRpej_vFujP_f/preview',
  },
  {
    name: 'space-landscape',
    link: 'https://drive.google.com/file/d/1tKfa9dA0Qjh1mw8k5g8832OhqJ0TwbQ9/preview',
  },
  {
    name: 'techniques-art',
    link: 'https://drive.google.com/file/d/1PXJY3LLM5YgpaA4C9YkPWzejkNPjNoGA/preview',
  },
  {
    name: 'formation-of-color-perception',
    link: 'https://drive.google.com/file/d/1r1no8L4IAaPr1M_1cn9Vkjk7NMKsiHFP/preview',
  },
  {
    name: 'right-hemisphere-drawing',
    link: 'https://drive.google.com/file/d/1ImYKuL9OTNqxWZsVMJhHbbMTOD5FDO_Y/preview',
  },
];

const Techniques = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth={false} id='techniques-wrap'>
      <Container
        maxWidth='md'
        id='metodicheskiy-fond'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 5,
        }}>
        <Typography align='center' variant='h2' component='h1' sx={{ mb: 3 }}>
          {t('techniques.header')}
        </Typography>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', gap: 1 }}>
          {techniquesData.map((item, index) => (
            <Link
              key={index}
              underline='hover'
              variant='h6'
              color='#292928'
              href={item.link}
              target='_blank'>
              - {t(`techniques.accordion.${item.name}`)}
            </Link>
          ))}
        </Box>
      </Container>
    </Container>
  );
};

export default Techniques;
