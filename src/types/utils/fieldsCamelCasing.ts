export type CamelCase<S> =
  S extends `${infer First}_${infer SecondFirst}${infer Rest}`
    ? `${First}${Uppercase<SecondFirst>}${CamelCase<Rest>}`
    : S;

export type KeysToCamelCase<T> = T extends Record<string, unknown>
  ? {
    [K in keyof T as CamelCase<K>]: KeysToCamelCase<T[K]>;
  }
  : T extends Array<infer U>
    ? Array<KeysToCamelCase<U>>
    : T;
