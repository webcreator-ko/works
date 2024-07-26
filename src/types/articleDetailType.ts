export type ArticleDetailType = {
  id: number;
  date: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
  };
  categories: number[];
  x_featured_media_large: string;
};
