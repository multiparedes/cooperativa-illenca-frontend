// require dotenv and configure it
require("dotenv").config();
const backendUrl = process.env.BACKEND_BASE_URL || "http://localhost:4000";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "shadcn-nuxt", "nuxt-icon"],
  shadcn: {
    /**
     * Prefix for all the imported component
     */
    prefix: "",
    /**
     * Directory that the component lives in.
     * @default "./components/ui"
     */
    componentDir: "./components/ui",
  },
  runtimeConfig: {
    public: {
      apiPath: backendUrl,
    },
  },
});
