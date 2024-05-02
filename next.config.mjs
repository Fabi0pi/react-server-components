/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['fakestoreapi.com', "plus.unsplash.com", "images.unsplash.com", "www.google.com"],
      },
    experimental:{
      serverActions: {}
    }
};

export default nextConfig;
