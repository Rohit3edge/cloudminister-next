/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true, // Helps catch potential issues
    webpack: (config, { dev }) => {
      if (dev) {
        config.devtool = "source-map"; // Shows exact error lines in dev mode
      }
      return config;
    },
    compiler: {
      styledComponents: true, // If using styled-components
    },
    eslint: {
      ignoreDuringBuilds: true, // Avoid errors stopping builds
    },
  };
  
  export default nextConfig;
  