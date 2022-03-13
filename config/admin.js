module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '9b1cc5976047d02f23f6b68aec7210e6'),
  },
});
