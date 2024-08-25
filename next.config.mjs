/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [
          {
            key: "Content-Type",
            value: "application/pkcs7-mime",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
