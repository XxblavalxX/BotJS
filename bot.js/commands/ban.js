const { SlashCommandBuilder, CommandInteractionOptionResolver, SelectMenuOptionBuilder , Discord } = require('discord.js');
const {client} = require("../index");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('goulage')
		.setDescription('set the goulaged role to a user for a define time')
	    .addUserOption(option =>
            option.setName('user')
                .setDescription('The user to goulage')
                .setRequired(true))
        .addIntegerOption(option =>
            option.setName('time')
                .setDescription('The Time to to goulage someone; \n required only if it is an administrtaor that start the commande ')),
        async execute(interaction) {
            const admin=["azerty" , "Azerty" , "AZERTY" , "IroBOT.js"]
            const userToGoulage = interaction.options.getMember('user')  ;
            const user = interaction.user.username ;
            console.log(user)
            const time = interaction.options.getInteger('time')
            if (time){
                if (admin.includes(user)){                    
                    userToGoulage.roles.add('958275308904132618')
                    setTimeout(() =>{
                        userToGoulage.roles.remove('958275308904132618')
                    }, time*1000)
                }
                else {
                    interaction.reply("sorry it's impossible to goulage somebody withe a precis time because you're not admin ")
                }
            }else {
                let random_time= Math.trunc(Math.random()*100)
                interaction.reply(`${userToGoulage} has been goulaged for ${random_time} seconds`);
                userToGoulage.roles.add('958275308904132618')
                    setTimeout(() =>{
                        userToGoulage.roles.remove('958275308904132618')
                    }, random_time*1000)
            }

            // await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.`);
        },}; 

