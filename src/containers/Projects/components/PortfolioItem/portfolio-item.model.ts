export const enum AspectRatio {
  'aspect-ratio-16/9' = 'aspect-ratio-16/9',
  'aspect-ratio-4/3' = 'aspect-ratio-4/3',
  'aspect-ratio-1/1' = 'aspect-ratio-1/1',
  'aspect-ratio-3/4' = 'aspect-ratio-3/4'
}

type Image = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  aspectRatio?: AspectRatio;
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
