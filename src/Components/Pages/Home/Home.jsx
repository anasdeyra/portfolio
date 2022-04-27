import {
  Title,
  Text,
  Button,
  createStyles,
  Container,
  Group,
  SimpleGrid,
  Stack,
} from "@mantine/core";

const useStyles = createStyles((t) => ({
  container: {
    color: "white",
  },
}));

export default function Home() {
  const { classes } = useStyles();
  return (
    <Container fluid p={0} mt={"130px"} className={classes.container}>
      <Title sx={{ fontSize: "96px" }}>Hi, Im Anas Deyra</Title>
      <Text size="xl">
        A full stack web developer & UI/UX designer that will make your business
        boom.
      </Text>
      <Group mt={"3rem"} spacing={"xl"}>
        <Button color={"red"} radius={0} sx={{ fontWeight: "500" }} size="xl">
          Contact
        </Button>
        <Button
          radius={0}
          color="red"
          variant="white"
          size="xl"
          sx={{ fontWeight: "500" }}
        >
          See work
        </Button>
      </Group>
      <Container
        mt={"3rem"}
        p={"xl"}
        size={"fluid"}
        sx={{
          background: "rgba(77, 171, 247, 0.3)",
        }}
      >
        <Title order={1}>Why choosing me?</Title>
        <SimpleGrid mt={"xl"} spacing={"lg"} cols={3}>
          {FEATURES.map(({ label, text }, i) => (
            <Stack key={i} spacing={"xs"}>
              <Title order={2}>{label}</Title>
              <Text>{text}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  );
}

const FEATURES = [
  {
    label: "User friendly UI",
    text: "88% of people have negative feelings about brands with poorly performing websites and mobile apps, so I make sure that the website I build is as user-friendly as possible.",
  },
  {
    label: "Good looking design",
    text: "A well-designed website can help you form a good impression on your prospective customers, so I carefully pick a pleasing color scheme and minimalistic design with high quality photos, etc..",
  },
  {
    label: "Affordable price",
    text: "The websites that I make are pocket-friendly too.",
  },
];
