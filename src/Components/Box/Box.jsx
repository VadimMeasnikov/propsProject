import './box.scss'

export default function Box(props) {
    const cl = props.color
    return (
        <div className='container'>
            <div className={cl} id='heading'><p>Безлимитный {props.price}</p></div>
            <div className={cl} id='textBox'>
                <div className="textBox-content">
                <div className="currency">руб</div>
                <div className="priceBox"><p>{props.price}</p></div>
                <div className="month">/месяц</div>
                </div>
                
            </div>
            <div className="speedBox">До {props.speed} Мбит/сек</div>
            <div className="infoBox">Объем включенного трафика не ограничен</div>
        </div>
    )
}
