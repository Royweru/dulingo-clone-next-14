import { lemonSqueezyApiInstance } from "@/lib/utils";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
  try {
    const reqData = await req.json();
    console.log(reqData);

    if (!reqData.productId) {
      return new NextResponse("productId is required", { status: 400 });
    }

    const res = await lemonSqueezyApiInstance.post("/checkouts", {
      data: {
        type: "checkouts",
        // attributes: {
        //   checkout_data: {
        //     custom: {
        //       user_id: "123",
        //     },
        //   },
        // },
        relationships: {
          store: {
            data: {
              type: "stores",
              id: process.env.LEMON_SQUEEZY_STORE_ID!,
            },
          },
          variant: {
            data: {
              type: "variants",
              id: reqData.productId.toString(),
            },
          },
        },
      },
    });
    const checkoutUrl = res.data.data.attributes.url;
    console.log(res.data);

    return NextResponse.json(checkoutUrl);
  } catch (error) {
    console.error(error);
    return new NextResponse("Something went wrong", { status: 500 });
  }
}
