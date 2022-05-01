import {
  createStyles,
  Group,
  Image,
  Stack,
  Text,
  Title,
  Overlay,
  Divider,
} from "@mantine/core";
import { useElementSize } from "@mantine/hooks";

const useStyles = createStyles((t) => ({
  container: {
    width: "80%",
    margin: "6rem auto 6rem auto",
  },
  title: { color: "white", fontSize: t.fontSizes.xl * 3 },
  group1: {
    justifyContent: "space-between",
    alignItems: "start",
    color: "white",
    padding: "2rem 0 2rem 0",
  },
  image: {
    transform: "scale(3)",
    objectPosition: "100% 30%",
    position: "relative",
    right: "10%",
  },
  imageWrapper: {
    overflow: "hidden",
    borderRadius: "50%",
    width: "128px",
    height: "128px",
  },
  sub: { color: "white", fontSize: t.fontSizes.xl, fontWeight: "600" },
  info: { color: t.colors.red[0], fontWeight: "500" },
  date: { color: t.colors.gray[3] },
  type: { fontWeight: "300" },
  personal: {
    [`@media (min-width: ${t.breakpoints.md}px)`]: { maxWidth: "250px" },
  },
  divider: {
    borderColor: "white",
    [`@media (min-width: ${t.breakpoints.md}px)`]: { display: "none" },
  },
}));

export default function About() {
  const { classes } = useStyles();
  const { height, ref, width } = useElementSize();
  return (
    <div ref={ref} className={classes.container}>
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
      <Group className={classes.group1}>
        <Stack
          sx={(t) => ({
            [`@media (min-width: ${t.breakpoints.md}px)`]: {
              maxWidth: width - 400,
            },
          })}
        >
          <Title className={classes.title} order={1}>
            About
          </Title>
          <Stack mb={"xl"} mt={"xl"}>
            <Text className={classes.type}>EDUCATION</Text>
            <Stack spacing={30}>
              {EDUCATION.map(({ title, institution, date, description }, i) => (
                <Stack key={i} spacing={0}>
                  <Title sx={{ textTransform: "uppercase" }} order={3}>
                    {title}
                  </Title>
                  <Text weight={"600"}>{institution}</Text>
                  <Text className={classes.date} size="sm">
                    {date}
                  </Text>
                  <Text mt={"xs"} weight={"500"}>
                    {description}
                  </Text>
                </Stack>
              ))}
            </Stack>
          </Stack>
          <Stack mb={"xl"} mt={"xl"}>
            <Text className={classes.type}>EXPERIENCE</Text>
            <Stack spacing={"xl"}>
              {EXPERIENCE.map(
                ({ title, institution, date, description }, i) => (
                  <Stack key={i} spacing={0}>
                    <Title sx={{ textTransform: "uppercase" }} order={3}>
                      {title}
                    </Title>
                    <Text weight={"600"}>{institution}</Text>
                    <Text className={classes.date} size="sm">
                      {date}
                    </Text>
                    <Text weight={"500"}>{description}</Text>
                  </Stack>
                )
              )}
            </Stack>
          </Stack>
        </Stack>
        <Stack className={classes.personal} spacing={"xl"}>
          <Divider className={classes.divider} />
          <Image
            sx={classes.imageWrapper}
            src={`${process.env.PUBLIC_URL}/cute mofo.jpg`}
            styles={{
              image: classes.image,
            }}
          />
          <Stack className={classes.info} spacing={0}>
            <Text>bendaira.ones@etudian-fst.utm.tn</Text>
            <Text>+216 93 028 674</Text>
            <Text mt={"xs"}>Age: {new Date().getFullYear() - 2002}</Text>
            <Text>Coutry: Tunisia</Text>
            <Text>Experience: 2 yrs</Text>
            <Text className={classes.sub} mb="xs" mt={"xl"}>
              Technologies & Tools
            </Text>
            <Text>
              Figma, React.js, Express.js, Node.js, Next.js, MongoDB, MySQL,
              Postman, Mantine UI, Chakra UI, Django, Flask
            </Text>
            <Text className={classes.sub} mb="xs" mt={"xl"}>
              Programming languages
            </Text>
            <Text>Javascript, Python, C, C++, HTML, CSS</Text>
            <Text className={classes.sub} mb="xs" mt={"xl"}>
              Languages
            </Text>
            <Text>English, Arabic, Frensh</Text>
          </Stack>
        </Stack>
      </Group>
    </div>
  );
}

const EDUCATION = [
  {
    title: "bachelor's degree in Computer science",
    institution: "Bardo high school",
    date: "Jul 2021, Bardo, Tunis",
    description: "I got the bachelor certificate with honors.",
  },
];

const EXPERIENCE = [
  {
    title: "2nd place INFO+ hackathon",
    institution: "Faculty of Sciences of Tunis",
    date: "Feb 2022, Manar 1, Tunis",
    description:
      "The main theme of this hackathon was is a freelancing for the web developer, so in 24 hours I managed to build a web app with my colleague that have many features (chat, profiles, notifications etc..).",
  },
  {
    title: "1er place IEEE hackathon",
    institution: "Faculty of Sciences of Tunis",
    date: "Mar 2022, Manar 1, Tunis",
    description:
      "In this hackathon we managed to build a real estate market solution where people can rent appartements and manage them.",
  },
];
