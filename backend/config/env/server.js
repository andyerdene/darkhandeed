module.exports = ({ env }) => ({
  proxy: true,
  url: env("https://darkhandeed.herokuapp.com/"),
  app: {
    keys: env.array(
      "9hZTVtdGdy8DOjS840IIvg==,0iCKos3HKt4rouHIpFvo+Q==,EZATJWgJ8qY0Xbx6Xygy/w==,z6KhnQblP2quDybCYAHmuw=="
    ),
  },
});
