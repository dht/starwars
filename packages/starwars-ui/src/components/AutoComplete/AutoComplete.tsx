import { Button, CircularProgress, ListSubheader } from '@mui/material';
import MuiAutocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
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

  const handleOpen = () => {
    setOpen(true);
  };

  const handleChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
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
        onOpen={handleOpen}
        onClose={handleClose}
        isOptionEqualToValue={(option, value) => option.value === value.value}
        getOptionLabel={(option) => option.label}
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
