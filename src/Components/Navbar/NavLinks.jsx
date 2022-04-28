import {
  Text,
  createStyles,
  Group,
  Burger,
  Drawer,
  Stack,
} from "@mantine/core";
import { useToggle } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const useStyles = createStyles((t) => ({
  wrapper: {
    [`@media (max-width: ${t.breakpoints.sm}px)`]: {
      display: "none",
    },
  },
  item: {
    fontWeight: "300",
    color: "black",
    fontSize: t.fontSizes.lg,
    ":hover": { color: t.colors.red[5] },
  },
  burger: {
    position: "fixed",
    bottom: "10px",
    right: "10px",
    [`@media (min-width: ${t.breakpoints.sm}px)`]: {
      display: "none",
    },
  },
}));

export default function NavLinks() {
  const { classes } = useStyles();
  const { pathname } = useLocation();

  return (
    <Group className={classes.wrapper} spacing={"50px"}>
      {LINKS.map(({ label, link }, i) => (
        <Text
          sx={(t) =>
            pathname === link && { color: t.colors.red[5], fontWeight: "500" }
          }
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

export function BurgerNavLinks() {
  const [opened, toggle] = useToggle(false, [true, false]);
  const { classes } = useStyles();
  const { pathname } = useLocation();

  return (
    <>
      <Drawer
        position="bottom"
        overlayOpacity={0.3}
        size={"xs"}
        opened={opened}
        onClose={() => toggle(false)}
      >
        <Stack align={"center"}>
          {LINKS.map(({ label, link }, i) => (
            <Text
              onClick={() => toggle(false)}
              sx={(t) =>
                pathname === link && {
                  color: t.colors.red[5],
                  fontWeight: "500",
                }
              }
              className={classes.item}
              key={i}
              to={link}
              component={Link}
            >
              {label}
            </Text>
          ))}
        </Stack>
      </Drawer>
      <Burger
        onClick={() => toggle()}
        opened={opened}
        color="white"
        className={classes.burger}
      />
    </>
  );
}

const LINKS = [
  { label: "Home", link: "/" },
  { label: "Work", link: "/work" },
  { label: "About", link: "/about" },
];
