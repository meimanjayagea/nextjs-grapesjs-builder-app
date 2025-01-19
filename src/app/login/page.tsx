import { Button } from '@/components/ui/button';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from '@/components/ui/card';
import { signIn } from '@/lib/auth';
import { Input } from '@/components/ui/input';
import { Label } from '@radix-ui/react-dropdown-menu';
import logo from "@/../public/coartdev.png"
import Image from 'next/image';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader className="flex justify-center items-center justify-center">
          <Image src={logo} alt="" className="rounded-full w-10 h-10 hover:text-green-400" />
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
          login app
          </CardDescription>
        </CardHeader>
        <CardContent className='flex flex-wrap gap-2'>
          <Label>Email :</Label>
          <Input />
          <Label>Password :</Label>
          <Input />
          <Button className="w-full bg-green-400 mt-2">Sign in</Button>
        </CardContent>
        <hr />
        <CardFooter className='mt-5'>
          <form
            action={async () => {
              'use server';
              await signIn('github', { redirectTo: '/' });
            }}
            className="w-full"
          >
            <Button className="w-full">Sign in with GitHub</Button>
          </form>
        </CardFooter>
        <CardFooter>
          <form
            action={async () => {
              'use server';
              await signIn('google', { redirectTo: '/' });
            }}
            className="w-full"
          >
            <Button className="w-full bg-red-400">Sign in with Google</Button>
          </form>
        </CardFooter>
      </Card>
    </div>
  );
}
