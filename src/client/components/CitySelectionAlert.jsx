import Alert from '@mui/material/Alert';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const CitySelectionAlert = ({ onClose }) => {
  return (
    <ClickAwayListener onClickAway={onClose}>
      <Alert severity="info">
        Please select a city first.
      </Alert>
    </ClickAwayListener>
  );
};

export default CitySelectionAlert;
