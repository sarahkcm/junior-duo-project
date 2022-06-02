import * as React from 'react';
import {BottomNavigationAction,BottomNavigation} from '@mui/material/';
import FolderIcon from '@mui/icons-material/Folder';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import HomeIcon from '@mui/icons-material/Home';

export default function LabelBottomNavigation() {
  const [value, setValue] = React.useState('recents');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation sx={{ width: 100/100 }} value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="Menu"
        value="recents"
        icon={<HomeIcon />}
      />

      <BottomNavigationAction
        label="My Collection"
        value="nearby"
        icon={<AddCircleIcon />}
      />
      <BottomNavigationAction label="FullSet" value="folder" icon={<FolderIcon />} />
    </BottomNavigation>
  );
}
