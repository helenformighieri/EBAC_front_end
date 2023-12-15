class Livro {
    constructor(titulo, autor){
        this.titulo = titulo;
        this.autor = autor;
    }

    exibirDetalher(){
        throw new Error("Método abstrato")
    }
    
}

class LivroFisico extends Livro{
    constructor(titulo, autor, peso){
        super(titulo, autor);
        this.peso = peso;
    }

    exibirDetalhes(){
        console.log(`Livro Físico - Título: ${this.titulo}, Autor: ${this.autor}, Peso: ${this.peso}`)
    }

    calculaFrete(){
        return this.peso * 0.1;
    }
}

class Ebook extends Livro{
    constructor(titulo, autor, formato){
        super(titulo, autor);
        this.formato = formato;
    }

    exibirDetalhes(){
        console.log(`Ebook - Título: ${this.titulo}, Autor: ${this.autor}, Formato: ${this.formato}`)
    }

    abrir(){
        console.log(`Abrindo o eBook no formato ${this.formato} `)
    }
}

const LivroFisico1 = new LivroFisico("A Menina que Roubava Livros", "Markus Zusak", 1.4);
const LivroFisico2 = new LivroFisico("Enraizados", "Naomi Novik", 1.3);
const ebook1 = new Ebook("Um Cântico de Natal", "Charles Dickens", "Epub");

LivroFisico1.exibirDetalhes();
LivroFisico2.exibirDetalhes();
ebook1.exibirDetalhes();


