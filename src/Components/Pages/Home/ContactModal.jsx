import { createStyles, Button, Modal, Stack } from "@mantine/core";
import { useState } from "react";
import { useForm } from "@mantine/hooks";
import { EmailInput, MessageInput, NameInput } from "./InputFields";
import { send } from "emailjs-com";
import { showNotification } from "@mantine/notifications";

const useStyles = createStyles((t) => ({
  submitButton: {
    [`@media (min-width: ${t.breakpoints.sm}px)`]: {
      alignSelf: "start",
    },
  },
}));

export default function ContactButton({ size }) {
  const [opened, toggle] = useState(false);

  return (
    <>
      <Modal
        opened={opened}
        styles={{ header: { fontWeight: "500" } }}
        size="lg"
        onClose={() => toggle(false)}
        title="Lets get in touch!"
      >
        <ContactModalContent />
      </Modal>
      <Button
        radius={0}
        color="red"
        size={size}
        sx={{ fontWeight: "500" }}
        onClick={() => toggle(true)}
      >
        Contact
      </Button>
    </>
  );
}

function ContactModalContent() {
  const { classes } = useStyles();

  const f = useForm({
    initialValues: {
      email: "",
      message: "",
      name: "",
    },
  });
  const [isLoading, setIsLoading] = useState(false);

  return (
    <form
      onSubmit={f.onSubmit((values) => {
        f.validate();
        setIsLoading(true);
        send(
          "service_kx1mdve",
          "template_5pevrdg",
          {
            from_name: values.name,
            to_name: "Anass",
            message: values.message,
            reply_to: values.email,
          },
          "OVm5QfqgDPzcq2VeH"
        )
          .then(() => {
            showNotification({
              title: "Your email has been received",
              message: "I will reply to you back as soon as possible",
              color: "green",
            });
          })
          .catch(() => {
            showNotification({
              title: "There was a problem sending your email",
              message: "try to email me at anasdoura607@gmail.com ",
              color: "red",
            });
          })
          .finally(() => {
            setIsLoading(false);
          });
      })}
    >
      <Stack className={classes.container}>
        <NameInput form={f} />
        <EmailInput form={f} />
        <MessageInput form={f} />
        <Button
          loading={isLoading}
          className={classes.submitButton}
          color={"red"}
          type="submit"
        >
          {isLoading ? "Sending" : "Send"}
        </Button>
      </Stack>
    </form>
  );
}
