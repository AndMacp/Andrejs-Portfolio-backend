export default ({ env }) => {
  const dbUrl = env('DATABASE_URL')

  return {
    connection: {
      client: 'mysql',
      connection: dbUrl
        ? {
            connectionString: dbUrl,
            ssl: env.bool('DATABASE_SSL', false)
              ? { rejectUnauthorized: true }
              : false,
          }
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
      pool: { min: 2, max: 10 },
      acquireConnectionTimeout: 60000,
    },
  }
}
