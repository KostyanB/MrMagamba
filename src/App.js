import React from 'react';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
import { GlobalStyle } from './Components/Styled/GlobalStyle';
import { NavBar } from './Components/NavBar/NavBar';
import { Menu } from './Components/Menu/Menu';
import { ModalItem } from './Components/Modal/ModalItem';
import { Order } from './Components/Order/Order';
import { useOpenItem } from './Components/Hooks/useOpenItem';
import { useOrders } from './Components/Hooks/useOrders';
import { useAuth } from './Components/Hooks/useAuth';
import { useTitle } from './Components/Hooks/useTitle';


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
  useTitle(openItem.openItem);

  return (
    <>
      <GlobalStyle/>
      <NavBar {...auth}/>
      <Order
        {...orders}
        {...openItem}
        {...auth}
        firebaseDatabase={firebase.database}
        />
      <Menu {...openItem}/>
      { openItem.openItem && <ModalItem {...openItem} {...orders} title={openItem.name}/> } {/*верстка будет если есть openItem*/}
    </>
  );
}

export default App;