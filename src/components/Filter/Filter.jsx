import { useDispatch, useSelector } from 'react-redux';
import { selectFilter } from 'redux/contacts/selectors';
import { updateFilter } from 'redux/contacts/filterSlice';
import { TextField } from '@mui/material';

const Filter = () => {
  const value = useSelector(selectFilter);
  const dispatch = useDispatch();

  return (
    <>
      <TextField
        label="Find contacts by name"
        variant="outlined"
        onChange={e => dispatch(updateFilter(e.target.value))}
        id="Find contacts by name"
        value={value}
        size="small"
        sx={{ mb: 4 }}
        InputLabelProps={{ shrink: true }}
      />
    </>
  );
};

export default Filter;
