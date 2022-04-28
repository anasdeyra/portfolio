import { Header, createStyles, Text } from "@mantine/core";
import NavLinks from "./NavLinks";
import Socials from "./Socials";
import { BurgerNavLinks } from "./NavLinks";

const useStyles = createStyles((t) => ({
  container: {
    width: "80%",
    height: "4rem",
    background: "transparent",
    display: "flex",
    margin: "auto",
    borderBottom: "none",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
  },
}));

export default function Navbar() {
  const { classes } = useStyles();

  return (
    <Header className={classes.container}>
      <Text size="xl" weight={"900"}>
        Deyra
      </Text>
      <NavLinks />
      <BurgerNavLinks />
      <Socials />
    </Header>
  );
}
