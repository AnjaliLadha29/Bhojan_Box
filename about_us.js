/*import {useEffect} from "react";
import {useState} from "react";

let About_Us = () => 
    {

        let [boolean1, update1] = useState(false);

        let [boolean2, update2] = useState(false);

        let [scrolled, update_scroll] = useState(false);

        function scroll()
        {
            update_scroll(window.scrollY >= 0.17*innerHeight);
        }

        useEffect(
            ()=>
                {
                    let c1,c2;
                    c1=setTimeout(()=>update1(true),0.01);
                    c2=setTimeout(()=>update2(true),700);
                    window.addEventListener("scroll",scroll);
                    return ()=>
                        {
                            clearTimeout(c1);
                            clearTimeout(c2);
                            window.removeEventListener("scroll",scroll);
                        };
                }, []
            );

        return (

            <div id="container3">

                <div>

                    <h1 id="about_us_page" className={boolean1 ? "onload1" : ""}>ABOUT US</h1>
                    <span className={boolean1 ? "onload1" : ""}>Bhojan Box is a new-age organization offering an easy-to-use convenience platform, accessible through a unified platform.</span>
                    
                    <div id="pointer" className={boolean2 ? "animate" : ""}>
                    </div>
                    
                    <div id="pointer-tip" className={boolean2 ? "animate" : ""}>
                    </div>
                    
                    <div id="circle" className={boolean2 ? "animate" : ""}>
                    </div>
                    
                    <img id="logo3" className={boolean1 ? "animate" : ""} src="https://b.zmtcdn.com/data/pictures/chains/8/20078228/012b4d40178c613c9343b80cdbaa6eaa.jpg" title="Bhojan Box" alt="Bhojan Box"></img>
                    
                    <h1>Bhojan Box</h1>
                </div>

                <div>
                    
                    <h1 id="get_to_know_us" className={scrolled ? "get_to_know_us" : ""}>GET TO KNOW US</h1>
                    
                    <div className={scrolled ? "onload2" : ""}>
                        <h2>Mission &rarr;</h2>
                        <p>Our mission is to elevate the quality of life of the consumer by offering unparalleled convenience. Convenience is what makes us tick.</p>
                        <img id="superhero" src="https://content.jdmagicbox.com/comp/def_content/fast-food-delivery-services/qlqpjvoz6h-fast-food-delivery-services-7-0v84x.jpg" alt="Our Super Heroes" title="Our Super Heroes"></img>
                    </div>
                    
                </div>

            </div>

        );
    }*/

import {Component} from "react";

class About_Us extends Component
{

    c1=null;
    c2=null;

    constructor()
    {
        super();
        this.state = {boolean1: false, boolean2: false, scrolled: false};
    }

    scroll = ()=>
    {
        this.setState
        (
            {scrolled: window.scrollY >= 0.17*innerHeight}
        );
    }

    componentDidMount()
    {
        window.scrollTo(0,0);
        this.c1=setTimeout(()=>this.setState({boolean1: true}),0.01);
        this.c2=setTimeout(()=>this.setState({boolean2: true}),700);
        window.addEventListener("scroll",this.scroll);
    }

    componentWillUnmount()
    {
        clearTimeout(this.c1);
        clearTimeout(this.c2);
        window.removeEventListener("scroll",this.scroll); 
    }

    render()
    {
        return (
            <div id="container3">

                <div>

                    <h1 id="about_us_page" className={this.state.boolean1 ? "onload1" : ""}>ABOUT US</h1>
                    <span className={this.state.boolean1 ? "onload1" : ""}>Bhojan Box is a new-age organization offering an easy-to-use convenience platform, accessible through a unified platform.</span>
                    
                    <div id="pointer" className={this.state.boolean2 ? "animate" : ""}>
                    </div>
                    
                    <div id="pointer-tip" className={this.state.boolean2 ? "animate" : ""}>
                    </div>
                    
                    <div id="circle" className={this.state.boolean2 ? "animate" : ""}>
                    </div>
                    
                    <img id="logo3" className={this.state.boolean1 ? "animate" : ""} src="https://b.zmtcdn.com/data/pictures/chains/8/20078228/012b4d40178c613c9343b80cdbaa6eaa.jpg" title="Bhojan Box" alt="Bhojan Box"></img>
                    
                    <h1>Bhojan Box</h1>
                </div>

                <div>
                    
                    <h1 id="get_to_know_us" className={this.state.scrolled ? "get_to_know_us" : ""}>GET TO KNOW US</h1>
                    
                    <div className={this.state.scrolled ? "onload2" : ""}>
                        <h2>Mission &rarr;</h2>
                        <p>Our mission is to elevate the quality of life of the consumer by offering unparalleled convenience. Convenience is what makes us tick.</p>
                        <img id="superhero" src="https://content.jdmagicbox.com/comp/def_content/fast-food-delivery-services/qlqpjvoz6h-fast-food-delivery-services-7-0v84x.jpg" alt="Our Super Heroes" title="Our Super Heroes"></img>
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default About_Us;