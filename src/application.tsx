import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import CssBaseline from '@mui/material/CssBaseline';

import Landing from './Landing';
import resources from './locales';

const app = async () => {
  const defaultLanguage = 'ru';
  i18n.use(initReactI18next).init({
    resources,
    lng: defaultLanguage,
  });

  return (
    <>
      <CssBaseline />
      <Landing />
    </>
  );
};

export default app;
