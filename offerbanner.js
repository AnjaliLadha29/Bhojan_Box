let offerbanner = (Card) => 
    {
        return (props) => 
            {
                return (
                    <div className="offer-div">
                        <h3 className="offer">{props.label}</h3>
                        <Card {...props}/>
                    </div>
                );
            }
    }

export default offerbanner;