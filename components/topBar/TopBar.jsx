import React from 'react';
import {
  AppBar, Toolbar, Typography, Grid
} from '@mui/material';
import './TopBar.css';

/**
 * Define TopBar, a React componment of project #5
 */
class TopBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <AppBar className="topbar-appBar" position="absolute">
        <Toolbar>
          <Grid container spacing={0}>
            <Grid item xs={3}>
              <Typography variant="h5" color="inherit">
                Group-4 Team
              </Typography>
            </Grid>
            <Grid item xs={9}>
              <Typography variant="h5" color="inherit">
                 {this.props.topName}
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default TopBar;
