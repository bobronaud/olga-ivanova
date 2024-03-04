import AppBar from '@mui/material/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import logo from '../../assets/images/logo64.png';
import MenuDesktop from './MenuDesktop';
import MenuMobile from './MenuMobile';

const sections = [
  'В начало',
  'Обо мне',
  'Родителям',
  'Воспитанники',
  'Методички',
  'Ресурсы',
];

const Navbar = () => {
  const theme = useTheme();
  const isDesktopUsing = useMediaQuery(theme.breakpoints.up('md'));

  const handleNavigate = () => null;

  return (
    <>
      <AppBar position='fixed'>
        <Container maxWidth='md'>
          <Toolbar sx={{ justifyContent: 'space-between' }}>
            <img src={logo} alt='logo cute flower' />
            {isDesktopUsing ? (
              <MenuDesktop sections={sections} handleNavigate={handleNavigate} />
            ) : (
              <MenuMobile sections={sections} handleNavigate={handleNavigate} />
            )}
          </Toolbar>
        </Container>
      </AppBar>
      <Toolbar />
    </>
  );
};

export default Navbar;
