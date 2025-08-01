import React from 'react'
import { Link } from 'react-router-dom';
import type { Route } from "../../+types/root";
import { Button } from '@/components/ui/button';

export function meta({}: Route.MetaArgs) {
    return [
        { title: "TaskHub"},
        { name: "description", content: "Welcome to Taskhub!" },
    ];
}

const Homepage = () => {
  return (
    <div className='w-full h-screen flex items-center justify-center gap-4'>
        <Link to="/sign-in">
        <Button className='bg-blue-500 text-white'>Login</Button>
        </Link>
        <Link to="/sign-up">
        <Button variant="outline" className='bg-blue-500 text-white'>Sign Up</Button>
        </Link>
    </div>
  )
}

export default Homepage