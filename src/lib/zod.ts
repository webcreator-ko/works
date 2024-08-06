import { z } from 'zod';

export const zodSchema = z.object({
  email: z.string().email('Invalid email address'),
});
