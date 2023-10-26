const { SlashCommandBuilder, CommandInteractionOptionResolver } = require('discord.js');
const {client} = require("../index");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ghost')
		.setDescription('ghost ping a user if it\'s specified')
	    .addUserOption(option =>
            option.setName('user')
                .setDescription('User to ghost ping')
                .setRequired(false)),
        async execute(interaction) {
            const ping = interaction.options.getUser('user')
            const channel = interaction.channel.name
            console.log(channel)
            const userToPing ="@"+ping.username
            console.log(userToPing)
            channel.send(userToPing)

            // await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
        },}; 

 