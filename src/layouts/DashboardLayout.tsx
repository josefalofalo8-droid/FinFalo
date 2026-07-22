import { Navbar } from '@components/index';

interface DashboardLayoutProps {
  children: React.ReactNode;
  userName?: string;
  onLogout?: () => void;
}

export const DashboardLayout = ({
  children,
  userName,
  onLogout,
}: DashboardLayoutProps) => {
  return (
    <div className="min-h-screen bg-finfalo-gray">
      <Navbar userName={userName} onLogout={onLogout} />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {children}
      </main>
    </div>
  );
};
