import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@workspace/ui"],
  async rewrites() {
    return {
      beforeFiles: [
        {
          source: "/admin/:path*",
          has: [
            {
              type: "host",
              value: "admin.:domain*",
            },
          ],
          destination: "/admin/:path*",
        },
        {
          source: "/app/:path*",
          has: [
            {
              type: "host",
              value: "app.:domain*",
            },
          ],
          destination: "/app/:path*",
        },
      ],
    };
  },
};

export default withNextIntl(nextConfig);
