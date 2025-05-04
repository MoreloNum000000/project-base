import { z } from "zod";

// Esquema para un documento con título, contenido y fecha de modificación
export const documentSchema = z.object({
  id: z.string().uuid(),
  imagen: z.string(),
  title: z.string().min(3, "El título debe tener al menos 3 caracteres"),
  desarrollador: z.string().min(5, "El nomber del desarrollador debe tener al menos 5 caracteres"),
  proyecto: z.string(),
  modulo: z.string(),
  descripcion: z.string().min(10, "El contenido debe tener al menos 10 caracteres"),
  observaciones: z.string().min(5, "Las observaciones deben tener al menos 5 caracteres"),
  updatedAt: z.date(),
  createdAt: z.string(),
});

export type Document = z.infer<typeof documentSchema>;
