var arr = [ "henchman", "woman", "duel", "rowdies", "indio", "bank", "cowboy" ];
var sel = [];
var vdp = 0;
var pl = 0;
var p = "";

function audio(song){
	var myAudio = document.getElementsByTagName('audio')[song];
	myAudio.play();
}

$('area').click(function() {
	$("#abre").hide();
	p = $(this).attr('alt');
	var s = $.inArray(p, sel);
	if(s==-1){
		audio(0);
		$("#questoes #pergunta").html("<img src='img/"+p+".png'>");
		$("#questoes").fadeIn("slow");
	}
	return false; 
});

function selecionaResposta(rp) {
	content(p,rp);
}

function content(p,r) {
	var f = $.inArray(p, arr);
	if(f!=-1){
		if(r==="mito"){
			audio(3);
			f = f+1;
			$("#questoes #pergunta").html("");
			$("#questoes").hide();
			$("#resp"+f).css({"visibility":"visible","opacity":0}).animate({opacity:1}, 800,function(){$("#pistoleiro").hide();});
			placar();
			sel.push(p.toString());
		} else {
			audio(4);
			tiraVidas(p);
		}
	} else {
		if(r==="verdade"){
			$("#questoes #pergunta").html("");
			$("#questoes").hide();
			sel.push(p.toString());
			audio(5);
		} else {
			audio(4);
			tiraVidas(p);
		}
	}
};

function tiro(p,c) {
	$("#tiro").css("display","block");
	$("#questoes").hide();
	$("#sangrento").show();
	$("#sangrento #continuar").click(function() {
		$("#sangrento, #tiro").hide();
		if(!c){audio(1);$("#falha").show();$("#cartas, #respostas, #ferimentos").hide();}
	});
};

function tiraVidas(p) {
	vdp = vdp + 1;
	$("#bala"+vdp).show();
	c = (vdp==3) ? false : true;
	tiro(p,c);
};

function placar() {
	pl = pl + 1;
	cf = (pl>6) ? false : true;
	$("#pistoleiro").show();
	$("#ferimentos #tiro"+pl).show();
	if(!cf){audio(2);$("#sucesso").fadeIn("slow");}
};

function reiniciar() {
	window.location.reload();
};

$("#alternativas #mito").mouseenter(function(){
	$(this).css({"cursor":"pointer","width":"232px","height":"52px","float":"left","display":"inline-block","background-image":"url('img/hover_bt_questoes.png')","background-position":"-272px -6px","background-repeat":"no-repeat"});
});

$("#alternativas #mito").mouseout(function(){
	$(this).css({"cursor":"pointer","width":"232px","height":"52px","float":"left","display":"inline-block","background":"none"});
});

$("#alternativas #verdade").mouseenter(function(){
	$(this).css({"cursor":"pointer","width":"232px","height":"52px","float":"left","display":"inline-block","background-image":"url('img/hover_bt_questoes.png')","background-position":"-520px -6px","background-repeat":"no-repeat"});
});

$("#alternativas #verdade").mouseout(function(){
	$(this).css({"cursor":"pointer","width":"232px","height":"52px","float":"left","display":"inline-block","background":"none"});
});

$("#sangrento #continuar").mouseenter(function(){
	$(this).css({"cursor":"pointer","width":"227px","height":"47px","background-image":"url('img/hover_bt_continuar.png')","background-position":"-8px -7px","background-repeat":"no-repeat"});
});

$("#sangrento #continuar").mouseout(function(){
	$(this).css({"cursor":"pointer","width":"227px","height":"47px","background":"none"});
});

$("#sucesso .recomecar").mouseenter(function(){
	$(this).css({"cursor":"pointer","width":"239px","height":"59px","margin":"0 auto","display":"inline-block","background-image":"url('img/hover_bt_jogar-novamente2.png')","background-position":"0 0","background-repeat":"no-repeat"});
});

$("#sucesso .recomecar").mouseout(function(){
	$(this).css({"cursor":"pointer","width":"239px","height":"59px","margin":"0 auto","display":"inline-block","background-image":"url('img/bt_jogar-novamente.png')","background-position":"0 0","background-repeat":"no-repeat"});
});

$("#falha .recomecar").mouseenter(function(){
	$(this).css({"cursor":"pointer","width":"232px","height":"55px","margin-left":"388px","display":"inline-block","background-image":"url('img/hover_bt_jogar-novamente.png')","background-position":"-5px -4px","background-repeat":"no-repeat"});
});

$("#falha .recomecar").mouseout(function(){
	$(this).css({"cursor":"pointer","width":"232px","height":"55px","margin-left":"388px","display":"inline-block","background":"none"});
});