import { DatabaseOptions, configNamespace } from '@intentjs/core';
import { knexSnakeCaseMappers } from 'objection';
import { toBoolean } from '@intentjs/core';

export default configNamespace(
  'db',
  (): DatabaseOptions => ({
    isGlobal: true,
    default: process.env.DEFAULT_DB || 'pg',
    connections: {
      sqlite: {
        client: 'better-sqlite3',
        debug: !!+process.env.DB_DEBUG,
        connection: { filename: './inbtent.db' },
        useNullAsDefault: true,
        migrations: { directory: './database/migrations' },
      },
    },
  }),
);
