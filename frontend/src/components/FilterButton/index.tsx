import React, { MouseEvent, useState } from 'react';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import FilterListIcon from '@mui/icons-material/FilterList';

import { Container, FiltButton } from './styles';

export interface FilterButtonProps {
  update: Function
}

const FilterButton: React.FC<FilterButtonProps> = (props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const [filterParams, setFilterParams] = useState({
    cashIn: true,
    cashOut: true,
  });

  const handleChange = (event: any) => {
    const newParams = {
      ...filterParams,
      [event.target.name]: event.target.checked,
    }
    console.log("🚀 ~ file: index.tsx ~ line 25 ~ handleChange ~ newParams", newParams)
    setFilterParams(newParams);
    sendNewReqWithFilters(newParams)
  };

  const sendNewReqWithFilters = (params: any) => {
    if (params.cashIn && params.cashOut) return props.update()
    if (!params.cashIn && !params.cashOut) return props.update('')
    params.cashIn
      ? props.update('/account?filter=cashin')
      : props.update('/account?filter=cashout')
  }

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
        <FilterListIcon fontSize="small" />
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
            control={
              <Checkbox
                name="cashIn"
                checked={filterParams.cashIn}
                onChange={(e) => handleChange(e)}
              />
            }
            label="CashIn"
          />
        </MenuItem>
        <MenuItem>
          <FormControlLabel
            control={
              <Checkbox
                name="cashOut"
                checked={filterParams.cashOut}
                onChange={(e) => handleChange(e)}
              />
            }
            label="CashOut"
          />
        </MenuItem>
      </Menu>
    </Container>
  );
};

export default FilterButton;
