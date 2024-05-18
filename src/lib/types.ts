import { z } from "zod";

const transportEnum = z.enum([
  "Комфорт (від 0,8 євро/км)",
  "Van (від 1,1 євро/км)",
]);

export const orderSchema = z.object({
  name: z.string().min(3, "Your name is too short"),
  phone: z
    .string()
    .max(
      9,
      "Your phone number is not correct because it is over than 9 symbols"
    ),
  typeTransport: transportEnum,
  placeDeparture: z.string().min(3, "Your name is too short"),
  placeArrival: z.string().min(3),
  date: z.string(),
});

export type orderSchemaT = z.infer<typeof orderSchema>;
