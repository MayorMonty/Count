import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const styles = {
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    marginBottom: 16,
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
};

const SimpleCard = props => {
  const { classes } = props;

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} color="textSecondary">
            {props.value.name}
          </Typography>
          <Typography variant="headline" component="title">
            {props.value.value}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            color="primary"
            onClick={() => props.update(props.value.value - 1)}
          >
            Minus
          </Button>
          <Button
            color="primary"
            onClick={() => props.update(props.value.value + 1)}
          >
            Plus
          </Button>
          <Button color="primary" onClick={props.delete}>
            Delete Counter
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default withStyles(styles)(SimpleCard);
