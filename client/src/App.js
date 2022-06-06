import React, { useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { useSelector, useDispatch } from 'react-redux';
import { selectCurrentUser } from './redux/User/user.selector';
import CheckOut from './components/check-out/check-out.com';
import { checkUserSession } from './redux/User/user.action';


const App = () => {
  const currentUser = useSelector(selectCurrentUser);
  const dispatch = useDispatch();

  const unScribeFromAuth = null;

  useEffect(() => {
    dispatch(checkUserSession());

    return () => {
      unScribeFromAuth();
    }
  }, [dispatch])



  // componentDidMount() {

  //   const { checkUserSession } = this.props;
  //   checkUserSession();

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
  // }

  // componentWillUnmount() {
  //   this.unScribeFromAuth();
  // }

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
        <Route exact path='/checkout' component={CheckOut} />
        <Route exact path='/signin'
          render={() => currentUser ? (<Redirect to='/' />) : (<SignInAndSignUpPage />)}
        />
      </Switch>
    </div >
  );
}

// const mapStateToProps = createStructuredSelector({
//   currentUser: selectCurrentUser,
//   // collectionArray: collectionForPreview
// })

// const mapDispatchToProps = dispatch => ({
//   checkUserSession: () => dispatch(checkUserSession())
// })

export default App;