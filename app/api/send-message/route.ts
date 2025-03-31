import { NextResponse } from "next/server";
import { REST } from "@discordjs/rest";
import { Routes, APIChannel } from "discord-api-types/v10";
import { handleApiError, handleMissingParamsError } from "@/lib/utils";
import { SendMessageRequest, SendMessageResponse } from "@/types/message";

const discordBotToken = process.env.DISCORD_BOT_TOKEN || "";
const discordUserId = process.env.USER_DISCORD_ID || "";

if (!discordBotToken || !discordUserId) {
  throw new Error(
    "Missing required environment variables: DISCORD_BOT_TOKEN and/or USER_DISCORD_ID"
  );
}

const rest = new REST({ version: "10" }).setToken(discordBotToken);

export async function POST(req: Request) {
  try {
    const body: SendMessageRequest = await req.json();
    const { message } = body;

    if (!message) {
      return handleMissingParamsError("message is required");
    }

    const dmChannel = (await rest.post(Routes.userChannels(), {
      body: { recipient_id: discordUserId },
    })) as APIChannel;

    await rest.post(Routes.channelMessages(dmChannel.id), {
      body: { content: message },
    });

    const resPayload: SendMessageResponse = {
      status: "success",
      data: {
        message: "DM sent!",
      },
    };

    return NextResponse.json(resPayload, { status: 200 });
  } catch (error) {
    console.error("Error sending Discord DM:", error);
    return handleApiError(error);
  }
}
