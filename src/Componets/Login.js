import React, { Component } from 'react'
import './Login.css'


export class Login extends Component {
    render() {
        return (
            <div className=''>
                <div className='container-fluid '>
                    <div className='row '>
                        <div className='set d-block mx-auto my-5 '>
                            <div className=' div-set'>
                                <h3 className='text-center text-white'>Login</h3>
                                <div className=''>
                                    <form>
                                        <div>
                                            <label className='form-label text-white'>E-mail</label>
                                            <input type='emial' className='form-control ' required></input>
                                        </div>
                                        <div>
                                            <label className='form-label text-white'>Password</label>
                                            <input type='password' className='form-control '></input>
                                        </div>
                                        <div>
                                            <h6 className='float-end mt-3 text-white'>Forgot password ?</h6>
                                        </div>
                                    </form>
                                    <div>
                                        <button className='btn1 mt-5 '>LOGIN</button>
                                        <div>
                                        <span onClick={this.props.google}><i className="fa-brands fa-google"></i></span>
                                        <span > <i className="fa-brands fa-facebook"></i></span>
                                        <span ><i className="fa-brands fa-x-twitter"></i></span>
                                        </div>
                                    </div>
                                    <div>
                                        <h6 className='text-center mt-4 text-white'style={{cursor:"pointer"}} onClick={this.props.show}>Or Signup</h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        )
    }
}

export default Login