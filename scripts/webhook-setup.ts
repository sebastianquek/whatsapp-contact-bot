import axios from "axios";
import { config } from "dotenv";

config();

const setup = async () => {
  if (!process.env.TELEGRAM_BOT_TOKEN) {
    console.error("TELEGRAM_BOT_TOKEN missing from environment");
    return;
  }

  if (!process.env.NETLIFY_URL) {
    console.error("NETLIFY_URL missing from environment");
    return;
  }

  const { data } = await axios({
    method: "post",
    url: `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/setWebhook`,
    headers: {
      "content-type": "application/json",
    },
    data: {
      url: process.env.NETLIFY_URL,
    },
  });

  console.log(data);
};

void setup();
