import type { PortfolioItem } from './components/PortfolioItem/portfolio-item.model';
import { AspectRatio } from './components/PortfolioItem/portfolio-item.model';

export const PROJECTS: Array<PortfolioItem> = [
  {
    title: 'Upload video',
    type: 'Mobile UI',
    href: {
      ariaLabel: 'Upload video Mobile UI dribbble shot',
      url: 'https://dribbble.com/shots/22151990-Atlas-Video-uploading'
    },
    image: {
      src: '/assets/mobile_upload_videos.webp',
      alt: 'Upload video Mobile UI dribbble shot',
      width: 1200,
      height: 1200,
      aspectRatio: AspectRatio['aspect-ratio-1/1']
    }
  },
  {
    title: 'Video platform DAO',
    type: 'Case study',
    href: {
      ariaLabel: 'Video platform DAO case study',
      url: 'https://www.behance.net/gallery/137431151/Joystream-Video-Platform-DAO'
    },
    image: {
      src: '/assets/video_platform_dao.png',
      alt: 'Video platform DAO case study',
      aspectRatio: AspectRatio['aspect-ratio-4/3']
    }
  },
  {
    title: 'Food delivery',
    type: 'Mobile UI Concept',
    href: {
      ariaLabel: 'Food app concept mobile UI dribbble shot',
      url: 'https://dribbble.com/shots/15386157-Food-app-concept'
    },
    image: {
      src: '/assets/food_app.webp',
      alt: 'Food app concept mobile UI dribbble shot',
      aspectRatio: AspectRatio['aspect-ratio-3/4']
    }
  },
  {
    title: 'Joystream Design System',
    type: 'Case study',
    href: {
      ariaLabel: 'Joystream Design System case study',
      url: 'https://www.behance.net/gallery/166030317/Joystream-Design-System'
    },
    image: {
      src: '/assets/atlas_ds.webp',
      alt: 'Joystream Design System case study',
      aspectRatio: AspectRatio['aspect-ratio-16/9']
    }
  }
];
