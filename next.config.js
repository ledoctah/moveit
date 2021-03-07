module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  },
  env: {
    FIREBASE_API_KEY: 'AIzaSyBsWi84fVDHROqUVoxr0T1IsKTXNNoXxBs',
    FIREBASE_AUTH_DOMAIN: 'moveit-c4396.firebaseapp.com',
    FIREBASE_DATABASE_URL: 'https://moveit-c4396.firebaseio.com',
    FIREBASE_PROJECT_ID: 'moveit-c4396',
  },
};
