import { Header, createStyles, Title } from "@mantine/core";
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
  logo: {
    fontWeight: "900",
  },
}));

export default function Navbar() {
  const { classes } = useStyles();

  return (
    <Header className={classes.container}>
      <Title className={classes.logo} order={3}>
        Deyra
      </Title>
      <NavLinks />
      <BurgerNavLinks />
      <Socials />
    </Header>
  );
}
