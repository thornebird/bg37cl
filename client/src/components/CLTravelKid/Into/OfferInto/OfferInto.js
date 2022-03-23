import React, { useState, useEffect } from 'react';
import { Row, Col ,Image} from 'react-bootstrap';
import styles from './OfferInto.module.css';

const OfferInto = () => {

  const [day, setDay] = useState('');
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const [minutes,setMinutes] = useState(2);
  const [seconds,setSeconds] = useState(0);
  const [countdown,setCountdown]  = useState(120);;

  useEffect(() => {
    const date = new Date();

    switch (date.getMonth()) {
      case 0:
        setMonth('enero');
        break;
      case 1:
        setMonth('febrero');
        break;
      case 2:
        setMonth('marzo ');
        break;
      case 3:
        setMonth('abril');
        break;
      case 4:
        setMonth('mayo');
        break;
      case 5:
        setMonth('junio ');
        break;
      case 6:
        setMonth('julio');
        break;
      case 7:
        setMonth('agosto');
        break;
      case 8:
        setMonth('septiembre');
        break;
      case 9:
        setMonth('octubre');
        break;
      case 10:
        setMonth('noviembre');
        break;
      case 11:
        setMonth('diciembre');
        break;
      default:
        break;
    }


    switch (date.getDay()) {
      case 0:
        setDay('domingo');
        break;
      case 1:
        setDay('lunes');
        break;
      case 2:
        setDay('martes');
        break;
      case 3:
        setDay('miércoles');
        break;
      case 4:
        setDay('jueves');
        break;
      case 5:
        setDay('viernes');
        break;
      case 6:
        setDay('sábado');
        break;
   
      default:
        break;
    }

    setDate(date.getDate());
    setYear(date.getFullYear());

    let interval = '';
    if(countdown>0){
     
    interval = setInterval(() => {
    let countTime = countdown;
    countTime--;

    let sec= seconds;
   
    if(sec === 0){
      sec = 60;
    }
    sec--;
    if(countTime >= 120){
      setMinutes(2);
    }else if(countTime >= 60){
      setMinutes(1);
    }else if(countTime < 60){
      setMinutes(0);
    }
    setCountdown(countTime);
    setSeconds(sec);
     
    },1000);
    }

    return () => clearInterval(interval);

  }, [minutes,seconds])

  return (
    <Row>
      <Col>
 
 <h3  className={styles.contentBlog}>
   
 LAS MEJORES COSAS QUE HACER EN SANTIAGO
 </h3>
 <p className={styles.contentBlog}>
 La plaza principal del centro de Santiago se llama Plaza de Armas y se encuentra en el mismo lugar donde se fundó la ciudad, en 1541. Con algunos árboles, esculturas y estructuras notables a su alrededor, allí también encontrarás la Catedral Metropolitana de Santiago, desde 1748, que es encantador y rico en sutilezas, lo que lo hace mucho más intrigante para ser visitado.
</p>
 <p className={styles.contentBlog}>
 En la calle San Pablo, cerca de la Plaza de Armas, se encuentra el Mercado Central de Santiago, donde los principales productos son pescados y mariscos pero también se pueden encontrar pimientos y sabores comunes. En este mercado también hay una variedad de restaurantes y el plato común de Santiago, un cangrejo llamado centolla.
</p>
<p className={styles.contentBlog}>
Asimismo, cerca de la Plaza de Armas, se encuentra el Museo de Arte Precolombino, y verdaderamente vale la pena visitarlo. Tiene una colección bien protegida, por lo que es posible comprender mejor las tradiciones y la cultura de los antiguos que vivieron en América Central y del Sur. Tiene tres pisos y la afirmación es gratuita los domingos de primaria de cada mes.
</p>
 <p className={styles.contentBlog}>
 Todavía en el punto focal de Santiago, el Museo Nacional de Historia Natural relata la narrativa de la fauna y el verdor de la nación, incluyendo la Isla de Pascua, destacando imitaciones de criaturas que alguna vez poseyeron el distrito, siendo la característica el esqueleto de una ballena y el liofilizado cuerpo de un joven del Cerro el Plomo, un niño de 8 años presentado como penitencia hace más de 500 años. La confirmación es gratuita.
</p>
<p className={styles.contentBlog}>
El tranvía de Santiago es probablemente la fascinación más arraigada en el Parque Metropolitano. El tranvía cuenta con 46 casetas con límite respecto a 6 personas y con apoyo de bicicletas para las personas que necesiten transitar por el Cerro San Cristóbal (estación Cumbre) que es su último objetivo, luego de transitar por el Tupahue (acceso al público). piscina) y el Oasis (salida del parque más cercano al Shopping Costanera).
</p>
 <p className={styles.contentBlog}>
 El Cerro San Cristóbal es el hito más destacable de la ciudad y se ubica dentro del Parque Metropolitano, una perspectiva regular de 300 m de altura a la que se puede acceder de diversas formas; a pie, en bicicleta de forma gratuita, en vehículo, tranvía o funicular. Además de la vista, el área recreativa cuenta con algunos atractivos como el Santuario de la Inmaculada Concepción en el punto más destacado, espacios públicos para nadar, guardería japonesa y el Mirador y el Anfiteatro Pablo Neruda.
</p>
<p className={styles.contentBlog}>
La Chascona, la casa-sala de exposiciones de Pablo Neruda, es una visita obligada indiscutible para cualquier persona que aprecie la cultura, el verso y los cuentos románticos. Está situado en el Barrio Bellavista, en la base del Cerro San Cristóbal. La casa-guardián del centro histórico, así como objetos privados del artista, un surtido de antigüedades africanas y un surtido de obras de artesanos. La Chascona implica, en lengua quechua, 'enredada', referente a la querida de Pablo, por tener el pelo pelirrojo y 'salvaje'.
</p>
 <p className={styles.contentBlog}>
 Con el título de la perspectiva más elevada de América Latina, Sky Costanera se pasea por la escena de Santiago. El poste se encuentra en el punto más alto de la Gran Torre Santiago, fundamental para el complicado lugar donde se encuentra el Centro Comercial Costanera Center, y da una perspectiva de 360º de la ciudad a 300 metros de altura, con leyendas en las vidrieras alusivas a los spots que se están viendo. Las entradas se venden únicamente en el mundo del cine o con antelación a través de un servicio de viajes.
</p>
<p className={styles.contentBlog}>

</p>
 <p className={styles.contentBlog}>
  
</p>
<p className={styles.contentBlog}>

</p>
 <p className={styles.contentBlog}>
  
</p>

<h3>
    Gracias por tu interés en este proyecto.
   </h3>
  
   
      
{/*   
    <p>Todos están invitados a participar, pero no todos son elegibles. Porfavor tómese un momento para ver si califica para este proyecto.</p> */}
    {/* <p>
         {date}, {month}, {year} es el último día para registrarse.
    </p> */}
      </Col>
    </Row>
  )
};

export default OfferInto;