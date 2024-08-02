import { type ReactNode } from "react";
import { queryOptions, QueryPersister } from "@tanstack/react-query";
import { experimental_createPersister } from "@tanstack/query-persist-client-core";

function createPersister<TData>(): QueryPersister<TData, any> {
  return experimental_createPersister({ storage: undefined });
}

function App(): ReactNode {
  // No type errors when queryFn has no arguments:
  queryOptions({
    queryKey: ['good-query'],
    queryFn: () => 'test',
    persister: createPersister<string>(),
  });

  // Type error when queryFn has arguments:
  queryOptions({
    queryKey: ['bad-query'],
    // Ignoring the unused variable error:
    // @ts-expect-error
    queryFn: (args) => 'test',
    persister: createPersister<string>(),
  });

  // No type errors if we define the generic on queryOptions
  queryOptions<string>({
    queryKey: ['fixed-bad-query'],
    // Ignoring the unused variable error:
    // @ts-expect-error
    queryFn: (args) => 'test',
    persister: createPersister<string>(),
  });

  return null;
}

export default App;
