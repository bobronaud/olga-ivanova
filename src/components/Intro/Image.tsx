import Box from '@mui/material/Box';

import ImgWithPreloader from '../ImgWithPreloader';
import image from '../../assets/images/withPuplis.jpg';
import preloader from '../../assets/images/preloaders/withPuplisMock.jpg';

const Image = () => {
  return (
    <Box className='image-wrap' sx={{ width: '100%' }}>
      <a href={image}>
        <ImgWithPreloader preloader={preloader} image={image} />
      </a>
    </Box>
  );
};

export default Image;
