import { Button } from '@src/components/ui/shadcn/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@src/components/ui/shadcn/dropdown-menu';
import { useTranslation } from '@src/services/i18n/useTranslation';
import { Settings2 } from 'lucide-react';
import { ThemeSelect } from './ThemeSelect';
import { LangSelect } from './LangSelect';

export const SettingsPopupMenu = () => {
  const t = useTranslation();

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon">
            <Settings2 className="w-4 h-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuLabel>{t('settings')}</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <ThemeSelect />
          <LangSelect />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  );
};
