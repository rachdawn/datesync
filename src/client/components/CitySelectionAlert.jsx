import Alert from '@mui/material/Alert';
import ClickAwayListener from '@mui/material/ClickAwayListener';

const CitySelectionAlert = ({ onClose }) => {
  return (
    <div className="alert-notification">
    <ClickAwayListener onClickAway={onClose}>
    <Alert 
      severity="warning" 
      variant="outlined" 
      sx={{ 
        borderColor: '#662d91', 
        color: '#662d91', 
        '& .MuiAlert-icon': {
          color: '#662d91', 
        },
        '& .MuiAlert-message': {
          color: '#662d91', 
        }
      }}
      >
        Please select a city first.
      </Alert>
    </ClickAwayListener>
    </div>
  );
};

export default CitySelectionAlert;
