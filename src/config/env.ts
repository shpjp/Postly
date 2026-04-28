import dotenv from "dotenv";

dotenv.config();

function getEnv(key: string): string {
  const value = process.env[key];
  if (!value) {
    throw new Error(`Missing environment variable: ${key}`);
  }
  return value;
}

export const env = {
  PORT: process.env.PORT || "3000",
  DATABASE_URL: getEnv("DATABASE_URL"),
  REDIS_URL: getEnv("REDIS_URL"),
  JWT_SECRET: getEnv("JWT_SECRET"),
};