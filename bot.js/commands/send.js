const { SlashCommandBuilder, CommandInteractionOptionResolver } = require('discord.js');
const {client} = require("../index");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('send')
		.setDescription('repond avec le texte passer en parametre')
	    .addStringOption(option =>
            option.setName('input')
                .setDescription('The input to echo back')
                .setRequired(true))
        .addChannelOption(option =>
            option.setName('channel')
                .setDescription('The channel to echo into')
                .setRequired(true)),
        async execute(interaction) {
            const channel = interaction.options.getChannel('channel')
            const input = interaction.options.getString('input')
            channel.send(input);
            interaction.reply(" ")

            // await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
        },}; 

 