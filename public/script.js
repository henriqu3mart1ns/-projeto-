const form = document.getElementById('formAluno');
const tabela = document.getElementById('tabelaAlunos');

let alunos = JSON.parse(localStorage.getItem('alunos')) || [];

mostrarAlunos();

form.addEventListener('submit', function(event) {

    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const nota1 = Number(document.getElementById('nota1').value);
    const nota2 = Number(document.getElementById('nota2').value);

    const media = (nota1 + nota2) / 2;

    let situacao = '';

    if (media >= 6) {
        situacao = 'Aprovado';
    }
    else if (media >= 2) {
        situacao = 'Exame Final';
    }
    else {
        situacao = 'Reprovado';
    }

    const aluno = {
        nome,
        nota1,
        nota2,
        media: media.toFixed(1),
        situacao
    };

    alunos.push(aluno);

    localStorage.setItem('alunos', JSON.stringify(alunos));

    mostrarAlunos();

    form.reset();

});

function mostrarAlunos() {

    tabela.innerHTML = '';

    alunos.forEach(aluno => {

        tabela.innerHTML += `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.nota1}</td>
                <td>${aluno.nota2}</td>
                <td>${aluno.media}</td>
                <td>${aluno.situacao}</td>
            </tr>
        `;
    });

}