import Alert from "@mui/material/Alert/Alert";
import React from "react";

export const AlertError = () => {
  return (
    <h2>
      <Alert variant="filled" severity="warning">
        MAX-VALUE!
      </Alert>
    </h2>
  );
};
