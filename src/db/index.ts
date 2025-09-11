// Importe la fonction drizzle pour connecter Drizzle ORM à Neon (PostgreSQL hébergé)
import { drizzle } from 'drizzle-orm/neon-http';

// Importe tous les schémas de tables définis dans ./schema
import * as schema from './schema';

// Initialise la connexion à la base de données avec Drizzle ORM
// - Utilise l'URL de connexion stockée dans la variable d'environnement DATABASE_URL
// - Passe les schémas pour que Drizzle connaisse la structure des tables
// - Exporte l'objet db pour effectuer des requêtes SQL typées dans le reste du projet
export const db = drizzle(process.env.DATABASE_URL as string, { schema });
