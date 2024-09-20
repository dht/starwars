import {
  Button,
  CircularProgress,
  ListSubheader,
  Autocomplete as MuiAutocomplete,
  TextField,
} from '@mui/material';
import { debounce } from 'lodash';
import React, { useState } from 'react';
import { List, ListItem, Wrapper } from './AutoComplete.style';
import { Option } from './AutoComplete.types';

export type AutoCompleteProps = {
  apiMethod: (q: string) => Promise<Option[]>;
  onGroupClick?: (group: string) => void;
};

export function AutoComplete(props: AutoCompleteProps) {
  const [open, setOpen] = useState(false);
  const [options, setOptions] = useState<Option[]>([]);
  const [loading, setLoading] = useState(false);

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    if (!value) {
      handleClose();
      return;
    }

    setOpen(true);
    setLoading(true);
    const result = await props.apiMethod(value);
    setOptions(result);
    setLoading(false);
  };

  const handleDebouncedChange = debounce(handleChange, 300);

  const handleClose = () => {
    setOpen(false);
    setOptions([]);
    setLoading(false);
  };

  function onViewAll(group: string) {
    if (!props.onGroupClick) {
      return;
    }

    props.onGroupClick(group);
  }

  function renderGroup(params: any) {
    return (
      <List
        key={`group-${params.group}`}
        subheader={<ListSubheader component='div'>{params.group}</ListSubheader>}
      >
        {params.children}
        <ListItem key='view-all' onClick={() => onViewAll(params.group)}>
          <Button>View all {params.group}...</Button>
        </ListItem>
      </List>
    );
  }

  return (
    <Wrapper className='AutoComplete-wrapper' data-testid='AutoComplete-wrapper'>
      <MuiAutocomplete
        open={open}
        onClose={handleClose}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        getOptionLabel={(option) => option.label}
        noOptionsText='No results found'
        options={options}
        groupBy={(option) => option.category}
        loading={loading}
        sx={{ width: 300, backgroundColor: 'white' }}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Search the universe...'
            onChange={handleDebouncedChange}
            variant='filled'
            slotProps={{
              input: {
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color='inherit' size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              },
            }}
          />
        )}
        renderGroup={renderGroup}
      />
    </Wrapper>
  );
}

export default AutoComplete;
