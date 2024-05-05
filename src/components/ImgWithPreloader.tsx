import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

import Box from '@mui/material/Box';

type Props = {
  preloader: string;
  image: string;
};

const ImgWithPreloader = ({ preloader, image }: Props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const [src, setSrc] = useState(preloader);
  useEffect(() => {
    if (inView) setSrc(image);
  }, [inView]);
  return (
    <Box
      ref={ref}
      component='img'
      src={src}
      className='img'
      sx={{ width: '100%', height: '100%' }}
    />
  );
};

export default ImgWithPreloader;
