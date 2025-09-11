import { SignOutButton } from '@/components/auth/signout-button';

import { getSession } from '@/lib/auth';

import { redirect } from 'next/navigation';

const HomePage = async () => {
  const session = await getSession();
  if (!session) redirect('/login');
  return (
    <div className="flex flex-col gap-4 min-h-screen items-center justify-center">
      This is the Home Page
      <SignOutButton />
    </div>
  );
};

export default HomePage;
