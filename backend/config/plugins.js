module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: "cloudinary",
      providerOptions: {
        cloud_name: env("dupxjy8k7"),
        api_key: env("451373448688674"),
        api_secret: env("b6nW9jx8OfDEvCporu4ILyopoCY"),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
});
