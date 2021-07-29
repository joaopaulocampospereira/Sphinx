const Discord = require('discord.js');
const { link } = require('ffmpeg-static');
const { filterFormats } = require('ytdl-core');
const bot = new Discord.Client();
const ytdl = require('ytdl-core');
const token = 'Nzk5MTA3MzE2MDE1OTU2MDI4.X_-wrg.4hOc9bycfDSF0jcQwUnmHie0Fjs';

let estouNaConversa = false;
SistemaRPG = 'nenhum';

// --------- Permitidos ---------

const Mestre = 390612539043741696;
const Pimba = 482695284816609291;
const Coisa = 507274473796403221;
const Jane = 459743247565062144;
const Celta = 348470126984560640;
const LeozingGameplay = 440880585729114123;
const Batata = 736004589505216583;
const Constantino = 270994704512843777;
const Cait = 717573338528088105;

// -------------------------------

bot.login(token);

bot.on('ready', () => {
    console.log('Estou pronta para servi-lo mestre.');
});

bot.on('reconnecting', () => {
    console.log("Estou reconectando mestre.");
  });

bot.on('disconnect', () => {
    console.log('Estou ansiosa para sevi-lo de novo alguma hora mestre.');
});

//Bem Vindo

bot.on('guildMemberAdd', async member => {
    Discord.Message.channel.send('Outro trouxa entrou no servidor');
});

// --------- Comandos ---------  

bot.on('message', async (msg) => {
    if (msg.author.bot) {
        return;
    }

    const autorTag = msg.author.id;
    //ping-pong

    if (msg.content === 'ping') {
        if (msg.author.id == Mestre) {
            msg.reply('pong!');
        } else {
            msg.reply('Não to afim de brincar com você.');
        }
    }

    //marco-polo

    if (msg.content === 'marco') {
        if (msg.author.id == Mestre) {
            msg.reply('polo!');
        } else {
            msg.reply('Não to afim de brincar com você.');
        }
    }

    //bumerangue

    if (msg.content === 'bumerangue') {
        if (msg.author.id == Mestre) {
            msg.reply('eugnaremub!');
        } else {
            msg.reply('Não to afim de brincar com você.');
        }
    }

    if (!msg.content.startsWith('>')) {
        return;
    }
    
    if(msg.author.id == Mestre || Pimba || Coisa || Jane || Celta || LeozingGameplay || Batata || Constantino || Cait){    

        //>help = Mostra os comandos disponíveis

        if (msg.content === '>help'){
             if(msg.author.id == Mestre) {
                msg.channel.send(``, { files: ["./src/txt/HelpMestre.txt"]});
            } else {
                msg.channel.send(``, { files: ["./src/txt/HelpGeral.txt"]});
            }
        }

        // >join = Entra no canal de voz

        else if (msg.content === '>join'){
            if (msg.member.voice.channel){
                msg.member.voice.channel.join();
                estouNaConversa = true;
            } else if(msg.author.id == Mestre) {
                msg.channel.send('Desculpe Mestre, mas você poderia entrar em um canal de aúdio por favor?')
            } else {
                msg.channel.send('O seu animal, você tem que estar em um canal de aúdio pra eu poder entrar')
            }
        }

        //>leave = Sai do canal

        else if (msg.content === '>leave') {
            if (msg.member.voice.channel){
                msg.member.voice.channel.leave();
                estouNaConversa = false;
            } else if(msg.author.id == Mestre) {
                msg.channel.send('Desculpe Mestre, mas eu não estou em sua conversa.')
            } else {
                msg.channel.send('Sair pra onde retardado. Eu nem na conversa não to.')
            }
        }

        //>play [link] = Toca músisca

        else if (msg.content.startsWith('>play')) {
            if (estouNaConversa) {
                let oQueTocar = msg.content.replace('>play ','');
                if (ytdl.validateURL(oQueTocar)) {
                    const voiceChannel = msg.member.voice.channel
                    const connection = await voiceChannel.join();
                    const watcher = connection.play(
                    ytdl(oQueTocar, {
                        filter: 'audioonly',
                        quality: 'highest',
                        volume: 1,
                    })
                );
                    
                } else if (msg.author.id == Mestre) {
                    msg.channel.send('Perdão Mestre, mas o link deve pertencer ao site Youtube.');
                } else {
                    msg.channel.send('Gente burra é foda. O link tem que ser do Youtube seu animal.');
                }
            }
        }

/*
        else if (msg.content === '>skip') {
            skip(msg, serverQueue);
            return;
        }
*/

        //>stop = Parar a música.

        else if (msg.content === '>stop') {
            if (estouNaConversa) {
                    const voiceChannel = msg.member.voice.channel
                    const connection = await voiceChannel.join();
                    const watcher = connection.play(
                    ytdl('', {
                        filter: 'audioonly',
                        quality: 'highest',
                        volume: 1,
                    })
                );
                    
            } else if (msg.author.id == Mestre) {
                msg.channel.send('Perdão Mestre, mas eu não estou tocando nada.');
            } else {
                msg.channel.send('Que que você ta arrumando o retardado, eu to quieta na minha aqui.');
            }
        }

        //>ara ara = entra na call e da play em um áudio específico, depois sai.

        else if (msg.content === '>ara ara'){
            if (msg.member.voice.channel){
                msg.member.voice.channel.join().then(async() => {
                    const voiceChannel = msg.member.voice.channel
                    const connection = await voiceChannel.join();
                    const watcher = connection.play(
                    ytdl('https://www.youtube.com/watch?v=n4PvOKUivAI', {
                        filter: 'audioonly',
                        quality: 'highest',
                        volume: 1,
                    })
                    );
                    

                    watcher.on('finish', () => 
                    {
                        msg.member.voice.channel.leave();
                    });
                });
                
            }
        }

        //comandos pros amiguim, toca um áudio e sai

        else if (msg.content === '>capivara'){
            if (msg.member.voice.channel){
                msg.member.voice.channel.join().then(async() => {
                    const voiceChannel = msg.member.voice.channel
                    const connection = await voiceChannel.join();
                    const watcher = connection.play(
                    ytdl('https://www.youtube.com/watch?v=xsfodU2HukQ', {
                        filter: 'audioonly',
                        quality: 'highest',
                        volume: 1,
                    })
                    );
                    

                    watcher.on('finish', () => 
                    {
                        msg.member.voice.channel.leave();
                    });
                });
                
            }
        }

        else if (msg.content === '>dragaum'){
            if (msg.member.voice.channel){
                msg.member.voice.channel.join().then(async() => {
                    const voiceChannel = msg.member.voice.channel
                    const connection = await voiceChannel.join();
                    const watcher = connection.play(
                    ytdl('https://www.youtube.com/watch?v=cDLizHtSTVk', {
                        filter: 'audioonly',
                        quality: 'highest',
                        volume: 1,
                    })
                    );
                    

                    watcher.on('finish', () => 
                    {
                        msg.member.voice.channel.leave();
                    });
                });
                
            }
        }

        else if (msg.content === '>alpaka'){
            if (msg.member.voice.channel){
                msg.member.voice.channel.join().then(async() => {
                    const voiceChannel = msg.member.voice.channel
                    const connection = await voiceChannel.join();
                    const watcher = connection.play(
                    ytdl('https://www.youtube.com/watch?v=50bnHZLMqTI', {
                        filter: 'audioonly',
                        quality: 'highest',
                        volume: 1,
                    })
                    );
                    

                    watcher.on('finish', () => 
                    {
                        msg.member.voice.channel.leave();
                    });
                });
                
            }
        }

        else if (msg.content === '>alpaka2'){
            if (msg.member.voice.channel){
                msg.member.voice.channel.join().then(async() => {
                    const voiceChannel = msg.member.voice.channel
                    const connection = await voiceChannel.join();
                    const watcher = connection.play(
                    ytdl('https://www.youtube.com/watch?v=5DlROhT8NgU', {
                        filter: 'audioonly',
                        quality: 'highest',
                        volume: 1,
                    })
                    );
                    

                    watcher.on('finish', () => 
                    {
                        msg.member.voice.channel.leave();
                    });
                });
                
            }
        }
        
        else if (msg.content === '>roger'){
            if (msg.member.voice.channel){
                msg.member.voice.channel.join().then(async() => {
                    const voiceChannel = msg.member.voice.channel
                    const connection = await voiceChannel.join();
                    const watcher = connection.play(
                    ytdl('https://www.youtube.com/watch?v=NM5sQvUVQFA', {
                        filter: 'audioonly',
                        quality: 'highest',
                        volume: 1,
                    })
                    );
                    

                    watcher.on('finish', () => 
                    {
                        msg.member.voice.channel.leave();
                    });
                });
                
            }
        }

        else if (msg.content === '>tutu turu tutu'){
            if (msg.member.voice.channel){
                msg.member.voice.channel.join().then(async() => {
                    const voiceChannel = msg.member.voice.channel
                    const connection = await voiceChannel.join();
                    const watcher = connection.play(
                    ytdl('https://www.youtube.com/watch?v=HtQSN2AQvVo', {
                        filter: 'audioonly',
                        quality: 'highest',
                        volume: 1,
                    })
                    );
                    

                    watcher.on('finish', () => 
                    {
                        msg.member.voice.channel.leave();
                    });
                });
                
            }
        }
        

        //define o sistema a ser usado com o dado.

        else if (msg.content === '>sdefault' || msg.content === '>sd') {
            SistemaRPG = 'nenhum';
            msg.channel.send('Sistema alterado para nenhum.');
        }

        else if (msg.content === '>pathfinder' || msg.content === '>pf' ) {
            SistemaRPG = 'pathfinder';
            msg.channel.send('Sistema alterado para Pathfinder.');
        }

        else if (msg.content === '>callofcthulhu' || msg.content === '>coc' ) {
            SistemaRPG = 'callofcthulhu';
            msg.channel.send('Sistema alterado para Call of Cthulhu.');
        }

        else if (msg.content === '>shadowrun' || msg.content === '>sr') {
            SistemaRPG = 'shadowrun';
            msg.channel.send('Sistema alterado para Shadowrun.');
        }

        //verifica qual sistema está sendo utilizado para os dados

        else if (msg.content === '>sistema') {
            msg.reply(`O sistema que eu estou utilizando para lançar os dados é o ${SistemaRPG}`);
        }

        // dados

        else if (msg.content.startsWith('>d') && msg.content !== '>dragaum') {
            let Dsplit = msg.content.split(' ')
            var DFaces = Dsplit[0].replace('>d','')
            
            var NDados;
            
            if (Dsplit[2] != null && Dsplit[2] != undefined && Dsplit[2] != "") {
                var NDados = parseInt(Dsplit[2]); 
            } else {
                var NDados = 1; 
            }

            var Mod;

            if (Dsplit[1] != null && Dsplit[1] != undefined && Dsplit[1] != "") {
                var Mod = parseInt(Dsplit[1]);
            } else {
                var Mod = 0;  
            }

            switch(SistemaRPG) {
                    
                case 'callofcthulhu':
                    let Extremo = Mod*0.2;
                    let Bom = Mod*0.5;
                    let Normal = Mod;

                    msg.reply(`Jogando ${NDados} dado(s) de ${DFaces} lados, usando o sistema ${SistemaRPG}.`);

                    for (var x = 0; x < NDados; x++) {
                        
                        let DResult = Math.floor(Math.random() * DFaces + 1);
                    
                        if (DResult == 1) {
                            msg.channel.send(`${DResult} Milagre.`);
                        } else if(DResult < (Extremo)){
                            msg.channel.send(`${DResult} Extremo.`);
                        } else if(DResult < (Bom)){
                            msg.channel.send(`${DResult} Bom.`);
                        }else if(DResult < (Normal)){
                            msg.channel.send(`${DResult} Normal.`);
                        } else if (DResult == DFaces) {
                            msg.channel.send(`${DResult} Desastre.`);
                        } else {
                            msg.channel.send(`${DResult} Falha.`);
                        }
                    }
                break;

                case 'pathfinder':
                    msg.reply(`Jogando ${NDados} dado(s) de ${DFaces} lados, usando o sistema ${SistemaRPG}.`);
                    for (var x = 0; x < NDados; x++) {
                        let DResult = Math.floor(Math.random() * DFaces + 1)
                        let Total = DResult + Mod;

                        msg.channel.send(`${DResult} + ${Mod} = ${Total}.`);
                    }                    
                break

                case 'shadowrun':

                    var QSucesso;
                    var QFalha;
                    var QFalhaCrit;

                    msg.reply(`Jogando ${NDados} dado(s) de ${DFaces} lados, usando o sistema ${SistemaRPG}.`);
                    if (DFaces == 6) {
                        var QSucesso = 0;
                        var QFalha = 0;
                        var QFalhaCrit = 0;

                        
                        for (var x = 0; x < NDados; x++) {
                            let DResult = Math.floor(Math.random() * DFaces + 1)

                            if (DResult == 6 || DResult == 5) {
                                QSucesso ++;
                                msg.channel.send(`${DResult} Sucesso.`);
                            } else if (DResult == 1) {
                                QFalhaCrit ++;
                                msg.channel.send(`${DResult} Falha Crítica.`);
                            } else {
                                QFalha ++;
                                msg.channel.send(`${DResult} Falha.`);
                            } 
                            
                        }
                          
                    } else {
                        for (var x = 0; x < NDados; x++) {
                            let DResult = Math.floor(Math.random() * DFaces + 1);
                            msg.channel.send(DResult);
                        }
                    }
                break
                
                default:
                    msg.reply(`Jogando ${NDados} dado(s) de ${DFaces} lados, sem sistema.`);
                    for (var x = 0; x < NDados; x++) {
                        let DResult = Math.floor(Math.random() * DFaces + 1);
                        msg.channel.send(DResult);
                    }
                break;          
            }   
        }

        
        //teste com arquivos

        else if(msg.content === '>txt'){
        msg.channel.send(``, { files: ["./src/txt/teste.txt"]});
        }

        else if(msg.content === '>video') {
            msg.channel.send(``,{ files: ["./src/videos/quintaserie.mp4"]});
        }

        else if(msg.content === '>gif') {
            msg.channel.send(``,{ files: ["./src/img/meudeus.gif"]});
        }

        //pugInvasion = 50 imagens de pug.

        else if(msg.content === '>pug'){
            for (var x = 0; x < 50; x++) {
                    msg.channel.send(``, { files: ["./src/img/pug.jpeg"]});
            }
        }
        

        else if(msg.author.id == Mestre) {
            msg.channel.send('Perdão Mestre, mas eu não conheço esse comando. Se quiser que eu te lembre quais comandos eu já aprendi, por favor use **>help**');
        }

        else {
            msg.channel.send('Quer me pedir as coisas e nem sabe como. Faz um favor pra mim e usa o comando **>help** e deixa de ser burro');
        }

    } else if  (msg.content.toLowerCase().startsWith('>')) {
        msg.channel.send('Você não pode dar comandos pra mim seu merda')
    } else {
        return;
    }
}); 
    // -------------------------------



    // --------- Functions ----------

 