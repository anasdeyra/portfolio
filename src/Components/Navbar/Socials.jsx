import { createStyles, Group, ThemeIcon } from "@mantine/core";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const useStyles = createStyles((t) => ({
  item: {
    fontWeight: "300",
    color: "black",
    fontSize: t.fontSizes.xl,
    ":hover": { color: t.colors.cyan[6] },
  },
  wrapper: {},
}));

const socials = [
  { link: "https://facebook.com", Icon: FaLinkedin },
  { link: "https://facebook.com", Icon: FaGithub },
  { link: "https://facebook.com", Icon: FaFacebook },
  { link: "https://facebook.com", Icon: FaInstagram },
];

export default function Socials() {
  const { classes } = useStyles();

  return (
    <Group spacing={"xl"}>
      {socials.map(({ Icon, link }, i) => (
        <ThemeIcon
          size={"sm"}
          sx={{ background: "transparent" }}
          className={classes.item}
          key={i}
          target="_blank"
          href={link}
          component={"a"}
        >
          <Icon />
        </ThemeIcon>
      ))}
    </Group>
  );
}
