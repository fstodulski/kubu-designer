import type { PortfolioItem } from './components/PortfolioItem/portfolio-item.model';

export const PROJECTS: Array<PortfolioItem> = [
  {
    title: 'Upload video',
    type: 'Mobile UI',
    image: {
      src: '/assets/upload_video.png',
      alt: 'Upload video'
    }
  },
  {
    title: 'Joystream Design System',
    type: 'Case study',
    image: {
      src: '/assets/joy_stream_design_system.png',
      alt: 'Upload video'
    }
  },
  {
    title: 'Food App',
    type: 'Mobile UI Concept',
    image: {
      src: '/assets/food_app.png',
      alt: 'Upload video'
    }
  },
  {
    title: 'Video platform DAO',
    type: 'Case study',
    image: {
      src: '/assets/video_platform_dao.png',
      alt: 'Upload video'
    }
  }
];
