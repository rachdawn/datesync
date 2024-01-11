import * as React from "react";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import { CardActionArea } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const DateComponents = ({ dates }) => (
  <>
    {dates.map(
      (item, index) =>
        item.movie_title && (
          <article key={index}>
            <Card className="date-component-cards">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={item.movie_photo_url}
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
                      {item.movie_title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="date-component-info" component="div">
                      <div>
                        <p>{item.movie_title}</p>
                        <p>{item.movie_theatre}</p>
                        <p>{item.movie_address}</p>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardActionArea>
            </Card>
          </article>
        )
    )}

    {dates.map(
      (item, index) =>
        item.restaurant_name && (
          <article key={index}>
            <Card className="date-component-cards">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={item.restaurant_photo_url}
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
                      {item.restaurant_name}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="date-component-info" component="div">
                      <div>
                        <p>{item.restaurant_name}</p>
                        <p>{item.restaurant_address}</p>
                        <a href={item.restaurant_website_url}>
                          {item.restaurant_website_url}
                        </a>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardActionArea>
            </Card>
          </article>
        )
    )}

    {dates.map(
      (item, index) =>
        item.event_title && (
          <article key={index}>
            <Card className="date-component-cards">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={item.event_photo_url}
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
                      {item.event_title}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="date-component-info" component="div">
                      <div>
                        <p>{item.event_title}</p>
                        <p>{item.event_description}</p>
                        <a href={item.event_url}>{item.event_url}</a>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardActionArea>
            </Card>
          </article>
        )
    )}

    {dates.map(
      (item, index) =>
        item.activity_type && (
          <article key={index}>
            <Card className="date-component-cards">
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={item.activity_photo_url}
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
                      {item.activity_type}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Typography className="date-component-info" component="div">
                      <div>
                        <p>{item.activity_type}</p>
                        <p>{item.activity_location}</p>
                        <p>{item.activity_address}</p>
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              </CardActionArea>
            </Card>
          </article>
        )
    )}
  </>
);

export default DateComponents;
