import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { OrderConfirm } from './Components/Order/OrderConfirm';
import { Thanks } from './Components/Order/Thanks';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';
import { useOrderConfirm } from './Components/Hooks/useOrderConfirm';
import { useThanks } from './Components/Hooks/useThanks';
import { Context } from './Components/Functions/context'

const firebaseConfig = {
  apiKey: "AIzaSyB01WzjQ2NOa3yW-6lofRB1xDcEu5-pQ-U",
  authDomain: "mrmagamba.firebaseapp.com",
  databaseURL: "https://mrmagamba-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "mrmagamba",
  storageBucket: "mrmagamba.appspot.com",
  messagingSenderId: "1069543412935",
  appId: "1:1069543412935:web:2a8f5046979020db591ae2"
};

firebase.initializeApp(firebaseConfig);

function App() {
  const auth = useAuth(firebase.auth);
  const openItem = useOpenItem();
  const orders = useOrders();
  const orderConfirm = useOrderConfirm();
  const thanks = useThanks();
  useTitle(openItem.openItem);

  return (
    <Context.Provider value={{
      auth,
      openItem,
      orders,
      orderConfirm,
      thanks,
      firebaseDatabase: firebase.database,
    }}>
      <GlobalStyle/>
      <NavBar/>
      <Order/>
      <Menu/> {/*верстка будет если условие перед &&*/}
      {openItem.openItem && <ModalItem/>}
      {orderConfirm.openOrderConfirm && <OrderConfirm/>}
      {thanks.openThanks && <Thanks/>}
    </Context.Provider>
  );
}

export default App;