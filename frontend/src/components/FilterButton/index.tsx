import React, { MouseEvent, useState } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FilterListIcon from '@mui/icons-material/FilterList';

import { Container, FiltButton } from './styles';

const FilterButton: React.FC = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const open = Boolean(anchorEl);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container>
      <FiltButton
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <span>Filter</span>
         <FilterListIcon fontSize="small"/>
      </FiltButton>

      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="CashIn"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={<Checkbox defaultChecked />}
            label="CashOut"
          />
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default FilterButton;
