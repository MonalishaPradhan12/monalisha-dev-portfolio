"use client";

import {
  Container,
  Title,
  Text,
  Grid,
  TextInput,
  Textarea,
  Button,
  Paper,
  Stack,
  Group,
  useMantineTheme,
  Notification,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconMail,
  IconPhone,
  IconMapPin,
  IconSend,
  IconCheck,
  IconX,
} from "@tabler/icons-react";
import { useState } from "react";
import emailjs from "@emailjs/browser";

const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

const contactInfo = [
  {
    icon: IconMail,
    label: "Email",
    value: "monalishapradhan040@gmail.com",
    href: "mailto:monalishapradhan040@gmail.com",
  },
  {
    icon: IconPhone,
    label: "Phone",
    value: "+91 XXXXX XXXXX",
    href: "tel:+91XXXXXXXXXX",
  },
  {
    icon: IconMapPin,
    label: "Location",
    value: "Bhubaneswar, India",
    href: null,
  },
];

export default function ContactSection() {
  const theme = useMantineTheme();
  const { background, card, border, gradientFrom, gradientTo, textDim, textWhite } =
    theme.other;

  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async () => {
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus(null);

    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          message: form.message,
        },
        PUBLIC_KEY
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  const inputStyles = {
    label: { color: textDim, marginBottom: "6px", fontSize: "13px" },
    input: {
      background: background,
      border: `1px solid ${border}`,
      color: textWhite,
    },
  };

  return (
    <div
      id="ContactSection"
      style={{
        background: card,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <Container size="lg">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Stack align="center" mb={60}>
            <Text
              fw={600}
              size="sm"
              style={{
                letterSpacing: "2px",
                background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              GET IN TOUCH
            </Text>
            <Title
              order={1}
              ta="center"
              style={{
                fontSize: "clamp(28px, 5vw, 42px)",
                color: textWhite,
              }}
            >
              Contact{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Me
              </span>
            </Title>
          </Stack>
        </motion.div>

        <Grid gutter={{ base: 20, md: 40 }} align="stretch">
          {/* Contact Info */}
          <Grid.Col span={{ base: 12, sm: 5 }}>
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ height: "100%" }}
            >
              <Stack gap="md" style={{ height: "100%" }}>
                <Text style={{ color: textDim, fontSize: "15px", lineHeight: 1.8 }}>
                  I'm always open to discussing new opportunities, projects, or
                  just having a conversation about tech. Feel free to reach out!
                </Text>

                {contactInfo.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                    >
                      <Paper
                        p="md"
                        radius="lg"
                        component={item.href ? "a" : "div"}
                        href={item.href ?? undefined}
                        style={{
                          background: background,
                          border: `1px solid ${border}`,
                          textDecoration: "none",
                          display: "block",
                          cursor: item.href ? "pointer" : "default",
                        }}
                      >
                        <Group gap="md">
                          <div
                            style={{
                              width: "40px",
                              height: "40px",
                              borderRadius: "10px",
                              background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              flexShrink: 0,
                            }}
                          >
                            <Icon size={18} color="white" />
                          </div>
                          <div>
                            <Text
                              size="xs"
                              style={{
                                color: textDim,
                                letterSpacing: "1px",
                                marginBottom: "2px",
                              }}
                            >
                              {item.label.toUpperCase()}
                            </Text>
                            <Text
                              style={{
                                color: textWhite,
                                fontSize: "14px",
                                fontWeight: 500,
                              }}
                            >
                              {item.value}
                            </Text>
                          </div>
                        </Group>
                      </Paper>
                    </motion.div>
                  );
                })}
              </Stack>
            </motion.div>
          </Grid.Col>

          {/* Contact Form */}
          <Grid.Col span={{ base: 12, sm: 7 }}>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ height: "100%" }}
            >
              <Paper
                p="xl"
                radius="lg"
                style={{
                  background: background,
                  border: `1px solid ${border}`,
                  height: "100%",
                }}
              >
                <Stack gap="md">

                  {/* Status Notifications */}
                  {status === "success" && (
                    <Notification
                      icon={<IconCheck size={16} />}
                      color="green"
                      title="Message sent!"
                      onClose={() => setStatus(null)}
                      style={{
                        background: background,
                        border: `1px solid ${border}`,
                      }}
                    >
                      Thanks for reaching out. I'll get back to you soon!
                    </Notification>
                  )}

                  {status === "error" && (
                    <Notification
                      icon={<IconX size={16} />}
                      color="red"
                      title="Something went wrong"
                      onClose={() => setStatus(null)}
                      style={{
                        background: background,
                        border: `1px solid ${border}`,
                      }}
                    >
                      Please fill all fields and try again.
                    </Notification>
                  )}

                  <Grid gutter="md">
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Name"
                        name="name"
                        placeholder="Your name"
                        value={form.name}
                        onChange={handleChange}
                        styles={inputStyles}
                      />
                    </Grid.Col>
                    <Grid.Col span={{ base: 12, sm: 6 }}>
                      <TextInput
                        label="Email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        styles={inputStyles}
                      />
                    </Grid.Col>
                  </Grid>

                  <Textarea
                    label="Message"
                    name="message"
                    placeholder="Write your message..."
                    minRows={6}
                    value={form.message}
                    onChange={handleChange}
                    styles={inputStyles}
                  />

                  <Button
                    size="md"
                    leftSection={<IconSend size={16} />}
                    variant="gradient"
                    gradient={{ from: gradientFrom, to: gradientTo }}
                    fullWidth
                    loading={loading}
                    onClick={handleSubmit}
                  >
                    {loading ? "Sending..." : "Send Message"}
                  </Button>

                </Stack>
              </Paper>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}