export type ArticleType = {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  x_featured_media_large: string;
  category_name: string;
  category_id: number;
};
