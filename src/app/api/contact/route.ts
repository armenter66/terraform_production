import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req:Request){

const {name,phone,email,message} = await req.json()

const transporter = nodemailer.createTransport({
    service:"gmail",
    auth:{
    user:process.env.EMAIL_USER,
    pass:process.env.EMAIL_PASS
    }
})

await transporter.sendMail({
    from:process.env.EMAIL_USER,
    to:"armenter66@gmail.com",
    subject:"Terraform заявка",
    html:`
    <h2>Нова заявка</h2>
    <p><b>Імʼя:</b> ${name}</p>
    <p><b>Телефон:</b> ${phone}</p>
    <p><b>Email:</b> ${email}</p>
    <p><b>Сфера:</b> ${message}</p>
    `
})

    return NextResponse.json({success:true})
}