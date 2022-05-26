import {
  Container,
  Overlay,
  SimpleGrid,
  Title,
  Text,
  Stack,
  createStyles,
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";

const useStyles = createStyles((t) => ({
  container: {
    margin: "8rem 0 8rem 0",
    [`@media (max-width: ${t.breakpoints.sm}px)`]: { margin: "5rem 0 5rem 0" },
  },
}));

export default function Features() {
  const { ref, height } = useElementSize();
  const { classes } = useStyles();
  return (
    <div ref={ref}>
      <Container fluid className={classes.container} py={"xl"} px="0">
        <Title order={1}>Why choosing me?</Title>
        <SimpleGrid
          sx={{
            zIndex: "2",
          }}
          mt={"xl"}
          spacing={"lg"}
          breakpoints={[
            { minWidth: 980, cols: 3 },
            { maxWidth: 980, cols: 1 },
          ]}
        >
          {FEATURES.map(({ label, text, color: [color, saturation] }, i) => (
            <Stack key={i} spacing={"xs"}>
              <Title
                sx={(t) => ({ color: t.colors[color][saturation] })}
                order={2}
              >
                {label}
              </Title>
              <Text>{text}</Text>
            </Stack>
          ))}
        </SimpleGrid>
      </Container>
    </div>
  );
}

const FEATURES = [
  {
    label: "User friendly UI",
    text: "88% of people have negative feelings about brands with poorly performing websites and mobile apps, so I make sure that the website I build is as user-friendly as possible.",
    color: ["yellow", 2],
  },
  {
    label: "Good looking design",
    text: "A well-designed website can help you form a good impression on your prospective customers, so I carefully pick a pleasing color scheme and minimalistic design with high quality photos, etc..",
    color: ["indigo", 2],
  },
  {
    label: "Affordable price",
    text: "The websites that I make are pocket-friendly too.",
    color: ["pink", 2],
  },
];
