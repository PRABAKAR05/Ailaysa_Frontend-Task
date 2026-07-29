export const APP_NAME = "Ailaysa";

export const ROUTES = {
  home: "/",
  browse: "/browse",
  book: (id: string | number) => `/book/${id}`,
  author: (id: string | number) => `/author/${id}`,
} as const;
