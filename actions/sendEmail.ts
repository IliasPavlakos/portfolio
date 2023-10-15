'use server';

import {Resend} from "resend";
import {number} from "prop-types";
import {validateString} from "@/lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData : FormData) => {

    const senderEmail = formData.get('senderEmail');
    const message = formData.get('message');

    if(!validateString(senderEmail, 500)) return { error: "Invalid sender email" };
    if(!validateString(message, 5000)) return { error: "Invalid message" };

    try {
        await resend.emails.send({
            from: 'Portfolio contact form <onboarding@resend.dev>',
            to: 'pavlakosilias@outlook.com',
            reply_to: senderEmail as string,
            subject: 'Message from portfolio contact form',
            text: message as string,
        });
    }catch (error){
        console.log(error)
    }
};
