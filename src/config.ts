// src/config.ts
export interface AppConfig {
  apiUrl: string;
}

export async function loadConfig(): Promise<AppConfig> {
  const response = await fetch("/config.json");
  if (!response.ok) {
    throw new Error("No se pudo cargar config.json");
  }
  return response.json();
}
