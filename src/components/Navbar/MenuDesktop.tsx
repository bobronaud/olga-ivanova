import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

interface PropsType {
  sections: string[];
  handleNavigate: () => null;
}

const MenuDesktop = ({ sections, handleNavigate }: PropsType) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {sections.map((section) => (
        <Button
          key={section}
          onClick={handleNavigate}
          sx={{ my: 0, p: 2, color: 'white', display: 'block', fontWeight: 600 }}>
          {section}
        </Button>
      ))}
    </Box>
  );
};

export default MenuDesktop;
