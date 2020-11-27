import {Component, useState} from 'react';
import { testiNav } from '../constants';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
  root: {
    width: 500,
  },
});

function BarraNavigazione(props) {
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
      <BottomNavigationAction label={testiNav[props.lingua].home} icon={<RestoreIcon />} />
      <BottomNavigationAction label={testiNav[props.lingua].chiSiamo} icon={<FavoriteIcon />} />
      <BottomNavigationAction label={testiNav[props.lingua].contatti} icon={<LocationOnIcon />} />
    </BottomNavigation>
  );
}

export default BarraNavigazione;