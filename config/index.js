import { config as env } from "dotenv";

env();

export const config = {
  host: process.env.BASE_URL || "http://0.0.0.0",
  port: process.env.PORT || 3000,
};
