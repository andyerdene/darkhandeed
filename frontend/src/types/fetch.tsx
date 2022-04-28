import React from "react";

export interface News {
  createdAt: string;
  email: string;
  emailVerified: boolean;
  lastLoginAt: string;
  lastRefreshAt: string;
  localId: string;
  passwordHash: string;
  passwordUpdatedAt: 1650861961922;
  providerUserInfo: object[];
  validSince: string;
}
export interface FetchHook {
  loading?: boolean;
  error?: any;
  data?: any;
}
