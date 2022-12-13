let globalConfig = {} as any;

export const setGlobalConfig = (config: any) => {
  globalConfig = config;
};

export const getGlobalConfig = () => globalConfig;
