import { Component, useState } from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

function BandieraLingua(props) {
  const cambiaLingua = (linguaCliccata) => {
    props.setLingua(linguaCliccata);
  };

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <Button variant="contained" color="primary" {...bindTrigger(popupState)}>
            LINGUA
          </Button>
          <Menu {...bindMenu(popupState)}>
            <MenuItem onClick={() => { cambiaLingua("it"); }}>it</MenuItem>
            <MenuItem onClick={() => { cambiaLingua("en"); }}>en</MenuItem>
          </Menu>
        </>
      )}
    </PopupState>
  );
}

export default BandieraLingua;