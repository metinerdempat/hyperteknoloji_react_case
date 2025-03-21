const ROUTES = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'Products',
    path: '/products',
  },
  {
    id: 3,
    title: 'Basket',
    path: '/basket',
  },
  {
    id: 4,
    title: 'Version 2 (22.03.2025)',
    path: '/',
    isExternal: true,
  },
] as const;

export default ROUTES;
