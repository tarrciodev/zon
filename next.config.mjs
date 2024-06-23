/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "github.com",
                pathname: "/**",
                port: "",
            },
            {
                protocol: "https",
                hostname: "images.ctfassets.net",
                pathname: "/**",
                port: "",
            },
            {
                protocol: "https",
                hostname: "sa-east-1.graphassets.com",
                pathname: "/**",
                port: "",
            },
        ],
    },
};

export default nextConfig;
