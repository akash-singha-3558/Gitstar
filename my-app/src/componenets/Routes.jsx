import {Route,Routes} from "react-router-dom";
import All from "./All";
import Css from "./Css";
import Html from "./Html";
import Javascript from "./Javascript";

// eslint-disable-next-line import/no-anonymous-default-export
const Routesvi=()=>{


return(
    <>
<Routes>
<Route path="/" element={<All/>}/>
<Route path="/html" element={<Html/>}/>
<Route path="/css" element={<Css/>}/>
<Route path="/js" element={<Javascript/>}/>
</Routes>
</>

)


}
export default Routesvi;