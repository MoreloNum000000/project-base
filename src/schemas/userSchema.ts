import { z } from "zod";

// esto es un ejemplo de schema de usuario el cual se utiliza en la validacion de datos revisar types.ts

export const userSchema = z.object({
  id: z.string().uuid(),
  name: z.string().min(2),
  email: z.string().email(),
  role: z.enum(["admin", "user", "guest"]),
});
