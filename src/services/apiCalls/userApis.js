import { createApi } from "@reduxjs/toolkit/query/react";
import { baseQueryWithInterceptor } from "../baseQuery";
import { userListDataParser } from "../resParser/userApisDataPar";

export const userApis = createApi({
  reducerPath: "userApis",
  baseQuery: baseQueryWithInterceptor,
  keepUnusedDataFor: 3600,
  refetchOnMountOrArgChange: false,
  refetchOnFocus: false,
  refetchOnReconnect: false,
  endpoints: (builder) => ({
    getUserList: builder.query({
      query: () => "/users",
      transformResponse: (response) => userListDataParser(response),
    }),
  }),
});

export const userApisReducer = userApis.reducer;
export const userApiMiddleware = userApis.middleware;
export const userApiReducerPath = userApis.reducerPath;

export const { useGetUserListQuery } = userApis;
