import { QueryClient } from "@tanstack/react-query";

export default class SingleQueryClient {
  // @ts-ignore
  static #queryClient;

  static getInstance() {
    if (!this.#queryClient) {
      this.#queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 1000 * 60 * 4,
            refetchOnWindowFocus: false,
            retry: false,
          },
        },
      });
    }

    return this.#queryClient;
  }

  static destroy() {
    this.#queryClient = null;
  }

  constructor() {
    throw new Error("This class cannot be instantiated");
  }
}
