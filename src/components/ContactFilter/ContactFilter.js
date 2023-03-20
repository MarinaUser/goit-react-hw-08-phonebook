import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/contacts/filtersSlice';
import { selectValueFilter } from 'redux/contacts/contactSelectors';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

export const Filter = () => {
  const filter = useSelector(selectValueFilter);
  const dispatch = useDispatch(setFilter);

  const handleFilterChange = e => {
    dispatch(setFilter(e.currentTarget.value));
  };
  return (
    <Box
     sx={{
              '& label.Mui-focused': {
                color: 'blueviolet',
              },

              '& .MuiOutlinedInput-root': {
                '&.Mui-focused fieldset': {
                  borderColor: 'blueviolet',
                },
              },
            }}>
    <TextField
      id="logFilter"
      label="Find contact by name"
      name="filter"
      value={filter}
      onChange={handleFilterChange}
      sx={{ width: 350, marginBottom: 3 }}
      size="small"
      />
      </Box>
  );
};