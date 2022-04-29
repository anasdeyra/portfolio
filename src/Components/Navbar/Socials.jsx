import { createStyles, Group, ThemeIcon } from "@mantine/core";
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const useStyles = createStyles((t) => ({
  item: {
    fontWeight: "300",
    fontSize: t.fontSizes.lg,
    ":hover": { color: t.colors.cyan[6] },
  },
  wrapper: {},
}));

export default function Socials({
  spacing = "xl",
  size = "sm",
  color = "black",
  hover,
}) {
  const { classes } = useStyles();

  return (
    <Group spacing={spacing}>
      {SOCIALS.map(({ Icon, link }, i) => (
        <ThemeIcon
          size={size}
          sx={(t) => ({
            background: "transparent",
            color,
            ":hover": hover && { color: t.colors[hover][5] },
          })}
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

const SOCIALS = [
  { link: "https://facebook.com", Icon: FaLinkedin },
  { link: "https://github.com/anasdeyra", Icon: FaGithub },
  {
    link: "https://www.facebook.com/if.you.see.this.you.arre.gay/",
    Icon: FaFacebook,
  },
  { link: "https://www.instagram.com/anas_deyra/", Icon: FaInstagram },
];
