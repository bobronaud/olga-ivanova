import Box from '@mui/material/Box';
import image from '../../assets/images/withPuplis.jpg';

const Image = () => {
  return (
    <Box className='image-wrap' sx={{ width: '100%' }}>
      <a href={image}>
        <Box
          className='img'
          component='img'
          src={image}
          sx={{ width: '100%', height: '100%' }}
        />
      </a>
    </Box>
  );
};

export default Image;
