# Curso sobre o universo Angular 📚 👩🏻‍💻
### Curso completo sobre os fundamentos e aplicações do framework Angular, iniciando pela sua base.
#### Curso ministrado pelo: Felipe Aguiar 👨🏻‍🏫

### Sobre o curso 📜

O curso tem o intuito de abordar conceitos fundamentais do Angular de maneira completa e detalhada de forma lúdica, 
e para uma melhor compreenssão do framework há uma breve apresentação de: HTML, CSS, JS e TS. O curso discute 
conceitos de estruturação de páginas webs, estilização, e o desenvolvimento de web components. Além disso, é 
explicado de maneira detalhada o funcionamento do AngularJS.  

### Ferramentas 🛠️

  * Visual Studio Code
  * Node

## Instalando o typescript localmente 📥
### Comandos:

```bash
  //Cria um projeto node na raiz d0 projeto : package.json
  npm init -y
```

```bash
  //Instala o typescript localmente no projeto
  npm install typescript -D
```
```bash
  //Transforma um arquivo com extensão ts em js 
  npx tsc caminho_do_arquivo_ts
```
```bash
  //Criando o arquivo tsconfig
  npx tsc --init
```
```json
  /* Campos editados: comando que passa a pasta onde o tsconfig deve acessar para fazer as alterações --> pasta src */
  "rootDir": "./nome_da_pasta"
```
```json
  /* Define a pasta de saída --> build */
  "outDir": "./nome_da_pasta"
```
```bash
  //Comando que aciona as coonfigurações d0 tsconfig
  npx tsc
```
```bash
  //Comando que roda a aplicação depois da junção dos comandos npx tsc && node
  npm run start
```
