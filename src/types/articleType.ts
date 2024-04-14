export type ArticleType = {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  category_name: string;
  category_id: number;
};
