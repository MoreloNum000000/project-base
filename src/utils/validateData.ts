export const validateData = <T>(schema: any, data: unknown): { success: boolean; data?: T; error?: string } => {
    const result = schema.safeParse(data);
    if (!result.success) {
      const error = result.error.errors.map((err: any) => err.message).join(", ");
      return { success: false, error };
    }
    return { success: true, data: result.data };
  };
  