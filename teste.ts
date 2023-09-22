class Grafo {
    // Crie uma classe Grafo para representar o grafo
    private listaDeAdjacencia: Map<string, string[]>; // Crie uma lista de adjacência privada usando um mapa onde as chaves são os vértices (strings) e os valores são listas de vértices vizinhos.
  
    constructor() {
      // O construtor inicializa a lista de adjacência como um novo mapa vazio.
      this.listaDeAdjacencia = new Map();
    }
  
    adicionarVertice(vertice: string) {
      // Adicione um vértice ao grafo.
      if (!this.listaDeAdjacencia.has(vertice)) {
        // Verifique se o vértice já existe na lista de adjacência.
        this.listaDeAdjacencia.set(vertice, []); // Se não existir, crie uma entrada com uma lista vazia de vizinhos.
      }
    }
  
    adicionarAresta(vertice1: string, vertice2: string) {
      // Adicione uma aresta entre dois vértices.
      if (!this.listaDeAdjacencia.has(vertice1) || !this.listaDeAdjacencia.has(vertice2)) {
        // Verifique se ambos os vértices existem na lista de adjacência.
        throw new Error("Vértices devem existir no grafo.");
      }
  
      this.listaDeAdjacencia.get(vertice1)!.push(vertice2); // Adicione vertice2 à lista de vizinhos de vertice1.
    }
    
  }
  
  // Exemplo de uso
  const grafo = new Grafo();
  
  // Adicione vértices ao grafo.
  //Semestre 1
  grafo.adicionarVertice("Cálculo 1");
  grafo.adicionarVertice("Algoritmo de Programação de Computadores");
  grafo.adicionarVertice("Desenho Industrial Assistido por Computador");
  grafo.adicionarVertice("Engenharia e Ambiente");
  grafo.adicionarVertice("Introdução à Engenharia");
  
  //Semestre 2
  grafo.adicionarVertice("Cálculo 2");
  grafo.adicionarVertice("Física 1");
  grafo.adicionarVertice("Física 1 Experimental");
  grafo.adicionarVertice("Introdução à Álgebra Linear");
  grafo.adicionarVertice("Probabilidade e Estatística Aplicada à Engenharia");
  grafo.adicionarVertice("Desenvolvimento de Software");
  
  //Semestre 3
  grafo.adicionarVertice("Métodos Numéricos para Engenharia");
  grafo.adicionarVertice("Engenhenharia Econômica");
  grafo.adicionarVertice("Humanidades e Cidadania");
  grafo.adicionarVertice("Teoria da Eletrônica Digital 1");
  grafo.adicionarVertice("Prática de Eletrônica Digital 1");
  grafo.adicionarVertice("Orientação a Objetos");
  grafo.adicionarVertice("Matemática Discreta 1");
  
  //Semestre 4
  grafo.adicionarVertice("Gestão da Produção e Qualidade");
  grafo.adicionarVertice("Métodos de Desenvolvimento de Software");
  grafo.adicionarVertice("Estruturas de Dados 1");
  grafo.adicionarVertice("Fundamentos de Arquiteturas de Computadores");
  grafo.adicionarVertice("Matemática Discreta 2");
  grafo.adicionarVertice("Projeto Integrador de Engenharia 1");
  
  //Semestre 5
  grafo.adicionarVertice("Interação Humano Computador");
  grafo.adicionarVertice("Requisitos de Software");
  grafo.adicionarVertice("Sistemas de Banco de Dados 1");
  grafo.adicionarVertice("Fundamentos de Sistemas Operacionais");
  grafo.adicionarVertice("Compiladores 1");
  grafo.adicionarVertice("Estruturas de Dados 2");
  
  //Semestre 6
  grafo.adicionarVertice("Qualidade de Software 1");
  grafo.adicionarVertice("Testes de Software");
  grafo.adicionarVertice("Arquitetura e Desenho de Software");
  grafo.adicionarVertice("Fundamentos de Redes de Computadores");
  grafo.adicionarVertice("Sistemas de Banco de Dados 2");
  grafo.adicionarVertice("Projeto e Análise de Algoritmos");
  
  //Semestre 7
  grafo.adicionarVertice("Técnicas de Programação em Plataformas Emergentes");
  grafo.adicionarVertice("Paradigmas de Programação");
  grafo.adicionarVertice("Fundamentos de Sistemas Embarcados");
  grafo.adicionarVertice("Programação para Sistemas Paralelos e Distribuídos");
  
  //Semestre 8
  grafo.adicionarVertice("Engenharia de Produto de Software");
  grafo.adicionarVertice("Gerência e Configuração de Evolução de Software");
  grafo.adicionarVertice("Projeto Integrador de Engenharia 2");
  
  //Semestre 9
  grafo.adicionarVertice("Trabalho de Conclusão do Curso 1");
  grafo.adicionarVertice("Trabalho de Conclusão do Curso 2");
  
  
  // Adicione arestas ao grafo.
  //Semestre 1
  grafo.adicionarAresta("Cálculo 1", "Cálculo 2");
  grafo.adicionarAresta("Cálculo 1", "Probabilidade e Estatística Aplicada à Engenharia");
  grafo.adicionarAresta("Cálculo 1", "Projeto e Análise de Algoritmos");
  grafo.adicionarAresta("Algoritmo de Programação de Computadores", "Orientação a Objetos");
  grafo.adicionarAresta("Algoritmo de Programação de Computadores", "Desenvolvimento de Software");
  grafo.adicionarAresta("Algoritmo de Programação de Computadores", "Estruturas de Dados 1");
  
  //Semestre 2
  grafo.adicionarAresta("Cálculo 2", "Métodos Numéricos para Engenharia");
  grafo.adicionarAresta("Introdução à Álgebra Linear", "Teoria da Eletrônica Digital 1");
  grafo.adicionarAresta("Introdução à Álgebra Linear", "Prática de Eletrônica Digital 1");
  
  //Semestre 3
  grafo.adicionarAresta("Engenhenharia Econômica", "Gestão da Produção e Qualidade");
  grafo.adicionarAresta("Teoria da Eletrônica Digital 1", "Prática de Eletrônica Digital 1"); 
  grafo.adicionarAresta("Prática de Eletrônica Digital 1", "Teoria da Eletrônica Digital 1"); 
  grafo.adicionarAresta("Teoria da Eletrônica Digital 1", "Fundamentos de Arquiteturas de Computadores");
  grafo.adicionarAresta("Prática de Eletrônica Digital 1", "Fundamentos de Arquiteturas de Computadores");
  grafo.adicionarAresta("Orientação a Objetos", "Métodos de Desenvolvimento de Software"); 
  grafo.adicionarAresta("Orientação a Objetos", "Paradigmas de Programação"); 
  grafo.adicionarAresta("Matemática Discreta 1", "Matemática Discreta 2"); 
  
  //Semestre 4
  grafo.adicionarAresta("Métodos de Desenvolvimento de Software", "Interação Humano Computador");
  grafo.adicionarAresta("Métodos de Desenvolvimento de Software", "Requisitos de Software");
  grafo.adicionarAresta("Métodos de Desenvolvimento de Software", "Testes de Software");
  grafo.adicionarAresta("Estruturas de Dados 1", "Compiladores 1");
  grafo.adicionarAresta("Estruturas de Dados 1", "Estruturas de Dados 2");
  grafo.adicionarAresta("Estruturas de Dados 1", "Projeto e Análise de Algoritmos");
  grafo.adicionarAresta("Fundamentos de Redes de Computadores", "Fundamentos de Sistemas Operacionais");
  grafo.adicionarAresta("Matemática Discreta 2", "Sistemas de Banco de Dados 1");
  
  //Semestre 5
  grafo.adicionarAresta("Interação Humano Computador", "Qualidade de Software 1");
  grafo.adicionarAresta("Requisitos de Software", "Arquitetura e Desenho de Software");
  grafo.adicionarAresta("Sistemas de Banco de Dados 1", "Sistemas de Banco de Dados 2");
  grafo.adicionarAresta("Fundamentos de Sistemas Operacionais", "Fundamentos de Redes de Computadores");
  grafo.adicionarAresta("Fundamentos de Sistemas Operacionais", "Fundamentos de Sistemas Embarcados");
  grafo.adicionarAresta("Compiladores 1", "Paradigmas de Programação");
  grafo.adicionarAresta("Estruturas de Dados 2", "Programação para Sistemas Paralelos e Distribuídos");
  
  //grafo.adicionarAresta("C1", "C2");
  console.log("Grafo resultante:");
  console.log(grafo);
  
  // console.log("Busca em profundidade a partir do vértice 'C1':");
  //grafo.buscaEmProfundidade("C1"); // Execute a busca em profundidade a partir do vértice 'C1' e imprima os vértices visitados.
  