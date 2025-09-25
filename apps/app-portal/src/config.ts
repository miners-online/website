import { AppInfo } from "./components/app-card";

interface Category {
  id: string;
  name: string;
  apps: AppInfo[];
}

export const APPS: Category[] = [
  {
    id: 'infrastructure',
    name: 'Infrastructure',
    apps: [
      { id: 'cloudflare', name: 'Cloudflare', description: 'Cloudflare management portal', url: 'https://dash.cloudflare.com', logoUrl: '/logos/cloudflare.png' },
      { id: 'unifi', name: 'UniFi', description: 'UniFi network management', url: 'https://unifi.ui.com', logoUrl: '/logos/unifi.svg' },
      { id: 'logto', name: 'Logto', description: 'Logto identity and access management', url: 'https://cloud.logto.io', logoUrl: '/logos/logto.ico' },
      { id: 'neon', name: 'Neon', description: 'Neon PostgreSQL database hosting', url: 'https://console.neon.tech', logoUrl: '/logos/neon.svg' },
    ]
  },
  {
    id: 'web-resources',
    name: 'Web Resources',
    apps: [
      { id: 'miners-online-home', name: 'Miners Online', description: 'Main website for Miners Online', url: 'https://minersonline.uk', logoUrl: '/logos/miners-online.png' },
      { id: 'miners-online-github', name: 'Miners Online GitHub', description: 'Official repository of Miners Online ', url: 'https://github.com/miners-online', logoUrl: '/logos/miners-online.png'  },
      { id: 'sams_blog', name: 'Sam\'s Blog', description: 'Samuel Hulme\'s personal blog', url: 'https://samsblog.minersonline.uk', logoUrl: '/logos/ajh123.webp' },
      { id: 'samland_gov', name: 'Samland Gov', description: 'Government site for the Samland region', url: 'https://samland.minersonline.uk' },
      { id: 'samland-github', name: 'Samland GitHub', description: 'The Samland region\'s GitHub organization', url: 'https://github.com/samland-gov' },
    ]
  }
];