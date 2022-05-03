import { Textarea, TextInput } from "@mantine/core";

export function EmailInput({ form }) {
  return (
    <TextInput
      type="email"
      required
      label="Email"
      placeholder="your@email.com"
      {...form.getInputProps("email")}
    />
  );
}

export function NameInput({ form }) {
  return (
    <TextInput
      type="text"
      required
      label="Name"
      placeholder="John Doe"
      {...form.getInputProps("name")}
    />
  );
}

export function MessageInput({ form }) {
  return (
    <Textarea
      type="text"
      required
      label="Message"
      placeholder="We need you!"
      {...form.getInputProps("message")}
    />
  );
}
