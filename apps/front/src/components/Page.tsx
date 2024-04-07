import { cn } from '@utils/tailwind.utils';
import { FC, HTMLAttributes, PropsWithChildren } from 'react';
import { Title } from './Typography';

interface IPageProps extends PropsWithChildren, HTMLAttributes<HTMLDivElement> {
  title?: string;
}

const Page: FC<IPageProps> = ({ title, children, className, ...props }) => {
  return (
    <div
      id="page"
      className={cn(
        'w-full max-w-full h-full max-h-full flex flex-col p-8',
        className
      )}
      {...props}
    >
      {title && <Title className="mb-6">{title}</Title>}
      <div className="h-full">{children}</div>
    </div>
  );
};

export default Page;
