import { createClient } from "redis";

let client: ReturnType<typeof createClient> | null = null;

export async function getRedis() {
  if (!process.env.REDIS_URL) return null;
  if (!client) {
    client = createClient({ url: process.env.REDIS_URL });
    client.on("error", () => undefined);
    await client.connect();
  }
  return client;
}

export async function cachedJson<T>(key: string, ttlSeconds: number, loader: () => Promise<T>) {
  const redis = await getRedis();
  if (!redis) return loader();

  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached) as T;

  const value = await loader();
  await redis.set(key, JSON.stringify(value), { EX: ttlSeconds });
  return value;
}
