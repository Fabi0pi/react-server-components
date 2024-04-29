/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['fakestoreapi.com'],
      },
    experimental:{
      serverActions: {}
    }
};

export default nextConfig;
