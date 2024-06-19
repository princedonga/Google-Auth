import React, { Component } from 'react'
import Login from './Componets/Login'
import { getAuth, createUserWithEmailAndPassword, GoogleAuthProvider ,signInWithPopup } from "firebase/auth";
import Signup from './Componets/Signup'
import app from './Componets/firebase';

const auth = getAuth(app)
const provider = new(GoogleAuthProvider)

export class App extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
      show:false,
      errMessage:""
    };
  }
  showHandler = () => {
    this.setState({
      show:!this.state.show
    })
  }
  regiserSubmitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const repassword = e.target.repassword.value;

    console.log(email,password,repassword);

    if(password !== repassword){
      this.setState({
        errMessage:"Password Don't Match ....!"
      })
    }
    else{
      this.setState({
        errMessage:"Acoount Created ....!",
        show:true
      })
    }
    createUserWithEmailAndPassword(auth, email, password)
    .then((res) =>{
      console.log(res);
    })
    .catch((err) =>{
      console.log(err);
    })
  }
  googleDataHandler = () => {
    signInWithPopup(auth, provider)
    .then((res) =>{
        console.log(res);
    })
    .catch((err) =>{
      console.log(err);
    })
  }
  // facbookDataHandler = () => {
  //   signInWithPopup(auth, provider)
  //   .then((res) =>{
  //       console.log(res);
  //   })
  //   .catch((err) =>{
  //     console.log(err);
  //   })
  // }
  // twitterDataHandler = () => {
  //   signInWithPopup(auth, provider)
  //   .then((res) =>{
  //       console.log(res);
  //   })
  //   .catch((err) =>{
  //     console.log(err);
  //   })
  // }
  render() {
    console.log(this.state);
    return (
      <div className='bg1'>

    
        {this.state.show === false ?
          <Signup show={this.showHandler} submit={this.regiserSubmitHandler} errMessage={this.state.errMessage} google={this.googleDataHandler} ></Signup>:<Login show={this.showHandler} google={this.googleDataHandler}  ></Login>
        }
      
        
      </div>
    )
  }
}

export default App