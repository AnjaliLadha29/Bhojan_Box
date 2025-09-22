import {useRef} from "react";
import {useOutletContext} from "react-router";
import {useParams} from "react-router";
import {useEffect} from "react";
import Error from "./errorpage";

let Restaurant = () =>
    {
        
        let i = useRef(0);
        let w = useRef(0);
        let ref1 = useRef(null);
        let ref2 = useRef(null);

        let {home, restaurant_menu} = useOutletContext();
        console.log(useParams());

        let {name} = useParams();

        if(!restaurant_menu || restaurant_menu.length===0)
            return <h2>Loading Restaurant Data...</h2>

        let restaurant = restaurant_menu.find((element)=>
            {
                if(sanitizeName(element.name)===name)
                    return element;
            }); 

        if(!restaurant)
            return <Error/>

        let renderedKeys = ["name", "rating", "price_for_two", "cuisine", "deliveryTime", "deals"];

        let keys = Object.keys(restaurant);

        let notrenderedKeys = keys.filter((element) => !renderedKeys.includes(element));

        useEffect(()=>
            {
                window.scrollTo(0,0);
            },[]);

        return (
            <>

            <div id="container1">

                <h1>{restaurant.name}</h1>

                <div id="details_card">

                    <div>
                        <span className="star">{"\u2605"}</span>
                        <h4>{restaurant.rating} {'\u20B9'}{restaurant.price_for_two} for two</h4>
                    </div>

                    <span>{restaurant.cuisine}</span>
                    <span>{restaurant.deliveryTime}</span>

                </div>

                <div id="deals" ref={ref1}>

                    <div>

                        <h4>Deals For You</h4>
                        <span>

                            <svg className="arrow" onClick=
                            {
                                ()=>
                                {
                                    if(i.current<=1)
                                    {
                                        w.current = ref1.current.offsetWidth;
                                        ref2.current.style.transform=`translateX(${-w.current*(i.current+1)}px)`;
                                        i.current++;
                                    }
                                }
                            } xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="m313-440 224 224-57 56-320-320 320-320 57 56-224 224h487v80H313Z"/>
                            </svg> &nbsp;

                            <svg className="arrow" onClick=
                            {
                                ()=>
                                {
                                    if(i.current>=1)
                                    {
                                        w.current = ref1.current.offsetWidth;
                                        ref2.current.style.transform=`translateX(${-w.current*(i.current-1)}px)`;
                                        i.current--;
                                    }
                                }
                            } xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#1f1f1f"><path d="M647-440H160v-80h487L423-744l57-56 320 320-320 320-57-56 224-224Z"/></svg>
                        
                        </span>

                    </div>

                    <div ref={ref2}>

                        {restaurant.deals.map((element, index)=>
                            (
                                <div key={name+`${index}`} className="deals_card">
                                    <div className="circle" style={{background: "linear-gradient(90deg,rgba(247, 212, 168, 1) 0%, rgba(250, 168, 110, 1) 66%)"}}>
                                        DEAL<br></br>OF<br></br>DAY
                                    </div>
                                    <div className="deals">
                                        <h4>{element[0]}</h4>
                                        <span>{element[1]}</span>
                                    </div>
                                </div>
                            )
                        )}

                    </div>

                </div>

                <h4>M E N U</h4>

                <button id="pure-veg">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#75FB4C"><path d="M120-120v-720h720v720H120Zm80-80h560v-560H200v560Zm280-120q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47Z"/></svg>
                    Pure Veg
                </button>

                <div id="container2">
                    {notrenderedKeys.map((element)=>
                        (
                            <div key={name+`${element}`} className="menu-div">
                                <h3>{element}</h3>
                                {restaurant[element].map((element1)=>
                                    (
                                        <div key={name+`${element1.name}`} className="menu-items">
                                            <h3>
                                                <span>{element1.name}</span>
                                                <span>{element1.price}</span>
                                            </h3>
                                            <img src={element1.image}></img>
                                            <button className="add">ADD</button>
                                        </div>
                                    ))}
                            </div>
                        ))}
                </div>

            </div>

            </>
        );
    }

function sanitizeName(name) {
    let name1 = name.split(' ');
    name = name1.join('');
    return name;
}

export default Restaurant;