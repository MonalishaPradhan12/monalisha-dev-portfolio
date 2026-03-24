"use client";

import {
  Container,
  Title,
  Text,
  Card,
  Button,
  Grid,
  Badge,
  Group,
  Stack,
  useMantineTheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import { IconExternalLink, IconBrandGithub, IconBriefcase } from "@tabler/icons-react";

const projects = [
  {
    title: "AIA Insurance Portal",
    description:
      "Developed core UI modules using React.js and Next.js with role-based rendering. Integrated secure REST APIs and handled dynamic data presentation.",
    points: [
      "Implemented Single Sign-On (SSO) authentication using Okta",
      "Worked within a micro-frontend architecture for an enterprise-grade application",
      "Focused on UI performance, maintainability, and scalability",
    ],
    tech: ["Next.js", "React.js", "REST APIs", "Okta SSO", "Micro-Frontend"],
    type: "professional",
    demo: null,
    github: null,
  },
  {
    title: "NMMS Odisha Portal",
    description:
      "Contributed to frontend development and UI enhancements for the NMMS Odisha portal. Improved page responsiveness, fixed UI bugs, and enhanced user experience across multiple screens.",
    points: [
      "Worked closely with senior developers to understand API integration and data flow",
      "Assisted in documentation, testing, and cross-team collaboration",
    ],
    tech: ["React.js", "REST APIs", "Responsive Design", "UI/UX"],
    type: "professional",
    demo: null,
    github: null,
  },

  {
    title: "Society Management System",
    description:
      "System to manage complaints, maintenance tracking, approvals, and resident communication with admin dashboard.",
    points: [],
    tech: ["React", "Next.js", "API", "Database"],
    type: "personal",
    demo: "#",
    github: "#",
  },
];

export default function ProjectsSection() {
  const theme = useMantineTheme();
  const { background, card, border, gradientFrom, gradientTo, textDim, textWhite } =
    theme.other;

  const professional = projects.filter((p) => p.type === "professional");
  const personal = projects.filter((p) => p.type === "personal");

  return (
    <div
      id="projectSections"
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
              MY WORK
            </Text>
            <Title
              order={1}
              ta="center"
              style={{
                fontSize: "clamp(28px, 5vw, 42px)",
                color: textWhite,
              }}
            >
              Featured{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Projects
              </span>
            </Title>
          </Stack>
        </motion.div>

        {/* Professional Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Group mb="lg" gap="xs">
            <IconBriefcase size={18} color={gradientFrom} />
            <Text
              fw={600}
              size="sm"
              style={{
                letterSpacing: "1px",
                color: textWhite,
              }}
            >
              Professional Experience
            </Text>
          </Group>
        </motion.div>

        <Grid gutter={{ base: 20, md: 30 }} mb={60}>
          {professional.map((project, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: "100%" }}
              >
                <Card
                  shadow="lg"
                  radius="lg"
                  p="xl"
                  style={{
                    background: card,
                    border: `1px solid ${border}`,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      height: "3px",
                      borderRadius: "999px",
                      background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                      marginBottom: "20px",
                    }}
                  />

                  <Stack style={{ flex: 1 }} justify="space-between">
                    <div>
                      <Group mb="sm" justify="space-between" align="flex-start">
                        <Title
                          order={3}
                          style={{
                            color: textWhite,
                            fontSize: "clamp(16px, 2.5vw, 20px)",
                          }}
                        >
                          {project.title}
                        </Title>
                        <Badge
                          size="sm"
                          radius="sm"
                          style={{
                            background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                            color: "white",
                            border: "none",
                            whiteSpace: "nowrap",
                          }}
                        >
                          Professional
                        </Badge>
                      </Group>

                      <Text
                        mb="sm"
                        style={{
                          color: textDim,
                          lineHeight: 1.8,
                          fontSize: "15px",
                        }}
                      >
                        {project.description}
                      </Text>

                      {project.points.length > 0 && (
                        <Stack gap={6} mb="md">
                          {project.points.map((point, i) => (
                            <Group key={i} gap="xs" align="flex-start">
                              <div
                                style={{
                                  width: "5px",
                                  height: "5px",
                                  borderRadius: "50%",
                                  background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                                  marginTop: "8px",
                                  flexShrink: 0,
                                }}
                              />
                              <Text
                                style={{
                                  color: textDim,
                                  fontSize: "14px",
                                  lineHeight: 1.7,
                                  flex: 1,
                                }}
                              >
                                {point}
                              </Text>
                            </Group>
                          ))}
                        </Stack>
                      )}

                      <Group gap="xs">
                        {project.tech.map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + i * 0.05,
                            }}
                          >
                            <Badge
                              variant="outline"
                              size="sm"
                              radius="sm"
                              style={{
                                borderColor: border,
                                color: textDim,
                              }}
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </Group>
                    </div>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid>

        {/* Personal Projects */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Group mb="lg" gap="xs">
            <IconBrandGithub size={18} color={gradientFrom} />
            <Text
              fw={600}
              size="sm"
              style={{
                letterSpacing: "1px",
                color: textWhite,
              }}
            >
              Personal Projects
            </Text>
          </Group>
        </motion.div>

        <Grid gutter={{ base: 20, md: 30 }}>
          {personal.map((project, index) => (
            <Grid.Col key={index} span={{ base: 12, sm: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: "100%" }}
              >
                <Card
                  shadow="lg"
                  radius="lg"
                  p="xl"
                  style={{
                    background: card,
                    border: `1px solid ${border}`,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <div
                    style={{
                      height: "3px",
                      borderRadius: "999px",
                      background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                      marginBottom: "20px",
                    }}
                  />

                  <Stack style={{ flex: 1 }} justify="space-between">
                    <div>
                      <Title
                        order={3}
                        mb="sm"
                        style={{
                          color: textWhite,
                          fontSize: "clamp(16px, 2.5vw, 20px)",
                        }}
                      >
                        {project.title}
                      </Title>

                      <Text
                        mb="md"
                        style={{
                          color: textDim,
                          lineHeight: 1.8,
                          fontSize: "15px",
                        }}
                      >
                        {project.description}
                      </Text>

                      <Group gap="xs" mb="lg">
                        {project.tech.map((tech, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + i * 0.05,
                            }}
                          >
                            <Badge
                              variant="outline"
                              size="sm"
                              radius="sm"
                              style={{
                                borderColor: border,
                                color: textDim,
                              }}
                            >
                              {tech}
                            </Badge>
                          </motion.div>
                        ))}
                      </Group>
                    </div>

                    <Group>
                     
                      <Button
                        size="sm"
                        leftSection={<IconBrandGithub size={15} />}
                        variant="outline"
                        style={{
                          borderColor: border,
                          color: textDim,
                        }}
                        component="a"
                        href={project.github ?? "#"}
                        target="_blank"
                      >
                        GitHub
                      </Button>
                    </Group>
                  </Stack>
                </Card>
              </motion.div>
            </Grid.Col>
          ))}
        </Grid> */}
      </Container>
    </div>
  );
}