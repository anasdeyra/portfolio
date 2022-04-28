import {
  Title,
  Text,
  Button,
  createStyles,
  Container,
  Group,
  SimpleGrid,
  Stack,
  Overlay,
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";

const useStyles = createStyles((t) => ({
  container: {
    color: "white",
    width: "80%",
    margin: "auto",
  },
}));

export default function Home() {
  const { classes } = useStyles();
  const { ref, height } = useElementSize();

  return (
    <Container fluid p={0} mt={"130px"} className={classes.container}>
      <Title sx={{ fontSize: "96px" }}>Hi, Im Anas Deyra</Title>
      <Text ml={0} sx={{ fontSize: "28px", maxWidth: "850px" }}>
        A full stack web developer & UI/UX designer that will make your business
        boom.
      </Text>

      <Group mt={"5rem"} spacing={"xl"}>
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
      <div ref={ref}>
        <Overlay
          sx={{
            height: height,
            width: "100vw",
            top: "unset",
            bottom: "unset",
            left: "unset",
            background: "rgba(77, 171, 247, 0.20);",
            backdropFilter: "blur(20px)",
          }}
          zIndex={-1}
          color="cyan"
        />
        <Container fluid my={"8rem"} py={"xl"} px="0">
          <Title order={1}>Why choosing me?</Title>
          <SimpleGrid
            sx={{
              zIndex: "2",
            }}
            mt={"xl"}
            spacing={"lg"}
            cols={3}
          >
            {FEATURES.map(({ label, text }, i) => (
              <Stack key={i} spacing={"xs"}>
                <Title order={2}>{label}</Title>
                <Text>{text}</Text>
              </Stack>
            ))}
          </SimpleGrid>
        </Container>
      </div>
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
