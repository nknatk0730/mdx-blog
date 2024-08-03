import createMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions`` to include MDX files
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  // Optionally, add any other Next.js config below
}
 
const withMDX = createMDX({
  options: {
    rehypePlugins: [rehypePrettyCode],
  }
})
 
// Wrap MDX and Next.js config with each other
export default withMDX(nextConfig)