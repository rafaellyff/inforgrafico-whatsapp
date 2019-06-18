var pergunta_atual = "";
var responder = "";

$( document ).ready(function() {
  $("#caixa_respostas").hide();
  perguntaAtual();
  if( historico()){
    escreverFalas(pergunta_atual.falas);
  }
});


function historico(){
  if ("conversa" in localStorage) {
    var conversation = $('.conversation-container');
    conversation.html(localStorage.getItem("conversa"));
    $('.conversation-container').animate({scrollTop: $('.conversation-container')[0].scrollHeight}, 500);
    responder = true;

    return false;
  }
  return true;
}
$( "#sair" ).click(function() {
  var conversation = $('.conversation-container');
  localStorage.setItem("conversa", conversation.html());
});


function perguntaAtual(){
    if ("pergunta" in localStorage) {
    switch (localStorage.getItem("pergunta")){
      case "1":
        pergunta_atual = pergunta_1;
        break;
      case "2":
        pergunta_atual = pergunta_2;
        break;
      case "3":
        pergunta_atual = pergunta_3;
        break;
      case "4":
        pergunta_atual = pergunta_4;
        break;
      case "5":
        pergunta_atual = pergunta_5;
        break;
      case "6":
        pergunta_atual = pergunta_6;
        break;
      case "7":
        pergunta_atual = pergunta_7;
        break;
    }
  } else{
    localStorage.setItem("pergunta", 1);
    pergunta_atual = pergunta_1;
  };
}

function respostaBtn(a){
  $(".conversation-container").css("height","calc(100% - 68px)");
  $(".input-msg").val(a);
  $("#caixa_respostas").hide();
  $(".send").click();
  analisarResposta(a);
}


function escreverFalas(msg){
  $(".status").text("digitando...");
  responder = false;
  
  $.each( msg, function(fala){
    setTimeout(function () { 
      inserir(msg[fala].texto);
    }, msg[fala].tempo);
  });
  setTimeout(function () { 
    $(".status").text("online");
    if (pergunta_atual.numero != 7) {
      responder = true;
    }
  }, msg[msg.length - 1].tempo);
}

function inserir(texto){
  var time = hora_mensagem();
  $("<div class='message received'> "+texto+"<span class='metadata'><span class='time'>"+ time+"</span></span></div>").appendTo($('.conversation-container')); 
  $('.conversation-container').animate({scrollTop: $('.conversation-container')[0].scrollHeight}, 500);
}

function analisarResposta(resposta){
  var time = hora_mensagem();
  $(".status").text("digitando...");
  if (resposta == pergunta_atual.resposta) {

    if (pergunta_atual.tipo == "Sticker") {
      setTimeout(function () { 
        $("<div class='message received'> "+pergunta_atual.msg_certo+"<span class='metadata'><span class='time'>"+ time+"</span></span></div>").appendTo($('.conversation-container'));  
      }, 2000);    
      setTimeout(function () { 
        $("<div class='msg-sticker'><img src='images/stickers/"+pergunta_atual.sticker_certo+"'><p class='hora'>"+time+"</p></div>").appendTo($('.conversation-container')); 
        $(".status").text("online");
        $('.conversation-container').animate({scrollTop: $('.conversation-container')[0].scrollHeight}, 500);
      }, 4000);
    } else {
      setTimeout(function () { 
        $("<div class='message received'> "+pergunta_atual.msg_certo+"<span class='metadata'><span class='time'>"+ time+"</span></span></div>").appendTo($('.conversation-container'));  
        $(".status").text("online");
        $('.conversation-container').animate({scrollTop: $('.conversation-container')[0].scrollHeight}, 500);
      }, 2000);    
    }
    
    localStorage.setItem("pergunta", pergunta_atual.numero+1);
    if (localStorage.getItem("pergunta") <= 7) {
      proximaPergunta();
    }  
    responder = false;
  } else {
    if (pergunta_atual.tipo == "Sticker") {
      setTimeout(function () { 
        $("<div class='message received'> "+pergunta_atual.msg_errado+"<span class='metadata'><span class='time'>"+ time+"</span></span></div>").appendTo($('.conversation-container')); 
      }, 2000);    
      setTimeout(function () { 
       $("<div class='msg-sticker'><img src='images/stickers/"+pergunta_atual.sticker_errado+"'><p class='hora'>"+time+"</p></div>").appendTo($('.conversation-container')); 
        $(".status").text("online");
        $('.conversation-container').animate({scrollTop: $('.conversation-container')[0].scrollHeight}, 500);
      }, 4000);
    } else {
      setTimeout(function () { 
        $("<div class='message received'> "+pergunta_atual.msg_errado+"<span class='metadata'><span class='time'>"+ time+"</span></span></div>").appendTo($('.conversation-container')); 
        $(".status").text("online");
        $('.conversation-container').animate({scrollTop: $('.conversation-container')[0].scrollHeight}, 500);
      }, 2000);
    }
    responder = true;
  }
}

$( ".input-msg" ).click(function() {
  if (responder) {
    $(".conversation-container").css("height","60%");
    $("#caixa_respostas").show();
    caixaResposta();
  }
}); 

 $( ".input-msg" ).keyup(function() {
  if (responder) {
    $(".conversation-container").css("height","60%");
    $("#caixa_respostas").show();
  }
}); 

$( ".conversation-container" ).click(function() {
  $(".conversation-container").css("height","calc(100% - 68px)");
  $("#caixa_respostas").hide();
});

function caixaResposta(){
  $("#1").hide();
  $("#2").hide();
  $("#3").hide();
  $("#4").hide();
  $("#5").hide();
  $("#6").hide();
  $("#"+pergunta_atual.numero).show();
}

function proximaPergunta(){
  setTimeout(function () { 
    perguntaAtual();
    escreverFalas(pergunta_atual.falas);
  }, 10000);
}