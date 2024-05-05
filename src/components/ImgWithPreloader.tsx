import React, { useState, useEffect } from 'react';

import Box from '@mui/material/Box';

type Props = {
  preloader: string;
  image: string;
  [k: string]: any;
};

const ImgWithPreloader = ({ preloader, image, ...rest }: Props) => {
  const [src, setSrc] = useState(preloader);
  useEffect(() => {
    setSrc(image);
  }, []);
  return <Box component='img' src={src} {...rest} />;
};

export default ImgWithPreloader;
