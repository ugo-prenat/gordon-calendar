declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: number;
      USE_API_MOCKS: boolean;
      F1_API_KEY: string;
      F2_API_KEY: string;
      F3_API_KEY: string;
      FA_API_KEY: string;
    }
  }
}

export {};
