try {
    const listaDeProdutosDiponiveis = [
        "Pao",
        "Leite",
        "Cafe",
        "Laranja",
        "Macarrao",
        "Sabonete",
        "Detergente",
    ];
    
    const listaDeArgumentos = process.argv.slice(2);
    
    /*Produtos que tem na lista*/
    const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDiponiveis.filter(produto =>{
        return listaDeArgumentos.find(argumento => argumento === produto);
    })
    listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nos temos : ${produto}`));
    
    /*Produtos que nao tenho na lista*/
    const listaDeProdutosSolicitadosNaoDisponiveis = listaDeArgumentos.filter(argumento => {
        return !listaDeProdutosDiponiveis.find(produto => produto === argumento);
    })
    listaDeProdutosSolicitadosNaoDisponiveis.forEach(argumento => console.log(`Este produto nao temos : ${argumento}`));
    
    /*Lista de produtos ordenada*/
    listaDeProdutosDiponiveis.sort();
    listaDeProdutosDiponiveis.forEach(produto => console.log(`Este produto esta disponivel : ${produto}`));
    
}catch (e) {
    console.log('Nao foi possivel executar pedido de compra');
}