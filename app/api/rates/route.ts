import { NextResponse } from "next/server";
import { getUsdRates } from "@/lib/rates";

export const revalidate = 21_600;

export async function GET() {
  return NextResponse.json(await getUsdRates(), {
    headers: {
      "Cache-Control": "public, s-maxage=21600, stale-while-revalidate=86400"
    }
  });
}
