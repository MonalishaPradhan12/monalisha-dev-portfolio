"use client";

import {
  Container,
  Grid,
  Title,
  Text,
  Badge,
  Stack,
  Paper,
  Group,
  Button,
  useMantineTheme,
} from "@mantine/core";
import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "@mantine/hooks";

const skills = [
  "React.js",
  "JavaScript",
  "Next.js",
  "TypeScript",
  "REST APIs",
  "Tailwind CSS",
  "Git",
  "Mantine UI",
];

const stats = [
  { value: "1.9+", label: "Years Experience" },
  { value: "10+", label: "Projects Built" },
  { value: "10+", label: "Tech Stacks" },
];

export default function AboutSection() {
  const theme = useMantineTheme();
  const {
    background,
    card,
    border,
    gradientFrom,
    gradientTo,
    textDim,
    textWhite,
    green,
    purple,
    pink,
    cyan,
  } = theme.other;

  const isMobile = useMediaQuery("(max-width: 768px)");
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      id="aboutSections"
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
              ABOUT ME
            </Text>
            <Title
              order={1}
              ta="center"
              style={{
                fontSize: "clamp(28px, 5vw, 42px)",
                color: textWhite,
              }}
            >
              Turning Ideas Into{" "}
              <span
                style={{
                  background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Digital Reality
              </span>
            </Title>
          </Stack>
        </motion.div>

        <Grid gutter={{ base: 30, md: 50 }} align="center">
          {/* Left Code Card */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Paper
                shadow="xl"
                radius="lg"
                p="xl"
                style={{
                  background: background,
                  border: `1px solid ${border}`,
                  overflow: "hidden",
                }}
              >
                {/* Terminal Header */}
                <Group gap={6} mb="md">
                  <span style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#ff5f57", display: "inline-block" }} />
                  <span style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#febc2e", display: "inline-block" }} />
                  <span style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#28c840", display: "inline-block" }} />
                  <Text size="xs" style={{ color: textDim, fontFamily: "monospace", marginLeft: "auto" }}>
                    developer.ts
                  </Text>
                </Group>

                <pre
                  style={{
                    color: textDim,
                    fontSize: "clamp(12px, 2vw, 14px)",
                    lineHeight: 1.8,
                    margin: 0,
                    overflowX: "auto",
                    fontFamily: "monospace",
                  }}
                >
                  <span style={{ color: purple }}>const </span>
                  <span style={{ color: cyan }}>developer</span>
                  <span style={{ color: textWhite }}> = {"{"}</span>
                  {"\n"}
                  {"  "}<span style={{ color: pink }}>name</span>
                  <span style={{ color: textWhite }}>: </span>
                  <span style={{ color: green }}>"Monalisha Pradhan"</span>
                  <span style={{ color: textWhite }}>,</span>
                  {"\n"}
                  {"  "}<span style={{ color: pink }}>role</span>
                  <span style={{ color: textWhite }}>: </span>
                  <span style={{ color: green }}>"Front-End Dev"</span>
                  <span style={{ color: textWhite }}>,</span>
                  {"\n"}
                  {"  "}<span style={{ color: pink }}>passion</span>
                  <span style={{ color: textWhite }}>: </span>
                  <span style={{ color: green }}>"React.js"</span>
                  <span style={{ color: textWhite }}>,</span>
                  {"\n"}
                  {"  "}<span style={{ color: pink }}>loves</span>
                  <span style={{ color: textWhite }}>: [</span>
                  {"\n"}
                  {"    "}<span style={{ color: green }}>"Clean Code"</span>
                  <span style={{ color: textWhite }}>,</span>
                  {"\n"}
                  {"    "}<span style={{ color: green }}>"UI/UX"</span>
                  <span style={{ color: textWhite }}>,</span>
                  {"\n"}
                  {"    "}<span style={{ color: green }}>"Problem Solving"</span>
                  {"\n"}
                  {"  "}<span style={{ color: textWhite }}>],</span>
                  {"\n"}
                  {"  "}<span style={{ color: pink }}>available</span>
                  <span style={{ color: textWhite }}>: </span>
                  <span style={{ color: purple }}>true</span>
                  {"\n"}
                  <span style={{ color: textWhite }}>{"}"}</span>
                </pre>
              </Paper>

              {/* Stats Row */}
              <Group mt="lg" grow>
                {stats.map((stat, i) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.1 }}
                  >
                    <Paper
                      radius="md"
                      p="md"
                      ta="center"
                      style={{
                        background: background,
                        border: `1px solid ${border}`,
                      }}
                    >
                      <Text
                        style={{
                          background: `linear-gradient(90deg, ${gradientFrom}, ${gradientTo})`,
                          WebkitBackgroundClip: "text",
                          WebkitTextFillColor: "transparent",
                          fontSize: "22px",
                          fontWeight: 700,
                        }}
                      >
                        {stat.value}
                      </Text>
                      <Text size="xs" style={{ color: textDim }} mt={4}>
                        {stat.label}
                      </Text>
                    </Paper>
                  </motion.div>
                ))}
              </Group>
            </motion.div>
          </Grid.Col>

          {/* Right Text */}
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Stack gap="lg">

                {/* First paragraph — always visible */}
                <Text style={{ color: textDim, lineHeight: 1.9, fontSize: "18px" }}>
                  Hey there! I'm{" "}
                  <span style={{ color: textWhite, fontWeight: 600 }}>
                    Monalisha Pradhan
                  </span>
                  , a passionate Front-End Developer based in India. I specialize
                  in building beautiful, responsive, and high-performance web
                  applications using React.js and modern JavaScript.
                </Text>

                {/* Second + third paragraph — hidden on mobile unless expanded */}
                {(!isMobile || expanded) && (
                  <>
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3 }}
                    >
                      <Text style={{ color: textDim, lineHeight: 1.9, fontSize: "18px" }}>
                        With hands-on experience in enterprise applications, I've
                        mastered creating scalable architectures, secure authentication
                        flows, and integrating modern APIs.
                      </Text>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      transition={{ duration: 0.3, delay: 0.1 }}
                    >
                      <Text style={{ color: textDim, lineHeight: 1.9, fontSize: "18px" }}>
                        I believe in writing clean, maintainable code and continuously
                        learning new technologies to deliver the best user experiences.
                      </Text>
                    </motion.div>
                  </>
                )}

                {/* Read more / less — only on mobile */}
                {isMobile && (
                  <Button
                    variant="subtle"
                    size="xs"
                    onClick={() => setExpanded(!expanded)}
                    style={{
                      color: gradientFrom,
                      padding: 0,
                      width: "fit-content",
                      background: "transparent",
                    }}
                  >
                    {expanded ? "Show less ↑" : "Read more ↓"}
                  </Button>
                )}

                {/* Skills Badges */}
                <div>
                  <Text style={{ color: textWhite }} fw={600} mb="sm" size="sm">
                    Tech Stack
                  </Text>
                  <Group gap="xs">
                    {skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
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
                          {skill}
                        </Badge>
                      </motion.div>
                    ))}
                  </Group>
                </div>
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </div>
  );
}