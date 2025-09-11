"use client";


import { Button } from '@/components/ui/button';
import { useRouter } from 'next/navigation';
import { authClient } from '@/lib/auth-client';

export const SignOutButton = () => {
  const router = useRouter(); // Hook pour la navigation
  const signout = async () => {
    await authClient.signOut({
      fetchOptions: {
        onSuccess: () => {
          router.push('/login'); // Redirige vers la page de login après la déconnexion
        },
      },
    }); // Appelle la méthode de déconnexion
  }
  return (
    <Button variant="outline" onClick={() => signout()}>
      Sign Out
    </Button>
  );
}