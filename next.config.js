/** @type {import('next').NextConfig} */
//const nextConfig = {};

// module.exports = nextConfig;
const { default: axios } = require("axios");
const path = require("path");
module.exports = {
    sassOptions: {
        includePaths: [path.join(__dirname, "styles")]
    },
    eslint: {
        ignoreDuringBuilds: true
    },
    experimental: {
        serverActions: true
    },
    reactStrictMode: true,
    // async redirects() {
    //     let url_redirections = await axios.get(`${process.env.NEXT_PUBLIC_DIRECTUS_URL}/items/url_redirection?fields=old_url,new_url`, {
    //         headers: {
    //             Authorization: `Bearer ${process.env.NEXT_PUBLIC_ADMIN_TOKEN}`
    //         }
    //     });
    //     return url_redirections?.data?.data.map(({ old_url, new_url }) => ({
    //         source: old_url,
    //         destination: new_url,
    //         permanent: true,
    //         statusCode: 301
    //     }));
    // },
    swcMinify: true,
    optimizeFonts: true,
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "mpzvn9pupr.ap-south-1.awsapprunner.com"
            }
        ]
    }
};
