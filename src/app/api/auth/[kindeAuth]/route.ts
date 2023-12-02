import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: any
): Promise<void | NextResponse<unknown>> {
  const endpoint = params.kindeAuth;

  // Assuming handleAuth returns a function
  const authHandler = handleAuth(request, endpoint);

  // Call the returned function to get the response
  const response = await authHandler(request, new NextResponse());

  // Wrap the response using NextResponse if necessary
  return new NextResponse(response.body, {
    status: response.status,
    headers: response.headers,
  });
}
