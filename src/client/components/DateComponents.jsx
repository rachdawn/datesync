import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DateComponents = ({ dates }) => (
  <>
    {dates.map((item, index) => (
      <article key={index}>
        <Card className="date-component-cards">
          <CardMedia
            component="img"
            image={
              item.movie_photo_url ||
              item.restaurant_photo_url ||
              item.event_photo_url ||
              item.activity_photo_url
            }
            alt="date"
          />
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography
                className="date-component-title"
                gutterBottom
                variant="title"
                component="div"
              >
                {item.movie_title ||
                  item.restaurant_name ||
                  item.event_title ||
                  item.activity_type}
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography component="div" className="date-component-info">
                <div>
                  {item.movie_theatre && <p>{item.movie_theatre}</p>}
                  <hr />
                  {item.movie_address && <p>{item.movie_address}</p>}
                  {item.restaurant_address && <p>{item.restaurant_address}</p>}
                  {item.event_description && <p>{item.event_description}</p>}

                  {item.activity_location && (
                    <p>{item.activity_location_name}</p>
                  )}
                  {item.activity_address && <p>{item.activity_address}</p>}
                </div>
              </Typography>
              <Typography component="div" className="date-component-info">
                <hr />
                {item.event_url && (
                  <a href={item.event_url}>{item.event_url}</a>
                )}

                {item.restaurant_website_url && (
                  <a href={item.restaurant_website_url}>
                    {item.restaurant_website_url}
                  </a>
                )}
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Card>
      </article>
    ))}
  </>
);

export default DateComponents;
