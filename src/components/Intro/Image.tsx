import Box from '@mui/material/Box';

import ImgWithPreloader from '../ImgWithPreloader';
import image from '../../assets/images/withPuplis.jpg';
import preloader from '../../assets/images/preloaders/withPuplisMock.jpg';

const Image = () => {
  return (
    <Box className='image-wrap' sx={{ width: '100%' }}>
      <a href={image}>
        <ImgWithPreloader
          className='img'
          preloader={preloader}
          image={image}
          sx={{ width: '100%', height: '100%' }}
        />
      </a>
    </Box>
  );
};

export default Image;
