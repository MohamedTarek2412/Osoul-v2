import { z } from 'zod';

export const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'nameMin')
    .max(100, 'nameMax'),
  email: z.string().email('emailInvalid'),
  phone: z
    .string()
    .min(10, 'phoneMin')
    .regex(/^[\d\s+\-()]+$/, 'phoneInvalid'),
  subject: z
    .string()
    .min(3, 'subjectMin')
    .max(200, 'subjectMax'),
  message: z
    .string()
    .min(10, 'messageMin')
    .max(2000, 'messageMax'),
  serviceType: z.string().optional(),
});

export type ContactFormValues = z.infer<typeof contactFormSchema>;
