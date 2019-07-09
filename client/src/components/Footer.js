import React from 'react';
import { Grid, Menu, MenuItem } from 'semantic-ui-react';

function Footer( ) {
  return (
    <footer>
      <br/>
      <br/>
      <Grid>
        <Menu justified>
          <MenuItem
            eventKey={1}>
            Privacy Policy
          </MenuItem>
          <MenuItem
            eventKey={2}
            title="Item">
            Terms & Conditions
          </MenuItem>
          <MenuItem
            eventKey={3}>
            Contact Info
          </MenuItem>
        </Menu>

        <div className="text-center small copyright">
          © DPL 2019
        </div>
      </Grid>
    </footer>
  );
}

export default Footer;