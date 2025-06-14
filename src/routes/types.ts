export type RouterContext = {
  auth?: {
    user?: {
      id: string;
      name: string;
      // add other user fields here if needed
    };
  };
};
