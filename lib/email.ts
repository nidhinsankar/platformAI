import { Resend } from "resend";

export const email = new Resend(process.env.NEXT_PUBLIC_RESEND_TOKEN);
