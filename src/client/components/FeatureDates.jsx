import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "../styles/FeatureDates.scss";

export default function FeatureDates({ date }) {
  return (
    <Card className="feature-card">
      <CardActionArea>
        <CardMedia component="img" height="140" image={date.src} alt="date" />
        <CardContent className="feature-desktop">
          <Typography
            className="date-title"
            gutterBottom
            variant="h6"
            component="div"
          >
            {date.title}
          </Typography>
          <Typography variant="body" color="text.secondary">
            {date.description}
          </Typography>
        </CardContent>

        <Accordion className="feature-mobile">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography className="date-title">{date.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{date.description}</Typography>
          </AccordionDetails>
        </Accordion>
      </CardActionArea>
    </Card>
  );
}
