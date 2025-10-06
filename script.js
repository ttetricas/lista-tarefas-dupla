function addTarefa() {
    const inputTitulo = document.getElementById('taskTitle');
    const inputData = document.getElementById('taskDate');

    const titulo = inputTitulo.value.trim();
    const data = inputData.value;

    if(titulo === '' || data === '') {
        alert('Por favor, preencha o título e a data da tarefa.');
        return;
    }

    const tabela = document.getElementById('taskTable').getElementsByTagName('tbody')[0];
    const linha = tabela.insertRow();

    const celTitulo = linha.insertCell(0);
    const celData = linha.insertCell(1);

    celTitulo.textContent = titulo;
    celData.textContent = data;

    inputTitulo.value = '';
    inputData.value = '';
}
