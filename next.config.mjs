/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
  // Add the following configuration for Netlify
  // target: "serverless",
};

export default nextConfig;
