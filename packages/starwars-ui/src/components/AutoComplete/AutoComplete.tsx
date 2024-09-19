import React from 'react';
import { Wrapper } from './AutoComplete.style';
import MuiAutocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import { options } from './AutoComplete.options';

export type AutoCompleteProps = {};

export function AutoComplete(_props: AutoCompleteProps) {
  return (
    <Wrapper className='AutoComplete-wrapper' data-testid='AutoComplete-wrapper'>
      <MuiAutocomplete
        options={options.sort((a, b) => -b.firstLetter.localeCompare(a.firstLetter))}
        groupBy={(option) => option.firstLetter}
        getOptionLabel={(option) => option.title}
        sx={{ width: 300, backgroundColor: 'white' }}
        renderInput={(params) => <TextField variant='filled' {...params} label='Search' />}
      />
    </Wrapper>
  );
}

export default AutoComplete;
