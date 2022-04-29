import {
  Title,
  Text,
  Button,
  createStyles,
  Container,
  Group,
} from "@mantine/core";
import Features from "./Features";
import { useElementSize, useViewportSize } from "@mantine/hooks";

const useStyles = createStyles((t) => ({
  container: {
    color: "white",
    width: "80%",
    margin: "auto",
  },
  title: {
    width: "fit-content",
    fontSize: "80px",
    [`@media (max-width: ${t.breakpoints.md}px)`]: {
      fontSize: "72px",
    },
    [`@media (max-width: ${t.breakpoints.md}px)`]: {
      fontSize: "48px",
    },
  },
  subTitle: {
    fontSize: "28px",
    [`@media (max-width: ${t.breakpoints.md}px)`]: {
      fontSize: "24px",
    },
    [`@media (max-width: ${t.breakpoints.sm}px)`]: {
      fontSize: "20px",
    },
  },
  cta: {
    marginTop: "4rem",
    [`@media (max-width: ${t.breakpoints.sm}px)`]: {
      marginTop: "2rem",
    },
  },
}));

export default function Home() {
  const { classes } = useStyles();
  const { ref, width } = useElementSize();
  const vw = useViewportSize().width;

  return (
    <Container
      fluid
      p={0}
      sx={{ marginTop: vw < 786 ? "90px" : "130px" }}
      className={classes.container}
    >
      <Title ref={ref} className={classes.title}>
        Hi, Im Anas Deyra
      </Title>
      <Text sx={{ maxWidth: `${width}px` }} className={classes.subTitle} ml={0}>
        A full stack web developer & UI/UX designer that will make your business
        boom.
      </Text>
      <Group className={classes.cta} spacing={"xl"}>
        <Button
          color={"red"}
          radius={0}
          sx={{ fontWeight: "500" }}
          size={vw < 786 ? "lg" : "xl"}
        >
          Contact
        </Button>
        <Button
          radius={0}
          color="red"
          variant="white"
          size={vw < 786 ? "lg" : "xl"}
          sx={{ fontWeight: "500" }}
        >
          See work
        </Button>
      </Group>
      <Features />
    </Container>
  );
}
