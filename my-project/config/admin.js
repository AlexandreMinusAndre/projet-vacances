module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ac53a190a9d05fecaa451a2af5f1d059'),
  },
});
