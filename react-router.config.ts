import type { Config } from "@react-router/dev/config";

export default {
  // Config Options
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: true,
  // Optimize for serverless deployment
  serverBuildFile: "index.js",
  // Configure build output for Vercel
  buildDirectory: "build",
} satisfies Config;
