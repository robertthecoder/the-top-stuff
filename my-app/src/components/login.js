import React, { Component } from 'react';
import { Jumbotron, Grid, Row, Col } from 'react-bootstrap';

export default class login extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <div className="rightContainer">
                <Jumbotron className="jumbo">
                    <h1>The Top Stuff</h1>
                    <hr/>
                    <p>Already have an account? Sign-in below!</p>
                    <p>Don't have an account? No problem! Sign-up below!</p>
                </Jumbotron>

                <Grid className="container">
                    <Row>
                    	<Col sm="5">
	                        <form>
							  <div className="loginForm">
							    <h3>Register</h3>
							    <p>Create an account below.</p>
							    <hr/>

							    <label for="email"><b>Email</b></label>
							    <br/>
							    <input type="text" placeholder="Enter Email" name="email" required />
							    <br/>
							    <label for="username"><b>Username</b></label>
							    <br/>
							    <input type="password" placeholder="Enter Username" name="username" required />
							    <br/>
							    <label for="pass"><b>Password</b></label>
							    <br/>
							    <input type="password" placeholder="Enter Password" name="pass" required />
							    <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>
							    <button type="submit" className="registerbtn">Register</button>
							  </div>
							</form>
						</Col>

						<Col sm="2">
							<div className="lilUziVert"></div>
						</Col>

						<Col sm="5">
	              <form>
  							  <div className="loginForm">
  							    <h3>Sign-in</h3>
  							    <p>Already a member? Sign-in below.</p>
  							    <hr/>

  							    <label for="email"><b>Email</b></label>
  							    <br/>
  							    <input type="text" placeholder="Enter Email" name="email" required />
  							    <br/>
  							    <label for="pass"><b>Password</b></label>
  							    <br/>
  							    <input type="password" placeholder="Enter Password" name="pass" required />

  							    <hr/>
  							    <button type="submit" className="registerbtn">Login</button>
  							  </div>
  							</form>
						</Col>

						<br/>
                    </Row>
                </Grid>

            </div>
        );
    }
}
