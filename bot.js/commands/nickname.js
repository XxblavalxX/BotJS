const { SlashCommandBuilder, CommandInteractionOptionResolver, SelectMenuOptionBuilder , Discord } = require('discord.js');
const {client} = require("../index");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('nickname')
		.setDescription('set the goulaged role to a user for a define time')
	    .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to change the name')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('newname')
                .setDescription('The new name of the persone')
                .setRequired(true)),
        async execute(interaction) {
            const userToChangeName= interaction.options.getMember('user')  ;
            let have_role =true
            try {
                userToChangeName.roles.remove('955898677858295828')
              } catch (error) {
                have_role=false
              }
            let oldName= interaction.options.getMember('user')  ;
            oldName=oldName.user.username
            const newName= interaction.options.getString('newname');
            userToChangeName.setNickname(newName);
            if (have_role){
                userToChangeName.roles.add('955898677858295828')
            }
            // userToChangeName.roles.remove('958275308904132618')
            // let oldName= interaction.options.getMember('user')  ;
            // oldName=oldName.user.username
            // const newName= interaction.options.getString('newname');
            // userToChangeName.setNickname(newName);
            await interaction.reply(oldName +' your name has been changed for : ' + newName);
            } 

            // await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
        };


     