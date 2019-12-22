import React, { Component, Fragment } from "react";
import ButtonAppBar from "./layout/ButtonAppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Yeeet from "./test/Yeeet";
import Yeet from "./test/Yeet";
import { Provider } from "react-redux";
import store from "./store";
export class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          {" "}
          <Fragment>
            <ButtonAppBar />

            <CssBaseline />
            <Container maxWidth="sm">
              <Typography
                component="div"
                style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
              >
                <Yeet />
                <Yeeet />
              </Typography>
            </Container>
          </Fragment>
        </div>
      </Provider>
    );
  }
}

export default App;
