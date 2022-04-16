# WhatsApp Contact Bot

Simple Telegram bot that allows you to start a WhatsApp chat with people not in your contacts.
Responds with a link that can be opened in WhatsApp.

You can find a deployed bot here http://t.me/WhatsAppContactBot

## Why?

WhatsApp allows you to start chats with someone not in your contacts by using
`https://wa.me/<PHONE NUMBER>`. The problem is that I can never recall this URL
whenever I need this functionality. Although I don't often encounter it,
when I do, I typically need it quickly.

To over-engineer this, here's a simple Telegram bot that returns a shortlink
given a phone number.

I also took this opportunity to learn more about Netlify functions and get up
to speed about the changes with Telegraf.

## Setup

### Telegram BotFather

You'll need to create a bot by talking to BotFather.

1. Start a chat with [the BotFather](https://t.me/botfather)
2. Create a new bot via `/newbot`
3. Specify the name of the bot and username of the bot
4. Note down the access token, which will be used below

### Netlify

Netlify deploys the function that Telegram will call whenever a message is sent to the bot.

1. Fork the repo
2. Go to https://github.com/apps/netlify/installations/new to ensure that Netlify has access to the repo
3. Import the repo into Netlify and follow the steps to deploy
4. Go to Settings > Build & deploy > Environment
5. Add a `TELEGRAM_BOT_TOKEN` variable and enter the access token you found from before
6. Trigger a redeploy

### Telegram webhook

To get the bot to work, you need to let Telegram know about the location of the deployed function.

1. In Netlify, go to Functions and select the `main` function. Look for the Endpoint.
2. Open `.env` and set the `NETLIFY_URL` to the endpoint found in step 1.
3. Run `npm run webhook-setup`

### Telegram bot usage

Once the above has been set up, you can start using the bot!

1. Enter `/start` to see the welcome message
2. Enter any number to get a shortlink
3. Click on the link to open up the WhatsApp chat

## Development

Currently, you can only run tests and perform a typecheck:

```
npm run test
npm run typecheck
```

I deployed directly to Netlify and performed manual tests on the bot as I didn't want to spend much time on this (it's a weekend project after all!).

There's room to explore [Netlify Dev](https://docs.netlify.com/cli/get-started/#run-a-local-development-environment) to run it locally before deployment. Having a test bot will be useful as well.
