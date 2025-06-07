export function isDynamicRoute(pathname, dynamicRoots = []) {
  return dynamicRoots.some((root) => {
    return pathname !== root && pathname.startsWith(`${root}/`);
  });
}
