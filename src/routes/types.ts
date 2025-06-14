export type RouterContext = {
  login: (data: { token: string }) => void;
  logout: () => void;
  auth: {
    token: string | null;
  };
};
