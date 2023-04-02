import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const ExpenseCard = ({expense}) => {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {expense.type}
        </Typography>
        <Typography variant="h5" component="div">
         {expense.description}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {expense.date}
        </Typography>
        <Typography variant="body2">
        {expense.amount}
        </Typography>
      </CardContent>
      <CardActions >
        <IconButton><EditIcon/></IconButton>
        <IconButton><DeleteIcon/></IconButton>
      </CardActions>
    </Card>
  );
};
