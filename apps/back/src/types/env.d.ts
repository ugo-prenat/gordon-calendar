declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      F1_API_KEY: string;
      USE_API_MOCKS: boolean;
    }
  }
}

export {};
