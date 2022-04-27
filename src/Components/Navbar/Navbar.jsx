import { Header, createStyles, Text } from "@mantine/core";
import NavLinks from "./NavLinks";
import Socials from "./Socials";

const useStyles = createStyles((t) => ({
  container: {
    height: "4rem",
    background: "transparent",
    display: "flex",
    margin: "auto",
    borderBottom: "none",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
  wrapper: {},
}));

export default function Navbar() {
  const { classes } = useStyles();

  return (
    <Header className={classes.container}>
      <Text size="xl" weight={"900"}>
        Deyra
      </Text>
      <NavLinks />
      <Socials />
    </Header>
  );
}
