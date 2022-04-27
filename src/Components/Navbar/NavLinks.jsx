import { Text, createStyles, Group } from "@mantine/core";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useStyles = createStyles((t) => ({
  item: {
    fontWeight: "300",
    color: "black",
    fontSize: t.fontSizes.lg,
    ":hover": { color: t.colors.grape[5] },
  },
  wrapper: {},
}));

const navItems = [
  { label: "Home", link: "/" },
  { label: "Work", link: "/work" },
  { label: "About", link: "/about" },
];

export default function NavLinks() {
  const { classes } = useStyles();
  const { pathname } = useLocation();

  return (
    <Group spacing={"50px"}>
      {navItems.map(({ label, link }, i) => (
        <Text
          sx={pathname === link && { color: "#CC5DE8", fontWeight: "500" }}
          className={classes.item}
          key={i}
          to={link}
          component={Link}
        >
          {label}
        </Text>
      ))}
    </Group>
  );
}
