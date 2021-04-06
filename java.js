var paulo = {
    nome: "Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  
  var rafa = {
    nome: "Rafa",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  
  var alice = {
    nome: "Alice",
    vitorias:0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  
  var lucas = {
    nome: "Lucas",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
  }
  
  var jogadores = [paulo, rafa, alice, lucas]
  
  exibirJogadoresNaTela(jogadores)
  
  function exibirJogadoresNaTela(jogadores){
    var html = ""
    var jogador = ""
    for(var i = 0; i<jogadores.length; i++){
      jogador = jogadores[i]
      jogador.pontos = calculaPontos(jogador)
      html += "<tr><td>" + jogadores[i].nome + "</td>"
      html += "<td>" + jogadores[i].vitorias + "</td>"
      html += "<td>" + jogadores[i].empates + "</td>"
      html += "<td>" + jogadores[i].derrotas + "</td>"
      html += "<td>" + jogadores[i].pontos + "</td>"   
      html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
      html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
    }
      html += "<td><button onClick='adicionarEmpate()'>Empate</button></td>"
    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = html
  }
  
  function adicionarVitoria(indexJogador){
    var jogador = jogadores[indexJogador]
    jogador.vitorias++
    exibirJogadoresNaTela(jogadores)
  }
   
  function adicionarEmpate(){
    for(var i = 0; i<jogadores.length; i++){
       var jogador = jogadores[i]
       jogador.empates++
       exibirJogadoresNaTela(jogadores)
    } 
  }
  
  function adicionarDerrota(indexJogador){
    var jogador = jogadores[indexJogador]
    jogador.derrotas++
    exibirJogadoresNaTela(jogadores)
  }
  
  function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates - jogador.derrotas;
    return pontos
  }
  
  