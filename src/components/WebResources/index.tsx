import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const webResoursesData = [
  'http://www.artlib.ru/',
  'http://doshkolnik.ru/index.php',
  'https://smallbay.ru/',
  'https://shm.ru/?ysclid=lsjy83pdx68274016',
  'https://kizhi.karelia.ru/',
  'http://medvejata.ru/',
  'https://www.vospitatelru.ru/',
  'https://dovosp.ru/j_dv?ysclid=lsla4sjv4s909982843',
  'http://unnaturalist.ru/',
  'http://louvre.historic.ru/',
  'https://muar.ru/?ysclid=lsjyb07lzq667268637',
  'https://www.gallery-projects.com/',
  'http://russianculture.ru/',
  'https://rusmuseum.ru/?ysclid=lsjy6u3dc9101531245',
  'https://stranamasterov.ru/?ysclid=lsjyh1uoei965062644',
  'https://shm.ru/?ysclid=lsjyfqfzbz405288011',
  'http://www.spbculture.ru/ru/',
  'http://hermitagemuseum.org/',
  'https://pano.hermitagemuseum.org/3d/html/pwoa/main/?ysclid=lsjy09inf0593629422',
];

const WebResources = () => {
  const { t } = useTranslation();

  return (
    <Container maxWidth={false} id='webresources-wrap'>
      <Container
        maxWidth='md'
        id='poleznie-internet-resursi'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          py: 5,
        }}>
        <Typography variant='h2' component='h1' sx={{ mb: 3 }}>
          {t('webresources.header')}
        </Typography>
        <Box sx={{ width: '100%' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start' }}>
            {webResoursesData.map((item, index) => {
              const serialNumber = index + 1;
              return (
                <Link
                  key={index}
                  target='_blank'
                  variant='h6'
                  href={item}>{`${serialNumber}. ${t(
                  `webresources.links.${index}`,
                )}`}</Link>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default WebResources;
