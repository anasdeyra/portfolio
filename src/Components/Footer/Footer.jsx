import { Footer as F, Title } from "@mantine/core";
import Socials from "../Navbar/Socials";

export default function Footer() {
  return (
    <F
      sx={(t) => ({
        width: "80%",
        display: "flex",
        background: "transparent",
        margin: "auto",
        borderColor: "white",
        justifyContent: "space-between",
        color: "white",
        fontWeight: "400",
        [`@media (max-width: ${t.breakpoints.sm}px)`]: {
          paddingBottom: t.spacing.xl * 1.5,
        },
      })}
      py={"sm"}
    >
      <Title order={4}>Deyra</Title>
      <Socials spacing="sm" size="xs" color="white" hover={"red"} />
    </F>
  );
}
