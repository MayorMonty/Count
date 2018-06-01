import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";

export default class CreateCounterDialog extends Component {
  value = "";

  close() {
    this.props.onClose(this.value);
  }

  render() {
    let { open } = this.props;
    return (
      <Dialog
        open={open}
        onClose={this.close.bind(this)}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create New Counter</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Counter Name"
            type="text"
            fullWidth
            onInput={e => (this.value = e.target.value)}
            onKeyPress={event => {
              if (event.key === "Enter") {
                this.close();
              }
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={this.close.bind(this)} color="primary">
            Cancel
          </Button>
          <Button onClick={this.close.bind(this)} color="primary">
            Create
          </Button>
        </DialogActions>
      </Dialog>
    );
  }
}
