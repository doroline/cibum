import {Component, useState} from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

  function ScegliLingua(props) {
    const cambiaLingua = (e) =>{
        props.setLingua(e);
      };

    return (
      <div>
        <FormControl variant="filled">
          <Select
            labelId="demo-simple-select-filled-label"
            id="demo-simple-select-filled"
          >
            <MenuItem value="it" onClick={() => {cambiaLingua("it")}}>it</MenuItem>
            <MenuItem value="en" onClick={() => {cambiaLingua("en")}}>en</MenuItem>
          </Select>
        </FormControl>
      </div>
    );
  }

  export default ScegliLingua;