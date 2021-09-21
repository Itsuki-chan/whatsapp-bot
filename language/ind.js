exports.wait = () => {
	return`*「 WAIT 」 SEDANG PROSES*`
}

exports.succes = () => {
	return`*「 SUCCES 」*`
}

exports.lvlon = () => {
	return`*「 ENABLE 」 LEVELING*`
}

exports.lvloff = () => {
	return`*「 DISABLE 」 LEVELING*`
}

exports.lvlnul = () => {
	return`*LEVELMU MASIH KOSONG*`
}

exports.lvlnoon = () => {
	return`*LEVEL DI GRUB BELUM DI AKTIFKAN*`
}

exports.noregis = () => {
	return`──「 NOT VERIFIED 」──\nHalo kak kamu belum verify!\nverify dulu kak di bot itsuki... \n\nCommand : ${prefix}verify`
}

exports.rediregis = () => {
	return`*「 SUDAH DAFTAR 」*\n\n*kamu sudah terdaftar di database bot*`
}

exports.stikga = () => {
	return`*yah gagal coba ulangi beberapa saat lagi*`
}

exports.linkga = () => {
	return`*maaf link tidak valid*`
}

exports.groupo = () => {
	return`*「GROUP ONLY」*`
}

exports.ownerb = () => {
	return`*「OWNER BOT ONLY」*`
}

exports.ownerg = () => {
	return`*「OWNER GROUP ONLY」*`
}

exports.admin = () => {
	return`*「ADMIN GROUP ONLY」*`
}

exports.badmin = () => {
	return`*「BOT HARUS JADI ADMIN」*`
}

exports.nsfwoff = () => {
	return`*NSFW GAK AKTIF*`
}

exports.bug = () => {
	return`*Masalah telah di laporkan ke owner BOT, laporan palsu/main2 tidak akan ditanggapi*`
}

exports.wrongf = () => {
	return`*format salah/text kosong*`
}

exports.clears = () => {
	return`*clear all Success*`
}

exports.pc = () => {
	return`*「 REGISTRASI 」*\n\nuntuk mengetahui apa kamu sudah terdaftar silahkah check message yang saya kirim \n\nNOTE:\n*jika kamu belum mendapatkan pesan. berarti kamu belum menyimpan nomer bot*`
}

exports.registered = (namaUser, umurUser, serialUser, time, sender) => {
	return`╭─「 *VERIFY* 」\n│ \`\`\`Pendaftaran berhasil dengan\`\`\` \n│ \`\`\`SN: ${serialUser}\`\`\`\n│\n│\`\`\`Pada ${time}\`\`\`\n│\`\`\`[Nama]: ${pushname}\`\`\`\n│\`\`\`[Nomor]: wa.me/${sender.split("@")[0]}\`\`\`\n│\`\`\`Untuk menggunakan bot\`\`\`\n│\`\`\`silahkan\`\`\`\n│\`\`\`kirim ${prefix}menu\`\`\`\n│\`\`\`\n│Total Pengguna: ${_registered.length} Orang\`\`\`\n╰────────────────────`
}

exports.cmdnf = (prefix, command) => {
	return`command *${prefix}${command}* tidak di temukan di *${prefix}menu*`
}

exports.owneresce = (pushname) => {
	return`*maaf tapi ${pushname} bukan owner script*`
}

exports.reglevelaha = (command, pushname, getLevelingLevel, sender, aha) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${aha}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahb = (command, pushname, getLevelingLevel, sender, ahb) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahb}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahc = (command, pushname, getLevelingLevel, sender, ahc) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahc}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahd = (command, pushname, getLevelingLevel, sender, ahd) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahd}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahe = (command, pushname, getLevelingLevel, sender, ahe) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahe}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.reglevelahf = (command, pushname, getLevelingLevel, sender, ahf) => {
	return`*Maaf ${pushname} level mu belum mencukupi*\n\n*┏⊱level mu : ${getLevelingLevel(sender)}*\n*┣⊱jenis command : ${command}*\n*┗⊱syarat level : ${ahf}*\n\n_NOTE : CHAT/SELALU ON UNTUK MENDAPATKAN XP_`
}

exports.menu = (pushname, prefix, getLevelingLevel, getLevelingXp, sender, reqXp, _registered, uangku, role, time, premi) => { 
	return `
Note : Bot ini menggunakan sc ini sementara sc github.com/Itsuki-chan/Wa dalam pembaikan
Anda bisa menggunakan sc ini : github.com/Itsuki-chan/whatsapp-bot

*ITSUKIBOTZ*

╭─「 *INFOBOT* 」
│ Bot name : Itsuki-san
│ Lib : Baileys
│ Creator : Itsuki
│ Waktu : ${time}
│ Pemrifix「  ${prefix}  」
╰─────────────────
╭─「 *USERINFO* 」
│ Name : ${pushname}
│ Your number : wa.me/${sender.split("@")[0]}
│ Tag : @${sender.split("@")[0]}
│ Xp : ${getLevelingXp(sender)}
│ Level: ${getLevelingLevel(sender)}
│ Registered : ${_registered.length}
│ Role : ${role}
╰──────────
╭──────「 SIMPLE MENU 」
│ *${prefix}ownermenu*
│ *${prefix}adminmenu*
│ *${prefix}funmenu*
│ *${prefix}mediamenu*
│ *${prefix}kerangmenu*
│ *${prefix}makermenu*
│ *${prefix}othermenu*
│ *${prefix}animemenu*
│ *${prefix}nsfwmenu*
│ *${prefix}vipmenu*
│ *${prefix}soundmenu*
╰───────────────────────
╭──────「 UMUM 」
│ *${prefix}bugreport*
│ *${prefix}info*
│ *${prefix}owner*
│ *${prefix}request*
│ *${prefix}listblock*
│ *${prefix}iklan*
│ *${prefix}runtime*
│ *${prefix}rules*
│ *${prefix}tnc*
│ *${prefix}cekvip*
│ *${prefix}daftarvip*
│ *${prefix}addvip*
│ *${prefix}delvip*
│ *${prefix}snk*
│ *${prefix}listpremium*
│ *${prefix}donate*
│ *${prefix}fitnah*
│ *${prefix}totaluser*
│ *${prefix}level*
│ *${prefix}leveling*
╰───────────────────────
╭──────「 tts? 」
│ *${prefix}kodenegara
│ *${prefix}bahasa
╰──────────────────────
╭──────「 LIMIT & UANG 」
│ *${prefix}mining*
│ *${prefix}limit*
│ *${prefix}transfer*
│ *${prefix}event*
│ *${prefix}resetlimit*
│ *${prefix}dompet*
│ *${prefix}setlimit*
│ *${prefix}setmemlimit*
╰───────────────────────
╭──────「 Thanks to 」
│ Iqbal Rizki Maulana
│ Itsuki
│ Baileys
│ My Friends
│ My Boyfriend🗿🗿
╰──────────────────────
`
}

exports.levelup = (pushname, sender, getLevelingXp,  getLevel, getLevelingLevel, role) => {
	return`
╭─「 *LEVEL JUST UP!* 」
│ *Nama* : ${pushname}
│ *Nomer* : wa.me/${sender.split("@")[0]}
│ *Xp* : ${getLevelingXp(sender)}
│ *Limit* : +3
│ *Level* : ${getLevel} → ${getLevelingLevel(sender)}
│ *Role* : ${role}
╰──────────────────────
`}
 
exports.limitend = (pushname) => {
	return`*maaf ${pushname} limit hari ini habis*\n*limit di reset setiap bot on*`
}

exports.limitcount = (limitCounts) => {
	return`
*「 LIMIT COUNT 」*
sisa limit anda : ${limitCounts}

NOTE : untuk mendapatkan limit. bisa lewat naik level atau buylimit`
}

exports.satukos = () => {
	return`*Tambah parameter 1/enable atau 0/disable`
}

exports.uangkau = (pushname, sender, uangkau) => {
	return`╭─「 *ATM🗿* 」\n│ *Nama* : ${pushname}\n│ *Nomer* : ${sender.split("@")[0]}\n│ *Uang* : ${uangkau}\n╰──────────────────────`
}

exports.premadd = (pnom) => {
	return`*「 PREMIUM ADD 」*

*Name* : ${pnom}
*Expired* : 30 DAY\n*thank for order premium*`
}

exports.dellprem = (hnom) => {
	return`*「 PREMIUM DELETE 」*

*Name* : ${hnom}
*Expired* : NOW:v\n*thank for order premium back soon for buying again:D*`
}

exports.premon = (pushname) => {
	return`MAAF ${pushname} ANDA BUKAN USER PREMIUM`
}

exports.afkOn = (pushname, reason) => {
    return `╭─「 *AWAY FROM KEYBOARD* 」\n│ Fitur AFK berhasil *diaktifkan*!\n\n│ *Username*: ${pushname}\n│ *Alasan*: ${reason}\n╰──────────────────────`
}

exports.afkOnAlready = () => {
    return `Fitur AFK telah diaktifkan sebelumnya.`
}

exports.afkMentioned = (getReason, getTime) => {
    return `*「 AFK MODE 」*\n\nSssttt! Orangnya lagi AFK, jangan diganggu!\n➸ *Alasan*: ${getReason}\n➸ *Sejak*: ${getTime}`
}

exports.afkDone = (pushname) => {
    return `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`
}
