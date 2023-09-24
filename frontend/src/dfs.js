class Grafo {
    // Cria uma classe Grafo para representar o grafo
    constructor() {
      this.listaDeAdjacencia = new Map(); // Cria uma lista de adjacência privada usando um mapa onde as chaves são os nós (strings) e os valores são listas de vértices vizinhos.
    }
  
    addNo(no) {
    // Adiciona um nó ao grafo.
      if (!this.listaDeAdjacencia.has(no)) { // Verifica se o nó já existe na lista de adjacência.
        this.listaDeAdjacencia.set(no, []); // Se não existir, cria uma entrada com uma lista vazia de vizinhos.
      }
    }
  
    addAresta(primeiroNo, segundoNo) { // Adiciona uma aresta entre dois nós.
     // Verifica se ambos os nós existem na lista de adjacência.
      if (!this.listaDeAdjacencia.has(primeiroNo) || !this.listaDeAdjacencia.has(segundoNo)) {
        throw new Error("nós devem existir no grafo.");
      }
  
      this.listaDeAdjacencia.get(primeiroNo).push(segundoNo); // Adiciona vertice2 à lista de vizinhos de vertice1.
    }
  
    dfs(noDePartida, visitados = new Set()) { // Executa a busca em profundidade a partir de um nó de partida.
      if (!this.listaDeAdjacencia.has(noDePartida)) {
        // Verifica se o nó de partida existe no grafo.
        throw new Error("O nó de partida deve existir no grafo.");
      }
  
      visitados.add(noDePartida);// Marca o nó atual como visitado.
      console.log(noDePartida);// Imprime o nó atual.
  
      for (const vizinho of this.listaDeAdjacencia.get(noDePartida)) {
          // Para cada vizinho não visitado do nó atual.
        if (!visitados.has(vizinho)) {
          this.dfs(vizinho, visitados); // Chama a função de busca em profundidade recursivamente no vizinho não visitado.
        }
      }
      console.log("\n");
    }
    getVertices() {
        return Array.from(this.listaDeAdjacencia.keys());
    }

  }
  function obterVerticesDoGrafo(grafo) {
    return grafo.getVertices();
  }

  // Exemplo de uso
  const grafo = new Grafo();

   // Adiciona nós ao grafo.
  //Semestre 1
  grafo.addNo("Cálculo 1");
  grafo.addNo("Algoritmo de Programação de Computadores");
  grafo.addNo("Desenho Industrial Assistido por Computador");
  grafo.addNo("Engenharia e Ambiente");
  grafo.addNo("Introdução à Engenharia");
  
  //Semestre 2
  grafo.addNo("Cálculo 2");
  grafo.addNo("Física 1");
  grafo.addNo("Física 1 Experimental");
  grafo.addNo("Introdução à Álgebra Linear");
  grafo.addNo("Probabilidade e Estatística Aplicada à Engenharia");
  grafo.addNo("Desenvolvimento de Software");
  
  //Semestre 3
  grafo.addNo("Métodos Numéricos para Engenharia");
  grafo.addNo("Engenhenharia Econômica");
  grafo.addNo("Humanidades e Cidadania");
  grafo.addNo("Teoria da Eletrônica Digital 1");
  grafo.addNo("Prática de Eletrônica Digital 1");
  grafo.addNo("Orientação a Objetos");
  grafo.addNo("Matemática Discreta 1");
  
  //Semestre 4
  grafo.addNo("Gestão da Produção e Qualidade");
  grafo.addNo("Métodos de Desenvolvimento de Software");
  grafo.addNo("Estruturas de Dados 1");
  grafo.addNo("Fundamentos de Arquiteturas de Computadores");
  grafo.addNo("Matemática Discreta 2");
  grafo.addNo("Projeto Integrador de Engenharia 1");
  
  //Semestre 5
  grafo.addNo("Interação Humano Computador");
  grafo.addNo("Requisitos de Software");
  grafo.addNo("Sistemas de Banco de Dados 1");
  grafo.addNo("Fundamentos de Sistemas Operacionais");
  grafo.addNo("Compiladores 1");
  grafo.addNo("Estruturas de Dados 2");
  
  //Semestre 6
  grafo.addNo("Qualidade de Software 1");
  grafo.addNo("Testes de Software");
  grafo.addNo("Arquitetura e Desenho de Software");
  grafo.addNo("Fundamentos de Redes de Computadores");
  grafo.addNo("Sistemas de Banco de Dados 2");
  grafo.addNo("Projeto e Análise de Algoritmos");
  
  //Semestre 7
  grafo.addNo("Técnicas de Programação em Plataformas Emergentes");
  grafo.addNo("Paradigmas de Programação");
  grafo.addNo("Fundamentos de Sistemas Embarcados");
  grafo.addNo("Programação para Sistemas Paralelos e Distribuídos");
  
  //Semestre 8
  grafo.addNo("Engenharia de Produto de Software");
  grafo.addNo("Gerência e Configuração de Evolução de Software");
  grafo.addNo("Estágio Supervisionado");
  
  //Semestre 9
  grafo.addNo("Trabalho de Conclusão do Curso 1");
  grafo.addNo("Projeto Integrador de Engenharia 2");

  //Semestre 10
  grafo.addNo("Trabalho de Conclusão do Curso 2");
  
  
  // Adiciona arestas ao grafo.
  //Semestre 1
  grafo.addAresta("Cálculo 1", "Cálculo 2");
  grafo.addAresta("Cálculo 1", "Probabilidade e Estatística Aplicada à Engenharia");
  grafo.addAresta("Cálculo 1", "Projeto e Análise de Algoritmos");
  grafo.addAresta("Algoritmo de Programação de Computadores", "Orientação a Objetos");
  grafo.addAresta("Algoritmo de Programação de Computadores", "Desenvolvimento de Software");
  grafo.addAresta("Algoritmo de Programação de Computadores", "Estruturas de Dados 1");
  
  //Semestre 2
  grafo.addAresta("Cálculo 2", "Métodos Numéricos para Engenharia");
  grafo.addAresta("Introdução à Álgebra Linear", "Teoria da Eletrônica Digital 1");
  grafo.addAresta("Introdução à Álgebra Linear", "Prática de Eletrônica Digital 1");
  
  //Semestre 3
  grafo.addAresta("Engenhenharia Econômica", "Gestão da Produção e Qualidade");
  grafo.addAresta("Teoria da Eletrônica Digital 1", "Prática de Eletrônica Digital 1"); 
  grafo.addAresta("Prática de Eletrônica Digital 1", "Teoria da Eletrônica Digital 1"); 
  grafo.addAresta("Teoria da Eletrônica Digital 1", "Fundamentos de Arquiteturas de Computadores");
  grafo.addAresta("Prática de Eletrônica Digital 1", "Fundamentos de Arquiteturas de Computadores");
  grafo.addAresta("Orientação a Objetos", "Métodos de Desenvolvimento de Software"); 
  grafo.addAresta("Orientação a Objetos", "Paradigmas de Programação"); 
  grafo.addAresta("Matemática Discreta 1", "Matemática Discreta 2"); 
  
  //Semestre 4
  grafo.addAresta("Métodos de Desenvolvimento de Software", "Interação Humano Computador");
  grafo.addAresta("Métodos de Desenvolvimento de Software", "Requisitos de Software");
  grafo.addAresta("Métodos de Desenvolvimento de Software", "Testes de Software");
  grafo.addAresta("Estruturas de Dados 1", "Compiladores 1");
  grafo.addAresta("Estruturas de Dados 1", "Estruturas de Dados 2");
  grafo.addAresta("Estruturas de Dados 1", "Projeto e Análise de Algoritmos");
  grafo.addAresta("Fundamentos de Arquiteturas de Computadores", "Fundamentos de Sistemas Operacionais");
  grafo.addAresta("Matemática Discreta 2", "Sistemas de Banco de Dados 1");
  grafo.addAresta("Projeto Integrador de Engenharia 1", "Projeto Integrador de Engenharia 2");
  
  //Semestre 5
  grafo.addAresta("Interação Humano Computador", "Qualidade de Software 1");
  grafo.addAresta("Requisitos de Software", "Arquitetura e Desenho de Software");
  grafo.addAresta("Sistemas de Banco de Dados 1", "Sistemas de Banco de Dados 2");
  grafo.addAresta("Fundamentos de Sistemas Operacionais", "Fundamentos de Redes de Computadores");
  grafo.addAresta("Fundamentos de Sistemas Operacionais", "Fundamentos de Sistemas Embarcados");
  grafo.addAresta("Compiladores 1", "Paradigmas de Programação");
  grafo.addAresta("Estruturas de Dados 2", "Programação para Sistemas Paralelos e Distribuídos");
  
  //Semestre 6
  grafo.addAresta("Testes de Software", "Técnicas de Programação em Plataformas Emergentes");
  grafo.addAresta("Testes de Software", "Gerência e Configuração de Evolução de Software");
  grafo.addAresta("Arquitetura e Desenho de Software", "Técnicas de Programação em Plataformas Emergentes");
  grafo.addAresta("Fundamentos de Redes de Computadores", "Programação para Sistemas Paralelos e Distribuídos");

  //Semestre 7
  grafo.addAresta("Técnicas de Programação em Plataformas Emergentes", "Engenharia de Produto de Software");

  //Semestre 9
  grafo.addAresta("Trabalho de Conclusão do Curso 1", "Trabalho de Conclusão do Curso 2");
  
  // console.log("Grafo resultante:");
  // console.log(grafo);
  
  console.log("O fluxo de MDS corresponde a:");
  grafo.dfs("Métodos de Desenvolvimento de Software");