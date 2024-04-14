import { Button } from '@src/components/ui/shadcn/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger
} from '@src/components/ui/shadcn/dropdown-menu';
import { useTranslation } from '@src/services/i18n/useTranslation';
import { Theme } from '@src/services/store/settings/settings.models';
import { useSettings } from '@src/services/store/settings/settings.store';
import { Monitor, Moon, SlidersHorizontal, Sun } from 'lucide-react';
import { ReactNode } from 'react';

const SettingsHoverCard = () => {
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <SlidersHorizontal className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <ThemeSelect />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};

interface IThemeSelect {
  label: string;
  value: Theme;
  icon: ReactNode;
}

const ThemeSelect = () => {
  const t = useTranslation();
  const { setTheme } = useSettings();

  const handleChange = (theme: Theme) => () => setTheme(theme);

  const themes: IThemeSelect[] = [
    {
      label: t('theme.light'),
      value: 'light',
      icon: <Sun className="w-4 h-4" />
    },
    {
      label: t('theme.dark'),
      value: 'dark',
      icon: <Moon className="w-4 h-4" />
    },
    {
      label: t('theme.system'),
      value: 'system',
      icon: <Monitor className="w-4 h-4" />
    }
  ];

  return (
    <DropdownMenuSub>
      <DropdownMenuSubTrigger>{t('theme')}</DropdownMenuSubTrigger>
      <DropdownMenuPortal>
        <DropdownMenuSubContent>
          {themes.map(({ value, label, icon }) => (
            <DropdownMenuItem
              key={value}
              className="gap-2"
              onClick={handleChange(value)}
            >
              {icon}
              {label}
            </DropdownMenuItem>
          ))}
        </DropdownMenuSubContent>
      </DropdownMenuPortal>
    </DropdownMenuSub>
  );
};

export default SettingsHoverCard;
