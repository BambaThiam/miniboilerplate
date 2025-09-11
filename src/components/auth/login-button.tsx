"use client";
import React from 'react'
import { Button } from '../ui/button';
import { FaGithub } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { authClient } from '@/lib/auth-client';


const LoginButton = () => {
  const signinWithGithub = async () => {
    await authClient.signIn.social({
      callbackURL: "/home",
      provider: 'github',
    });
  };

  const signinWithGoogle = async () => {
    await authClient.signIn.social({
      callbackURL: "/home",
      provider: 'google',
    });
  }
  return (
    
      <div className="flex w-full justify-center gap-4">
            <Button 
              variant="outline"
              className="flex items-center gap-2 w-1/2 justify-center"
              onClick={() => signinWithGithub()}>
              <FaGithub />
              Github
            </Button>
            <Button 
              variant="outline"
              className="flex items-center gap-2 w-1/2 justify-center"
              onClick={() => signinWithGoogle()}>
              <FcGoogle />
              Google
            </Button>
          </div>
   
  )
}

export default LoginButton;
