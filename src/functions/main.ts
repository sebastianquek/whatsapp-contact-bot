import type { Handler } from "@netlify/functions";
import type { Update } from "telegraf/typings/core/types/typegram";

import { handleStart } from "../handlers/start";
import { setupBot } from "../utils/setup";

const bot = setupBot();

bot.start(handleStart);
bot.on("text", (ctx) => ctx.reply(ctx.message.text));

const handler: Handler = async (event) => {
  try {
    const body: Update = JSON.parse(event.body ?? "{}");
    await bot.handleUpdate(body);
    return { statusCode: 200, body: "" };
  } catch (e) {
    console.log(e);
    return {
      statusCode: 400,
      body: "This endpoint is meant for bot and telegram communication",
    };
  }
};

export { handler };
