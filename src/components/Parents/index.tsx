import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

import parentsImg from '../../assets/images/parents.png';
import rainbowImg from '../../assets/images/rainbow.png';

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
        <Grid container>
          <Grid
            container
            item
            xs={12}
            md={6}
            sx={{ alignItems: 'end', justifyContent: 'center' }}>
            <Grid item>
              <Link
                href='https://drive.google.com/file/d/1W83dd5H4TSgwz__on3QzJYRJ81dxVjJ2/preview'
                target='_blank'>
                <Box component='img' src={parentsImg} width='100%' height='100%' />
              </Link>
            </Grid>
            <Grid item>
              <Typography align='center'>
                <Link
                  underline='hover'
                  variant='h5'
                  href='https://drive.google.com/file/d/1W83dd5H4TSgwz__on3QzJYRJ81dxVjJ2/preview'
                  target='_blank'>
                  {t('parents.main.recommendations')}
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid
            container
            item
            xs={12}
            md={6}
            sx={{ alignItems: 'end', justifyContent: 'center' }}>
            <Grid item>
              <Typography align='center'>
                <Link
                  href='https://drive.google.com/file/d/1W83dd5H4TSgwz__on3QzJYRJ81dxVjJ2/preview'
                  target='_blank'>
                  <Box component='img' src={rainbowImg} width='100%' height='100%' />
                </Link>
              </Typography>
            </Grid>
            <Grid item>
              <Link
                underline='hover'
                variant='h5'
                href='https://drive.google.com/file/d/15Ba2I9VJNazsqXpfIb_-JJwogkkTPaxn/preview'
                target='_blank'>
                {t('parents.main.club')}
              </Link>
            </Grid>
          </Grid>
        </Grid>
        {/* <Box width='50%'>
            <Box component='img' src={parentsImg} width='100%' height='100%' />
            <Link
              underline='hover'
              variant='h5'
              href='https://drive.google.com/file/d/1W83dd5H4TSgwz__on3QzJYRJ81dxVjJ2/preview'
              target='_blank'>
              {t('parents.main.recommendations')}
            </Link>
          </Box>
          <Box width='50%'>
            <Box component='img' src={rainbowImg} width='100%' height='100%' />
            <Link
              underline='hover'
              variant='h5'
              href='https://drive.google.com/file/d/15Ba2I9VJNazsqXpfIb_-JJwogkkTPaxn/preview'
              target='_blank'>
              {t('parents.main.club')}
            </Link>
          </Box> */}
      </Container>
    </Container>
  );
};

export default Parents;
