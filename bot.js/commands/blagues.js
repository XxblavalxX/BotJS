const { randomFill } = require('crypto');
const { SlashCommandBuilder } = require('discord.js');
const fs = require("fs")

// const data = require("../ressources/blagues.json")
module.exports = {
	data: new SlashCommandBuilder()
		.setName('blagues')
		.setDescription('Replies with a Joke created by Baptiste'),
	async execute(interaction) {
		let  datas
		const filePath = "blagues.json"
		
		try {
			const fd = fs.openSync(filePath,"r");
			datas = fs.readFileSync(fd);
			fs.closeSync(fd);
			const data_string=datas.toString()
			datas=JSON.parse(data_string)
		
		}catch (e){
			console.log(e)
		} 
        // console.log(datas.nb)
        // let nb=
        let random = Math.random()*datas.nb 
		random=Math.trunc(random)
		let random_time= Math.trunc(Math.random()*5)
		const channel= interaction.channel
		// console.log(channel)
		await interaction.reply(datas.blagues[random].question)
		setTimeout(() => {
			channel.send(datas.blagues[random].reponse)
		}, random_time*1000)
	},
};