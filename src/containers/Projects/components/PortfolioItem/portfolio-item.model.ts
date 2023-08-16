type Image = {
  src: string;
  alt: string;
  aspectRatio?: string;
};

export type PortfolioItem = {
  image: Image;
  title: string;
  type: string;
};
