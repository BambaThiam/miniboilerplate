import { Button } from "@/components/ui/button"
import {
  Card,
  // CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Separator } from '@/components/ui/separator';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-muted">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold">Create an account</CardTitle>
          <CardDescription>Enter your email below to create a new account</CardDescription>
        </CardHeader>
        {/* <CardAction>
          <Button variant="link">Sign In</Button>
          </CardAction> */}

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
          <div className="flex gap-x-2 items-center justify-center my-2">
            <Separator className="w-[75px]" />
            <span className="text-sm text-center text-muted-foreground uppercase">
              Or continue with
            </span>
            <Separator className="w-[75px]" />
          </div>
          <form>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  {/* <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a> */}
                </div>
                <Input id="password" type="password" required />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button type="submit" className="w-full">
            Create an account
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
