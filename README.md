<h1>GoBarber APP</h1>

<h2> Estrutura do projeto</h2>
  <p>
  Os componentes react-native encontra-se dentro da pasta src. Na raiz da pasta src, encontramos o arquivo index.js que contém o componente <App /> envolve toda aplicação.
  <p>
<h3>Estrutura lógica das pastas </h3>
<ul>
  <li>components -> Armazena os componentes reutilizáveis da aplicação. Ex: Header.js, Modais e dentre outros. </li>
  <li>services -> Armazena dados de serviços externos , como por exemplo a URL_BASE da api.</li>
  <li>pages -> Armazena as telas do app. Cada tela contém um arquivo index.js e um styles.js</li>
  <li>styles -> Armazena estilos globais da aplicação. </li>
</ul>

<hr>

<h2>Dependências utilizadas</h2>
<p> Os recursos abaixo foram usados para a solução do App.
<ul>
      <li>axios -> cliente http utilizado para realizar as requisições a api.</li>
      <li>prop-types -> utilizado para realiza verificação de tipo em tempo de execução para propriedades(props) React.</li>
      <li>eslint - Foi utilizado para padronizar o projeto com o <i>style guide</i> seguindo as recomendações do airbnb.</li>
      <li>Dentre outros </li>
</ul>
<hr>

<h2>Instruções</h2>
<ul>
    <li>
    Para simular a solução do goBarber app é necessário ter um ambiente bem configurado. Segue a melhor referência de instalação desse ambiente: https://docs.rocketseat.dev/ambiente-react-native/introducao
     </li>
    <li>Na pasta raiz do projeto, execute o comando yarn install.(Tenha o ambiente já configurado) </li>
    <li>Execute o comando react-native run-android(É necessário já ter um emulador rodando)</li>
</ul>
