import React from "react";
import { Switch, Route, withRouter, Redirect } from "react-router-dom";
import { connect } from "react-redux"
import Homepage from "../components/Homepage"
import AuthForm from "../components/AuthForm"
import { authUser } from "../store/actions/auth"
import { removeError } from "../store/actions/errors"
import withAuth from "../hocs/withAuth"
import MessageForm from "../containers/MessageForm"

const Main = props => {
    const { authUser, errors, removeError, currentUser } = props
    console.log("MAIN CURRENT USER:", currentUser);
    return(
        <div className="container">
            <Switch>
                <Route exact path="/" render={props=> {
                    return(
                        <Homepage {...props} currentUser={currentUser}/>
                    )
                }}/>
                 <Route exact path="/signin" render={props=> {
                    return(
                        <AuthForm
                            removeError={removeError}
                            errors={errors}  
                            onAuth={authUser} 
                            buttonText="Log In" 
                            header="Welcome Back!" 
                            {...props} />
                    )
                }}/>
                 <Route exact path="/signup" render={props=> {
                    return(
                        <AuthForm
                            removeError={removeError} 
                            onAuth={authUser}
                            errors={errors} 
                            signup 
                            buttonText="Sign me up!" 
                            header="Join Warbler today." 
                            {...props} />
                    )
                }}/>
                <Route 
                    path="/users/:id/messages/new" 
                    component={withAuth(MessageForm)}/>
            </Switch>
        </div>
    )
}

function mapStateToProps(state){
    return{
        currentUser: state.currentUser,
        errors: state.errors
    };
}

// function mapDispatchToProps(){
//     return {
//         authUser
//     }
// }

export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main))


// test user
// name: John
// email: test2@mail.com
// pword: 123123


// test user
// name: Mike
// email: test3@mail.com
// pword: 321321