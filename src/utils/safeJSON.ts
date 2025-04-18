export function safeParseJSON<T = unknown>(str: string, fallback: T): T {
    try {
      return JSON.parse(str);
    } catch {
      return fallback;
    }
  }
  