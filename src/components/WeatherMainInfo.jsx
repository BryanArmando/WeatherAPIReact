const WeatherMainInfo = ({weather}) => {
    return ( 
        <div>
            <div>
                {weather?.location.name}
            </div>
            <div>
                {weather?.location.country}
            </div>
            <div>
                <div>
                    <img src={`http:${weather?.current.condition.icon}`}
                        width="128"
                        alt={weather?.current.condition.text}
                    />
                </div>
                <div>
                    <div>
                        {weather?.current.condition.text}
                    </div>
                    <div>
                        {weather?.current.temp_c}º
                    </div>
                </div>
            </div>
            <div>
            <iframe title="mapa" 
            src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d127673.35249225156!2d${weather?.location.lon}!3d${weather?.location.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2sec!4v1672980897145!5m2!1ses-419!2sec`}
            width="600" 
            height="450" 
            style={{border:0}} 
            allowfullscreen="" 
            loading="lazy" 
            aria-hidden="false" 
            tabindex="0"
            ></iframe>
            </div>
            
        </div>
     );
}
 
export default WeatherMainInfo;