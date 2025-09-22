import ReactDOM from "react-dom/client";
import {useState} from "react";
import {useEffect} from "react";
import {useOutletContext} from "react-router";
import {useLocation} from "react-router";
import {useNavigate} from "react-router";
import {useRef} from "react";
import {Link} from "react-router";
import {Outlet} from "react-router";
import {createBrowserRouter} from "react-router";
import {RouterProvider} from "react-router";
import {lazy} from "react";
import Error from "./errorpage";
import Restaurant from "./restaurant";
import About_Us from "./about_us";
import offerbanner from "./offerbanner";
import {restaurant} from "./data";
import {restaurant_menu} from "./data";

let root = ReactDOM.createRoot(document.getElementById("container"));

let Dineout = lazy(()=>import("./dineout"));

let a,r;

let Logo = () => 
    {
        let location = useLocation();
        return <Link to="/"><img id={location.pathname==="/Dineout" ? "logo2" : "logo1"} title="Logo" alt="Logo" src="https://b.zmtcdn.com/data/pictures/chains/8/20078228/012b4d40178c613c9343b80cdbaa6eaa.jpg"></img></Link>
    }

let Nav_Bar = () =>
    (
        <nav id="nav-bar">

            <Link to="/">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M253-212h75v-256h304v256h75v-341L480-723 253-553.33V-212ZM117-76v-545l363-273 363 272.67V-76H511v-271h-62v271H117Zm363-391Z"/></svg>
                Home
            </Link>
            <Link to="/Search">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M785-72 525.79-332Q497-313 457-301q-40 12-86 12-121.71 0-206.86-85.2Q79-459.41 79-581.2 79-703 164.2-788q85.21-85 207-85Q493-873 578-787.86q85 85.15 85 206.86 0 47-11.5 85T620-429l261 262-96 95ZM370.59-425q66.59 0 111.5-44.5T527-580.59q0-66.59-44.91-111.5T370.59-737Q304-737 259.5-692.09T215-580.59q0 66.59 44.5 111.09T370.59-425Z"/></svg>
                Search
            </Link>
            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M256.83-73Q225-73 202.5-95.67t-22.5-54.5q0-31.83 22.67-54.33t54.5-22.5q31.83 0 54.33 22.67t22.5 54.5q0 31.83-22.67 54.33T256.83-73Zm441.42 0Q666-73 644-95.67t-22-54.5q0-31.83 22.4-54.33t53.85-22.5Q731-227 753-204.33t22 54.5q0 31.83-22.25 54.33T698.25-73ZM276-682l59 142h299l54-142H276Zm-51-112h553.28q29.85 0 45.78 26Q840-742 826-714l-96.31 231.52Q719-458 696.8-442.5 674.59-427 647-427H331l-28 48h488v112H269q-57 0-82.5-46.65Q161-360.31 188-406l48-80-123-292H18v-112h166l41 96Zm110 254h299-299Z"/></svg>
                Cart
            </a>
            <a>
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="M472-98v-128h262v-508H472v-128h262q53.83 0 90.91 37.09Q862-787.83 862-734v508q0 53.82-37.09 90.91Q787.83-98 734-98H472ZM356-249l-92-89 78-78H98v-128h244l-78-78 92-89 230 231-230 231Z"/></svg>
                Login
            </a>
            <a href="">
                <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px"><path d="m431-31 7-128 1-1q-148.84-17-247.92-127.27Q92-397.54 92-546.77 92-708 205.39-820.5 318.78-933 480.54-933q80.28 0 150.6 30.86 70.32 30.87 122.59 83Q806-767 837-696.28q31 70.72 31 151.03 0 86.62-39 163.44Q790-305 727.5-239.5T586.93-121.76Q508.85-69.51 431-31Zm122-207q79.67-61.19 136.33-141.59Q746-460 746-544.58q0-110.85-78-188.64Q590-811 480-811t-188 78.68q-78 78.68-78 188T292-357q78 78 188.04 78H553v41Zm-71.55-101q23.14 0 38.84-16.16Q536-371.31 536-393.95t-15.78-38.84Q504.44-449 481.05-449q-22.64 0-38.84 16.16Q426-416.69 426-394.05t16.16 38.84Q458.31-339 481.45-339ZM437-473h85q0-26 6-43.5t19-30.5q20-19 38.5-38.32T604-644q0-56.5-33.5-85.75T482-759q-46.73 0-81.28 30.83Q366.17-697.33 353-656l77.16 31q5.84-18 17.83-34.5Q459.98-676 480-676q20.5 0 29.75 10.56T519-642q0 17.39-14 30.19Q491-599 477-586q-28 27-34 49.06-6 22.06-6 63.94Zm43-52Z"/></svg>
                Contact Us
            </a>

        </nav>
    );

let Top_Rated = (props) =>
    (
        <button onClick =
        {
            ()=>
                {
                    props.setbutton_active(prev=>
                        {
                            if(prev)
                                props.setrestaurant1(props.search_list);
                            else
                                props.setrestaurant1(toprated(props.restaurant1));
                            return !prev;
                        });
                }
        } className={props.button_active && props.restaurant1.length>0 ? 'top-rated2' : 'top-rated1'}>

            Ratings 4.0+{console.log("Bye")}
            
            <svg style={props.button_active && props.restaurant1.length>0 ? {display: 'block'} : {display: 'none'}} xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#1f1f1f"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                
        </button>
    );

let Search = (props)=>
    {
        let location = useLocation();

        let c = useRef(null);

        useEffect(()=>
            {
                return ()=>
                    {
                        clearTimeout(c.current);
                    }
            },[]);

        return (

            <Link to="/Search">

            <div className={location.pathname==="/Search" ? "search3" : props.scroll ? 'search2' : 'search1'}>

                <input autoComplete="off" name="search-text" className={location.pathname==="/Search" ? 'search-text2' : 'search-text1 readonly-input'} type="text" placeholder="Search For Restaurant" value={props.value}
                onChange=
                {
                    (event)=>
                        {
                            clearTimeout(c.current);
                            c.current=setTimeout(()=>
                                {
                                    if(event.target.value.trim()!="")
                                    {
                                        if(location.pathname==="/Search")
                                        {
                                            r=restaurant.filter((element)=>element.name.toLowerCase().includes(event.target.value.trim().toLowerCase()));
                                            if(r.length>0)
                                            {
                                                props.setrestaurant2(r);
                                            }
                                            else
                                            {
                                                props.setrestaurant2([]);
                                            }
                                        }
                                        else
                                        {
                                            a=restaurant.filter((element)=>element.name.toLowerCase().includes(event.target.value.trim().toLowerCase()));
                                            if(a.length>0)
                                            {
                                                props.setrestaurant1(a);
                                                props.update_search_list(a);   
                                            }
                                            else
                                            {
                                                props.setrestaurant1([]);
                                            }
                                        }
                                    }
                                    else
                                    {
                                        if(location.pathname==="/Search")
                                        {
                                            props.setrestaurant2([]);
                                        }
                                        else
                                        {
                                            props.setrestaurant1(restaurant);
                                            props.update_search_list(restaurant);
                                        }
                                    }
                                },1000);

                            props.updated_value(event.target.value);
                        }
                }></input>
                
                <svg className={location.pathname==="/Search" ? 'search-icon3' : props.scroll ? 'search-icon2' : 'search-icon1'} xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#666666"><path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/></svg>

            </div>

            </Link>

        );
    }

let Online_Button = () => 
    {
        let navigate = useNavigate();
        return <button id="order_online" onClick={()=>navigate("/")}>Order Online</button>;
    }

let Header = (props) => 
    {

        let className, content; 

        let location = useLocation();

        let [scrolled, update_header] = useState(false);

        function scroll()
        {
            update_header(scrollY >= 0.26*innerHeight);
        }

        useEffect(
            ()=>
                {
                    window.addEventListener("scroll",scroll);
                    return ()=> window.removeEventListener("scroll",scroll);
                }
        ,[]);

        
        if(location.pathname === "/Search" || location.pathname.startsWith("/Restaurant/"))
        {
            className = "header3";
        }
        else if(scrolled && location.pathname === "/")
        {
            className = "header2";
        }
        else if(location.pathname==="/Dineout")
        {
            className = "header4";
        }
        else
        {
            className = "header1";
        }


        if(scrolled && location.pathname==="/")
        {
            content =
            (
                <>
                <Top_Rated restaurant1={props.restaurant1} setrestaurant1={props.setrestaurant1} button_active={props.button_active} setbutton_active={props.setbutton_active} search_list={props.search_list}/>
                <Search scroll={scrolled} setrestaurant1={props.setrestaurant1} value={props.value} updated_value={props.updated_value} update_search_list={props.update_search_list}/>
                </>
            );
        }
        else if(location.pathname==="/Dineout")
        {
            content = 
            (
                <>
                <Logo/>
                <Online_Button/>
                </>
            );
        }
        else
        {
            content = 
            (
                <>
                <Logo/>
                <Nav_Bar/>
                </> 
            );
        }

        return(

            <header className={className}>
                {content}
            </header>

        );
    }

let Card = (props) =>
    {
        let location = useLocation();

        return(

            <Link to={`/Restaurant/${sanitizeName(props.name)}`} style={props.available==true ? {} : {pointerEvents: "none", cursor: "not-allowed", userSelect: "none"}}>

            <div className={location.pathname==="/Search" ? "card2" : "card1"}>

                <img src={props.image} title={props.name} alt=""></img>

                {location.pathname==="/Search" ? <h4 style={{fontWeight: "900"}}>{props.name}</h4> : <h2>{props.name}</h2>}

                <div>
                    <span className="star">{"\u2605"}</span>
                    <span>{props.rating}</span>
                </div>

                {location.pathname==="/Search" ? <h5>{props.deliveryTime}</h5> : <h4>{props.deliveryTime}</h4>}

                <span className="cuisine">{props.cuisine}</span>

            </div>

            </Link>

        );
    }

let Container1 = () =>
    {
        let location = useLocation();

        let{home} = useOutletContext();

        let Cardwithofferbanner = offerbanner(Card);

        useEffect(
            ()=>
                {
                    console.log("Hii");
                }
        ,[home.button_active]);

        return(

            <>

            <div className={location.pathname==="/Search" ? 'container1-2' : 'container1-1'}>

                <Search setrestaurant1={home.setrestaurant1} value={home.value} updated_value={home.updated_value} update_search_list={home.update_search_list} restaurant2={home.restaurant2} setrestaurant2={home.setrestaurant2}/>

                { location.pathname!=="/Search" ? 
                
                <Top_Rated restaurant1={home.restaurant1} setrestaurant1={home.setrestaurant1} button_active={home.button_active} setbutton_active={home.setbutton_active} search_list={home.search_list}/> 
                
                : ""}
                
                <div className={home.restaurant1.length>0 ? location.pathname==="/Search" ? 'card-div3' : 'card-div1' : 'card-div2'}>
                    
                    {
                        location.pathname==="/Search" ? home.restaurant2.length>0 ? home.restaurant2.map
                        (
                            (element)=><Card key={element.name} {...element}/>
                        ) 
                            : ""
                        : 
                        home.restaurant1.length>0 ? home.restaurant1.map
                        (
                            (element)=>{return element.label!="" ? <Cardwithofferbanner key={element.name} {...element}/> : <Card key={element.name} {...element}/>}
                        ) 
                            : "Sorry!! No Restaurants Found!!"
                    }

                </div>

            </div>

            </>

        );
    }

let Footer = () =>
    {
        return (

            <div id="footer">

                <div>
                    <img id="logo3" src="https://b.zmtcdn.com/data/pictures/chains/8/20078228/012b4d40178c613c9343b80cdbaa6eaa.jpg" title="Bhojan Box" alt="Bhojan Box"></img>
                    <span>Bhojan Box</span>
                </div>

                <div>

                    <Link className="link" to="/AboutUs">About Us</Link>
                    
                    <Link className="link" to="/Dineout">Bhojan Box Dineout</Link>

                    <div>
                        <h3>Social Links</h3>
                        <div id="social_links">
                            <Link to="https://www.linkedin.com/login"><img id="Linkedin" src="https://i.pinimg.com/1200x/1f/db/d8/1fdbd88fec469fc342cdff7ea25b8bd8.jpg" title="Linkedin" alt="Linkedin"></img></Link>
                            <Link to="https://www.instagram.com/accounts/login/?hl=en"><img id="Instagram" src="https://i.pinimg.com/736x/8a/3b/05/8a3b055d7e3cc52a0f0053535f0339ea.jpg" title="Instagram" alt="Instagram"></img></Link>
                            <Link to="https://www.facebook.com/?_rdr"><img id="Facebook" src="https://i.pinimg.com/474x/14/39/24/1439249845950447df1c481779bc2a74.jpg" title="Facebook" alt="Facebook"></img></Link>
                            <Link to="https://in.pinterest.com/login/"><img id="Pinterest" src="https://i.pinimg.com/736x/5d/90/35/5d90352196929ddb447d25e3c0c7124f.jpg" title="Pinterest" alt="Pinterest"></img></Link>
                            <Link to="https://x.com/i/flow/login"><img id="Twitter" src="https://i.pinimg.com/736x/3b/a7/8d/3ba78da55dfde6e8828246e92de85dcc.jpg" title="Twitter" alt="Twitter"></img></Link>
                        </div>
                    </div>

                </div>

            </div>

        );
    }

let Header_Container1 = () =>
    {
        let [restaurant1, setrestaurant1] = useState(restaurant);
        let [restaurant2, setrestaurant2] = useState([]);
        let [button_active, setbutton_active] = useState(false);
        let [value, updated_value] = useState("");
        let [search_list, update_search_list] = useState(restaurant);

        let outletContext = {
            home: {restaurant1, setrestaurant1, button_active, setbutton_active, value, updated_value, search_list, update_search_list, restaurant2, setrestaurant2}, restaurant_menu
        }

        let location = useLocation();

        return (
            <>

            <Header restaurant1={restaurant1} setrestaurant1={setrestaurant1} button_active={button_active} setbutton_active={setbutton_active} value={value} updated_value={updated_value} search_list={search_list} update_search_list={update_search_list}/>

            <Outlet context={outletContext}/>

            {location.pathname==="/" || location.pathname==="/AboutUs" || location.pathname==="/Dineout" ? <Footer/> : ""}
            
            </>
        );
    }

let router = createBrowserRouter(
    [
        {
            path: "/",
            element: <Header_Container1/>,
            errorElement: <Error/>,
            children: 
            [
                {
                    index: true,
                    element: <Container1/>,
                    errorElement: <Error/>
                },
                {
                    path: "/Search",
                    element: <Container1/>,
                    errorElement: <Error/>
                },
                {
                    path: "/Restaurant/:name",
                    element: <Restaurant/>,
                    errorElement: <Error/>
                },
                {
                    path: "/AboutUs",
                    element: <About_Us/>,
                    errorElement: <Error/>
                },
                {
                    path: "/Dineout",
                    element: <Dineout/>,
                    errorElement: <Error/>
                }
            ]
        }
    ]
);

root.render(<RouterProvider router={router}/>);

function toprated(restaurant)
{
    return restaurant.filter((element)=>parseFloat(element.rating)>4.0);
}

function sanitizeName(name) {
    let name1 = name.split(' ');
    name = name1.join('');
    return name;
}