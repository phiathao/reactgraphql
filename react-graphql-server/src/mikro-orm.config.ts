import { Post } from "./entities/Post";
import { IS_PROD } from "./constants";
import { MikroORM } from "@mikro-orm/core";
import path from "path";
import { User } from "./entities/User";

export default {
  migrations: {
    path: path.join(__dirname, './migrations'),
    pattern: /^[\w-]+\d+\.[tj]s$/,
  },
  entities: [Post, User],
  dbName: "reactgraphql",
  type: "postgresql",
  debug: !IS_PROD,
  password: 'postgres',
  port: 5434,
} as Parameters<typeof MikroORM.init>[0];
