import { db } from '@/db';
import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import * as schema from '@/db/schema';
import { headers } from 'next/headers';

export const auth = betterAuth({
  // Configure la connexion à la base de données via Drizzle ORM
  database: drizzleAdapter(db, {
    provider: 'pg', // Type de base de données : 'pg' pour PostgreSQL, 'mysql' pour MySQL
    schema, // Passer explicitement le schéma Drizzle (doit inclure la table "verification")
  }),

  // Personnalise la route de la page de connexion (par défaut, NextAuth utilise /api/auth/signin)
  pages: {
    signIn: '/login', // Redirige les utilisateurs vers /login pour se connecter
  },

  // Configure les providers d'authentification sociale (Github et Google)
  socialProviders: {
    github: {
      clientId: process.env.GITHUB_CLIENT_ID as string, // Identifiant client Github (variable d'environnement)
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string, // Secret client Github (variable d'environnement)
    },
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string, // Identifiant client Google (variable d'environnement)
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string, // Secret client Google (variable d'environnement)
    },
  },
});

// Fonction utilitaire pour récupérer la session utilisateur courante
// Elle utilise l'API d'authentification et transmet les headers HTTP de la requête
export const getSession = async () =>
  auth.api.getSession({
    headers: await headers(), // Les headers sont nécessaires pour identifier la session côté serveur
  });
