# Sistema de Gerenciamento de Tarefas (TaskHub)

Bem-vindo ao TaskHub, um simples sistema de gerenciamento de tarefas construído em Node.js com o framework Express. Este aplicativo permite que você visualize, adicione e marque tarefas como concluídas.

## Instruções de Execução

Antes de começar, certifique-se de ter o [Node.js](https://nodejs.org/) instalado em seu sistema.

  1. **Clone o repositório:**
    
    git clone https://github.com/lucianoedipo/tm01.git



  2. **Instalar Dependencias:**
    
    cd tm01
    npm install
 

3. **Execute o aplicativo:**
```
    npm start
```
4. **Acesse o aplicativo no navegador:**

Abra o navegador e vá para http://localhost:3000.

## Funcionalidades Principais
### Visualizar Tarefas:
Acesse http://localhost:3000/tasks para ver a lista de tarefas.

### Adicionar Nova Tarefa:
Acesse http://localhost:3000/tasks/add para adicionar uma nova tarefa.

### Detalhes da Tarefa:
Clique em uma tarefa na lista para ver seus detalhes em http://localhost:3000/task/:taskId.

### Marcar Tarefa como Concluída:
Use a API em http://localhost:3000/api/task/:taskId/complete para marcar uma tarefa como concluída.

## Contribuição
Sinta-se à vontade para contribuir para o projeto! Se encontrar problemas ou tiver sugestões, crie uma issue ou envie um pull request.

## Autor
Luciano Édipo

## Licença
Este projeto é licenciado sob a Licença CC0-1.0.