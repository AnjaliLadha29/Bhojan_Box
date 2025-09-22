import {useLocation} from "react-router";
import {useEffect} from "react";

let Dineout = ()=>
    {
        let location = useLocation();

        useEffect(()=>
            {
                window.scrollTo(0,0);

                if(location.pathname==="/Dineout")
                    document.body.classList.add("scroll");

                return ()=> 
                    {
                        document.body.classList.remove("scroll");
                    }

            },[location.pathname]);

        return (
            <div id="container4">
                <img id="dineout" title="Dineout" alt="Dineout" src="https://images.yourstory.com/cs/2/a09f22505c6411ea9c48a10bad99c62f/Imagem0id-1707394707782.jpg?mode=crop&crop=faces&ar=2%3A1&format=auto&w=1920&q=75"></img>
            </div>
        );
    }

export default Dineout;