import { format as fnsFormat, FormatOptions } from 'date-fns';
import { useFnsLocale } from '@src/services/i18n/useTranslation';

export const useFnsFormat = () => {
  const locale = useFnsLocale();

  return (date: Date | number, format: string, options?: FormatOptions) =>
    fnsFormat(date, format, { locale, ...options });
};
