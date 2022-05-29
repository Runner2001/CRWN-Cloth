import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from './redux/User/user.selector';
import CheckOut from './components/check-out/check-out.com';


class App extends React.Component {

  unScribeFromAuth = null;


  componentDidMount() {

    // this.unScribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    //   if (userAuth) {
    //     const userRef = await createUserProfileDocument(userAuth);

    //     onSnapshot(userRef, snapshot => {
    //       setCurrentUser({
    //         id: snapshot.id,
    //         ...snapshot.data()
    //       })
    //     })
    //   }
    //   else {
    //     setCurrentUser(userAuth)
    //   }
    //   //add shop data to firestore
    //   // addCollectionAndDoc('collections', collectionArray.map(({ title, items }) => ({ title, items })));
    // })
  }

  componentWillUnmount() {
    this.unScribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route exact path='/checkout' component={CheckOut} />
          <Route exact path='/signin'
            render={() => this.props.currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}
          />
        </Switch>
      </div >
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  // collectionArray: collectionForPreview
})


export default connect(mapStateToProps)(App);