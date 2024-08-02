import { type ReactNode } from "react";
import { QueryKey, queryOptions, QueryPersister } from "@tanstack/react-query";
import { experimental_createPersister } from "@tanstack/query-persist-client-core";

function createPersister<TData, TQueryKey extends QueryKey>(): QueryPersister<TData, TQueryKey> {
  return experimental_createPersister({ storage: undefined });
}

function App(): ReactNode {
  // No type errors when queryFn has no arguments:
  queryOptions({
    queryKey: ['good-query'],
    queryFn: () => 'test',
    persister: createPersister<string, string[]>(),
  });

  // Type error when queryFn has arguments:
  queryOptions({
    queryKey: ['bad-query'],
    // Ignoring the unused variable errors:
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    queryFn: (args) => 'test',
    persister: createPersister<string, string[]>(),
  });

  return null;
}

export default App;
