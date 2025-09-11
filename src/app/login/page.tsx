import LoginButton from '@/components/auth/login-button';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { getSession } from '@/lib/auth';
import { redirect } from 'next/navigation';
const LoginPage = async () => {
  const session = await getSession();
  if (session) redirect('/home');
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Create an account</CardTitle>
          <CardDescription>Using your preferred login method</CardDescription>
        </CardHeader>

        <CardContent>
          <LoginButton />
          {/* <div className="flex gap-x-2 items-center justify-center my-2">
            <Separator className="w-[75px]" />
            <span className="text-sm text-center text-muted-foreground uppercase">
              Or continue with
            </span>
            <Separator className="w-[75px]" />
          </div> */}
        </CardContent>
      </Card>
    </div>
  );
};

export default LoginPage;
