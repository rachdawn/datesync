import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import closeSymbol from "/src/client/assets/closeSymbol.svg";

export default function MoviesModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Search Movies</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className="search-modal">
          <div className="modal-top">
            <button className="close-button" onClick={handleClose}>
              <img src={closeSymbol} alt="close symbol" />
            </button>
            <Typography
              className="modal-title"
              id="modal-modal-title"
              variant="h6"
              component="h2"
            >
              Search Movies
            </Typography>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
