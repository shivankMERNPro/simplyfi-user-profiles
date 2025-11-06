import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../baseQuery";
import { userListDataParser } from "../resParser/userApisDataPar";

export const userApis = createApi({
  reducerPath: "userApis",
  baseQuery: baseQueryWithInterceptor,

  endpoints: (builder) => ({
    getUserList: builder.query({
      query: () => "/users",

      // Cache data for 1 hour (3600 seconds)
      keepUnusedDataFor: 3600,
      refetchOnReconnect: true,

      transformResponse: (response) => userListDataParser(response),
    }),
  }),
});

export const userApisReducer = userApis.reducer;
export const userApiMiddleware = userApis.middleware;
export const userApiReducerPath = userApis.reducerPath;

export const { useGetUserListQuery } = userApis;
