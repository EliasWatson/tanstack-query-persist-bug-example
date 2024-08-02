## Output of `npm run build`

```
src/App.tsx:25:5 - error TS2769: No overload matches this call.
  Overload 1 of 2, '(options: DefinedInitialDataOptions<unknown, Error, unknown, string[]>): UseQueryOptions<unknown, Error, unknown, string[]> & { initialData: unknown; } & { ...; }', gave the following error.
    Types of parameters 'queryFn' and 'queryFn' are incompatible.
      Type 'unknown' is not assignable to type 'string | Promise<string>'.
  Overload 2 of 2, '(options: UndefinedInitialDataOptions<unknown, Error, unknown, string[]>): UseQueryOptions<unknown, Error, unknown, string[]> & { initialData?: InitialDataFunction<...> | undefined; } & { ...; }', gave the following error.
    Type '(queryFn: QueryFunction<string, string[], never>, context: { queryKey: string[]; signal: AbortSignal; meta: Record<string, unknown> | undefined; pageParam?: unknown; direction?: unknown; }, query: Query<...>) => string | Promise<...>' is not assignable to type '(queryFn: QueryFunction<unknown, string[], never>, context: { queryKey: string[]; signal: AbortSignal; meta: Record<string, unknown> | undefined; pageParam?: unknown; direction?: unknown; }, query: Query<...>) => unknown'.

25     persister: createPersister<string, string[]>(),
       ~~~~~~~~~

  node_modules/@tanstack/query-core/build/modern/hydration-DtrabBHC.d.ts:577:5
    577     persister?: QueryPersister<NoInfer<TQueryFnData>, NoInfer<TQueryKey>, NoInfer<TPageParam>>;
            ~~~~~~~~~
    The expected type comes from property 'persister' which is declared here on type 'DefinedInitialDataOptions<unknown, Error, unknown, string[]>'
  node_modules/@tanstack/query-core/build/modern/hydration-DtrabBHC.d.ts:577:5
    577     persister?: QueryPersister<NoInfer<TQueryFnData>, NoInfer<TQueryKey>, NoInfer<TPageParam>>;
            ~~~~~~~~~
    The expected type comes from property 'persister' which is declared here on type 'UndefinedInitialDataOptions<unknown, Error, unknown, string[]>'


Found 1 error.
```
