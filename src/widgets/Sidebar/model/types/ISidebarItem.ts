export interface ISidebarItem {
  text: string;
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>;
  path: string;
  authOnly?: boolean;
}
