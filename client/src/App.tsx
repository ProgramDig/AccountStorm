import "materialize-css";
import "./App.css";
import useAppSelector from "./hooks/useAppSelector.hook";
import useRoutesHook from "./hooks/useRoutes.hook";
import { useAuth } from "./hooks/useAuth.hook";
import { AuthContext } from "./context/auth.context";
import NavBar from "./components/Navbar";
import Footer from "./components/Footer";


const App = () => {
  const user = useAppSelector(state => state.user);
  const routes = useRoutesHook(user.role);
  const { login, logout } = useAuth();
  const token = useAppSelector(state => state.token.accessToken);

  return (
    <AuthContext.Provider value={{ login, logout }}>
      {!!token && <NavBar />}
      {routes}
      {!!token && <Footer />}
    </AuthContext.Provider>
  );
};

export default App;
