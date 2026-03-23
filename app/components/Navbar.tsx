"use client";

import {
  Group,
  Button,
  Container,
  Text,
  useMantineTheme,
  Burger,
  Drawer,
  Stack,
  Box,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconDownload } from "@tabler/icons-react";

export default function Navbar() {
  const theme = useMantineTheme();
  const [opened, { toggle, close }] = useDisclosure(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    close(); // close drawer after click
  };

  const menuItems = [
    { label: "Home", id: "home" },
    { label: "About", id: "aboutSections" },
    { label: "Skills", id: "SkillsSection" },
    { label: "Projects", id: "projectSections" },
    { label: "Experience", id: "JourneySection" },
    { label: "Contact", id: "ContactSection" },
  ];

  return (
    <>
      {/* Navbar */}
      <Box
        style={{
          background: theme.other.card,
          borderBottom: `1px solid ${theme.other.border}`,
          position: "fixed",
          top: 0,
          width: "100%",
          zIndex: 1000,
        }}
      >
        <Container size="lg" py="md">
          <Group justify="space-between">
            <Text fw={700} size="lg" c="blue">
              &lt; MP /&gt;
            </Text>

            {/* Desktop Menu */}
            <Group gap="lg" visibleFrom="sm">
              {menuItems.map((item) => (
                <Text
                  key={item.id}
                  style={{ cursor: "pointer" }}
                  onClick={() => scrollToSection(item.id)}
                  c="white"
                >
                  {item.label}
                </Text>
              ))}
            </Group>

            {/* Resume Button Desktop */}
            <Button
              component="a"
              href="/resume.pdf"
              download="Monalisha_Pradhan_Resume.pdf"
              size="sm"
              variant="gradient"
              gradient={{ from: "blue", to: "cyan" }}
              visibleFrom="sm"
              leftSection={<IconDownload size={18} />}
            >
              Resume
            </Button>

            {/* Burger Mobile */}
            <Burger
              opened={opened}
              onClick={toggle}
              hiddenFrom="sm"
              color="white"
            />
          </Group>
        </Container>
      </Box>

      {/* Drawer Mobile Only */}
      <Drawer
        opened={opened}
        onClose={close}
        position="right"
        padding="xl"
        size="xs"
        hiddenFrom="sm"
        styles={{
          content: {
            backgroundColor: theme.other.background,
            color: "white",
          },
          header: {
            backgroundColor: theme.other.background,
            borderBottom: theme.other.border,
          },
        }}
      >
        <Stack gap="lg">
          {menuItems.map((item) => (
            <Text
              key={item.id}
              size="lg"
              style={{ cursor: "pointer" }}
              onClick={() => scrollToSection(item.id)}
              c="white"
            >
              {item.label}
            </Text>
          ))}

          <Button
            component="a"
            href="/resume.pdf"
            download="Monalisha_Pradhan_Resume.pdf"
            variant="gradient"
            gradient={{ from: "blue", to: "cyan" }}
            leftSection={<IconDownload size={18} />}
            fullWidth
          >
            Resume
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}