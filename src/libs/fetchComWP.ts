import { FetchType } from "@/types/fetchType";

const requestHeaders: HeadersInit = new Headers();
const buffer = Buffer.from(
 process.env.WP_USER_NAME + ":" + process.env.WP_PASSWORD_COM,
 "utf8"
);
const encodedAuthString = buffer.toString("base64");

requestHeaders.set("Authorization", `Basic ${encodedAuthString}`);
requestHeaders.set("Content-Type", "application/json");

type Props = {
 method: FetchType;
 endpoint: string;
 body?: any;
};

export const fetchComWP = async <T>({
 method,
 endpoint,
 body,
}: Props): Promise<T> => {
 const res = await fetch(`${process.env.WP_COM_URL}${endpoint}`, {
  method: method, // GET, POST, PUT, DELETE.
  cache: "no-cache",
  headers: requestHeaders,
  body: JSON.stringify(body),
  // next: { revalidate: 60 * 60 },
 });

 if (!res.ok) {
  console.error(res);
  // This will activate the closest `error.js` Error Boundary
  throw new Error("Failed to fetch data");
 }

 return res.json();
};
