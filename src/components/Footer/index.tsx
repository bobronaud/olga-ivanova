import { useTranslation } from 'react-i18next';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

import tgIcon from '../../assets/images/socialIcons/telegram.png';
import vkIcon from '../../assets/images/socialIcons/vk.png';

const icons = [
  { icon: vkIcon, link: 'https://vk.com/id480523342' },
  { icon: tgIcon, link: 'https://t.me/olenkanoskova70' },
];

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <Container maxWidth={false} id='footer'>
      <Container
        maxWidth='md'
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          py: 2,
        }}>
        <Typography align='center'>{t('footer.address')}</Typography>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Typography sx={{ mr: 1 }}>{t('footer.email')}</Typography>
          {icons.map(({ icon, link }, index) => (
            <Link key={index} href={link} target='_blank'>
              <Box sx={{ mr: 1 }} component='img' src={icon} />
            </Link>
          ))}
        </Box>
        <Typography align='center'>{t('footer.name') + ' © ' + currentYear}</Typography>
      </Container>
    </Container>
  );
};

export default Footer;
