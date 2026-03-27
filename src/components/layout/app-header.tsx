import { useRouter } from 'next/navigation';

import { useIsMobile } from '@/hooks/use-mobile';

import Link from 'next/link';

import Logo from './app-logo';
import { UserAction } from './app-user-action';
import { AppSwitcher } from './app-switcher';
import { useMount } from '@/hooks/use-mount';

interface HeaderProps {
  isWorkbench?: boolean;
  projectName?: string;
  description?: string;
}

export const Header = ({
  isWorkbench = false,
  projectName,
  description,
}: HeaderProps) => {
  const route = useRouter();
  const isMounted = useMount();
  const isMobile = useIsMobile();

  const handleBack = () => route.replace("/projects");

  if (!isMounted) return null;

  return (
    <header className="h-14 w-full bg-card border-b border-border flex items-center justify-between px-4 shrink-0 transition-colors duration-300">
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-4">
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          {isWorkbench && !isMobile && (
            <>
              <div className="h-6 w-px bg-border mx-2" />
              <div className="flex flex-col">
                <span className="text-xs font-bold text-foreground leading-tight truncate max-w-48">
                  {projectName}
                </span>
                <span className="text-[10px] text-muted-foreground font-medium truncate max-w-48">
                  {description}
                </span>
              </div>
            </>
          )}
        </div>

        {isWorkbench && !isMobile && (
          <>
            <div className="h-4 w-px bg-border mx-2" />
            <nav className="h-14 flex items-center gap-4 text-xs font-medium text-muted-foreground">
              <span
                className="hover:text-foreground cursor-pointer transition-colors"
                onClick={() => handleBack()}
                aria-label='My projects'
              >
                My Projects
              </span>
              <span className="text-primary border-b-2 border-primary pb-3.5 mt-3.5 cursor-pointer" aria-label='My projects'>
                Workbench
              </span>
            </nav>
          </>
        )}
      </div>

      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1">
          <AppSwitcher />
        </div>
        <div className="h-6 w-px bg-border mx-1 hidden sm:block" />
        <UserAction />
      </div>
    </header>
  );
};