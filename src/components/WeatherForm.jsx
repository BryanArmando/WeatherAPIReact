
import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import "../App.css";
const WeatherForm = ({onChangeCity}) => {
    const [city, setCity] = useState('');

    function onChangeled(e){
        const value = e.target.value;
        
        if (value !== ''){
            setCity(value);
        }
    }

    function handleSubmit(e){
        e.preventDefault();
        onChangeCity(city);
    }


    return ( 
        <formualrio>
        <Form onSubmit={handleSubmit}>
            <Form.Group >
                <Form.Label>Ingrese la ciudad</Form.Label>
                <Form.Control id="Int" type="text" onChange={onChangeled} ></Form.Control>
                <Button variant="primary" type="submit"  >Buscar
                </Button>
            </Form.Group>
         </Form>   
      </formualrio>
     );
}
 
export default WeatherForm;
