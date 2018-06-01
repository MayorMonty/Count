import React, { Component } from "react";
import "./App.css";

import Header from "./components/header";
import Counter from "./components/counter";
import AddCounter from "./components/AddCounter";
import CreateCounterDialog from "./components/dialogs/createCounter";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import primary from "@material-ui/core/colors/indigo";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
const theme = createMuiTheme({
  palette: {
    primary
  }
});

const styles = theme => ({
  fab: {
    position: "fixed",
    bottom: theme.spacing.unit * 2,
    right: theme.spacing.unit * 3
  }
});

class App extends Component {
  state = {
    counters: [
      {
        name: "Default Counter",
        value: 0
      }
    ],
    dialogOpen: false
  };

  addCounter({ name, value }) {
    this.setState({
      counters: [...this.state.counters, { name, value }]
    });
  }

  removeCounter(index) {
    this.setState({
      counters: this.state.counters.map((v, i) => (i === index ? undefined : v))
    });
  }

  updateCounter(
    index,
    {
      name = this.state.counters[index].name,
      value = this.state.counters[index].name
    }
  ) {
    let counters = this.state.counters;
    counters[index] = { name, value };
    this.setState({
      counters
    });
  }

  dialogClose(name) {
    let counters = this.state.counters;
    counters.push({ name, value: 0 });

    this.setState({ dialogOpen: false, counters });
  }

  componentDidUpdate() {
    localStorage.setItem("app-state", JSON.stringify(this.state));
  }

  componentWillMount() {
    let saved = localStorage.getItem("app-state")
      ? JSON.parse(localStorage.getItem("app-state"))
      : this.state;
    this.setState(saved);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Header />
          <main>
            <Grid container spacing={24}>
              {this.state.counters.map(
                (v, i) =>
                  v ? (
                    <Counter
                      key={i}
                      value={v}
                      index={i}
                      update={value => this.updateCounter(i, { value })}
                      delete={() => this.removeCounter(i)}
                    />
                  ) : (
                    undefined
                  )
              )}
            </Grid>
            <div className={this.props.classes.fab}>
              <AddCounter
                aria-label="Add Counter"
                onClick={() => this.setState({ dialogOpen: true })}
              />
              <CreateCounterDialog
                open={this.state.dialogOpen}
                onClose={this.dialogClose.bind(this)}
              />
            </div>
          </main>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default withStyles(styles)(App);
