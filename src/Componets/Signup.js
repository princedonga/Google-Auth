import React, { Component } from 'react'

export class Signup extends Component {
    constructor(props) {
        super(props)

        this.props = props
    }
    render() {
        return (
            <div>
                <div className='container-fluid '>
                    <div className='row '>
                        <div className='set d-block mx-auto my-5 '>
                            <div className=' div-set'>
                                <h3 className='text-center text-white'>Sign Up</h3>
                                <p className='text-white'>{this.props.errMessage}</p>
                                <div className=''>
                                    <form onSubmit={this.props.submit}>
                                        <div>
                                            <label className='form-label text-white'>E-mail</label>
                                            <input type='email' className='form-control ' name="email"></input>
                                        </div>
                                        <div>
                                            <label className='form-label text-white'>Password</label>
                                            <input type='password' className='form-control ' name="password"></input>
                                        </div>
                                        <div>
                                            <label className='form-label text-white'>Repet Password</label>
                                            <input type='password' className='form-control ' name="repassword"></input>
                                        </div>
                                        <div>
                                            <button type='submit' className='btn1 mt-5 '>CREATE ACCOUNT</button>
                                        </div>
                                    </form>

                                    <div>
                                        <span onClick={this.props.google}><i className="fa-brands fa-google"></i></span>
                                        <span > <i className="fa-brands fa-facebook"></i></span>
                                        <span ><i className="fa-brands fa-x-twitter"></i></span>
                                    </div>
                                    <div>
                                        <h6 className='text-center mt-4 text-white' style={{ cursor: "pointer" }} onClick={this.props.show}>You Have alredy account ?</h6>
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

export default Signup