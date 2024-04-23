export type ContextParams = {
  params: { slug: string };
  searchParams: Object;
};

export type Items = {
  items: Item[];
};

export type Item = {
  id: number;
  title: string;
};

export type Link = {
  id: number;
  url: string;
  short: string;
  created_at: string;
};
