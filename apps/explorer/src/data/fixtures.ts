export interface Capture { _endpoint?: string; _complete_json?: boolean; data?: unknown }
const files = import.meta.glob('./fixtures/*.json', { eager: true, import: 'default' }) as Record<string, unknown>;
export const fixture = <T>(name: string): T | null => (files[`./fixtures/${name}.json`] as T | undefined) ?? null;
// Truncated captures can contain valid complete objects. Parse balanced JSON while respecting quoted braces.
export function salvageObjects(text: string): Record<string, unknown>[] {
 const stack: number[] = [], result: Record<string, unknown>[] = [];
 let quoted = false, escaped = false;
 for (let i = 0; i < text.length; i++) {
  const c = text[i];
  if (quoted) { if (escaped) escaped = false; else if (c === '\\') escaped = true; else if (c === '"') quoted = false; continue; }
  if (c === '"') quoted = true;
  else if (c === '{') stack.push(i);
  else if (c === '}' && stack.length) {
   const start = stack.pop()!;
   try { result.push(JSON.parse(text.slice(start, i + 1)) as Record<string, unknown>); } catch { /* Ignore incomplete objects only. */ }
  }
 }
 return result;
}
export function unwrap(value: unknown): unknown {
 if (value && typeof value === 'object' && 'data' in value) return unwrap(value.data);
 return value;
}
