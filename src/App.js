import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import { Provider } from 'react-redux';

import routes from './routes/routes';
import Header from './Header/Header';
import store from './store';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2e7bf8'
    },
    secondary: {
      // light: '#0066ff',
      main: '#f8f8f8'
      // contrastText: '#ffcc00'
    }
  }
});

const storeConfig = store();

function App() {
  return (
    <Provider store={storeConfig}>
      <ThemeProvider theme={theme}>
        <Router>
          <Header />
          <Switch>
            {routes.map((route, i) => (
              <Route
                key={i}
                path={route.path}
                component={route.component}
                exact={route.exact}
              />
            ))}
          </Switch>
        </Router>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
