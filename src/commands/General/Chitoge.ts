/** @format */

import { MessageType, Mimetype } from "@adiwajshing/baileys";
import MessageHandler from "../../Handlers/MessageHandler";
import BaseCommand from "../../lib/BaseCommand";
import WAClient from "../../lib/WAClient";
import { ISimplifiedMessage } from "../../typings";

export default class Command extends BaseCommand {
	constructor(client: WAClient, handler: MessageHandler) {
		super(client, handler, {
			command: "akuma",
			description: "Displays the info",
			category: "general",
			usage: `${client.config.prefix}akuma`,
			baseXp: 200,
		});
	}

	run = async (M: ISimplifiedMessage): Promise<void> => {
		const chitoge =
			"https://c.tenor.com/7iEFLDDGQbMAAAPo/majo-no-tabitabi-the-journey-of-elaina.mp4";
		return void this.client.sendMessage(
			M.from,
			{ url: chitoge },
			MessageType.video,
			{
				quoted: M.WAMessage,
				mimetype: Mimetype.gif,
				caption: `⚡ *Pain bot* ⚡\n\n🍀 *Description: A WhatsApp Bot developed by *akuma* With Rich Anime features based on pain.*\n\n🌐 *OFFICIAL BOT URL:https://github.com/akuma240/Elaina-bot* \n\n 📒 *Guide:https://github.com/akuma240/Elaina-bot* \n\n 👾 *BOT URL:https://github.com/akuma240/Elaina-bot* \n`,
			}
		);
	};
}
