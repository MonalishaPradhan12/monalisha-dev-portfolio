import '@mantine/core/styles.css';
import { MantineProvider, ColorSchemeScript } from '@mantine/core';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <ColorSchemeScript defaultColorScheme="dark" />
      </head>
      <body>
        <MantineProvider
          defaultColorScheme="dark"
          theme={{
            other: {
              background: "#020617",
              card: "#0f172a",
              border: "#1e293b",
              gradientFrom: "#3b82f6",
              gradientTo: "#06b6d4",
              textDim: "#94a3b8",
              textWhite: "#f8fafc",
              green: "#22c55e",
              purple: "#7c6af7",
              pink: "#f472b6",
              cyan: "#38bdf8",
              statBg: "#0a1120",
            },
          }}
        >
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}