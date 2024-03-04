import Box from '@mui/material/Box';
import image from '../../assets/images/img-intro.jpg';

const Image = () => {
  return (
    <Box className='image-wrap' sx={{ width: '100%' }}>
      <Box
        className='intro-img'
        component='img'
        src={image}
        sx={{ width: '100%', height: '100%' }}
      />
    </Box>
  );
};

export default Image;
