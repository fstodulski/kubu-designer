import type { PortfolioItem } from './components/PortfolioItem/portfolio-item.model';

export const PROJECTS: Array<PortfolioItem> = [
  {
    title: 'Upload video',
    type: 'Mobile UI',
    image: {
      src: '/assets/upload_video.webp',
      alt: 'Upload video',
      aspectRatio: '1/1'
    }
  },
  {
    title: 'Joystream Design System',
    type: 'Case study',
    image: {
      src: '/assets/joy_stream_design_system.webp',
      alt: 'Upload video',
      aspectRatio: '16/9'
    }
  },
  {
    title: 'Food App',
    type: 'Mobile UI Concept',
    image: {
      src: '/assets/food_app.webp',
      alt: 'Upload video',
      aspectRatio: '1/1'
    }
  },
  {
    title: 'Video platform DAO',
    type: 'Case study',
    image: {
      src: '/assets/video_platform_dao.webp',
      alt: 'Upload video',
      aspectRatio: '4/3'
    }
  }
];
