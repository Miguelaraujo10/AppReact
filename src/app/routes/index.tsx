import { Route, Routes as Switch,BrowserRouter, Navigate } from "react-router-dom"
import { Dashboard } from "../pages";

/*
Le em formato cascata
*/ 

export const Routes = () => { 

 return(
    <BrowserRouter>
        <Switch>

            <Route path="/pagina-inicial"  element={<Dashboard/>} />
            <Route path="*" element = {<Navigate to="/pagina-inicial"/>} />
        
        </Switch>
    </BrowserRouter>
 );

}