/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  //  redirects() {
  // return [
  // {
  // source: "/",
  //destination: "/home",
  //permanent: true,
  //},
  //];
  //},
  output: 'standalone',
  experimental: {
    appDir: true, // Ensure App Router is enabled
  },
};
export default nextConfig;
