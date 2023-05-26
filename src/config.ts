interface Config {
  development: {
    basename: string;
  };
  production: {
    basename: string;
  };
}

export const config: Config = {
  development: {
    basename: "",
  },
  production: {
    basename: "/web-playground",
  },
};

export const getConfig = () => {
  // @ts-ignore
  const env = process.env.NODE_ENV || "development";
  return config[env as keyof Config];
};
