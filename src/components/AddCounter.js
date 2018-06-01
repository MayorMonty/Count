import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Button from "@material-ui/core/Button";

export default props => (
  <Button variant="fab" color="primary" aria-label="add" {...props}>
    <AddIcon />
  </Button>
);
