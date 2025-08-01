import { signInSchema } from '@/lib/schema';
import React from 'react'
import { useForm } from 'react-hook-form'
import type z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { log } from 'util';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router';

type SigninFormData = z.infer<typeof signInSchema>;

const SignIn = () => {
  const form = useForm<SigninFormData>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const handleOnSubmit = (values: SigninFormData) => {
    console.log(values);
    
  }

  return (
    <div className='min-h-screen flex flex-col items-center justify-center bg-muted/40 p-4'>
      <Card className='max-w-md w-full shadow-xl'>
        <CardHeader className='text-center mb-5'>
          <CardTitle className='text-2xl font-bold'>Welcome Back</CardTitle>
          <CardDescription className='text-sm text-muted-foreground'>Sign in to your account to continue</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleOnSubmit)} className='space-y-6'>
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                     <FormLabel>Email Address</FormLabel>
                     <FormControl>
                      <Input type='email' placeholder='email@example.com' {...field} />
                     </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                     <FormLabel>Password</FormLabel>
                     <FormControl>
                      <Input type='email' placeholder='********' {...field} />
                     </FormControl>
                  </FormItem>
                )}
              />
              <Button type='submit' className='w-full'>Sign In</Button>
            </form>
          </Form>
          <CardFooter>
            <div className='flex items-center justify-center'>
              <p className='text-sm text-muted-foreground'>
                Don&apos;t have an account?{" "} 
                <Link to="/sign-up">Sign Up</Link> 
              </p>

            </div>
          </CardFooter>
        </CardContent>
      </Card>
    </div>
  )
}

export default SignIn