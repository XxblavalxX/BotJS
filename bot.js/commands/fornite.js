const { SlashCommandBuilder } = require('discord.js');
const fs = require("fs")

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ftn')
		.setDescription('Ping The Gamer to play fornite'),
	async execute(interaction) {
		const channel= interaction.channel
		await channel.send("<@&970748526118191124> fornite ?")
		await interaction.reply(" ")
	},
};