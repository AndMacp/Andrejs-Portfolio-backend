export default ({ env }) => ({
  connection: {
    client: 'mysql',
    connection: env('DATABASE_URL')
      ? env('DATABASE_URL') // Use Railway MySQL URL if available
      : {
          host: env('DATABASE_HOST', 'localhost'),
          port: env.int('DATABASE_PORT', 3306),
          database: env('DATABASE_NAME', 'strapi'),
          user: env('DATABASE_USERNAME', 'strapi'),
          password: env('DATABASE_PASSWORD', 'strapi'),
          ssl: env.bool('DATABASE_SSL', false)
            ? { rejectUnauthorized: true }
            : false,
        },
    pool: {
      min: env.int('DATABASE_POOL_MIN', 2),
      max: env.int('DATABASE_POOL_MAX', 10),
    },
    acquireConnectionTimeout: 60000,
  },
})
