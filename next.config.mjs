/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
