
import './App.css'
function situacaoAluno (media){
  if(media >= 7){
    return 'Aprovado'
  } else if (media >= 5){
    return 'Recuperação'
  }else{
    return 'Reprovado. Vaza ratão'
  }
}


function App() {
const nome = 'Giovannacutezinha'
const nota1 = 0
const nota2 = 8
const nota3 = 10
const media = (nota1 + nota2 + nota3)/3


  return (
    <> 
      <h1>boletim</h1>
      <p>Aluno: {nome}</p>
      <p>Notas: {nota1}, {nota2}, {nota3} </p>
      <p>Media: {media} </p>
      <p>situação: {situacaoAluno(media)} </p>
    </>
  )
}

export default App
