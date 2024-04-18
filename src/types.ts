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
