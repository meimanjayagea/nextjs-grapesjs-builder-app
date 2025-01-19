import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent }from '@/components/ui/tabs';
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent
} from '@/components/ui/card';
import { signIn } from '@/lib/auth';

export default function LoginPage() {
  return (
    <div className="min-h-screen flex justify-center items-start md:items-center p-8">
      <Card className="w-full max-w-sm">
        <CardHeader>
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            This demo uses GitHub and Google for authentication.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs>
            <TabsList>
              <TabsTrigger value='ahas' />
            </TabsList>

            <TabsContent value='jhjd'/>
          </Tabs>
        </CardContent>
        <CardFooter>
          <form
            action={async () => {
              'use server';
               await signIn('github', {redirectTo: '/dashboard'  });
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
               await signIn('google', {redirectTo: '/dashboard'  });
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
