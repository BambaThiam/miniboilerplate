import { Button } from '@/components/ui/button';
import { getSession } from '@/lib/auth';

import Link from 'next/link';
import { redirect } from 'next/navigation';

const LandingPage = async () => {
  const session = await getSession();
  if (session) redirect('/home');
  return (
    <div className="flex flex-col gap-4 min-h-screen items-center justify-center">
      This is the landing Page
      <Link href="/login">
        <Button>Go to Login</Button>
      </Link>
    </div>
  );
};

export default LandingPage;
// --- IGNORE ---
