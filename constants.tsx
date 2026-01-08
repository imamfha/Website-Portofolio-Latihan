
import { Project, NavItem } from './types';

export const PROJECTS: Project[] = [
  {
    id: 'home-01',
    title: 'Home',
    number: '01',
    videoUrl: 'https://ik.imagekit.io/morva/Home%20v1.mp4?updatedAt=1747187620610',
    link: '#home'
  },
  {
    id: 'home-02',
    title: 'Home',
    number: '02',
    videoUrl: 'https://ik.imagekit.io/morva/Home%20v2.mp4?updatedAt=1747187618922',
    link: '#home-02'
  },
  {
    id: 'about',
    title: 'About',
    number: '03',
    videoUrl: 'https://ik.imagekit.io/morva/About%20Me.mp4?updatedAt=1747187618747',
    link: '#about'
  },
  {
    id: 'works',
    title: 'Works',
    number: '04',
    videoUrl: 'https://ik.imagekit.io/morva/Works.mp4?updatedAt=1747187616563',
    link: '#works'
  },
  {
    id: 'contact-01',
    title: 'Contact',
    number: '01',
    videoUrl: 'https://ik.imagekit.io/morva/Contact%20v1.mp4?updatedAt=1747187614162',
    link: '#contact'
  },
  {
    id: 'contact-02',
    title: 'Contact',
    number: '02',
    videoUrl: 'https://ik.imagekit.io/morva/Contact%20v2.mp4?updatedAt=1747187616024',
    link: '#contact-02'
  },
  {
    id: '404',
    title: '404',
    number: '07',
    videoUrl: 'https://ik.imagekit.io/morva/404.mp4?updatedAt=1747187614228',
    link: '#404'
  }
];

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home 01', href: './home' },
  { label: 'Home 02', href: './home-02' },
  { label: 'About', href: './about' },
  { label: 'Works', href: './works' },
  { label: 'Contact 01', href: './contact' },
  { label: 'Contact 02', href: './contact-02' },
  { label: '404', href: './404' }
];
