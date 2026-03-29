<script>
  // Função que o Google chama quando a pessoa loga
  function handleCredentialResponse(response) {
    if (response.credential) {
      console.log("Login realizado com sucesso!");
      sessionStorage.setItem('cp_auth', '1'); // Salva que está logado
      renderHome(); // Chama sua função que mostra os filmes
    }
  }

  function renderLogin() {
    document.getElementById('app').innerHTML = `
      <div class="login-page">
        <div class="login-box">
          <div class="logo">🎬</div>
          <div class="title">Cine Play</div>
          
          <div id="g_id_onload"
               data-client_id="COLE_AQUI_SEU_CLIENT_ID_DO_GOOGLE"
               data-callback="handleCredentialResponse"
               data-auto_prompt="false">
          </div>
          
          <div class="g_id_signin" data-type="standard" data-shape="rectangular" data-theme="filled_blue" data-text="signin_with" data-size="large" data-logo_alignment="left"></div>
        </div>
      </div>
    `;
  }

  // Lógica de inicialização
  if (sessionStorage.getItem('cp_auth') === '1') {
    renderHome(); // Se já estiver logado, vai direto
  } else {
    renderLogin(); // Se não, mostra o botão do Google
  }

  // Coloque aqui sua função renderHome() que você já tem com a lista de filmes...
</script>
</body>
</html>
