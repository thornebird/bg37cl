import React ,{useState , useEffect , useRef} from 'react'
import LeadForm from '../Forms/LeadForm/LeadFormSpanish'


import {Container,Image,Col,Row,Button} from 'react-bootstrap'
import RegisterMessage from '../Forms/LeadForm/RegisterMessage/RegisterMessage.js'
import styles from './index.module.css'


const Lp = props =>{ 
    const [showRegisterMessage,setShowRegisterMessage] = useState(false)
    const [registerTitle,setRegisterTitle] = useState('')
    const [registerMessage,setRegisterMessage] = useState('')
    const [loading,setIsLoading] = useState(false)
    const [isLeadSaved, setIsLeadSaved] = useState(false)

    const [date,setDate] = useState('')
    const [day,setDay] = useState('')
    const [month,setMonth] = useState('')
    const [year,setYear] = useState('')
    const [isBottomScreen,setIsBottomScreen] = useState(true)

    const signupRef = useRef(null)
    const topPageRef = useRef(null)
    useEffect(()=>{      
      window.addEventListener('scroll', scrollHandler);   
      setDates()
      topPageRef.current.scrollIntoView()
    
     return () => window.removeEventListener('scroll', scrollHandler) 
    },[])

    const setDates = ()=>{
        const date = new Date()
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

          setMonth(date.getMonth()+1)
          setDate(date.getDate());
          setYear(date.getFullYear());
    }

    const saveError =(error) =>{
        setRegisterTitle('Error en el registro.')
        setRegisterMessage(error)
        setShowRegisterMessage(true)
        setIsLoading(false)
    }

    const savedSuccess = ()=>{
        setIsLeadSaved(true)      
        setRegisterTitle('Gracias por registrarse.')
        setRegisterMessage('Esté atento y disponible para recibir una llamada de su administrador de inversiones personal para ayudarlo a comenzar.')
        setShowRegisterMessage(true)
        setIsLoading(false)
    }

    const modalclose = ()=>{
      setShowRegisterMessage(false)
    }

    const onClickRegister =()=>{
        setIsLoading(true)        
    }
    

   const scollToRegister=()=>{
     signupRef.current.scrollIntoView()

   }

   const scrollHandler =()=>{
    if(window.pageYOffset + window.innerHeight > signupRef.current.offsetTop)
      {
       setIsBottomScreen(false)
      }else{
        setIsBottomScreen(true)
      }
   }
    return(
    <>
    <div ref={topPageRef}></div>
    <Image  className={styles.bodyContainer}  width='100%' src='/img/cl/clmenu.jpg' />
        <Container className={styles.bodyContainer} >
          
            <Row>

            <Col>


            <RegisterMessage 
            title={registerTitle}
            message={registerMessage}
            show={showRegisterMessage} 
            modalclose={() => modalclose()}
            />


          
            
           <h4>
            <strong>Estudiante Revela Como Gana Mas De 40,000$ Al Mes, Trabajando Desde Casa</strong>		
           </h4>
           <p>
             
            "¡Todo llegó como una sopresa para mí! Iba de camino a la universidad y
            no tenía ambiciones tan altas. Yo solo quería hacer algo de dinero
            extra."
        
           </p>
           <p>
              {date}/{month}/{year} By <span className={styles.red}> <u>María Luisa</u> </span>
           </p>
        
           <Image  width='100%' src='/img/cl/cltv0.jpg' />
           
           <p>
           <b>
                        Apareciendo en el programa "Muy buenos días", Juan Ángel Mallorca nos
                        explicó con detalle como lo hizo. Un día mientras buscaba en línea,
                        el descubrió una plataforma automática de trading, llamada Immediate Edge. La idea era simple: Permitir a la persona
                        promedio la oportunidad de hacer dinero en el auge de la moneda digital.
                        Incluso si no tenían absolutamente experiencia en inversiones o
                        tecnología.
                    </b>
           </p>
           <p>
           
           Un usuario puede simplemente hacer un depósito inicial en la plataforma, usualmente de 250$
                        o más, y el algoritmo automático de trading trabajaría. Utilizando una combinación de
                        aprendizaje
                        de datos y máquina, el algoritmo sabría el momento perfecto para comprar bienes digitales a la
                        baja
                        y vender a la alta, maximizando las ganancias del usuario.
                    
           </p>
           <p>Para demostrar el poder de la plataforma, Juan Ángel hizo que María Luisa Godoy depositara 250$ en vivo en el programa.</p>
           
          
          
            <Image  width='100%' src='/img/cl/cltv1.jpg' />
            <p className={styles.caption}>
            <span >María Luisa Godoy describiendo su experiencia después de registrarse en la plataforma.</span>
            <br/>(Image: Mirror News)
            </p>
            <p className={styles.quote}>
             <div className={styles.arrow}></div> “He oído hablar de las monedas digitales y la enorme cantidad de dinero que se puede ganar con ellas, pero nunca he comprado ninguna. No tenía idea de por dónde empezar. Esto fue realmente fácil, solo tengo que usar mi tarjeta de crédito para depositar Dinero, y me los compra” María Luisa Godoy. 
            </p>
            <p>Después de que se realizó su depósito inicial de 250 $, la plataforma de operaciones comenzó a trabajar con precios bajos y con precios altos. En 3 minutos, había aumentado con éxito sus fondos iniciales a 483.18 $. Eso es una ganancia de 233.18 $</p>
            <Image  width='100%' src='/img/cl/cltv2.jpg' />
            <p className={styles.caption}>
             Ignacio Gutierrez y María hablan de la primera ganancia de María.
             <br/>
             (Image: Mirror News) 
              </p>
              <p>Todos en el programa, incluido el personal de producción, quedaron
                        impresionados de inmediato por lo fácil que era ganar dinero. La
                        plataforma maneja todo el trabajo comercial de forma automática, y
                        debido a que el precio de las monedas digitales es bastante volátil,
                        existen numerosas oportunidades para obtener ganancias.
                    </p>
                    <p>Antes de que Juan Ángel tuviera la oportunidad de responder a las
                        preguntas de todos, María Luisa Godoy interrumpió y dijo con una sonrisa
                        en su rostro: “He subido a 398,42 $ después de solo 8 minutos”.
                    </p>
                    <p className={styles.quote}> <div className={styles.arrow}></div> "Las monedas digitales son muy atractivas en este momento, e incluso si alguien como María Luisa Godoy, sin ofender, puede ganar dinero con eso, estoy lista. ¡Necesito tener un pedazo de esto!" Ignacio Gutierrez.</p>
                    <p>Si Hubiera Invertido Solo 100$ En Monedas Digitales En 2010, ¡Ahora Disfrutaría De Dividendos
                        De 75 $ Millones!</p>
                        <h4>Decidimos poner a prueba la plataforma que usaba María Luisa Godoy para ver si realmente era posible para usted ganar dinero.</h4>
                        <p>
                          <strong>Este es el negocio:</strong> Descubrimos rápidamente que la plataforma cobra una comisión del 2% sobre las ganancias que genera un usuario y que se necesita hacer un depósito mínimo de 250 $ para comenzar. Ese dinero será su inversión inicial, la cual, el software comercial, utiliza para negociar.
                        </p>
                        <p><b>Además, aprendimos que el algoritmo gana dinero comprando cuando el precio sube Y cuando el precio baja. Esto se conoce como venta corta, y la plataforma lo maneja automáticamente</b></p>
             <p><b>MIS RESULTADOS CON DESPUÉS DE 7 DÍAS:</b>  Decidí registrarme para obtener una cuenta, hice el depósito inicial de 250$ y configuré mi cuenta como activa.</p>
             <p>En el programa, María Luisa Godoy pudo hacer 233.18$ en ganancias después de 3 minutos, para mí, tomó mucho más tiempo. La plataforma tardó 20 horas en generar una ganancia de 192,19$, ¡ lo que aún así me impresionó mucho! Nunca he hecho un intercambio de criptomoneda en mi vida, sin embargo, aquí pude generar ganancias.</p>
             <p className={styles.red}><u><b>Pasé unos 5 minutos al día verificando mis resultados, y después de 5 días, la plataforma había hecho intercambios hasta un total de 630$. Eso es un aumento del 252% en mi depósito inicial. Estaba empezando a convertirme en una verdadera creyente en esta plataforma.</b></u></p>
             <p>Después de 7 días, mi inversión inicial se había incrementado hasta 1930$ En este punto, mi mente estaba compitiendo con las posibilidades de todas las cosas en las que podía gastar ese dinero. Esto es más dinero del que gané en el trabajo durante la semana y dediqué menos de 30 minutos a revisar la plataforma.</p>
             <p>Decidí mantener mi cuenta activa durante 15 días en total porque quería ver qué tan alto podía llegar. Mi cuenta llegó a un máximo de 7,380.10$, pero tuvo un valor negativo: 79,51 $. Revisé mis registros comerciales y descubrí que no todos los intercambios son rentables, en algunos realmente se pierde dinero.</p>
             <p>La plataforma no es mágica, pero después de que el 87% de mis operaciones fueron rentables, el resultado neto fue que gané 7300.59$ desde mi depósito inicial de 250$. Me tomó menos de 30 minutos de trabajo a la semana y absolutamente ninguna experiencia técnica o de inversión.</p>
             <p>Como se puede ver en la captura de pantalla a continuación, decidí usar la función “retirar fondos” para retirar 7300.59$ de mi cuenta.</p>
             <Image  width='100%' src='/img/cl/bittrader-step3.jpg' />  
          <p className={styles.caption}>

                
                <b>Cómo retiré fácilmente mi dinero de mi cuenta </b> (Image: Mirror News)
          </p>
          <p>En total, pude ganar 7,300.59$. Decidí sacar mi dinero para pagar unas vacaciones en el extranjero. Cuando regrese, con el dinero que me quede de mis vacaciones, definitivamente reinvertiré. ¡Incluso podría dejar mi trabajo!</p>
          <p><i>Nota: Tardé 48 horas en depositar mi dinero en mi cuenta bancaria personal.</i></p>
          <h2> PRUÉBELO USTED MISMO</h2>
             
            <br/>
            <p>
            En este momento, nuestros lectores pueden probar la plataforma por un depósito inicial mínimo de solo 250$. Puede retirar esta cantidad en cualquier momento que desee.
            </p>
            <p>Dado el aumento masivo en la popularidad de la plataforma comercial, este depósito mínimo inicial puede aumentar!</p>
           
            <p>
             <b>Es crucial que se registre de inmediato, ya que no sabemos cuántos lugares estarán disponibles</b>
            </p>

           
            <p>
            Lo primero que debes hacer es completar el formulario de abajo con tu nombre, teléfono y correo eléctronico. Es rápido y fácil. Una vez que tu registro sea completado de forma exitosa, lo llamará uno de nuestros agentes quien te guiará en el proceso de activación de tu cuenta. Luego de esto puedes agregarle fondos a tu cuenta con una tarjeta de crédito o débito.    
            </p>
            <p>
            Consejo: incluso si no decide invertir dinero, le recomiendo que se registre ahora porque es gratis y los registros para los residentes de Chile podrían finalizar en cualquier momento)
            </p>
           <p>Acabamos de recibir noticias de que a partir de hoy {day} {date}/{month}/{year} casi todos los puestos están ocupados para residentes chilenos. Immediate Edge solo puede aceptar un número limitado de usuarios totales para mantener alta la ganancia por usuario. A partir de ahora, quedan solo (37) lugares, así que apúrate y regístrate ahora para asegurar tu lugar.</p>
            

                      
                        {/* <h2><b>UPDATE</b></h2>
                        We just received news that as of today  {day} {date}/{month}/{year} almost all positions are filled up for Chilean residents. Immediate Edge can only accept a limited number of total users to keep the profit per user is high. As of right now, there are still (37) spots left, so hurry up and sign up now to secure your spot.           
                       <br/>
                       <br/> */}
                       <div ref={signupRef}></div>
                       <Image  width='100%' src='/img/cl/calles1.jpg' />
                       <div>
                         <p>
                           <b>
                             <u>
                             IMPORTANTE:
                             </u> Recibirás una llamada telefónica luego de que te hayas registrado. No la ignores porque los consejeros son de gran ayuda para comenzar y recomendamos absolutamente establecer una buena relación con ellos.
                           </b>
                           
                         </p>
                       </div>
                       
                        <LeadForm 
                         offer='Immediate Edge'
                         geo='CL' 
                         savedSuccess={() => savedSuccess()} 
                         saveError={(error) =>saveError(error)}
                         btnDisabled={loading}
                         onClickRegister={()=> onClickRegister()}
                         trackingId={props.trackingId}
                        />
                        {/* <Image  width='100%' src='/img/ray/comment1.PNG' />
                        <Image  width='100%' src='/img/ray/comment2.PNG' />
                        <Image  width='100%' src='/img/ray/comment3.PNG' />
                        <Image  width='100%' src='/img/ray/comment4.PNG' />
                        <Image  width='100%' src='/img/ray/comment5.PNG' />
                        <Image  width='100%' src='/img/ray/comment6.PNG' />
                        <Image  width='100%' src='/img/ray/comment7.PNG' /> */}
           </Col>
           {
             isBottomScreen && !isLeadSaved ?<Button className="fixed-bottom btn btn-success" size="lg" block onClick={() => scollToRegister()}>            
             Click para registrarte
            </Button>:''
           }
           
           </Row>
       
        </Container>
        </>
    )
}

export default Lp