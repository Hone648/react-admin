import {
  Box,
  useTheme,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Header from '../../components/header';
import { tokens } from '../../theme';

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            An Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            dolorum odit perspiciatis, quae voluptate necessitatibus.
            Perferendis asperiores illo et dolor vero inventore, deserunt nulla.
            Voluptatum ea rem porro necessitatibus dolorem!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            dolorum odit perspiciatis, quae voluptate necessitatibus.
            Perferendis asperiores illo et dolor vero inventore, deserunt nulla.
            Voluptatum ea rem porro necessitatibus dolorem!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Yet Another Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            dolorum odit perspiciatis, quae voluptate necessitatibus.
            Perferendis asperiores illo et dolor vero inventore, deserunt nulla.
            Voluptatum ea rem porro necessitatibus dolorem!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Seriously Important Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            dolorum odit perspiciatis, quae voluptate necessitatibus.
            Perferendis asperiores illo et dolor vero inventore, deserunt nulla.
            Voluptatum ea rem porro necessitatibus dolorem!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Not That Important of a Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            dolorum odit perspiciatis, quae voluptate necessitatibus.
            Perferendis asperiores illo et dolor vero inventore, deserunt nulla.
            Voluptatum ea rem porro necessitatibus dolorem!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            A Really Stupid Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            dolorum odit perspiciatis, quae voluptate necessitatibus.
            Perferendis asperiores illo et dolor vero inventore, deserunt nulla.
            Voluptatum ea rem porro necessitatibus dolorem!
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Last Question
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
            dolorum odit perspiciatis, quae voluptate necessitatibus.
            Perferendis asperiores illo et dolor vero inventore, deserunt nulla.
            Voluptatum ea rem porro necessitatibus dolorem!
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
export default FAQ;
