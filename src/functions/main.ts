import type { Handler } from "@netlify/functions";
import type { Update } from "telegraf/typings/core/types/typegram";

import { handleStart } from "../handlers/start";
import { setupBot } from "../utils/setup";

const bot = setupBot();

bot.start(handleStart);
bot.on("text", async (ctx) => {
  const text = ctx.message.text;
  if (text.trim().match(/[0-9+]+/)) {
    const phoneNumber = text.trim();
    const shortlink = `https://wa.me/${phoneNumber}`;
    const message = `[Click to message ${phoneNumber}](${shortlink})`;
    await ctx.replyWithMarkdownV2(message, {
      disable_web_page_preview: true,
      reply_markup: {
        keyboard: [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["0"]],
      },
    });
  } else {
    await ctx.reply("Only numbers and '+' are allowed");
  }
});

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
