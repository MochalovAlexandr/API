import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const dataApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fakestoreapi.com",
  }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
        // @ts-ignore
      return action.payload[reducerPath];
    }
  },
  tagTypes: [],
  endpoints: (builder) => ({  
    getProductList: builder.query<{ results: Array<{ name: string }> }, void>({
      query: () => `/products?limit=15`,
    }),
  }),
});

// Export hooks for usage in functional components
export const {
  useGetProductListQuery,
  util: { getRunningQueriesThunk },
} = dataApi;

// export endpoints for use in SSR
export const { getProductList } = dataApi.endpoints;