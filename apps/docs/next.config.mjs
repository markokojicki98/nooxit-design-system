import { createMDX } from 'fumadocs-mdx/next';

const withMDX = createMDX();

/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  // The design system is consumed from source inside the monorepo.
  transpilePackages: ['nooxit-design-system'],
};

export default withMDX(config);
