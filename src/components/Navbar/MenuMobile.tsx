import { useState } from 'react';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type sectionType = {
  name: string;
  hash: string;
};

interface PropsType {
  sections: sectionType[];
  handleNavigate: (hash: string) => void;
}

const MenuMobile = ({ sections, handleNavigate }: PropsType) => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <Box>
      <IconButton
        size='large'
        aria-label='nav menu'
        aria-controls='menu-appbar'
        aria-haspopup='true'
        onClick={handleOpenNavMenu}
        color='inherit'>
        <MenuIcon />
      </IconButton>
      <Menu
        id='menu-appbar'
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        keepMounted
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: 'block',
        }}>
        {sections.map((section) => (
          <MenuItem
            key={section.name}
            onClick={() => {
              handleNavigate(section.hash);
              handleCloseNavMenu();
            }}>
            {section.name}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
};

export default MenuMobile;
