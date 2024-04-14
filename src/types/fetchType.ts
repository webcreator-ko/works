export const FetchType = {
  Get: "Get",
  Delete: "Delete",
  Put: "Put",
  Post: "Post",
} as const;
export type FetchType = (typeof FetchType)[keyof typeof FetchType];
