const moment = require('moment-timezone');
const menu = (prefix, pushname) => {
	var tim = new Date().getHours(), salam = tim > 2 && tim < 4 ? "Daybreak" : tim < 11 ? "Morning" : tim < 16 ? "Afternoon" : tim < 19 ? "Evening" : "Night"
	let p = 0
	return ` Good ${salam} ${pushname}, Have a nice day :)

*Info bot*
▸ Total commands : 100+
▸ Owner : @${configs.ownerList[0].split('@')[0]}
▸ Prefix : Multi
▸ Time : ${moment().utcOffset('1000').format('YYYY-MM-DD HH:mm:ss')} WIB
▸ Group Bot : https://bit.ly/zetsbotgc

*Group*
• ${prefix}group 
• ${prefix}antilink
• ${prefix}antitagall 
• ${prefix}antiviewonce 
• ${prefix}welcome 
• ${prefix}leave 
• ${prefix}setgroupicon 
• ${prefix}setgroupname 
• ${prefix}setgroupdesc 
• ${prefix}hidetag 
• ${prefix}promote
• ${prefix}demote
• ${prefix}kick 
• ${prefix}add 
• ${prefix}getpp 
• ${prefix}tagall
• ${prefix}linkgroup
• ${prefix}revoke
• ${prefix}leave

*Downloader*
• ${prefix}play 
• ${prefix}playvid 
• ${prefix}youtubedl
• ${prefix}ytmp3 
• ${prefix}ytmp4 
• ${prefix}igstory
• ${prefix}ig 
• ${prefix}joox 

*Sticker*
• ${prefix}stickerwm 
• ${prefix}takestick 
• ${prefix}toimg 
• ${prefix}togif 
• ${prefix}semoji 
• ${prefix}stickerfire
• ${prefix}stickernobg
• ${prefix}stickergif
• ${prefix}sticker

*Anime*
• ${prefix}anime 
• ${prefix}manga 
• ${prefix}chara 
• ${prefix}waifu

*Edukasi*
• ${prefix}nulis 
• ${prefix}brainly 
• ${prefix}kbbi 
• ${prefix}wiki 

*Searching*
• ${prefix}playstore 
• ${prefix}happymod 
• ${prefix}iguser 
• ${prefix}igstalk 
• ${prefix}ytsearch 
• ${prefix}ytplaylist 
• ${prefix}ytchannel 
• ${prefix}shoope 
• ${prefix}spotify 
• ${prefix}gsmarena 
• ${prefix}searchmusic 
• ${prefix}wallpaper 
• ${prefix}pinterest 
• ${prefix}googleimage 
• ${prefix}jagokata 

*Primbon*
• ${prefix}jodoh 
• ${prefix}artinama 
• ${prefix}artimimpi 

*Berita*
• ${prefix}liputannews
• ${prefix}tribunnews
• ${prefix}foxnews

*Fun*
• ${prefix}fml
• ${prefix}randomquran
• ${prefix}meme
• ${prefix}darkjoke
• ${prefix}pantun
• ${prefix}nickepep
• ${prefix}quotes
• ${prefix}estetikpic

*Text maker* 
• ${prefix}wolflogo 
• ${prefix}logoaveng 
• ${prefix}phlogo 
• ${prefix}marvellogo 
• ${prefix}gtext 
• ${prefix}pubglogo 
• ${prefix}snowwrite 
• ${prefix}watercolour 
• ${prefix}harta 
• ${prefix}thundertext 
• ${prefix}flametext 
• ${prefix}glowtext 
• ${prefix}smoketext 
• ${prefix}lithgtext 
• ${prefix}flowertext 
• ${prefix}bneon 
• ${prefix}matrix 
• ${prefix}breakwall 
• ${prefix}gneon 
• ${prefix}dropwater 
• ${prefix}tfire 
• ${prefix}sandw 
• ${prefix}epep 
• ${prefix}gplaybutton 
• ${prefix}splaybutton 
• ${prefix}text3dbox 
• ${prefix}text3d 
• ${prefix}logobp
• ${prefix}leavest 
• ${prefix}tlight 
• ${prefix}naruto 
• ${prefix}crosslogo
• ${prefix}cslogo 
• ${prefix}crismes 

*Image maker*
• ${prefix}missing
• ${prefix}calender
• ${prefix}drawing
• ${prefix}sketch

*Lainnya*
• ${prefix}tomp3
• ${prefix}removebg
• ${prefix}tts
• ${prefix}qrencode
• ${prefix}barcode 
• ${prefix}jadwalsholat
• ${prefix}jadwaltv
• ${prefix}tebakgambar

*Info*
• ${prefix}stickermenu
• ${prefix}owner
• ${prefix}limit
• ${prefix}info
• ${prefix}listvn
• ${prefix}sewa
• ${prefix}grupbot

*Owner*
• ${prefix}setpp 
• ${prefix}eval 
• ${prefix}term 
• ${prefix}block 
• ${prefix}unblock 
• ${prefix}join 
• ${prefix}bc 
• ${prefix}addvn 
• ${prefix}delvn
• ${prefix}premium add 
• ${prefix}premium del 
• ${prefix}premium list
• ${prefix}clearall
• ${prefix}resetlimit

_Jangan *spam/telepon/vc* bot_
`
}

const ingfo = `━━━  *BOT INFO*  ━━━
Bot ini dibuat dengan bahasa pemrograman nodejs dan javascript, jika terjadi eror hubungi owner

- Total command : 137
- Prefix : Multi
- Owner : @${configs.ownerList[0].split('@')[0]}
- Group Bot : https://bit.ly/zetsbotgc

 _*Don't spam, jadilah pengguna yang smart*_
 
Terima kasih.
`

const listCode = `Kode bahasa jgviy tidak ada\n  Code       Bahasa\n    sq        Albanian\n    ar        Arabic\n    hy        Armenian\n    ca        Catalan\n    zh        Chinese\n    zh-cn     Chinese (China)\n    zh-tw     Chinese (Taiwan)\n    zh-yue    Chinese (Cantonese)\n    hr        Croatian\n    cs        Czech\n    da        Danish\n    nl        Dutch\n    en        English\n    en-au     English (Australia)\n    en-uk     English (United Kingdom)\n    en-us     English (United States)\n    eo        Esperanto\n    fi        Finnish\n    fr        French\n    de        German\n    el        Greek\n    ht        Haitian Creole\n    hi        Hindi\n    hu        Hungarian\n    is        Icelandic\n    id        Indonesian\n    it        Italian\n    ja        Japanese\n    ko        Korean\n    la        Latin\n    lv        Latvian\n    mk        Macedonian\n    no        Norwegian\n    pl        Polish\n    pt        Portuguese\n    pt-br     Portuguese (Brazil)\n    ro        Romanian\n    ru        Russian\n    sr        Serbian\n    sk        Slovak\n    es        Spanish\n    es-es     Spanish (Spain)\n    es-us     Spanish (United States)\n    sw        Swahili\n    sv        Swedish\n    ta        Tamil\n    th        Thai\n    tr        Turkish\n    vi        Vietnamese\n    cy        Welsh\n    `

const mess = {
             wait: 'Tunggu sebentar...',
			 group: 'Perintah ini dapat digunakan di *Grup!*',
			 admin: 'Perintah ini khusus *Admin!*',
			 botAdmin: 'Bot bukan *Admin!*',
			 limit: 'Limit penggunaan anda sudah habis, \n\nNote: limit akan direset setiap 00.00',
			 ownerOnly: 'Perintah ini khusus *Owner!*'
}

module.exports = {
	menu,
	ingfo,
	listCode,
	mess
}
