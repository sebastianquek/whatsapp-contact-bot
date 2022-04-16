import type { Handler } from "@netlify/functions";
import type { Update } from "telegraf/typings/core/types/typegram";

import { generateMessage } from "../utils/generateMessage";
import { parseMobileNumber } from "../utils/parseMobileNumber";
import { setupBot } from "../utils/setup";

const bot = setupBot();

bot.start((ctx) => {
  return ctx.reply(
    `👋 Hello ${
      ctx.from?.first_name ?? "there"
    }, enter a phone number you'd like to start a WhatsApp chat with.`
  );
});

bot.on("text", (ctx) => {
  const text = ctx.message.text;
  const number = parseMobileNumber(text);
  if (number !== undefined) {
    return ctx.replyWithMarkdownV2(generateMessage(number), {
      disable_web_page_preview: true,
    });
  } else {
    return ctx.reply("Only numbers and '+' are allowed");
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
