import { NextResponse } from "next/server"

export const runtime = "nodejs"

export async function POST(req: Request) {
    const body = await req.json()

    const { name, phone, email, message, company } = body
    if (company) {
        return NextResponse.json({ success: true })
    }


    try {
        await fetch(process.env.ZAPIER_WEBHOOK!, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name,
            phone,
            email,
            message,
            source: "Terraform site",
        }),
        })

        return NextResponse.json({ success: true })
    } catch (error) {
        return NextResponse.json(
        { error: "Webhook error" },
        { status: 500 }
        )
    }
}