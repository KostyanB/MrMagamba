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
import { Context } from './Components/Functions/context';
import styled from 'styled-components';

const firebaseConfig = {
  apiKey: "yourApiKey",
  authDomain: "yourDomain.firebaseapp.com",
  databaseURL: "https://yourDatabaseURL",
  projectId: "yourProjectId",
  storageBucket: "yourStorageBucket",
  messagingSenderId: "yourMessagingSenderId",
  appId: "yourAppId"
};

firebase.initializeApp(firebaseConfig);

const Main = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
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
        <Main>
          <Order/>
          <Menu/>
        </Main>
      {/*верстка будет если условие перед &&*/}
      {openItem.openItem && <ModalItem/>}
      {orderConfirm.openOrderConfirm && <OrderConfirm/>}
      {thanks.openThanks && <Thanks/>}
    </Context.Provider>
  );
}

export default App;