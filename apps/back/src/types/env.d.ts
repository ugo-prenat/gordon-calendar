declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PORT: string;
      F1_API_KEY: string;
    }
  }
}

export {};
