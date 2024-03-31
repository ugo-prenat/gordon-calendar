import { HTTPMethod } from '@repo/models';

const buildFetcher =
  (method: HTTPMethod) =>
  <T>(url: string, init?: RequestInit): Promise<T> =>
    fetch(url, {
      headers: { 'Content-Type': 'application/json', ...init?.headers },
      method,
      ...init
    })
      .then((res) => {
        if (res.ok) return res.json() as Promise<T>;

        return res.json().then((data) => {
          throw new Error(String(data), { cause: data });
        });
      })
      .catch((err) => {
        throw new Error(err.message, { cause: err });
      });

export const fetcher = {
  GET: buildFetcher('GET'),
  PUT: buildFetcher('PUT'),
  POST: buildFetcher('POST'),
  DELETE: buildFetcher('DELETE')
};
