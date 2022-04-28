import { Footer as F, Group, Title } from "@mantine/core";
import { MdPhone, MdAlternateEmail } from "react-icons/md";
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
      })}
      py={"sm"}
    >
      <Title order={3}>Deyra</Title>
      <Socials spacing="sm" size="xs" color="white" />
    </F>
  );
}
