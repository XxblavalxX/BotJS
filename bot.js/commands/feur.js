const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('feur')
		.setDescription('Replies with Feur'),
	async execute(interaction) {
		await interaction.reply('Feur !');
	},
};

