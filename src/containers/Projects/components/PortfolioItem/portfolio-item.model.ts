type Image = {
  src: string;
  alt: string;
  aspectRatio?: string;
};

export type PortfolioItem = {
  href: {
    ariaLabel: string;
    url: string;
  };
  image: Image;
  title: string;
  type: string;
};
