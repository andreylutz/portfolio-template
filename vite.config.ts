import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const repoName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const isGithubPagesBuild = process.env.GITHUB_ACTIONS === "true" && Boolean(repoName);

export default defineConfig({
  base: isGithubPagesBuild ? `/${repoName}/` : "/",
  plugins: [react()]
});
