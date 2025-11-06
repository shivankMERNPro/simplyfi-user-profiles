import { jwtDecode } from "jwt-decode";
import { toast } from "react-toastify";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

import env from "../consts/env";
import { apiLogger } from "../utils/logger";
import { secureStorage } from "../utils/security";

//----------------------------------------------
// Utility: Check if access token is expired
//----------------------------------------------
const isTokenExpired = (token) => {
  try {
    const decoded = jwtDecode(token);
    const now = Math.floor(Date.now() / 1000);
    return decoded.exp < now;
  } catch {
    return true; // Token invalid or corrupted
  }
};

//----------------------------------------------
// Base configuration for all API calls
//----------------------------------------------
const baseQuery = fetchBaseQuery({
  baseUrl: env.baseUrl,
  credentials: "include", // Note: --> Include cookies (for refresh token)
  prepareHeaders: (headers) => {
    const token = secureStorage.get("authToken");
    if (token) headers.set("Authorization", `Bearer ${token}`);
    headers.set("Accept", "application/json");
    headers.set("X-App-Version", "1.0.0");
    return headers;
  },
});

//----------------------------------------------
// Custom RTK Query Base with:
// 1. Login Token Handling
// 2. Access Token Expiry Validation
// 3. Token Refresh Flow
// 4. Unified Error & Toast Management
//----------------------------------------------
export const baseQueryWithInterceptor = async (args, api, extraOptions) => {
  try {
    //---------------------------------------------
    // STEP 1: Log Request
    //---------------------------------------------
    apiLogger("Request", args);

    const isLoginRequest =
      typeof args.url === "string" && args.url.includes("/auth/login");

    //---------------------------------------------
    // STEP 2: Validate Access Token Expiry
    //---------------------------------------------
    let accessToken = secureStorage.get("authToken");

    if (accessToken && isTokenExpired(accessToken)) {
      apiLogger("Access token expired, attempting refresh...");

      //----------------------------------------------------------------------
      // Try to refresh access token using refresh token (stored in cookie)
      //----------------------------------------------------------------------
      const refreshResponse = await baseQuery(
        {
          url: "/auth/refresh-token",
          method: "POST",
        },
        api,
        extraOptions,
      );

      if (refreshResponse?.data?.token) {
        //--------------------------------
        // New access token received
        //--------------------------------
        accessToken = refreshResponse.data.token;
        secureStorage.set("authToken", accessToken);
        secureStorage.set("authToken", accessToken);
        apiLogger("Access token refreshed successfully");
      } else {
        //----------------------------------
        // Refresh token invalid or expired
        //----------------------------------
        apiLogger("Refresh token invalid or expired");
        secureStorage.clear();
        toast.error("Session expired. Please log in again.");
        return { error: { status: 401, data: "Session expired" } };
      }
    }

    //---------------------------------------------
    // STEP 3: Make API Request
    //---------------------------------------------
    let result = await baseQuery(args, api, extraOptions);

    //---------------------------------------------
    // STEP 4: Handle Login Response
    //---------------------------------------------
    if (isLoginRequest && result?.data) {
      const { accessToken, ...userData } = result.data;

      // Save access token only — refresh token is set as secure cookie by backend
      if (accessToken) {
        secureStorage.set("authToken", accessToken);
        apiLogger("Access token stored after login");
      }

      // Strip tokens before returning to UI
      result.data = userData;

      toast.success("Login successful!");
    }

    //---------------------------------------------
    // STEP 5: Handle API Errors
    //---------------------------------------------
    if (result?.error) {
      const { status, data } = result.error;
      apiLogger("API Error", result.error);

      if (status === 401) {
        //------------------------------------------------
        // Unauthorized —> maybe expired or invalid token
        //------------------------------------------------
        secureStorage.clear();
        toast.error("Session expired. Please log in again.");
      } else if (status === 0) {
        //------------------------------------------------
        // Network failure — retry once
        //------------------------------------------------
        apiLogger("Network error, retrying request...");
        result = await baseQuery(args, api, extraOptions);
      } else {
        toast.error(data?.message || "Something went wrong. Please try again.");
      }
    } else if (result?.data && result.data?.message) {
      //--------------------------------------------------
      // Optional: Handle success message from backend
      //--------------------------------------------------
      toast.success(result.data.message);
    }

    //---------------------------------------------
    // STEP 6: Return Response
    //---------------------------------------------
    return result;
  } catch (err) {
    // ----------------------------
    // STEP 7: Global Exception Handling
    //---------------------------------------------
    apiLogger("Unexpected Error", err);
    toast.error("Unexpected error occurred.");
    return { error: { status: "CUSTOM_ERROR", data: err } };
  }
};
