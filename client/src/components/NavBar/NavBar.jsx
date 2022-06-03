import * as React from 'react';
import {BottomNavigationAction,BottomNavigation,Typography} from '@mui/material/';
import FolderIcon from '@mui/icons-material/Folder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';
import VideogameAssetIcon from '@mui/icons-material/VideogameAsset';


export default function NavBar() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 100/100 }} value={value} onChange={handleChange}>
        <VideogameAssetIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
         <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 100,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 800,
              letterSpacing: '.3rem',
              color: 'success',
              textDecoration: 'none',
            }}
          >SNES
          </Typography>
      <BottomNavigationAction
        label="Menu"
        value="recents"
        icon={<HomeIcon />}
      />

      <BottomNavigationAction
        label="Add"
        value="nearby"
        icon={<AddCircleIcon />}
      />
      <BottomNavigationAction label="FullSet" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}