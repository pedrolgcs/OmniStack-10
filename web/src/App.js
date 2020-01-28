import React from 'react';
import { Router } from 'react-router-dom';
import history from './services/history';

// configs
import './config/ReactotronConfig';

// routes
import Routes from './routes';

// styles
import GlobalStyled from './styles/global';

function App() {
  return (
    <>
      <Router history={history}>
        <GlobalStyled />
        <Routes />
      </Router>
    </>
  );
}

export default App;
