import { Clear as ClearIcon, PropaneSharp, Search as SearchIcon } from '@mui/icons-material';
import { IconButton, InputAdornment, TextField } from '@mui/material';
import React, { useState } from 'react';
import { Wrapper } from './Search.style';

export type SearchProps = {
  value: string;
  onChange: (value: string) => void;
};

export function Search(props: SearchProps) {
  const { value } = props;

  const handleClear = () => {
    props.onChange('');
    // Clear any additional state or results here if needed
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <Wrapper className='Search-wrapper' data-testid='Search-wrapper'>
      <TextField
        value={value}
        sx={{ backgroundColor: 'white' }}
        onChange={handleChange}
        variant='outlined'
        placeholder='Search...'
        size='small'
        fullWidth
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position='start'>
                <SearchIcon />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position='end'>
                <IconButton onClick={handleClear} edge='end'>
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          },
        }}
      />
    </Wrapper>
  );
}

export default Search;
