import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/services/gamechanger-scaling", destination: "/services/the-shift", permanent: true },
      { source: "/services/master-closing", destination: "/services/the-breakthrough", permanent: true },
      { source: "/services/focus-flow", destination: "/methodologie-cdt", permanent: true },
      { source: "/services/cash-scale", destination: "/services/the-shift", permanent: true },
      { source: "/ecosysteme", destination: "/services", permanent: true },
      { source: "/temoignages", destination: "/resultats", permanent: true },
    ];
  },
};

export default nextConfig;
