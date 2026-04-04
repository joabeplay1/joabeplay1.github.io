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
.btn-chat{background:var(--bg3);color:var(--text);border:1px solid var(--border);padding:8px 14px;border-radius:999px;font-weight:500;font-size:13px;cursor:pointer;display:flex;align-items:center;gap:6px;transition:all .2s;text-decoration:none;}
.btn-chat:hover{border-color:#4ade80;color:#4ade80;}
.card-actions{display:flex;gap:6px;margin-top:6px;}
.btn-edit{background:none;border:1px solid var(--border);color:var(--text-muted);border-radius:6px;padding:4px 10px;font-size:11px;cursor:pointer;transition:all .2s;flex:1;}
.btn-edit:hover{border-color:var(--primary);color:var(--primary);}
.btn-delete{background:none;border:1px solid var(--border);color:var(--text-muted);border-radius:6px;padding:4px 10px;font-size:11px;cursor:pointer;transition:all .2s;flex:1;}
.btn-delete:hover{border-color:#ef4444;color:#ef4444;}
.btn-delete.confirm{background:#ef4444;color:#fff;border-color:#ef4444;}
.main{max-width:1280px;margin:0 auto;padding:24px;}
.hero{position:relative;border-radius:var(--radius);overflow:hidden;height:280px;margin-bottom:24px;}
.hero img{width:100%;height:100%;object-fit:cover;}
.hero-overlay{position:absolute;inset:0;background:linear-gradient(to right,rgba(0,0,0,.85) 0%,rgba(0,0,0,.5) 50%,transparent 100%);}
.hero-content{position:absolute;bottom:0;left:0;padding:32px;}
.hero-label{font-size:11px;text-transform:uppercase;letter-spacing:2px;color:var(--primary);font-weight:700;}
.hero-title{font-family:'Space Grotesk',sans-serif;font-size:clamp(20px,4vw,36px);font-weight:700;margin-top:6px;}
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
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(200px,1fr));gap:16px;}
.card{background:var(--bg2);border-radius:var(--radius);border:1px solid var(--border);overflow:hidden;cursor:pointer;transition:border-color .2s,transform .2s;}
.card:hover{border-color:rgba(229,62,62,.4);transform:translateY(-2px);}
.card-thumb{position:relative;aspect-ratio:16/9;overflow:hidden;}
.card-thumb img,.card-thumb video{width:100%;height:100%;object-fit:cover;transition:transform .4s;}
.card-thumb iframe{width:100%;height:100%;border:none;pointer-events:none;}
.card:hover .card-thumb img,.card:hover .card-thumb video{transform:scale(1.08);}
.card-overlay{position:absolute;inset:0;background:rgba(0,0,0,.6);display:flex;align-items:center;justify-content:center;opacity:0;transition:opacity .3s;}
.card:hover .card-overlay{opacity:1;}
.play-btn{width:52px;height:52px;border-radius:50%;background:rgba(229,62,62,.9);border:none;cursor:pointer;display:flex;align-items:center;justify-content:center;}
.badge{position:absolute;top:10px;left:10px;background:rgba(0,0,0,.7);color:#fff;font-size:10px;padding:3px 8px;border-radius:6px;}
.source-badge{position:absolute;top:10px;right:10px;background:rgba(0,0,0,.7);color:#fff;font-size:10px;padding:3px 8px;border-radius:6px;}
.card-body{padding:12px 14px;}
.card-title{font-family:'Space Grotesk',sans-serif;font-weight:600;font-size:13px;line-height:1.4;display:-webkit-box;-webkit-line-clamp:2;-webkit-box-orient:vertical;overflow:hidden;}
.card-meta{display:flex;gap:10px;margin-top:6px;font-size:11px;color:var(--text-muted);align-items:center;}
.star{color:#f6c90e;}
.empty{text-align:center;padding:80px 20px;color:var(--text-muted);}
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
.karaoke-header{background:rgba(10,10,10,.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:0 24px;height:64px;display:flex;align-items:center;gap:16px;position:sticky;top:0;z-index:100;}
.karaoke-title{display:flex;align-items:center;gap:10px;font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;}
.karaoke-icon{background:rgba(229,62,62,.2);border-radius:8px;width:32px;height:32px;display:flex;align-items:center;justify-content:center;}
.karaoke-search-wrap{flex:1;max-width:500px;position:relative;}
.karaoke-search-wrap input{width:100%;padding:8px 16px 8px 40px;background:var(--bg2);border:1px solid var(--border);border-radius:999px;color:var(--text);font-size:14px;outline:none;}
.karaoke-search-wrap input:focus{border-color:var(--primary);}
.tools-header{background:rgba(10,10,10,.85);backdrop-filter:blur(16px);border-bottom:1px solid var(--border);padding:0 24px;height:64px;display:flex;align-items:center;gap:16px;position:sticky;top:0;z-index:100;}
.tools-title{font-family:'Space Grotesk',sans-serif;font-weight:700;font-size:18px;}
.tools-tabs{display:flex;gap:6px;margin-bottom:24px;}
.tool-tab{padding:8px 20px;border-radius:999px;border:1px solid var(--border);background:var(--bg2);color:var(--text-muted);font-size:13px;font-weight:500;cursor:pointer;transition:all .2s;}
.tool-tab.active{background:var(--primary);color:#fff;border-color:var(--primary);}
.tool-section{display:none;}.tool-section.active{display:block;}
.tool-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;}
.tool-label{font-size:12px;color:var(--text-muted);margin-bottom:6px;text-transform:uppercase;letter-spacing:.5px;}
.tool-textarea{width:100%;height:200px;background:var(--bg3);border:1px solid var(--border);border-radius:10px;color:var(--text);font-size:14px;padding:12px;outline:none;resize:none;font-family:'Inter',sans-serif;}
.tool-textarea:focus{border-color:var(--primary);}
.tool-select{padding:8px 14px;background:var(--bg3);border:1px solid var(--border);border-radius:8px;color:var(--text);font-size:13px;outline:none;cursor:pointer;}
.tool-select:focus{border-color:var(--primary);}
.btn-tool{padding:10px 20px;background:var(--primary);color:#fff;border:none;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;transition:background .2s;display:flex;align-items:center;gap:8px;}
.btn-tool:hover{background:var(--primary-dark);}
.btn-tool:disabled{opacity:.5;cursor:not-allowed;}
.btn-copy{padding:8px 16px;background:var(--bg3);color:var(--text-muted);border:1px solid var(--border);border-radius:8px;font-size:13px;cursor:pointer;transition:all .2s;}
.btn-copy:hover{color:var(--text);border-color:var(--primary);}
.calc-display{background:rgba(0,0,0,.4);border-radius:16px;padding:16px;text-align:right;min-height:80px;display:flex;flex-direction:column;justify-content:flex-end;margin-bottom:16px;}
.calc-expr{font-size:13px;color:var(--text-muted);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.calc-result{font-size:32px;font-weight:700;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;}
.calc-btns{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;max-width:320px;margin:0 auto;}
.calc-btn{height:56px;border-radius:12px;border:none;font-size:18px;font-weight:700;cursor:pointer;transition:all .15s;background:var(--bg2);color:var(--text);}
.calc-btn:hover{background:var(--bg3);}
.calc-btn:active{transform:scale(.95);}
.calc-btn.op{background:rgba(229,62,62,.2);color:var(--primary);}
.calc-btn.op:hover{background:rgba(229,62,62,.35);}
.calc-btn.eq{background:var(--primary);color:#fff;box-shadow:0 4px 16px rgba(229,62,62,.3);}
.calc-btn.eq:hover{background:var(--primary-dark);}
.calc-btn.cl{background:var(--bg3);color:var(--text-muted);}
.iframe-wrap{width:100%;height:calc(100vh - 64px);border:none;}
@media(max-width:600px){.grid{grid-template-columns:repeat(2,1fr);}.hero{height:180px;}.logo-text{display:none;}.form-row{grid-template-columns:1fr;}.karaoke-header{gap:8px;}}</style>
</head>
<body>
  <div id="app"></div>
  <script>
const ACCESS_PASSWORD = 'cineplay123';
const MINHA_CHAVE_IA = "AIzaSyD16h0dRFmM5pzpCw78mnODpUSOX1tTRjQ";

let videos = [
  { "id": "69d0c2d756c1c1c7d0ddc006", "title": "kkkk", "description": "kkkkkkkkkkkkkkkkkkk", "category": "videos_engracados", "source": "google_drive", "video_url": "https://drive.google.com/file/d/14DyAnKhiiQuBvoxNZK0G65EZO7VyECVO/view?usp=drive_link", "thumbnail_url": "https://drive.google.com/file/d/14DyAnKhiiQuBvoxNZK0G65EZO7VyECVO/view?usp=drive_link", "is_favorite": false },
  { "id": "69cf1d8a996c2ac213eba74d", "title": " Bom Samaritano ( PLAYBACK LEGENDADO ) Anderson Freire", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/Y94NtSWj0Bc?si=TyDmseTdfuu5TPiT", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/69b7098dc_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf1d40368a5b5998f055a0", "title": "Me Atraiu - Gabriela Rocha (Karaokê Version)", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/QTM8Tjqu1HQ?si=NxvrNZRrXUSGYxh1", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/fdc046ebf_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf1cdf3547a8ec8b8d8693", "title": " Kailane Frauches | Passa Lá em Casa Jesus [Playback com Letra]", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/k2gW5rsiWfg?si=6A8CTkbadbYboMc0", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/9992e4935_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf1c587ecaff565bbae1b0", "title": " Todavia me alegrarei - Samuel Messias (playback)", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/JVkt_SEUMZ8?si=9PVaMBO30ZgEeoDV", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/8311e19f1_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf1bb5368a5b5998f05522", "title": " Gisele Nascimento - Janelas da Alma - PLAYBACK COM LETRA", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/r8_rPrfkAGg?si=HSVgManP6FDpk6C1", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/31d032f36_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf1b3dd825090cf73b5260", "title": "Não Quero Dinheiro - Tim Maia - Karaokê", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/5eJwf_k68r8?si=XvTG1aVOH0o-j1LQ", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/4979de327_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf199029d46921c0121772", "title": "AMANHA - SORRISO MAROTO - KARAOKE COMPLETO", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/nbCAn-c8yFQ?si=KXDK8rabZa_ABh4v", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/0f1286a3b_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf1934416dcf44c4b09322", "title": " Quando a Chuva Passar - Ivete Sangalo (Karaokê Version)", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/gF73KklLX6M?si=dZ1YkVEZ2buvzkCI", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/455566c7f_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf18c56cdc7176ad66e124", "title": " Karaokê 🎤 Belo - Reinventar", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/aKw9BXdmHtc?si=04gWja4QVgMoE9VH", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/7f560a2fc_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf183b0382acf524d66a52", "title": "Hackearam-me - Tierry, Marília Mendonça (Karaokê Version)", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/j82J4PvifUE?si=wvnekaS64yvZ-CaO", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/9255e43fb_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf17d7ed4e2061aa570071", "title": " Claudinho e Buchecha - Nosso Sonho (Versão Karaokê)", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/44vcvQuMCss?si=8gj9LZkAMqcXcEpo", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/3769a16e5_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf17709247f402c0d175de", "title": "Karaokê Pirata e Tesouro - Ferrugem", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/i8u6JeVf7w4?si=wCttaIDlZv2VkY8M", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/dfc84ea3d_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf1728e5dc26dd56f0d55c", "title": " PRA VOCÊ ACREDITAR - Ferrugem (KARAOKÊ ", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/Ng279I0FZPY?si=isQP1Gprwz-JOMpE", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/db6538071_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf16955051b42496ba47ca", "title": " Karaokê Nem de Graça - Pixote", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/_B3K7nA0En0?si=xiltR0vpyUOVOlI5", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/79a6eee91_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf164a743f4751049a6994", "title": " Karaokê Insegurança - Pixote", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/k86d4MlpDOY?si=sos1ulDDr70y2WbS", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/0e55d95ad_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf15e8d44fa0f5b387ae96", "title": " Karaokê 🎤 Mumuzinho - Fulminante", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/7VCAORj5Oi0?si=PWsZoKUhC3l08qTj", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/5f96d1229_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf158222072833cf407491", "title": " Sorriso Maroto - Disfarca (Versão Karaokê)", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/TNdQ10aPBLk?si=7NX-ctWJgPbS_vm6", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/0ac4e6842_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false },
  { "id": "69cf14a9fbcdb8a763a5851f", "title": " Karaokê 🎤 Sorriso Maroto - Sinais", "category": "karaoke", "source": "youtube", "video_url": "https://youtu.be/-PNiuEp1vCE?si=sPq_xwIxXqjTLV8u", "thumbnail_url": "https://base44.app/api/apps/69c40e1fd9cca13236f6ac8c/files/mp/public/69c40e1fd9cca13236f6ac8c/6b6228e32_Gemini_Generated_Image_v5fxl9v5fxl9v5fx.png", "is_favorite": false }
];

let currentPage = 'home';
let currentCategory = 'all';
let currentAnimeSubcat = '';
let currentMusicSubcat = '';
let currentSearch = '';
let currentKaraokeSearch = '';
let nextId = videos.length + 1;
let currentThumbFile = null;
let editingId = null;

const catLabels = { filme:'Filme', serie:'Série', documentario:'Documentário', animacao:'Anime', musica:'Música', comedia:'Comédia', acao:'Ação', musica_ao_vivo:'Ao Vivo', videos_engracados:'Engraçado', karaoke:'Karaokê', outro:'Outro' };
const animeSubLabels = { naruto_shippuden:'Naruto Shippuden', dragon_ball:'Dragon Ball', dragon_ball_dime:'Dragon Ball Dime' };
const musicSubLabels = { funk:'Funk', pagode:'Pagode', gospel:'Gospel', pop:'Pop', forro:'Forró', eletronica:'Eletrônica' };

function isLoggedIn() { return sessionStorage.getItem('cp_auth') === '1'; }
function renderLogin() {
  document.getElementById('app').innerHTML = `<div class="login-page"><div class="login-box"><div class="login-logo">🎬</div><div class="login-title">Cine Play</div><div class="login-sub">Digite a senha para acessar</div><input class="login-input" type="password" id="loginPass" placeholder="Senha" onkeydown="if(event.key==='Enter')doLogin()" /><button class="login-btn" onclick="doLogin()">Entrar</button><div class="login-error" id="loginError">Senha incorreta.</div></div></div>`;
}
function doLogin() { if (document.getElementById('loginPass')?.value === ACCESS_PASSWORD) { sessionStorage.setItem('cp_auth', '1'); renderHome(); } else { document.getElementById('loginError').style.display = 'block'; } }
function doLogout() { sessionStorage.removeItem('cp_auth'); renderLogin(); }

function getThumbnail(v) {
  if (v.thumbnail_url && !isVideoThumb(v.thumbnail_url)) return v.thumbnail_url;
  if (v.source === 'youtube') { const m = v.video_url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/); if (m) return 'https://img.youtube.com/vi/' + m[1] + '/hqdefault.jpg'; }
  return 'https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600&q=80';
}
function isVideoThumb(url) { if (!url) return false; return /\.(mp4|mov|webm|avi|mkv)(\?|$)/i.test(url) || url.includes('drive.google.com'); }
function getDriveEmbedUrl(url) { const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/); return m ? 'https://drive.google.com/file/d/' + m[1] + '/preview?autoplay=1&mute=1' : url; }
function getThumbHtml(v) { const t = v.thumbnail_url; if (!t || !isVideoThumb(t)) return '<img src="' + getThumbnail(v) + '" loading="lazy" style="width:100%;height:100%;object-fit:cover" />'; if (t.includes('drive.google.com')) return '<iframe src="' + getDriveEmbedUrl(t) + '" style="width:100%;height:100%;border:none;pointer-events:none" allow="autoplay"></iframe>'; return '<video src="' + t + '" autoplay muted loop playsinline style="width:100%;height:100%;object-fit:cover"></video>'; }
function getYTId(url) { const m = url.match(/(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([^&?\s]+)/); return m ? m[1] : null; }
function getDriveId(url) { const m = url.match(/\/d\/([a-zA-Z0-9_-]+)/); return m ? m[1] : null; }

function renderHome() {
  if (!isLoggedIn()) { renderLogin(); return; }
  currentPage = 'home';
  const categories = [{key:'all',label:'🎞 Todos'},{key:'favoritos',label:'❤️ Favoritos'},{key:'filme',label:'🎬 Filmes'},{key:'serie',label:'📺 Séries'},{key:'animacao',label:'✨ Anime'},{key:'musica',label:'🎵 Música'},{key:'karaoke',label:'🎙 Karaokê'}];
  document.getElementById('app').innerHTML = `<nav class="navbar"><button class="logo" onclick="renderHome()"><div class="logo-icon">🎬</div><span class="logo-text">Cine Play</span></button><div class="search-wrap"><input id="searchInput" type="text" placeholder="Buscar..." oninput="onSearch(this.value)" /></div><div class="navbar-actions"><button class="btn-karaoke" onclick="renderFerramentas()">🔧 Ferramentas</button><button class="btn-karaoke" onclick="renderKaraoke()">🎙 Karaokê</button><button class="btn-add" onclick="openModal()">+ Adicionar</button><button class="logout-btn" onclick="doLogout()">Sair</button></div></nav><div class="main"><div id="heroWrap"></div><div class="categories">${categories.map(c=>`<button class="cat-btn ${currentCategory===c.key?'active':''}" onclick="setCategory('${c.key}')">${c.label}</button>`).join('')}</div><div id="gridWrap"></div></div><div class="modal-bg hidden" id="modalBg"><div class="modal"><button class="modal-close" onclick="closeModal()">✕</button><div class="form-group"><label class="form-label">URL Vídeo</label><input class="form-input" id="videoUrl" /></div><div class="form-group"><label class="form-label">Título</label><input class="form-input" id="videoTitle" /></div><button class="btn-save" onclick="saveVideo()">Salvar</button></div></div>`;
  renderGrid();
}
function setCategory(cat) { currentCategory = cat; renderHome(); }
function onSearch(val) { currentSearch = val; renderGrid(); }
function renderGrid() {
  const f = videos.filter(v => (currentCategory === 'all' || v.category === currentCategory) && (!currentSearch || v.title.toLowerCase().includes(currentSearch.toLowerCase())));
  document.getElementById('gridWrap').innerHTML = `<div class="grid">${f.map(v=>`<div class="card"><div class="card-thumb" onclick="playVideo('${v.id}')">${getThumbHtml(v)}</div><div class="card-body"><div class="card-title">${v.title}</div></div></div>`).join('')}</div>`;
}

function renderFerramentas() {
  currentPage = 'ferramentas';
  document.getElementById('app').innerHTML = `<div class="tools-header"><button class="back-btn" onclick="renderHome()">← Voltar</button><div class="tools-title">Ferramentas</div></div><div class="main"><div class="tools-tabs"><button class="tool-tab active" onclick="switchTool('corretor')">✏️ Corretor</button></div><div id="toolSection">${renderCorretorHTML()}</div></div>`;
}

function renderCorretorHTML() {
  return `<div><h2>Corretor de Texto IA</h2><select class="tool-select" id="corrLang"><option value="pt">Português</option><option value="en">Inglês</option></select><div class="tool-grid"><div><textarea class="tool-textarea" id="corrInput" placeholder="Escreva aqui..."></textarea><button class="btn-tool" id="btnCorr" onclick="corrigirTexto()">Corrigir</button></div><div><textarea class="tool-textarea" id="corrOutput" readonly></textarea></div></div></div>`;
}

async function corrigirTexto() {
    const input = document.getElementById('corrInput')?.value?.trim();
    if(!input) return;
    const btn = document.getElementById('btnCorr');
    const out = document.getElementById('corrOutput');
    const langMap = {pt:'Português', en:'Inglês'};
    const lang = langMap[document.getElementById('corrLang')?.value || 'pt'];

    btn.disabled = true; btn.textContent = '⏳...';
    out.value = 'Processando...';

    try {
        const resp = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${MINHA_CHAVE_IA}`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ contents: [{ parts: [{ text: `Corrija este texto em ${lang}. Retorne apenas o texto corrigido: ${input}` }] }] })
        });
        const data = await resp.json();
        out.value = data.candidates[0].content.parts[0].text;
    } catch(e) { out.value = 'Erro na API.'; }
    btn.disabled = false; btn.textContent = 'Corrigir';
}

function playVideo(id) {
  const v = videos.find(x => x.id == id);
  let html = v.source === 'youtube' ? `<iframe src="https://www.youtube.com/embed/${getYTId(v.video_url)}?autoplay=1" allowfullscreen allow="autoplay"></iframe>` : `<video src="${v.video_url}" controls autoplay></video>`;
  document.getElementById('app').innerHTML = `<div class="topbar"><button class="back-btn" onclick="renderHome()">← Voltar</button></div><div class="player-main"><div class="player-wrap">${html}</div><h1>${v.title}</h1></div>`;
}

function openModal() { document.getElementById('modalBg').classList.remove('hidden'); }
function closeModal() { document.getElementById('modalBg').classList.add('hidden'); }
function saveVideo() {
  const v = { id: Date.now(), title: document.getElementById('videoTitle').value, video_url: document.getElementById('videoUrl').value, category: 'filme', source: 'youtube' };
  videos.unshift(v); closeModal(); renderHome();
}

if (isLoggedIn()) renderHome(); else renderLogin();
  </script>
</body>
</html>
