import { NextResponse } from "next/server";
import { handleApiError } from "@/lib/utils";

export async function GET() {
  try {
    return NextResponse.json(
      {
        status: "success",
        data: {
          message: "Hello from Initify Servers!",
        },
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending Discord DM:", error);
    return handleApiError(error);
  }
}
