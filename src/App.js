  import React from 'react';
  import styled from 'styled-components'

  const AppContainer = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    width: 800px;
    margin: auto;
    padding: 30px;
    box-sizing: border-box;
    border: 2px solid green;
    
  `
  const MensagensContainer = styled.div`
    flex-grow: 1;
    padding: 5px;
    display: flex;
    flex-direction: column-reverse;
  `
  const InputContainer = styled.div`
    display: flex;
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px;
  `
  const NomeInput = styled.input`
  width: 150px;
  padding: 5px;
  `
  const MensagensInput = styled.input`
  flex-grow: 1;
  padding: 5px;
  
  `

    class App extends React.Component {
      state = {
        mensagens: [],
        userValue:'',
        mensagensValue:''
      }

      onChangeUserValue= (event) => {
        this.setState({userValue: event.target.value})
      }

      onChangeMensagensValue= (event) => {
        this.setState({mensagensValue: event.target.value})
      }

      enviarMensagem = () => {
        const novaMensagem = {
          user: this.state.userValue,
          texto: this.state.mensagensValue
      }
      console.log(novaMensagem)
      const novaMensagemArray= [novaMensagem,...this.state.mensagens]

      this.setState({mensagens: novaMensagemArray, mensagensValue:''})
        }
        

    render (){
      
      return (
        <AppContainer>
          <MensagensContainer>
            {this.state.mensagens.map((mensagens, index) =>{
              return <p key={index}><strong>{mensagens.user}</strong>: {mensagens.texto}
              </p>

            })}
            
          </MensagensContainer>  
          <InputContainer>
          <NomeInput onChange={this.onChangeUserValue} value={this.state.userValue} placeholder={'Nome'}/>
          <MensagensInput onChange={this.onChangeMensagensValue} value={this.state.mensagensValue} placeholder={'Digite sua mensagem'}/>
          <button onClick={this.enviarMensagem}>Enviar</button>
          </InputContainer>
        </AppContainer>
      );
    }

    }
 

  export default App;