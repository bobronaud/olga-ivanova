import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

type sectionType = {
  name: string;
  hash: string;
};

interface PropsType {
  sections: sectionType[];
  handleNavigate: (hash: string) => void;
}

const MenuDesktop = ({ sections, handleNavigate }: PropsType) => {
  return (
    <Box sx={{ display: 'flex' }}>
      {sections.map((section) => (
        <Button
          key={section.name}
          onClick={() => handleNavigate(section.hash)}
          sx={{ my: 0, p: 2, color: 'white', display: 'block', fontWeight: 600 }}>
          {section.name}
        </Button>
      ))}
    </Box>
  );
};

export default MenuDesktop;
