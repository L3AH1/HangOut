import '../styles/globals.css'

// Importing the Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

// pick a date util library
import DateFnsUtils from '@date-io/date-fns';
import { MuiPickersUtilsProvider,} from '@material-ui/pickers';
import React from "react";
import frLocale from "date-fns/locale/fr";

const localeMap = {
  fr: frLocale,
};

function MyApp({ Component, pageProps }) {
  return (
      <MuiPickersUtilsProvider utils={DateFnsUtils} locale={localeMap["fr"]}>
        <Component {...pageProps} />
      </MuiPickersUtilsProvider>
  );
}

export default MyApp
