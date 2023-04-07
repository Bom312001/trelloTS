interface Routes {
  home: string;
  homeTable: string;
  login: string;
  boards: string;
  templates: string;
  works: string;
  kanbanboard: string;
  view: string;
}

const routes: Routes = {
  home: "/",
  homeTable: "/home",
  login: "/login",
  boards: "/boards",
  templates: "/templates",
  works: "/works/*",
  kanbanboard: "/kanbanboard",
  view: "/view",
};

export default routes;
