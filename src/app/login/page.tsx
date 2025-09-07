import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

import { Separator } from '@/components/ui/separator';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const LoginPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Create an account</CardTitle>
          <CardDescription>Using your preferred login method</CardDescription>
        </CardHeader>

        <CardContent>
          <div className="flex w-full justify-center gap-4">
            <Button variant="outline" className="flex items-center gap-2 w-1/2 justify-center">
              <FaGithub />
              Github
            </Button>
            <Button variant="outline" className="flex items-center gap-2 w-1/2 justify-center">
              <FcGoogle />
              Google
            </Button>
          </div>
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
}

export default LoginPage;
