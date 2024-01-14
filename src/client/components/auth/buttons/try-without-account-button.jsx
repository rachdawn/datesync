import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const TryWithoutAccountButton = ({ className }) => {

  return (
    <Link to="/create-date" style={{ textDecoration: "none" }}>
      <Button
        variant="contained"
        color="secondary" 
        className={className}
      >
        Try without account
      </Button>
    </Link>
  );
};

export default TryWithoutAccountButton;