"use client";

import {
  Container,
  Title,
  Text,
  Button,
  Stack,
  Badge,
  Group,
  ActionIcon,
  useMantineTheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
  IconDownload,
} from "@tabler/icons-react";
import { useMediaQuery } from "@mantine/hooks";

export default function HeroSection() {
  const theme = useMantineTheme();
  const { background, card, border, gradientFrom, gradientTo, textDim, textWhite, green } =
    theme.other;

  const isMobile = useMediaQuery("(max-width: 480px)");

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div
      id="home"
      style={{
        background: background,
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        paddingTop: "80px",
        paddingBottom: "60px",
      }}
    >
      <Container size="md">
        <Stack align="center" gap="md">

          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge
              size="lg"
              radius="md"
              style={{
                backgroundColor: card,
                color: textDim,
                border: `1px solid ${border}`,
                paddingLeft: "12px",
                paddingRight: "12px",
              }}
            >
              <span style={{ display: "inline-flex", alignItems: "center", gap: "6px" }}>
                <span
                  style={{
                    display: "inline-block",
                    width: "8px",
                    height: "8px",
                    borderRadius: "50%",
                    backgroundColor: green,
                    animation: "pulse 2s ease-in-out infinite",
                  }}
                />
                <style>{`
                  @keyframes pulse {
                    0%, 100% { opacity: 1; transform: scale(1); }
                    50% { opacity: 0.4; transform: scale(0.75); }
                  }
                `}</style>
                Available for new opportunities
              </span>
            </Badge>
          </motion.div>

          {/* Name */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Title
              ta="center"
              style={{
                fontSize: "clamp(32px, 6vw, 64px)",
                fontWeight: 800,
                color: textWhite,
              }}
            >
              Monalisha Pradhan
            </Title>
          </motion.div>

          {/* Role */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65 }}
          >
            <Text
              size="xl"
              style={{
                background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 600,
              }}
            >
              Front-End Developer
            </Text>
          </motion.div>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Text
              ta="center"
              style={{
                maxWidth: "600px",
                fontSize: "clamp(15px, 2.5vw, 18px)",
                color: textDim,
                lineHeight: 1.8,
                paddingLeft: "16px",
                paddingRight: "16px",
              }}
            >
              Crafting scalable, AI-enhanced web experiences with React.js.{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontWeight: 600,
                }}
              >
                1.9+
              </span>{" "}
              years of building enterprise applications that users love.
            </Text>
          </motion.div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Text size="sm" style={{ color: textDim }}>
              Bhubaneswar, India
            </Text>
          </motion.div>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75 }}
            style={{ width: isMobile ? "100%" : "auto", padding: isMobile ? "0 16px" : 0 }}
          >
            <Stack gap="sm" style={{ width: "100%" }}>
              {/* Row 1 — primary actions */}
              <Group
                gap="sm"
                justify="center"
                grow={isMobile}
                style={{ width: "100%" }}
              >
                <Button
                  size={isMobile ? "sm" : "md"}
                  variant="gradient"
                  gradient={{ from: gradientFrom, to: gradientTo }}
                  onClick={() => scrollTo("projectSections")}
                  fullWidth={isMobile}
                >
                  View My Work
                </Button>

                <Button
                  size={isMobile ? "sm" : "md"}
                  variant="outline"
                  style={{
                    borderColor: border,
                    color: textDim,
                  }}
                  onClick={() => scrollTo("ContactSection")}
                  fullWidth={isMobile}
                >
                  Get In Touch
                </Button>
              </Group>


            </Stack>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85 }}
          >
            <Group gap="sm" mt="xs" justify="center">
              {[
                { icon: IconBrandGithub, href: "https://github.com/MonalishaPradhan12", label: "GitHub" },
                { icon: IconBrandLinkedin, href: "https://www.linkedin.com/in/monalisha-pradhan-8081b4278/", label: "LinkedIn" },
                { icon: IconMail, href: "mailto:monalishapradhan040@email.com", label: "Email" },
              ].map(({ icon: Icon, href, label }) => (
                <ActionIcon
                  key={label}
                  component="a"
                  href={href}
                  target="_blank"
                  size="lg"
                  radius="md"
                  variant="subtle"
                  style={{
                    backgroundColor: card,
                    border: `1px solid ${border}`,
                    color: textDim,
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLElement).style.background =
                      `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`;
                    (e.currentTarget as HTMLElement).style.color = "white";
                    (e.currentTarget as HTMLElement).style.border = "none";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLElement).style.background = card;
                    (e.currentTarget as HTMLElement).style.color = textDim;
                    (e.currentTarget as HTMLElement).style.border = `1px solid ${border}`;
                  }}
                >
                  <Icon size={18} />
                </ActionIcon>
              ))}
            </Group>
          </motion.div>

        </Stack>
      </Container>
    </div>
  );
}