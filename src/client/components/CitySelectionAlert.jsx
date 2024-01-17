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
          color: '#e1cce6', 
          fontSize: '0.75rem',
        },
        '& .MuiAlert-message': {
          color: '#e1cce6', 
          fontSize: '0.75rem'
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
