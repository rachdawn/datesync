import "../styles/CreateDate.scss";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";


const CreateDate = () => {

  const data = [
    {
      src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Healthy date",
    },
    {
      src: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Fancy lunch",
    },
    {
      src: "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Late-night drinks",
    },
    {
      src: "https://images.unsplash.com/photo-1539056276907-dc946d5098c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      title: "Friends Dinner",
    }
  ];

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <main>
        <section className="featured">
          <div className="feature-carousel">
            <h3>Featured</h3>
            <span className="elements">
              {data.map((item, index) => (
                <div key={index}>
                  <img src={item.src} alt="" />
                  <p>{item.title}</p>
                </div>
              ))}
            </span>
          </div>
        </section>

        <section className="time-picker">
          <DateTimePicker
            className="picker"
            label="Choose event date and time"
          />
        </section>

        <section className="date-components">
          <div className="component">
            <div className="buttons">
              <button>Add Restaurant</button>
              <button>Add Event</button>
              <button>Add Movie</button>
              <button>Add Activities</button>
            </div>
          </div>
          <div className="component">
            <Box sx={{ "& > :not(style)": { m: 1 } }}>
              <Fab
                className="add-button"
                size="small"
                color="secondary"
                aria-label="add"
              >
                <AddIcon />
              </Fab>
            </Box>
          </div>
        </section>
        <section className="complete">
          <div className="buttons">
            <button>Save for later</button>
            <button>Complete Date</button>
          </div>
        </section>
      </main>
    </LocalizationProvider>
  );
};

export default CreateDate;
