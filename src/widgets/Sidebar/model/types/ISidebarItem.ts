import { AppRoutes } from 'shared/config/routeConfig/routeConfig';

export interface ISidebarItem {
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  path: AppRoutes;
}
