import dayjs from "dayjs";
import "dayjs/locale/ja";

dayjs.locale("ja");

/***
 * YYYY/MM/DD に変換
 */
export const formatterDate = (date: string) => dayjs(date).format("YYYY/MM/DD");

/**
 * 投稿が公開より2時間以内かを調べる
 */
export const isNewPost = (date: string) => {
 const check_date = new Date(date);

 const now = new Date();
 const time_diff = now.getTime() - check_date.getTime();

 //Today at 10:15 AM
 //-30927735
 //2023年5月15日 9:51 AM
 if (time_diff > -22000000) {
  return false;
 } else {
  return true;
 }
};

/**
 * 18時~6時の間か取得
 */
export const isDarkTime = () => {
 const currentHour = dayjs().hour();

 if (currentHour >= 18 || currentHour < 6) {
  return true;
 } else {
  return false;
 }
};
