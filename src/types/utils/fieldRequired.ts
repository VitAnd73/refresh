export type Prettify<T> = T extends Record<string, unknown> ? {
  [K in keyof T]: T[K];
} : T

export type RequireOneKey<T, K extends keyof T> = Record<K, Exclude<T[K], undefined>> & Partial<Record<Exclude<keyof T, K>, undefined>>

export type RequireOnlyOne<T> = Prettify<{
  [K in keyof T]-?: RequireOneKey<T, K>
}[keyof T]>;
