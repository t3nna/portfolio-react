import './sass/main.scss'
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import Main, {MainWithCategories} from "./components/Main";
import {Route, Routes, Outlet} from "react-router-dom";
import Item from "./components/Item";
import NotFound from "./components/NotFound";
import {ThemeContext, ThemeProvider} from "./context/ThemeContext";
import {useContext} from "react";

function App() {
    const {theme} = useContext(ThemeContext)
    return (


        <div className={theme}>

            <div className={'theme-wrapper'}>
                <Routes>
                    <Route element={<Navigation/>}>
                        {/*<Route path={'/'} element={<Navigation/>}>*/}
                        <Route index element={<>

                            <Main/>
                            <Footer/>

                        </>}/>

                        <Route path={'/items/:name'} element={<Item/>}/>
                        <Route path={'/categories'}>
                            <Route path={'desk'} element={<>

                                <MainWithCategories/>
                                <Footer/>

                            </>}/>
                            <Route path={'backpack'} element={<>
                                <MainWithCategories/>
                                <Footer/>
                            </>}/>
                        </Route>

                    </Route>
                    <Route path={'*'} element={<NotFound/>}/>

                </Routes>
            </div>
        </div>

    );
}


export default App;
