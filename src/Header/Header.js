import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useHistory } from 'react-router-dom';

import { Button } from '@material-ui/core';

const Header = () => {
  let history = useHistory();

  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-around',
              width: '100%'
            }}
          >
            <Typography variant="h6" noWrap>
              Weather application
            </Typography>
            <div>
              <Button onClick={() => history.push('/')}>Home</Button>
              <Button onClick={() => history.push('/favorites')}>
                Favorities
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
