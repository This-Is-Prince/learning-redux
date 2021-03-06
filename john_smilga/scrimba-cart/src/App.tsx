import Navbar from "./components/Navbar";
import CartContainer from "./components/CartContainer";
import store from "./store";
// redux stuff

import { Provider } from "react-redux";

function App() {
  // cart setup
  console.log(store);
  return (
    <Provider store={store}>
      <Navbar />
      <CartContainer />
    </Provider>
  );
}

export default App;
