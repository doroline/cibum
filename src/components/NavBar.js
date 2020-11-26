import {Component, useState} from 'react';
import { testiNav } from '../constants';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import HomeIcon from '@material-ui/icons/Home';
import FaceIcon from '@material-ui/icons/Face';
import AppsIcon from '@material-ui/icons/Apps';
import PhoneIcon from '@material-ui/icons/Phone';

const useStyles = makeStyles({
    root: {
      width: 1000,
    },
  });

function NavBar(props) {
const classes = useStyles();
  const [value, setValue] = useState(0);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label={testiNav[props.lingua].home} icon={<HomeIcon />} />
      <BottomNavigationAction label={testiNav[props.lingua].chiSiamo} icon={<FaceIcon />} />
      <BottomNavigationAction label={testiNav[props.lingua].progetti} icon={<AppsIcon />} />
      <BottomNavigationAction label={testiNav[props.lingua].contatti} icon={<PhoneIcon />} />
    </BottomNavigation>
  );
}

export default NavBar;