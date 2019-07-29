import React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Notes = () => {
  return (
    <Card style={{ minWidth: 275 }}>
      <CardContent>
        <Typography style={{ fontSize: 25 }} color="textSecondary" gutterBottom>
          NOTES APP
        </Typography>
        <Typography variant="h5" component="h2">
          Subject
        </Typography>
        <Typography style={{ marginBottom: 12 }} color="textSecondary">
          Lorem Ipsum
        </Typography>
        <Typography variant="body2" component="p">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export default Notes;
