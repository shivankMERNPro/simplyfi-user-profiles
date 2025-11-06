const env = {
  viteEncryptionKey: import.meta.env.VITE_ENCRYPTION_KEY ?? "",
  mode: import.meta.env.MODE ?? "",
  baseUrl: import.meta.env.VITE_BASE_URL ?? "",
};

export default env;
