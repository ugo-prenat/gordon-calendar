import {
  DEFAULT_LANG,
  DEFAULT_THEME,
  Lang,
  SETTINGS_STORAGE_KEY,
  Theme
} from './settings.models';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { updateRootElement } from './settings.utils';
import i18next from 'i18next';

interface ISettingsStore {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  lang: Lang;
  setLang: (lang: Lang) => void;
}

export const useSettings = create<ISettingsStore>()(
  persist(
    (set) => ({
      theme: DEFAULT_THEME,
      setTheme: (theme) => {
        updateRootElement(theme);
        set({ theme });
      },
      lang: DEFAULT_LANG,
      setLang: (lang) => {
        i18next.changeLanguage(lang);
        set({ lang });
      }
    }),
    { name: SETTINGS_STORAGE_KEY }
  )
);
