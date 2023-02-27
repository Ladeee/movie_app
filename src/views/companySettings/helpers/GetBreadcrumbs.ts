export const GetBreadcrumbs = (path: string) => {
  // Initializing arrays
  let breakPoint = [];
  let breadcrumbs = [];

  // Getting breatpoint indexes
  for (let i = 0; i < path.length; i++) {
    if (path[i] === "/") {
      breakPoint.push(i);
    }
  }
  breakPoint.push(path.length);

  // Geeting breadcrumbs with braekpoint indexes
  for (let i = 0; i < breakPoint.length - 1; i++) {
    breadcrumbs.push(path.slice(breakPoint[i] + 1, breakPoint[i + 1]));
  }
  return breadcrumbs;
};
