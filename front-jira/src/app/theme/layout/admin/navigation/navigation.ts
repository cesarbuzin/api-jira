export interface NavigationItem {
  id: string;
  title: string;
  type: 'item' | 'collapse' | 'group';
  translate?: string;
  icon?: string;
  hidden?: boolean;
  url?: string;
  classes?: string;
  exactMatch?: boolean;
  external?: boolean;
  target?: boolean;
  breadcrumbs?: boolean;
  badge?: {
    title?: string;
    type?: string;
  };
  children?: NavigationItem[];
}

export const NavigationItems: NavigationItem[] = [
  {
    id: 'home',
    title: 'Página inicial',
    type: 'item',
    url: '/',
    classes: 'nav-item',
    icon: 'feather icon-home',
    breadcrumbs: false
  },
  {
    id: 'portalb2b',
    title: 'Portal B2B: Sprints',
    type: 'item',
    url: '/paginas/PORTALB2B',
    classes: 'nav-item',
    icon: 'feather icon-monitor',
    breadcrumbs: false
  },
  {
    id: 'edp',
    title: 'Precificação: Sprints',
    type: 'item',
    url: '/paginas/EDP',
    classes: 'nav-item',
    icon: 'feather icon-monitor',
    breadcrumbs: false
  },
  {
    id: 'app',
    title: 'Super APP: Sprints',
    type: 'item',
    url: '/paginas/APP',
    classes: 'nav-item',
    icon: 'feather icon-monitor',
    breadcrumbs: false
  },
  {
    id: 'app',
    title: 'Simplifica: Sprints',
    type: 'item',
    url: '/paginas/SM',
    classes: 'nav-item',
    icon: 'feather icon-monitor',
    breadcrumbs: false
  },
  {
    id: 'sre',
    title: 'SRE',
    type: 'item',
    url: '/paginas/SRE',
    classes: 'nav-item',
    icon: 'feather icon-monitor',
    breadcrumbs: false
  },
  {
    id: 'rpa',
    title: 'RPA',
    type: 'item',
    url: '/paginas/RPA',
    classes: 'nav-item',
    icon: 'feather icon-monitor',
    breadcrumbs: false
  }
];
