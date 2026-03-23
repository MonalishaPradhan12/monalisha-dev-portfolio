"use client";

import {
  Container,
  Title,
  Text,
  Paper,
  Stack,
  Group,
  Badge,
  useMantineTheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconBriefcase, IconCloud } from "@tabler/icons-react";

const journey = [
  {
    icon: IconBriefcase,
    title: "Software Developer Intern — STL",
    period: "Apr 2024 – Dec 2024",
    description:
      "Contributed to the NMMS Odisha portal — fixed UI bugs, improved responsiveness, and assisted with API integration.",
    tags: ["React.js", "REST APIs", "UI Fixes", "Agile"],
  },
  {
    icon: IconBriefcase,
    title: "Software Developer — STL",
    period: "Dec 2024 – Jan 2025",
    description:
      "Building enterprise-grade UI for AIA Insurance (Singapore) within a micro-frontend architecture using Next.js and Okta SSO.",
    tags: ["Next.js", "TypeScript", "Okta SSO", "Micro-Frontend"],
  },
  {
    icon: IconCloud,
    title: "Software Developer — Prath Technology Pvt. Ltd.",
    period: "Feb 2025 – Present",
    description:
      "Expanding into scalable frontend solutions and modern web architecture at Prath Technology.",
    tags: ["React.js", "Next.js", "Scalable UI"],
  },
];

export default function JourneySection() {
  const theme = useMantineTheme();
  const { background, card, border, gradientFrom, gradientTo, textDim, textWhite } =
    theme.other;

  return (
    <div
      id="JourneySection"
      style={{
        background: background,
        paddingTop: "100px",
        paddingBottom: "100px",
      }}
    >
      <Container size="md">
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
              EXPERIENCE
            </Text>
            <Title
              order={1}
              ta="center"
              style={{
                fontSize: "clamp(28px, 5vw, 42px)",
                color: textWhite,
              }}
            >
              My Work{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Journey
              </span>
            </Title>
          </Stack>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "19px",
              top: "0",
              bottom: "0",
              width: "2px",
              background: `linear-gradient(180deg, ${gradientFrom}, ${gradientTo})`,
              opacity: 0.3,
            }}
          />

          <Stack gap={28}>
            {journey.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                >
                  <Group align="flex-start" gap="lg" wrap="nowrap">
                    {/* Icon Bullet */}
                    <div
                      style={{
                        width: "40px",
                        height: "40px",
                        borderRadius: "50%",
                        background: `linear-gradient(135deg, ${gradientFrom}, ${gradientTo})`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        zIndex: 1,
                      }}
                    >
                      <Icon size={18} color="white" />
                    </div>

                    {/* Card */}
                    <Paper
                      p="lg"
                      radius="lg"
                      style={{
                        background: background,
                        border: `1px solid ${border}`,
                        flex: 1,
                      }}
                    >
                      <Group justify="space-between" align="flex-start" mb={6}>
                        <Title
                          order={4}
                          style={{
                            color: textWhite,
                            fontSize: "clamp(14px, 2vw, 16px)",
                            flex: 1,
                            marginRight: "12px",
                          }}
                        >
                          {item.title}
                        </Title>
                        <Badge
                          size="sm"
                          radius="sm"
                          style={{
                            background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                            border: "none",
                            color: "white",
                            whiteSpace: "nowrap",
                            flexShrink: 0,
                          }}
                        >
                          {item.period}
                        </Badge>
                      </Group>

                      <Text
                        mb="sm"
                        style={{
                          color: textDim,
                          fontSize: "13px",
                          lineHeight: 1.8,
                        }}
                      >
                        {item.description}
                      </Text>

                      <Group gap={6}>
                        {item.tags.map((tag, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            size="xs"
                            radius="sm"
                            style={{
                              borderColor: border,
                              color: textDim,
                            }}
                          >
                            {tag}
                          </Badge>
                        ))}
                      </Group>
                    </Paper>
                  </Group>
                </motion.div>
              );
            })}
          </Stack>
        </div>
      </Container>
    </div>
  );
}