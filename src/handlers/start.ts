import type { Context } from "telegraf";

export const handleStart = async (ctx: Context) => {
  return ctx.reply(
    `👋 Hello ${
      ctx.from?.first_name ?? "there"
    }, enter a phone number you'd like to start a WhatsApp chat with.`,
    {
      reply_markup: {
        keyboard: [["1", "2", "3"], ["4", "5", "6"], ["7", "8", "9"], ["0"]],
      },
    }
  );
};
