"use client";

import {
  Container,
  Grid,
  Title,
  Text,
  Paper,
  Progress,
  Stack,
  Badge,
  Group,
  useMantineTheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import {
  IconCode,
  IconServer,
  IconTools,
} from "@tabler/icons-react";

const frontendSkills = [
  { name: "React.js", value: 90 },
  { name: "Next.js", value: 85 },
  { name: "TypeScript", value: 82 },
  { name: "JavaScript", value: 90 },
  { name: "Tailwind CSS", value: 88 },
  { name: "Mantine UI", value: 85 },
  { name: "API Integration", value: 90 },
];

const backendSkills = [
  { name: "Node.js", value: 55 },
  { name: "REST APIs", value: 55 },
  { name: "PostgreSQL", value: 70 },
  { name: "MySQL", value: 75 },
];

const toolSkills = [
  { name: "Git & GitHub", value: 85 },
  { name: "VS Code", value: 92 },
  { name: "Postman", value: 88 },
  { name: "Jira", value: 85 },
  { name: "Confluence", value: 80 },
  { name: "Agile/Scrum", value: 82 },
];

const extras = [
  "Component Architecture",
  "Functional Components",
  "Custom Hooks",
  "Protected Routes",
  "Role-Based Access",
  "Lazy Loading",
  "Performance Optimization",
  "Responsive Design",
  "UI/UX Best Practices",
  "SDLC",
  "Code Reviews",
  "Sprint Planning",
];

const skillCards = [
  {
    label: "Front-End",
    icon: IconCode,
    skills: frontendSkills,
    gradientKey: "blue",
  },
  {
    label: "Back-End & DB",
    icon: IconServer,
    gradientKey: "orange",
    skills: backendSkills,
  },
  {
    label: "Tools & DevOps",
    icon: IconTools,
    gradientKey: "green",
    skills: toolSkills,
  },
];

const gradientColors: Record<string, string[]> = {
  blue: ["#3b82f6", "#06b6d4"],
  orange: ["#f97316", "#eab308"],
  green: ["#22c55e", "#10b981"],
};

export default function SkillsSection() {
  const theme = useMantineTheme();
  const { background, card, border, gradientFrom, gradientTo, textDim, textWhite } =
    theme.other;

  return (
    <div
      id="SkillsSection"
      style={{
        background: background,
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
              EXPERTISE
            </Text>
            <Title
              order={1}
              ta="center"
              style={{
                fontSize: "clamp(28px, 5vw, 42px)",
                color: textWhite,
              }}
            >
              Skills &{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Technologies
              </span>
            </Title>
          </Stack>
        </motion.div>

        {/* Skill Cards */}
        <Grid gutter={{ base: 20, md: 30 }}>
          {skillCards.map((card_, cardIndex) => {
            const [from, to] = gradientColors[card_.gradientKey];
            const Icon = card_.icon;

            return (
              <Grid.Col key={card_.label} span={{ base: 12, sm: 6, lg: 4 }}>
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: cardIndex * 0.15 }}
                  style={{ height: "100%" }}
                >
                  <Paper
                    p="xl"
                    radius="lg"
                    style={{
                      background: card,
                      border: `1px solid ${border}`,
                      height: "100%",
                    }}
                  >
                    {/* Card Header */}
                    <Group mb="lg">
                      <div
                        style={{
                          width: 36,
                          height: 36,
                          borderRadius: "8px",
                          background: `linear-gradient(135deg, ${from}, ${to})`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Icon size={18} color="white" />
                      </div>
                      <Text
                        fw={600}
                        style={{
                          background: `linear-gradient(90deg, ${from}, ${to})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontSize: "16px",
                        }}
                      >
                        {card_.label}
                      </Text>
                    </Group>

                    {/* Skill Bars */}
                    <Stack gap="md">
                      {card_.skills.map((skill, i) => (
                        <motion.div
                          key={skill.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.4,
                            delay: cardIndex * 0.15 + i * 0.06,
                          }}
                        >
                          <Group justify="space-between" mb={6}>
                            <Text style={{ color: textDim, fontSize: "13px" }}>
                              {skill.name}
                            </Text>
                            <Text
                              style={{
                                background: `linear-gradient(90deg, ${from}, ${to})`,
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                                fontSize: "12px",
                                fontWeight: 600,
                              }}
                            >
                              {skill.value}%
                            </Text>
                          </Group>
                          <div
                            style={{
                              height: "6px",
                              borderRadius: "999px",
                              background: border,
                              overflow: "hidden",
                            }}
                          >
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: `${skill.value}%` }}
                              viewport={{ once: true }}
                              transition={{
                                duration: 0.8,
                                delay: cardIndex * 0.15 + i * 0.06,
                                ease: "easeOut",
                              }}
                              style={{
                                height: "100%",
                                borderRadius: "999px",
                                background: `linear-gradient(90deg, ${from}, ${to})`,
                              }}
                            />
                          </div>
                        </motion.div>
                      ))}
                    </Stack>
                  </Paper>
                </motion.div>
              </Grid.Col>
            );
          })}
        </Grid>

        {/* Also Experienced */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Stack align="center" mt={70} mb={24}>
            <Title
              order={3}
              style={{ color: textWhite, fontSize: "clamp(18px, 3vw, 24px)" }}
            >
              Also Experienced With
            </Title>
          </Stack>

          <Group justify="center" gap="xs">
            {extras.map((item, i) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
              >
                <Badge
                  variant="outline"
                  size="md"
                  radius="sm"
                  style={{
                    borderColor: border,
                    color: textDim,
                  }}
                >
                  {item}
                </Badge>
              </motion.div>
            ))}
          </Group>
        </motion.div>
      </Container>
    </div>
  );
}