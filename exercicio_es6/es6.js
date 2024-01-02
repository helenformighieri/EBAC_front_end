const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Carlos', nota: 7 },
    { nome: 'Ana', nota: 9 },
    { nome: 'Pedro', nota: 4 }
];

const filtrarAlunosAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
};

const alunosAprovados = filtrarAlunosAprovados(alunos);
console.log(alunosAprovados);
