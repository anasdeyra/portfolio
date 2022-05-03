import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { MantineProvider } from "@mantine/core";
import theme from "./theme";
import { NotificationsProvider } from "@mantine/notifications";

function Providers({ children }) {
  return (
    <MantineProvider theme={theme}>
      <NotificationsProvider>{children}</NotificationsProvider>
    </MantineProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Providers children={<App />} />
  </React.StrictMode>
);
