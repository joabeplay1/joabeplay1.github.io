<!DOCTYPE html>
<html lang="pt-BR">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Cine Play</title>
  <style>@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Space+Grotesk:wght@400;500;600;700&display=swap');

*{margin:0;padding:0;box-sizing:border-box;}
:root{
  --bg:#0a0a0a;--bg2:#111111;--bg3:#1a1a1a;--border:#222;
  --primary:#e53e3e;--primary-dark:#c53030;
  --text:#f0f0f0;--text-muted:#888;--radius:12px;
}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--text);min-height:100vh;}
::-webkit-scrollbar{width:6px;}::-webkit-scrollbar-track{background:var(--bg2);}::-webkit-scrollbar-thumb{background:var(--bg3);border-radius:3px;}

/* LOGIN */
.login-page{min-height:100vh;display:flex;align-items:center;justify-content:center;padding:20px;}
.login-box{background:var(--bg2);border:1px solid var(--border);border-radius:20px;padding:40px;width:100%;max-width:400px;text-align:center;}
.login-logo{width:56px;height:56px;background:var(--primary);border-radius:16px;display:flex;align-items:center;justify-content:center;font-size:28px;margin:0 auto 20px;}
.login-title{font-family:'Space Grotesk',sans-serif;font-size:26px;font-weight:700;margin-bottom:6px;}
.login-sub{color:var(--text-muted);font-size:14px;margin-bottom:28px;}
.login-input{width:100%;padding:12px 16px;background:var(--bg3);border:1px solid var(--border);border-radius:10px;color:var(--text);font-size:15px;outline:none;margin-bottom:12px;}
.login-input:focus{border-color:var(--primary);}
.login-btn{width:100%;padding:13px;background:var(--primary);color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:700;cursor:pointer;transition:background .2s;margin-top:4px;}
.login-btn:hover{background:var(--primary-dark);}
.login-error{color:#f87171;font-size:13px;margin-top:10px;display:none;}
.logout-btn{background:var(--bg3);color:var(--text-muted);border:1px solid var(--border);padding:6px 14px;border-radius:999px;font-size:12px;cursor:pointer;transition:all .2s;}
.logout-btn:hover{color:var(--primary);border-color:var(--primary);}

/* NAVBAR */
.navbar{position:sticky;top:0;z-index:100;background:rgba(10,10,10,.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:0 24px;height:64px;display:flex;align-items:center;justify-content:space-between;gap:16px;}
.logo{display:flex;align-items:center;gap:10px;text-decoration:none;color:var(--text);cursor:pointer;border:none;background:none;}
.logo-icon{width:36px;height:36px;background:var(--primary);border-radius:10px;display:flex;align-items:center;justify-content:center;font-size:18px;}
.logo-text{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;}
.search-wrap{flex:1;max-width:420px;position:relative;}
.search-wrap input{width:100%;padding:8px 16px 8px 40px;background:var(--bg2);border:1px solid var(--border);border-radius:999px;color:var(--text);font-size:14px;outline:none;}
.search-wrap input:focus{border-color:var(--primary);}
.search-icon{position:absolute;left:12px;top:50%;transform:translateY(-50%);opacity:.5;}
.navbar-actions{display:flex;gap:8px;}
.btn-add{background:var(--primary);color:#fff;border:none;padding:8px 18px;border-radius:999px;font-weight:600;font-size:14px;cursor:pointer;display:flex;align-items:center;gap:6px;transition:background .2s;}
.btn-add:hover{background:var(--primary-dark);}
.btn-karaoke{background:var(--bg3);color:var(--text);border:1px solid var(--border);padding:8px 14px;border-radius:999px;font-weight:500;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all .2s;}
.btn-karaoke:hover{border-color:var(--primary);color:var(--primary);}

/* MAIN */
.main{max-width:1280px;margin:0 auto;padding:24px;}

/* HERO */
.hero{position:relative;border-radius:var(--radius);overflow:hidden;height:280px;margin-bottom:24px;}
.hero img{width:100%;height:100%;object-fit:cover;}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(to right,rgba(0,0,0,.85) 0%,rgba(0,0,0,.5) 50%,transparent 100%);}
.hero-content{position:absolute;bottom:0;left:0;padding:32px;}
.hero-label{font-size:11px;text-transform:uppercase;letter-spacing:2px;color:var(--primary);font-weight:700;}
.hero-title{font-family:'Space Grotesk',sans-serif;font-size:clamp(20px,4vw,36px);font-weight:700;margin-top:6px;}

/* CATEGORIES */
.categories{display:flex;gap:8px;overflow-x:auto;padding-bottom:8px;margin-bottom:16px;}
.categories::-webkit-scrollbar{height:0;}
.cat-btn{padding:7px 16px;border-radius:999px;border:none;font-size:13px;font-weight:500;cursor:pointer;transition:all .2s;white-space:nowrap;display:flex;align-items:center;gap:6px;}
.cat-btn.active{background:var(--primary);color:#fff;box-shadow:0 4px 16px rgba(229,62,62,.3);}
.cat-btn:not(.active){background:var(--bg2);color:var(--text-muted);}
.cat-btn:not(.active):hover{color:var(--text);background:var(--bg3);}
.anime-subs{display:flex;gap:6px;padding:0 0 12px 12px;flex-wrap:wrap;}
.anime-sub-btn{padding:5px 14px;border-radius:999px;border:none;font-size:12px;font-weight:500;cursor:pointer;transition:all .2s;}
.anime-sub-btn.active{background:rgba(229,62,62,.8);color:#fff;}
.anime-sub-btn:not(.active){background:var(--bg3);color:var(--text-muted);}
.anime-sub-btn:not(.active):hover{color:var(--text);}

/* GRID */
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;}
.card{background:var(--bg2);border-radius:var(--radius);border:1px solid var(--border);overflow:hidden;cursor:pointer;transition:border-color .2s,transform .2s;}
.card:hover{border-color:rgba(229,62,62,.4);transform:translateY(-2px);}
.card-thumb{position:relative;aspect-ratio:16/9;overflow:hidden;}
.card-thumb img{width:100%;height:100%;object-fit:cover;transition:transform .4s;}
.card:hover .card-thumb img{transform:scale(1.08);}
.card-overlay{position:absolute;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s;}
.card:hover .card-overlay{opacity:1;}
.play-btn{width:52px;height:52px;border-radius:50%;background:rgba(229,62,62,.9);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;}
.badge{position:absolute;top:10px;left:10px;background:rgba(0,0,0,.7);color:#fff;font-size:10px;padding:3px 8px;border-radius:6px;}
.source-badge{position:absolute;top:10px;right:10px;background:rgba(0,0,0,.7);color:#fff;font-size:10px;padding:3px 8px;border-radius:6px;}
.card-body{padding:12px 14px;}
.card-title{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:13px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.card-meta{display:flex;gap:10px;margin-top:6px;font-size:11px;color:var(--text-muted);align-items:center;}
.star{color:#f6c90e;}

/* EMPTY */
.empty{text-align:center;padding:80px 20px;color:var(--text-muted);}

/* MODAL */
.modal-bg{position:fixed;inset:0;background:rgba(0,0,0,.8);display:flex;align-items:center;justify-content:center;z-index:200;padding:20px;}
.modal-bg.hidden{display:none;}
.modal{background:var(--bg2);border:1px solid var(--border);border-radius:16px;width:100%;max-width:520px;padding:28px;max-height:90vh;overflow-y:auto;}
.modal-title{font-family:'Space Grotesk',sans-serif;font-size:20px;font-weight:700;margin-bottom:20px;}
.tabs{display:flex;gap:4px;background:var(--bg3);padding:4px;border-radius:10px;margin-bottom:20px;}
.tab-btn{flex:1;padding:8px;background:none;border:none;color:var(--text-muted);border-radius:8px;font-size:13px;font-weight:500;cursor:pointer;transition:all .2s;}
.tab-btn.active{background:var(--primary);color:#fff;}
.form-group{margin-bottom:14px;}
.form-label{display:block;font-size:12px;color:var(--text-muted);margin-bottom:6px;}
.form-input{width:100%;padding:10px 14px;background:var(--bg3);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:14px;outline:none;}
.form-input:focus{border-color:var(--primary);}
.form-textarea{resize:none;height:80px;}
.form-row{display:grid;grid-template-columns:1fr 1fr;gap:12px;}
.form-select{width:100%;padding:10px 14px;background:var(--bg3);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:14px;outline:none;}
.btn-save{width:100%;padding:12px;background:var(--primary);color:#fff;border:none;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;transition:background .2s;margin-top:8px;}
.btn-save:hover{background:var(--primary-dark);}
.modal-close{float:right;background:none;border:none;color:var(--text-muted);font-size:22px;cursor:pointer;margin-top:-4px;}
.thumb-upload{border:2px dashed var(--border);border-radius:10px;padding:20px;text-align:center;cursor:pointer;transition:all .2s;}
.thumb-upload:hover{border-color:var(--primary);background:rgba(229,62,62,.05);}
.thumb-preview{position:relative;border-radius:10px;overflow:hidden;aspect-ratio:16/9;}
.thumb-preview img{width:100%;height:100%;object-fit:cover;}
.thumb-clear{position:absolute;top:6px;right:6px;background:rgba(0,0,0,.7);border:none;border-radius:50%;width:26px;height:26px;color:#fff;cursor:pointer;font-size:16px;}

/* PLAYER */
.topbar{background:rgba(10,10,10,.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:0 24px;height:52px;display:flex;align-items:center;}
.back-btn{background:none;border:none;color:var(--text-muted);font-size:14px;cursor:pointer;display:flex;align-items:center;gap:8px;transition:color .2s;}
.back-btn:hover{color:var(--text);}
.player-main{max-width:1100px;margin:0 auto;padding:24px;}
.player-wrap{position:relative;width:100%;aspect-ratio:16/9;border-radius:16px;overflow:hidden;background:#000;box-shadow:0 25px 60px rgba(0,0,0,.6);}
.player-wrap iframe,.player-wrap video{width:100%;height:100%;border:none;}
.player-info{margin-top:24px;}
.player-title{font-family:'Space Grotesk',sans-serif;font-size:clamp(18px,3vw,28px);font-weight:700;}
.player-meta{display:flex;flex-wrap:wrap;gap:12px;margin-top:10px;font-size:13px;color:var(--text-muted);align-items:center;}
.player-desc{margin-top:16px;color:var(--text-muted);line-height:1.7;max-width:800px;}
.pill{background:var(--bg3);padding:3px 12px;border-radius:999px;font-size:12px;}

/* KARAOKE PAGE */
.karaoke-header{background:rgba(10,10,10,.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:0 24px;height:64px;display:flex;align-items:center;gap:16px;position:sticky;top:0;z-index:100;}
.karaoke-title{display:flex;align-items:center;gap:10px;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;}
.karaoke-icon{background:rgba(229,62,62,.2);border-radius:8px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;}
.karaoke-search-wrap{flex:1;max-width:500px;position:relative;}
.karaoke-search-wrap input{width:100%;padding:8px 16px 8px 40px;background:var(--bg2);border:1px solid var(--border);border-radius:999px;color:var(--text);font-size:14px;outline:none;}
.karaoke-search-wrap input:focus{border-color:var(--primary);}

@media(max-width:600px){
  .grid{grid-template-columns:repeat(2,1fr);}
  .hero{height:180px;}
  .logo-text{display:none;}
  .form-row{grid-template-columns:1fr;}
  .karaoke-header{gap:8px;}
}</style>
</head>
<body>
  <div id="app"></div>
  <script>// Cine Play — Gerado automaticamente
// SENHA DE ACESSO — altere o valor abaixo para sua senha
const ACCESS_PASSWORD = 'cineplay123';

let videos = [
  {
    "id": "69cefbde847b20be1929356d",
    "title": "O Príncipe do Egito",
    "description": "O filme O Príncipe do Egito (1998) é uma animação épica que adapta o livro bíblico do Êxodo. A história acompanha a vida de Moisés 🧺, que, após ser salvo das águas do Rio Nilo quando bebê, é criado como um príncipe na corte egípcia ao lado de seu irmão de criação, Ramsés 👑.\n\nTudo muda quando Moisés descobre sua verdadeira origem hebraica e recebe um chamado divino para libertar seu povo da escravidão. Isso coloca os dois irmãos em caminhos opostos: de um lado, Moisés, o mensageiro de Deus; do outro, Ramsés, o poderoso Faraó do Egito.",
    "category": "filme",
    "anime_subcategory": "",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1wwEJpVzz-O8wMhbIVtRL1_qdeBLnsoXZ/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/431607532_Gemini_Generated_Image_3l80il3l80il3l80.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69cefa5f043337a58c291140",
    "title": "BATERISTA SINISTRO SHOW  LEDY GAGA",
    "description": "O baterista que roubou a cena no show histórico da Lady Gaga em Copacabana, em maio de 2025, foi o jovem talento Tosh Peterson, conhecido nas redes sociais como Tosh The Drummer 🥁.\n\nEle viralizou rapidamente não só pela sua técnica impecável, mas pela energia explosiva e pelo carisma que demonstrou no palco diante de mais de um milhão de pessoas.\n\nAqui estão alguns fatos interessantes sobre ele:\n\n🌟 Quem é Tosh Peterson?\nIdade e Origem: Natural de Los Angeles, ele tinha apenas 24 anos na época do show.\n\nProdígio: Tosh começou a tocar bateria com apenas 2 anos de idade e iniciou sua carreira em turnês profissionais aos 16 👶.\n\nCurrículo de Peso: Antes de se juntar à banda de Lady Gaga, ele já havia trabalhado com nomes como Machine Gun Kelly, Troye Sivan, Jungkook (do BTS) e Lil Nas X 🎤.\n\n🇧🇷 Passagem pelo Rio de Janeiro\nDurante sua estadia no Brasil, Tosh interagiu bastante com os fãs. Ele foi visto aproveitando as praias cariocas e até comentou nas redes sociais sobre seu desejo de provar uma autêntica feijoada 🍲. No show, sua performance em músicas como \"Bad Romance\" e \"Rain on Me\" foi muito elogiada por manter a pulsação vibrante necessária para um evento daquela magnitude.",
    "category": "musica_ao_vivo",
    "anime_subcategory": "",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1qOLSNSE0gH8tcHs0oCCKM0P57kGhnUdj/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/6875391c5_Gemini_Generated_Image_exm98exm98exm98e.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69cef82e9a8e2a3879775cc3",
    "title": "show do Alok no Réveillon de 2026",
    "description": "O Alok é conhecido por transformar seus shows em experiências sensoriais que vão muito além da música 🎶, utilizando tecnologias como o Laser Mapping e, mais recentemente, drones e inteligência artificial.\n\nAqui estão três caminhos diferentes que podemos seguir para construir essa sinopse:\n\nA Jornada Ancestral Futurista: Focada na fusão de sons de povos originários com batidas de Future Tech. O show seria um manifesto visual sobre a preservação do planeta através da tecnologia verde. 🌳\n\nO Show dos Mil Drones: Uma narrativa centrada em uma coreografia aérea massiva, onde o céu de Copacabana (ou outra sede) se torna uma tela digital viva, contando a história da evolução humana. 🛸\n\nExperiência Multiversal: Uma proposta onde o público físico e o público do metaverso interagem em tempo real, com avatares gigantes projetados em hologramas sobre o mar.",
    "category": "musica_ao_vivo",
    "anime_subcategory": "",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1BmudgnWJShrQifYmwl-2qBlZqM01oeAS/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/acfae2e45_Gemini_Generated_Image_qa2kpyqa2kpyqa2k.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69cef5e0d624ba15bbb2c0a5",
    "title": "LADY GAGA EM COPACABANA 2025",
    "description": "É importante começar com um pequeno ajuste de datas: na verdade, o histórico mega show gratuito da Lady Gaga na Praia de Copacabana aconteceu em 3 de maio de 2025, reunindo cerca de 2,1 milhões de pessoas (o maior público da carreira dela!).\n\nAtualmente, em 2026, o que está agitando os fãs é o retorno dela ao Brasil com a turnê mundial do novo álbum, chamada \"The MAYHEM Ball\", prevista para março e abril deste ano em estádios.\n\nAqui está uma sinopse baseada nesse contexto épico que o Rio viveu:\n\n🌴 Lady Gaga: Gagacabana (O Espetáculo Histórico)\nO Cenário: As areias de Copacabana transformadas em um mar de \"Little Monsters\". Sob o luar do Rio de Janeiro, um palco colossal de tecnologia de ponta foi erguido em frente ao Copacabana Palace.\n\nA Performance: Gaga entregou uma celebração de sua videografia e hits do novo álbum MAYHEM. O show foi marcado por:\n\nModa: Trocas de figurino que homenagearam o Brasil (incluindo o icônico look com as cores da bandeira 🇧🇷).\n\nVoz: Performances emocionantes no piano de cauda, ecoando por toda a orla.\n\nLegado: A quebra do recorde mundial de maior público para uma artista feminina, consolidando sua conexão eterna com os fãs brasileiros.\n\nO Impacto: O evento não foi apenas um show, mas um fenômeno cultural que parou a cidade, gerando bilhões de menções nas redes sociais e eternizando o nome de Gaga no \"Livro de Ouro\" do Rio de Janeiro.",
    "category": "musica_ao_vivo",
    "anime_subcategory": "",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1DwRlCYh9rrWiLTYWSqERNOmxJAsfjUDo/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/80ee856c2_Gemini_Generated_Image_5f3l2d5f3l2d5f3l.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69cef39c07db8015a87a54af",
    "title": "🔪🕺  Chucky: O Rei do Passinho.KKKKKKKKKKKKKKK",
    "description": "Chucky: O Rei do Passinho 🧢\nImagine que o Chucky cansou da vida de vilão de filme de terror e decidiu que seu verdadeiro destino é brilhar nos palcos.\n\nAqui estão três caminhos cômicos que podemos seguir para essa sinopse:\n\nO Influencer de Centavos: Chucky tenta viralizar no TikTok fazendo a \"dança da garrafa\", mas o tamanho das pernas dele dificulta o processo e ele acaba descontando a frustração no ring-light. 📱\n\nRitmo de Vingança: Um musical da Broadway onde os assassinatos são substituídos por duelos de sapateado intensos, e o \"Olha o Chucky vindo aí\" é o hit do verão. 🎭\n\nDe Volta aos Anos 80: Ele invade uma academia de aeróbica usando polainas e tenta provar que um boneco de plástico tem muito mais molejo que qualquer humano de carne e osso. 🏋️‍♂️",
    "category": "videos_engracados",
    "anime_subcategory": "",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/14DyAnKhiiQuBvoxNZK0G65EZO7VyECVO/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/9915767b9_Gemini_Generated_Image_8t8jpo8t8jpo8t8j.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69cef1fc2291c5f77efb55bb",
    "title": "FELOZES E FURIOSO 10 EM ESPANHOL VOCE IRA MORRE DE RIR KKKKKKKKK",
    "description": "Em Velozes e Furiosos 10 (Fast X), o passado retorna para assombrar Dom Toretto e sua família. O filme serve como a primeira parte da conclusão da saga, elevando as apostas com um vilão que não busca apenas poder, mas vingança pessoal.\n\nIrei te ajudar a entender os pontos principais dessa trama e podemos discutir os detalhes através de algumas perguntas guiadas.\n\n🎬 Sinopse de Velozes e Furiosos 10\nApós décadas de missões impossíveis, Dom Toretto (Vin Diesel) enfrenta seu oponente mais letal: Dante Reyes (Jason Momoa). Dante é filho do traficante brasileiro Hernan Reyes, que foi derrotado pela equipe no Rio de Janeiro durante os eventos de Velozes e Furiosos 5.\n\nDante passou doze anos planejando sua vingança, com o objetivo de destruir tudo o que Dom ama. A trama espalha a \"família\" por diversos lugares do mundo — de Roma a Portugal e até a Antártida — enquanto eles tentam sobreviver a um plano mestre que visa fragmentá-los para sempre. 🏎️💥",
    "category": "filme",
    "anime_subcategory": "",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/14YDwXv3kqaF9ipiq4a-lp1_9gXMlXEfy/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/c7f3458be_Gemini_Generated_Image_pya4bypya4bypya4.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69cef122852f12d5d211a205",
    "title": "Velozes e Furiosos 10",
    "description": "Em Velozes e Furiosos 10 (Fast X), o passado retorna para assombrar Dom Toretto e sua família. O filme serve como a primeira parte da conclusão da saga, elevando as apostas com um vilão que não busca apenas poder, mas vingança pessoal.\n\nIrei te ajudar a entender os pontos principais dessa trama e podemos discutir os detalhes através de algumas perguntas guiadas.\n\n🎬 Sinopse de Velozes e Furiosos 10\nApós décadas de missões impossíveis, Dom Toretto (Vin Diesel) enfrenta seu oponente mais letal: Dante Reyes (Jason Momoa). Dante é filho do traficante brasileiro Hernan Reyes, que foi derrotado pela equipe no Rio de Janeiro durante os eventos de Velozes e Furiosos 5.\n\nDante passou doze anos planejando sua vingança, com o objetivo de destruir tudo o que Dom ama. A trama espalha a \"família\" por diversos lugares do mundo — de Roma a Portugal e até a Antártida — enquanto eles tentam sobreviver a um plano mestre que visa fragmentá-los para sempre. 🏎️💥",
    "category": "filme",
    "anime_subcategory": "",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1DIT8TFazBzka0TZp1T6NfO-lkX6rnHYr/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/1a35508f5_Gemini_Generated_Image_tgsldytgsldytgsl.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69ceee7fe23757c8cc12809e",
    "title": "FELIZ ANO NOVO JOÃO GOMES AO VIVO EM COPACABANA 2026",
    "description": "O show de João Gomes em Copacabana foi o grande destaque da virada do Réveillon Rio 2026, consolidando o piseiro 🪗 no maior palco do mundo. Vamos explorar os detalhes dessa apresentação histórica:\n\n📜 Sinopse do Evento\nApós se apresentar na Avenida Paulista em São Paulo, João Gomes voou para o Rio de Janeiro para comandar o Palco Rio, em Copacabana. O show começou logo após a queima de fogos, às 00h12 do dia 1º de janeiro de 2026.\n\nA apresentação foi marcada pela forte identidade nordestina 🌵, transformando a orla em um verdadeiro \"mar de chapéus\".\n\n✨ Destaques da Apresentação\nParticipações Especiais: O cantor dividiu o palco com a cantora Iza 🎤 e o sanfoneiro Mestrinho.\n\nTributos: João prestou uma homenagem a Chico Science cantando \"A Praieira\" e uniu-se à banda Nação Zumbi em um momento especial.\n\nAção com o Público: Sua equipe distribuiu cerca de 20 mil chapéus de vaqueiro 🤠 para os fãs, criando um impacto visual único na areia.\n\nRepertório: Não faltaram sucessos como \"Meu Pedaço de Pecado\" e \"Coração de Vaqueiro\".\n\n📊 O Contexto do Réveillon 2026\nO evento foi oficialmente reconhecido pelo Guinness World Records como o maior réveillon do mundo, atraindo um público estimado de 5 milhões de pessoas em diversos pontos da cidade. No mesmo palco de João Gomes, também se apresentaram nomes como Gilberto Gil, Ney Matogrosso, Belo, Alcione e Alok.",
    "category": "filme",
    "anime_subcategory": "",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1wHVam5zDq1PEEcWv9uf-lzN0uShMWM2F/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/e35122541_Gemini_Generated_Image_fdjp3vfdjp3vfdjp.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69ceed0b06888e49a063bb6c",
    "title": "O HEROI DA FOLHA ",
    "description": "O arco do ataque de Pain à Vila da Folha é considerado um dos pontos altos de Naruto Shippuden. A história foca no confronto entre duas filosofias opostas de paz, enquanto Naruto assume o fardo de proteger seu lar após a perda de seu mestre. 🐸\n\nVou te ajudar a construir essa sinopse! Para começarmos, escolha um desses caminhos para focarmos nos detalhes:\n\nO Nascimento de um Herói: Foco na jornada de amadurecimento do Naruto, saindo do treinamento no Monte Myoboku 🏔️ para salvar a vila e finalmente ser reconhecido por todos.\n\nO Ciclo do Ódio: Foco no debate filosófico entre Naruto e Pain 👁️ sobre o que é a verdadeira justiça e como acabar com a dor no mundo ninja.\n\nA Batalha Épica: Foco na ação, descrevendo os poderes do Rinnegan, a destruição da vila e a transformação da Raposa de Nove Caudas 🦊.",
    "category": "animacao",
    "anime_subcategory": "",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/10iVzOYlhggaGxRPEbEeMGft6PBJoFv97/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/12766822b_Gemini_Generated_Image_k5o824k5o824k5o8.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69cee993ad85cee4f0c82c42",
    "title": "MADARA VS DANZOU FILME",
    "description": "A luta entre Sasuke Uchiha e Danzō Shimura é um dos momentos mais sombrios e intensos da obra, marcada por revelações e um forte desejo de vingança.\n\n📜 Contexto Geral\nO encontro acontece logo após a Reunião dos Cinco Kages. Sasuke, consumido pelo ódio e pela verdade sobre o massacre do clã Uchiha (revelada por Itachi), persegue Danzō, o homem por trás das ordens que destruíram sua família. O palco é a Ponte Samurai, um local isolado que enfatiza o tom de \"duelo de morte\".\n\n👁️ Elementos Centrais da Luta\nIzanagi: A técnica proibida que Danzō usa através dos múltiplos Sharingans em seu braço direito 🦾, permitindo-lhe transformar a realidade em ilusão para escapar da morte.\n\nSusano'o de Sasuke: A evolução da defesa e ataque de Sasuke, que se torna cada vez mais sinistra conforme seu ódio cresce.\n\nO Confronto de Ideologias: De um lado, a visão fria e utilitarista de Danzō sobre o \"mundo ninja\"; do outro, a fúria cega de Sasuke ⚡.",
    "category": "filme",
    "anime_subcategory": "",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1FF4SWDWrw9XtmsLmlRVrHfJ_2dE_oQHC/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/03dc92987_Gemini_Generated_Image_ma7khqma7khqma7k.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69cee825d35bd4b26140a2eb",
    "title": "LADY GAGA - UM NASCEU DE UMA ESTRELA",
    "description": "",
    "category": "filme",
    "anime_subcategory": "",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1GSS00uGtMHNuEawXsED8ViX_yHSCXyqp/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/1554540fc_Gemini_Generated_Image_ftk8c6ftk8c6ftk8.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69cee4f6c5cb55576e317564",
    "title": "madara rindo",
    "description": "",
    "category": "filme",
    "anime_subcategory": "",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/10jECUzhgdp0pMcoEAGfKFUH8xDTYGziJ/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/401882d5b_Gemini_Generated_Image_ww6n9zww6n9zww6n.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c555f755d123e4f47baf50",
    "title": "MADARA RINDO KKKKKKKKKKKKKKKKKKK",
    "description": "",
    "category": "animacao",
    "anime_subcategory": "naruto_shippuden",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/10jECUzhgdp0pMcoEAGfKFUH8xDTYGziJ/view?usp=drive_link",
    "thumbnail_url": "",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c548f42307bc41a089fff7",
    "title": "EXU BARA É NOS KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK",
    "description": "",
    "category": "videos_engracados",
    "anime_subcategory": "",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1BAgdPBELgOhWdSnoFGK5YLNRsRoA83Mv/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/cf642af4a_ChatGPTImage26demarde202611_55_18.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c547b3e93cb35d65e76254",
    "title": "TIO Chucky  Um nome que tira toda a pose de mau dele",
    "description": "",
    "category": "videos_engracados",
    "anime_subcategory": "",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1tGXiLVPI-xbHCf39g9JNm-GyTwytOiqV/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/f9cfe7596_ChatGPTImage26demarde202611_47_47.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  },
  {
    "id": "69c5458c5f7127082da87512",
    "title": "O MEU AVO MORREU FAZENDO LIGAÇÃO DIRETA KKKKKKKKKKK",
    "description": "",
    "category": "videos_engracados",
    "anime_subcategory": "",
    "music_subcategory": "",
    "source": "google_drive",
    "video_url": "https://drive.google.com/file/d/1spzZyZ-ykx75Wlyu_kGID7yKBsiKKp4l/view?usp=drive_link",
    "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/55be0c549_Gemini_Generated_Image_cjxiwucjxiwucjxi.png",
    "year": "",
    "duration": "",
    "rating": 0,
    "is_favorite": false
  }
];
let currentPage = 'home';
let currentCategory = 'all';
let currentAnimeSubcat = '';
let currentMusicSubcat = '';
let currentSearch = '';
let currentKaraokeSearch = '';
let nextId = videos.length + 1;
let currentThumbFile = null;

const catLabels = {
  filme:'Filme', serie:'Série', documentario:'Documentário', animacao:'Anime',
  musica:'Música', comedia:'Comédia', acao:'Ação', musica_ao_vivo:'Ao Vivo',
  videos_engracados:'Engraçado', karaoke:'Karaokê', outro:'Outro'
};
const animeSubLabels = {
  naruto_shippuden:'Naruto Shippuden', dragon_ball:'Dragon Ball', dragon_ball_dime:'Dragon Ball Dime'
};
const musicSubLabels = {
  funk:'Funk', pagode:'Pagode', gospel:'Gospel', pop:'Pop', forro:'Forró', eletronica:'Eletrônica'
};

// ── LOGIN ─────────────────────────────────────────────────────────────────────
function isLoggedIn() { return sessionStorage.getItem('cp_auth') === '1'; }

function renderLogin() {
  document.getElementById('app').innerHTML = `
    <div class="login-page">
      <div class="login-box">
        <div class="login-logo">🎬</div>
        <div class="login-title">Cine Play</div>
        <div class="login-sub">Digite a senha para acessar</div>
        <input class="login-input" type="password" id="loginPass" placeholder="Senha de acesso" onkeydown="if(event.key==='Enter')doLogin()" />
        <button class="login-btn" onclick="doLogin()">Entrar</button>
        <div class="login-error" id="loginError">Senha incorreta. Tente novamente.</div>
      </div>
    </div>
  `;
  setTimeout(() => document.getElementById('loginPass')?.focus(), 100);
}

function doLogin() {
  const val = document.getElementById('loginPass')?.value;
  if (val === ACCESS_PASSWORD) {
    sessionStorage.setItem('cp_auth', '1');
    renderHome();
  } else {
    const err = document.getElementById('loginError');
    if (err) { err.style.display = 'block'; }
  }
}

function doLogout() {
  sessionStorage.removeItem('cp_auth');
  renderLogin();
}

function getThumbnail(v) {
  if (v.thumbnail_url) return v.thumbnail_url;
  if (v.source === 'youtube') {
    const m = v.video_url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/);
    if (m) return 'https://img.youtube.com/vi/' + m[1] + '/hqdefault.jpg';
  }
  return 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80';
}
function getYTId(url) {
  const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/);
  return m ? m[1] : null;
}
function getDriveId(url) {
  const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/);
  return m ? m[1] : null;
}

// ── HOME ──────────────────────────────────────────────────────────────────────
function renderHome() {
  if (!isLoggedIn()) { renderLogin(); return; }
  currentPage = 'home';
  const categories = [
    {key:'all',label:'🎞 Todos'},{key:'favoritos',label:'❤️ Favoritos'},
    {key:'filme',label:'🎬 Filmes'},{key:'serie',label:'📺 Séries'},
    {key:'acao',label:'⚔️ Ação'},{key:'comedia',label:'😂 Comédia'},
    {key:'animacao',label:'✨ Anime'},{key:'musica',label:'🎵 Música'},
    {key:'musica_ao_vivo',label:'🎤 Ao Vivo'},{key:'videos_engracados',label:'😄 Engraçados'},
    {key:'karaoke',label:'🎙 Karaokê'},{key:'documentario',label:'📚 Docs'},
  ];

  document.getElementById('app').innerHTML = `
    <nav class="navbar">
      <button class="logo" onclick="renderHome()">
        <div class="logo-icon">🎬</div><span class="logo-text">Cine Play</span>
      </button>
      <div class="search-wrap">
        <span class="search-icon">🔍</span>
        <input id="searchInput" type="text" placeholder="Buscar..." value="${currentSearch}" oninput="onSearch(this.value)" />
      </div>
      <div class="navbar-actions">
        <button class="btn-karaoke" onclick="renderKaraoke()">🎙 Karaokê</button>
        <button class="btn-add" onclick="openModal()">+ Adicionar</button>
        <button class="logout-btn" onclick="doLogout()">Sair</button>
      </div>
    </nav>
    <div class="main">
      <div id="heroWrap"></div>
      <div class="categories" id="catFilter">
        ${categories.map(c=>`<button class="cat-btn ${currentCategory===c.key?'active':''}" onclick="setCategory('${c.key}')">${c.label}</button>`).join('')}
      </div>
      <div id="subMenuWrap"></div>
      <div id="gridWrap"></div>
    </div>
    <div class="modal-bg hidden" id="modalBg">
      <div class="modal">
        <button class="modal-close" onclick="closeModal()">✕</button>
        <div class="modal-title">Adicionar Vídeo</div>
        <div class="tabs">
          <button class="tab-btn active" id="tabYt" onclick="selectTab('youtube')">▶ YouTube</button>
          <button class="tab-btn" id="tabDrive" onclick="selectTab('google_drive')">◆ Drive</button>
          <button class="tab-btn" id="tabUrl" onclick="selectTab('url_direta')">● URL</button>
        </div>
        <div class="form-group">
          <label class="form-label" id="urlLabel">Cole o link do YouTube</label>
          <input class="form-input" id="videoUrl" placeholder="https://www.youtube.com/watch?v=..." />
        </div>
        <div class="form-group">
          <label class="form-label">Título *</label>
          <input class="form-input" id="videoTitle" placeholder="Nome do filme ou vídeo" />
        </div>
        <div class="form-group">
          <label class="form-label">Descrição</label>
          <textarea class="form-input form-textarea" id="videoDesc" placeholder="Sinopse..."></textarea>
        </div>
        <div class="form-row">
          <div class="form-group">
            <label class="form-label">Categoria</label>
            <select class="form-select" id="videoCat" onchange="onCatChange(this.value)">
              <option value="filme">Filme</option><option value="serie">Série</option>
              <option value="documentario">Documentário</option><option value="animacao">Anime</option>
              <option value="musica">Música</option><option value="comedia">Comédia</option>
              <option value="acao">Ação</option><option value="musica_ao_vivo">Música ao Vivo</option>
              <option value="videos_engracados">Vídeos Engraçados</option>
              <option value="karaoke">Karaokê</option><option value="outro">Outro</option>
            </select>
          </div>
          <div class="form-group">
            <label class="form-label">Ano</label>
            <input class="form-input" id="videoYear" placeholder="2024" />
          </div>
          <div class="form-group">
            <label class="form-label">Duração</label>
            <input class="form-input" id="videoDur" placeholder="1h 30min" />
          </div>
          <div class="form-group">
            <label class="form-label">Nota (0-10)</label>
            <input class="form-input" id="videoRating" type="number" min="0" max="10" step="0.1" />
          </div>
        </div>
        <div id="animeSubWrap" style="display:none" class="form-group">
          <label class="form-label">Série de Anime</label>
          <select class="form-select" id="animeSubcat">
            <option value="">Selecionar...</option>
            <option value="naruto_shippuden">Naruto Shippuden</option>
            <option value="dragon_ball">Dragon Ball</option>
            <option value="dragon_ball_dime">Dragon Ball Dime</option>
          </select>
        </div>
        <div id="musicSubWrap" style="display:none" class="form-group">
          <label class="form-label">Estilo Musical</label>
          <select class="form-select" id="musicSubcat">
            <option value="">Selecionar...</option>
            <option value="funk">Funk</option>
            <option value="pagode">Pagode</option>
            <option value="gospel">Gospel</option>
            <option value="pop">Pop</option>
            <option value="forro">Forró</option>
            <option value="eletronica">Eletrônica</option>
          </select>
        </div>
        <div class="form-group">
          <label class="form-label">Capa do Vídeo</label>
          <div id="thumbSection">
            <label class="thumb-upload" for="thumbFileInput">
              <div style="font-size:32px;margin-bottom:8px">🖼️</div>
              <div style="font-size:14px;color:var(--text-muted)">Clique para enviar uma foto de capa</div>
              <div style="font-size:12px;color:var(--text-muted);margin-top:4px">PNG, JPG, WEBP</div>
            </label>
            <input type="file" id="thumbFileInput" accept="image/*" style="display:none" onchange="handleThumbUpload(this)" />
            <input class="form-input" id="videoThumb" placeholder="Ou cole uma URL de imagem..." style="margin-top:8px" />
          </div>
        </div>
        <button class="btn-save" onclick="saveVideo()">+ Adicionar Vídeo</button>
      </div>
    </div>
  `;
  renderSubMenu();
  renderHero();
  renderGrid();
  document.addEventListener('click', function bgClose(e) {
    const bg = document.getElementById('modalBg');
    if (bg && e.target === bg) closeModal();
  }, {once: false});
}

function handleThumbUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = (e) => {
    currentThumbFile = e.target.result;
    const sec = document.getElementById('thumbSection');
    sec.innerHTML = `
      <div class="thumb-preview">
        <img src="${e.target.result}" />
        <button class="thumb-clear" onclick="clearThumb()">✕</button>
      </div>
    `;
  };
  reader.readAsDataURL(file);
}

function clearThumb() {
  currentThumbFile = null;
  const sec = document.getElementById('thumbSection');
  sec.innerHTML = `
    <label class="thumb-upload" for="thumbFileInput">
      <div style="font-size:32px;margin-bottom:8px">🖼️</div>
      <div style="font-size:14px;color:var(--text-muted)">Clique para enviar uma foto de capa</div>
      <div style="font-size:12px;color:var(--text-muted);margin-top:4px">PNG, JPG, WEBP</div>
    </label>
    <input type="file" id="thumbFileInput" accept="image/*" style="display:none" onchange="handleThumbUpload(this)" />
    <input class="form-input" id="videoThumb" placeholder="Ou cole uma URL de imagem..." style="margin-top:8px" />
  `;
}

function onCatChange(val) {
  document.getElementById('animeSubWrap').style.display = val === 'animacao' ? 'block' : 'none';
  document.getElementById('musicSubWrap').style.display = val === 'musica' ? 'block' : 'none';
}

function renderSubMenu() {
  const w = document.getElementById('subMenuWrap');
  if (!w) return;
  if (currentCategory === 'animacao') {
    const subs = [{key:'',label:'Todos'},{key:'naruto_shippuden',label:'Naruto Shippuden'},{key:'dragon_ball',label:'Dragon Ball'},{key:'dragon_ball_dime',label:'Dragon Ball Dime'}];
    w.innerHTML = '<div class="anime-subs">' + subs.map(s=>`<button class="anime-sub-btn ${currentAnimeSubcat===s.key?'active':''}" onclick="setAnimeSub('${s.key}')">${s.label}</button>`).join('') + '</div>';
  } else if (currentCategory === 'musica') {
    const subs = [{key:'',label:'Todas'},{key:'funk',label:'Funk'},{key:'pagode',label:'Pagode'},{key:'gospel',label:'Gospel'},{key:'pop',label:'Pop'},{key:'forro',label:'Forró'},{key:'eletronica',label:'Eletrônica'}];
    w.innerHTML = '<div class="anime-subs">' + subs.map(s=>`<button class="anime-sub-btn ${currentMusicSubcat===s.key?'active':''}" onclick="setMusicSub('${s.key}')">${s.label}</button>`).join('') + '</div>';
  } else {
    w.innerHTML = '';
  }
}

function setAnimeSub(key) {
  currentAnimeSubcat = key;
  renderSubMenu();
  renderGrid();
}

function setMusicSub(key) {
  currentMusicSubcat = key;
  renderSubMenu();
  renderGrid();
}

function setCategory(cat) {
  currentCategory = cat;
  if (cat !== 'animacao') currentAnimeSubcat = '';
  if (cat !== 'musica') currentMusicSubcat = '';
  if (cat === 'karaoke') { renderKaraoke(); return; }
  renderHome();
}

function onSearch(val) { currentSearch = val; renderHero(); renderGrid(); }

function getFiltered() {
  return videos.filter(v => {
    const ms = !currentSearch || v.title.toLowerCase().includes(currentSearch.toLowerCase());
    let mc;
    if (currentCategory === 'all') mc = true;
    else if (currentCategory === 'favoritos') mc = v.is_favorite;
    else if (currentCategory === 'animacao') {
      mc = v.category === 'animacao';
      if (mc && currentAnimeSubcat) mc = v.anime_subcategory === currentAnimeSubcat;
    } else if (currentCategory === 'musica') {
      mc = v.category === 'musica';
      if (mc && currentMusicSubcat) mc = v.music_subcategory === currentMusicSubcat;
    } else mc = v.category === currentCategory;
    return ms && mc;
  });
}

function renderHero() {
  const w = document.getElementById('heroWrap');
  if (!w) return;
  const f = getFiltered();
  if (currentSearch || currentCategory !== 'all' || !f.length) { w.innerHTML=''; return; }
  const v = f[0];
  w.innerHTML = `<div class="hero"><img src="${getThumbnail(v)}" /><div class="hero-overlay"></div><div class="hero-content"><div class="hero-label">⭐ Em destaque</div><h2 class="hero-title">${v.title}</h2>${v.description?'<p style="margin-top:8px;font-size:14px;opacity:.75;max-width:500px">'+v.description.substring(0,120)+'...</p>':''}</div></div>`;
}

function renderGrid() {
  const w = document.getElementById('gridWrap');
  if (!w) return;
  const f = getFiltered();
  if (!f.length) { w.innerHTML='<div class="empty"><div style="font-size:64px;opacity:.3;margin-bottom:16px">🎬</div><p style="font-size:18px;font-weight:600">Nenhum vídeo encontrado</p></div>'; return; }
  w.innerHTML = '<div class="grid">' + f.map(v=>`
    <div class="card" onclick="playVideo('${v.id}')">
      <div class="card-thumb">
        <img src="${getThumbnail(v)}" alt="${v.title}" loading="lazy" />
        <div class="card-overlay"><button class="play-btn">▶</button></div>
        <span class="badge">${catLabels[v.category]||v.category}${v.anime_subcategory?(' · '+(animeSubLabels[v.anime_subcategory]||''))  :''}</span>
        <span class="source-badge">${v.source==='youtube'?'YouTube':v.source==='google_drive'?'Drive':'URL'}</span>
      </div>
      <div class="card-body">
        <div class="card-title">${v.title}</div>
        <div class="card-meta">
          ${v.year?'<span>'+v.year+'</span>':''}
          ${v.duration?'<span>⏱ '+v.duration+'</span>':''}
          ${v.rating?'<span class="star">★ '+v.rating+'</span>':''}
        </div>
      </div>
    </div>
  `).join('') + '</div>';
}

// ── KARAOKE ───────────────────────────────────────────────────────────────────
function renderKaraoke() {
  currentPage = 'karaoke';
  document.getElementById('app').innerHTML = `
    <div class="karaoke-header">
      <button class="back-btn" onclick="renderHome()">← Voltar</button>
      <div class="karaoke-title">
        <div class="karaoke-icon">🎙</div> Karaokê
      </div>
      <div class="karaoke-search-wrap">
        <span class="search-icon">🔍</span>
        <input type="text" placeholder="Pesquisar músicas de karaokê..." oninput="onKaraokeSearch(this.value)" value="${currentKaraokeSearch}" />
      </div>
    </div>
    <div class="main" id="karaokeGrid"></div>
  `;
  renderKaraokeGrid();
}

function onKaraokeSearch(val) {
  currentKaraokeSearch = val;
  renderKaraokeGrid();
}

function renderKaraokeGrid() {
  const w = document.getElementById('karaokeGrid');
  if (!w) return;
  const list = videos.filter(v => v.category === 'karaoke' && (!currentKaraokeSearch || v.title.toLowerCase().includes(currentKaraokeSearch.toLowerCase())));
  if (!list.length) { w.innerHTML = '<div class="empty"><div style="font-size:64px;opacity:.3;margin-bottom:16px">🎙</div><p style="font-size:18px;font-weight:600">' + (currentKaraokeSearch ? 'Nenhuma música encontrada' : 'Nenhuma música de karaokê adicionada') + '</p></div>'; return; }
  w.innerHTML = '<div class="grid">' + list.map(v=>`
    <div class="card" onclick="playVideo('${v.id}')">
      <div class="card-thumb">
        <img src="${getThumbnail(v)}" alt="${v.title}" loading="lazy" />
        <div class="card-overlay"><button class="play-btn">▶</button></div>
        <span class="badge">🎙 Karaokê</span>
      </div>
      <div class="card-body">
        <div class="card-title">${v.title}</div>
        <div class="card-meta">${v.year?'<span>'+v.year+'</span>':''}</div>
      </div>
    </div>
  `).join('') + '</div>';
}

// ── PLAYER ────────────────────────────────────────────────────────────────────
function playVideo(id) {
  const v = videos.find(x => x.id == id);
  if (!v) return;
  let html = '';
  if (v.source === 'youtube') {
    const ytId = getYTId(v.video_url);
    html = ytId ? '<iframe src="https://www.youtube.com/embed/'+ytId+'?autoplay=1&rel=0" allowfullscreen allow="autoplay;encrypted-media"></iframe>' : '<p style="color:#888;padding:20px">URL inválida</p>';
  } else if (v.source === 'google_drive') {
    const fId = getDriveId(v.video_url);
    html = fId ? '<iframe src="https://drive.google.com/file/d/'+fId+'/preview" allow="autoplay" allowfullscreen></iframe>' : '<p style="color:#888;padding:20px">URL inválida</p>';
  } else {
    html = '<video src="'+v.video_url+'" controls autoplay style="width:100%;height:100%"></video>';
  }
  document.getElementById('app').innerHTML = `
    <div class="topbar"><button class="back-btn" onclick="${currentPage==='karaoke'?'renderKaraoke':'renderHome'}()">← Voltar</button></div>
    <div class="player-main">
      <div class="player-wrap">${html}</div>
      <div class="player-info">
        <h1 class="player-title">${v.title}</h1>
        <div class="player-meta">
          <span class="pill">${catLabels[v.category]||v.category}</span>
          ${v.year?'<span>📅 '+v.year+'</span>':''}
          ${v.duration?'<span>⏱ '+v.duration+'</span>':''}
          ${v.rating?'<span style="color:#f6c90e">★ '+v.rating+'/10</span>':''}
        </div>
        ${v.description?'<p class="player-desc">'+v.description+'</p>':''}
      </div>
    </div>
  `;
}

// ── MODAL ─────────────────────────────────────────────────────────────────────
let currentSource = 'youtube';
function openModal() { document.getElementById('modalBg').classList.remove('hidden'); }
function closeModal() { document.getElementById('modalBg').classList.add('hidden'); currentThumbFile=null; }
function selectTab(src) {
  currentSource = src;
  ['youtube','google_drive','url_direta'].forEach(s => {
    document.getElementById('tab'+(s==='youtube'?'Yt':s==='google_drive'?'Drive':'Url')).classList.toggle('active',s===src);
  });
  const labels = {youtube:['Cole o link do YouTube','https://www.youtube.com/watch?v=...'],google_drive:['Cole o link do Google Drive','https://drive.google.com/file/d/...'],url_direta:['Cole a URL direta','https://exemplo.com/video.mp4']};
  document.getElementById('urlLabel').textContent = labels[src][0];
  document.getElementById('videoUrl').placeholder = labels[src][1];
  document.getElementById('videoUrl').value = '';
}

function saveVideo() {
  const url = document.getElementById('videoUrl').value.trim();
  const title = document.getElementById('videoTitle').value.trim();
  if (!url || !title) { alert('Preencha o título e a URL!'); return; }
  const cat = document.getElementById('videoCat').value;
  const animeEl = document.getElementById('animeSubcat');
  const musicEl = document.getElementById('musicSubcat');
  const video = {
    id: 'local_'+nextId++, title,
    description: document.getElementById('videoDesc').value.trim(),
    category: cat,
    anime_subcategory: cat==='animacao'&&animeEl?animeEl.value:'',
    music_subcategory: cat==='musica'&&musicEl?musicEl.value:'',
    source: currentSource, video_url: url,
    thumbnail_url: currentThumbFile || document.getElementById('videoThumb')?.value?.trim() || '',
    year: document.getElementById('videoYear').value.trim(),
    duration: document.getElementById('videoDur').value.trim(),
    rating: parseFloat(document.getElementById('videoRating').value)||0,
    is_favorite: false
  };
  videos.unshift(video);
  currentThumbFile = null;
  closeModal();
  renderHome();
}

// ── START ─────────────────────────────────────────────────────────────────────
if (isLoggedIn()) { renderHome(); } else { renderLogin(); }</script>
</body>
</html>
