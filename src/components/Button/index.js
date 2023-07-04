import React from "react";
import { connect } from "react-redux";
import { submit } from "redux-form";
import { Button } from "@mui/material";

const RemoteSubmitButton = ({ dispatch }) => (
  <Button
    size="small"
    style={{
      backgroundColor: "#ffa726",
      fontWeight: "600",
      padding: "0.5em 1em",
    }}
    variant="contained"
    onClick={() => dispatch(submit("contact"))}
  >
    FINALIZAR COMPRA
  </Button>
);

export default connect()(RemoteSubmitButton);
