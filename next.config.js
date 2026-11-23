/** @type {import('next').NextConfig} */
const nextConfig = {
  // @elm-react/component can't survive React 18+'s dev-only Strict Mode remount (it throws a duplicate-instance error).
  reactStrictMode: false,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.module.rules.push({
      test: /\.elm$/,
      exclude: [/elm-stuff/, /node_modules/],
      use: [
        // Elm exports through the module's `this`, which Next's dev-mode React Refresh wrapper drops.
        {
          loader: "imports-loader",
          options: { wrapper: "module.exports" },
        },
        {
          loader: "elm-webpack-loader",
          options: {},
        },
      ],
    });
    return config;
  },
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
