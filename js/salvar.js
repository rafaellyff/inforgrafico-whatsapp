  var falas = [
    { name: "Oi", tempo: 500 },
    { name: "Tudo bem?", tempo: 1500 },
     { name: "Soube que você é super informado sobre a Universidade Federal do Ceará, que está em vários grupos.", tempo: 5000 },
      { name: "Eu estou fazendo uma pesquisa para o jornal", tempo: 8000 },
      { name: "Você pode me ajudar a conseguir alguns dados e informações?", tempo: 10000 },
  ];

  var pergunta1 = {falas:falas, status: false, resposta: "Sim"  }

    $( document ).ready(function() {
      console.log(pergunta1.falas);
     falas1();
     $("#alert_caixa").hide();
    });
    function inserir(texto){
      var time = hora_mensagem();
    $("<div class='message received'> "+texto+"<span class='metadata'><span class='time'>"+ time+"</span></span></div>").appendTo($('.conversation-container')); 
    }

    function falas1(){
      $.each( falas, function(fala){
        setTimeout(function () { 
          inserir(falas[fala].name);
        }, falas[fala].tempo);

        setTimeout(function () { 
          $(".status").text("online");
        }, 10000);
      });
    }
    
  $( ".input-msg" ).click(function() {
    $(".conversation-container").css("height","60%");
   $("#alert_caixa").show();
  }); 

  $( ".conversation-container" ).click(function() {
    $(".conversation-container").css("height","calc(100% - 68px)");
   $("#alert_caixa").hide();
  });

  function respostabtn(a){
    $(".conversation-container").css("height","calc(100% - 68px)");
    $(".input-msg").val(a);
    $("#alert_caixa").hide();
    $(".send").click();
  }
