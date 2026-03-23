"use client";

import {
  Container,
  Grid,
  Text,
  Group,
  Stack,
  Anchor,
  Divider,
  ActionIcon,
  useMantineTheme,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconMail,
} from "@tabler/icons-react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#aboutSections" },
  { label: "Skills", href: "#SkillsSection" },
  { label: "Projects", href: "#projectSections" },
  { label: "Journey", href: "#JourneySection" },
  { label: "Contact", href: "#ContactSection" },
];

const socials = [
  { icon: IconBrandGithub, href: "https://github.com/", label: "GitHub" },
  { icon: IconBrandLinkedin, href: "https://linkedin.com/in/", label: "LinkedIn" },
  { icon: IconMail, href: "mailto:monalisha@email.com", label: "Email" },
];

export default function FooterSection() {
  const theme = useMantineTheme();
  const { card, border, gradientFrom, gradientTo, textDim, textWhite } =
    theme.other;

  return (
    <div
      id="FooterSection"
      style={{
        background: card,
        borderTop: `1px solid ${border}`,
        paddingTop: "60px",
        paddingBottom: "30px",
      }}
    >
      <Container size="lg">
        <Grid gutter={{ base: 30, md: 40 }}>
          {/* Brand */}
          <Grid.Col span={{ base: 12, sm: 4 }}>
            <Stack gap="sm">
              <Text
                fw={700}
                size="lg"
                style={{
                  background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Monalisha Pradhan
              </Text>
              <Text
                size="sm"
                style={{
                  color: textDim,
                  lineHeight: 1.8,
                  maxWidth: "260px",
                }}
              >
                Front-End Developer building modern web applications using
                React, Next.js and TypeScript.
              </Text>
            </Stack>
          </Grid.Col>

          {/* Navigation */}
          <Grid.Col span={{ base: 6, sm: 4 }}>
            <Stack gap="sm">
              <Text fw={600} style={{ color: textWhite }} size="sm">
                Navigation
              </Text>
              {navLinks.map((link) => (
                <Anchor
                  key={link.label}
                  href={link.href}
                  underline="never"
                  style={{
                    color: textDim,
                    fontSize: "14px",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.color = textWhite;
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.color = textDim;
                  }}
                >
                  {link.label}
                </Anchor>
              ))}
            </Stack>
          </Grid.Col>

          {/* Connect */}
          <Grid.Col span={{ base: 6, sm: 4 }}>
            <Stack gap="sm">
              <Text fw={600} style={{ color: textWhite }} size="sm">
                Connect
              </Text>
              <Text size="sm" style={{ color: textDim, lineHeight: 1.8 }}>
                Open to new opportunities and collaborations. Let's build
                something great together.
              </Text>
              <Group gap="xs" mt={4}>
                {socials.map((social) => {
                  const Icon = social.icon;
                  return (
                    <ActionIcon
                      key={social.label}
                      component="a"
                      href={social.href}
                      target="_blank"
                      size="lg"
                      radius="md"
                      variant="subtle"
                      style={{
                        background: border,
                        color: textDim,
                        border: `1px solid ${border}`,
                      }}
                      onMouseEnter={(e) => {
                        (e.currentTarget as HTMLElement).style.background = `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`;
                        (e.currentTarget as HTMLElement).style.color = "white";
                        (e.currentTarget as HTMLElement).style.border = "none";
                      }}
                      onMouseLeave={(e) => {
                        (e.currentTarget as HTMLElement).style.background = border;
                        (e.currentTarget as HTMLElement).style.color = textDim;
                        (e.currentTarget as HTMLElement).style.border = `1px solid ${border}`;
                      }}
                    >
                      <Icon size={17} />
                    </ActionIcon>
                  );
                })}
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider my="xl" color={border} />

        <Group justify="space-between" wrap="wrap" gap="xs">
          <Text size="sm" style={{ color: textDim }}>
            © {new Date().getFullYear()} Monalisha Pradhan. All rights reserved.
          </Text>
          <Text size="sm" style={{ color: textDim }}>
            Built with{" "}
            <span
              style={{
                background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontWeight: 600,
              }}
            >
              Next.js & Mantine UI
            </span>
          </Text>
        </Group>
      </Container>
    </div>
  );
}