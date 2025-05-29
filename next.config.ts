import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                      removeDimensions: true,
                    },
                  },
                },
              ],
            },
            dimensions: false, // Remove width/height from SVG
          },
        },
      ],
    })
    return config
  },
}

export default nextConfig
