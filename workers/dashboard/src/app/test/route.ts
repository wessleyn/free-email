import { getRequestContext } from "@cloudflare/next-on-pages";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
    let responseText = "Hello World";


    return new Response(JSON.stringify(getRequestContext().env));
}