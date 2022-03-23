import React, { useState, useEffect, useRef } from 'react'
import LeadForm from '../../../Forms/LeadForm/LeadFormFrench.js'
import Cookies from 'universal-cookie'
import { Container, Image, Col, Row } from 'react-bootstrap'
import CtaButton from '../../../LpComponents/CtaButton/CtaButton.js'
import RegisterMessage from '../../../Forms/LeadForm/RegisterMessage/RegisterMessage.js'
import styles from './index.module.css'


const Lp = props => {
  const [showRegisterMessage, setShowRegisterMessage] = useState(false)
  const [registerTitle, setRegisterTitle] = useState('')
  const [registerMessage, setRegisterMessage] = useState('')
  const [loading, setIsLoading] = useState(false)
  const [isLeadSaved, setIsLeadSaved] = useState(false)

  const [date, setDate] = useState('')
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [isBottomScreen, setIsBottomScreen] = useState(true)

  const signupRef = useRef(null)

  useEffect(() => {
    setDates()
    window.addEventListener('scroll', scrollHandler);

    return () => window.removeEventListener('scroll', scrollHandler)
  }, [])

  const setDates = () => {
    const date = new Date()
    switch (date.getDay()) {
      case 0:
        setDay('Sunday');
        break;
      case 1:
        setDay('Monday');
        break;
      case 2:
        setDay('Tuesday');
        break;
      case 3:
        setDay('Wednesday');
        break;
      case 4:
        setDay('Thursday');
        break;
      case 5:
        setDay('Friday');
        break;
      case 6:
        setDay('Saturday');
        break;

      default:
        break;
    }

    setMonth(date.getMonth() + 1)
    setDate(date.getDate());
    setYear(date.getFullYear());
  }

  const saveError = (error) => {
    setRegisterTitle(`L'enregistrement a échoué ...`)
    setRegisterMessage(error)
    setShowRegisterMessage(true)
    setIsLoading(false)
  }

  const savedSuccess = () => {
    setIsLeadSaved(true)
    setRegisterTitle('Merci de votre enregistrement.')
    setRegisterMessage(`Restez à l'écoute et disponible pour un appel téléphonique de la part de votre gestionnaire de placements personnels pour vous aider à débuter`)
    setShowRegisterMessage(true)
    setIsLoading(false)
  }

  const modalclose = () => {
    setShowRegisterMessage(false)
  }

  const onClickRegister = () => {
    setIsLoading(true)
  }


  const scollToRegister = () => {
    signupRef.current.scrollIntoView()
  }

  const scrollHandler = () => {
    if (window.pageYOffset + window.innerHeight >= signupRef.current.offsetTop) {
      setIsBottomScreen(false)
    } else {
      setIsBottomScreen(true)
    }
  }
  return (
    <Container className={styles.bodyContainer}>
      <Row>
        <Col>
        <Image className={styles.headerMobile} width='100%' src='/img/flight/ch/headermobile.PNG' />
        <Image className={styles.header} width='100%' src='/img/flight/ch/header.PNG' />
        </Col>
      </Row>
      <Row>
    
        <Col md={8}>


          <RegisterMessage
            title={registerTitle}
            message={registerMessage}
            show={showRegisterMessage}
            modalclose={() => modalclose()}
          />


          
          
          <h1 className={styles.headLine}>
            <u>Les dernières nouvelles:</u> Le dernier investissement de Roger Federer a aidé les Suisses à gagner de l'argent depuis chez eux
           </h1>
          {/* <h5>
              {date}/{month}/{year}
           </h5> */}
          <p><i>Les Suisses gagnent déjà des millions d'euros tout en restant chez soi grâce à cette "lacune du droit des capitaux" - mais est-ce légal ?</i></p>
          <Image width='100%' src='/img/roger/fr4-1.jpg' />
          <p><em>Roger parle des nouveaux investissements secrets grâce auxquels des centaines de suisses sont devenus très riches.</em></p>
          <p><b>(SRF1)</b>- Le joueur de tennis et entrepreneur suisse Roger Federer est connu pour ne pas avoir de difficulté à parler de la façon dont il gagne réellement son argent.</p>
          <p>La semaine dernière, Roger Federer est apparu dans l’émission 10vor10 et a annoncé une nouvelle "faille dans la loi sur les capitaux" qui, selon lui, peut transformer n'importe qui en millionnaire en 3-4 mois. Federer a appelé tous les Suisses à profiter de cette grande opportunité avant que les grandes banques ne la ferment à jamais.</p>
          <p>Et en effet, peu après la fin de l'interview, un représentant de la banque suisse a appelé pour mettre fin à l'interview de Federer - mais il était déjà trop tard.</p>
          <p><strong>Voici les événements en détail :</strong></p>
          <p>Daniela Lager a invité Federer à diffuser le plus d'informations possibles sur son investissement auprès de ses téléspectateurs. Puis Federer a effectivement lâché la bombe suivante :</p>
          <p>"Une des raisons de mon succès est que je suis rapide à repérer les nouvelles opportunités et à en profiter sans aucune hésitation. Et en ce moment, ma "machine à imprimer l'argent" est un nouveau programme de négociation automatique, Immediate Edge. C'est aussi, en même temps, le meilleur que j'ai jamais vu pour se construire une petite fortune en un clin d'œil. C'est pourquoi je demande à chacun de l'essayer avant que les banques ne le ferment".</p>
          <p>Lager est devenue blanche comme un linge lorsque Federer a montré au public son application de banque mobile sur son téléphone, avec une énorme somme d'argent. Il a gagné cet argent uniquement grâce à ce logiciel. Non seulement Lager était stupéfaite, mais tous les téléspectateurs l’étaient aussi :</p>
          <Image width='100%' src='/img/roger/results.PNG' />
          <p>Malheureusement, le temps d'émission était terminé avant que Federer ne puisse faire une démonstration du logiciel. Cependant, nous avons pu réaliser une interview exclusive avec Roger Federer afin de présenter cet incroyable logiciel à nos lecteurs.</p>
         <h2><strong>UNE INTERVIEW EXCLUSIVE DE SRF1 AVEC ROGER FEDERER</strong></h2>
         <p>"Vous avez peut-être entendu parler de cette nouvelle "plate-forme d'investissement de crypto-monnaie" appelée Immediate Edge, qui permet aux suisses, ainsi qu’aux australiens, asiatiques et américains d’Amérique du Nord, à se constituer une richesse du jour au lendemain. Il se peut que vous soyez sceptiques car cela semble trop beau pour être vrai".</p>
         <p>Federer continue :</p>
         <p>Je vous comprends parce que j'ai pensé la même chose quand un ami à qui je fais confiance m'en a parlé. Mais après avoir vu de mes propres yeux combien d'argent il gagnait, j'ai dû essayer par moi-même.</p>
         <p>Je suis content d'avoir essayé parce que je viens de gagner une somme d'argent incroyable en très peu de temps. Je parle de dizaines de milliers d'euros par jour en pilote automatique. C'est en fait le moyen le plus rapide et le plus facile de gagner de l'argent. Et malheureusement, il ne tardera pas à ne plus être disponible. Soit parce qu'il y a trop d'"utilisateurs", soit parce que les banques vont retirer le programme du réseau pour toujours.</p>
         <Image width='100%' src='/img/roger/fr4-3.jpg' />
         <h2><strong>QU'EST-CE QU’EST EXACTEMENT "IMMEDIATE EDGE" ET COMMENT FONCTIONNE-T-IL ?</strong></h2>
         <p><b>L'idée derrière Immediate Edge est simple :</b>Offrir à chacun la possibilité de participer au boom de la crypto-monnaie, qui, contrairement à ce que la plupart des gens pensent, reste l'investissement le plus lucratif du 21e siècle.</p>
         <p>Même si le prix du bitcoin a chuté par rapport à son niveau record d'environ 20 000 euros par bitcoin, les négociants en tirent toujours d'énormes bénéfices. Pourquoi ? Parce qu’il existe, outre les bitcoins, des milliers d'autres crypto-monnaies qui sont échangées quotidiennement avec des marges de bénéfices élevées.</p>
         <p>Par exemple, certaines de ces crypto-monnaies sont "Ethereum", "Monero", "Zcash" ou "Ripple" et elles génèrent encore des rendements de plus de 10 000 % voire plus – et ce, pour tous les suisses.</p>
         <p>Avec Immediate Edge, vous pouvez gagner de l'argent avec toutes ces crypto-monnaies, même dans un marché dit « en baisse ». Grâce à l'intelligence artificielle (IA), les ventes à long terme ainsi que les ventes à court terme sont traitées automatiquement, de sorte qu’il vous est possible de gagner de l'argent 24 heures sur 24, pratiquement en dormant.</p>
         <p>La start-up FinTech Immediate Edge a été cofinancée par certains des plus brillants esprits technologiques tels que Richard Branson, Elon Musk et Bill Gates, pour n'en citer que quelques-uns.</p>
         <Image width='100%' src='/img/roger/xjfu04hzwv1fubhhu6l7.jpg' />
         <p><em>Bill Gates et Richard Branson ont parlé d'Immediate Edge lors du salon de l'électronique le plus passionnant du monde, le CES 2019 à Las Vegas.</em></p>
         <p>Ces génies de la technologie ont créé et/ou financé des entreprises de plusieurs milliards de dollars pour résoudre des problèmes complexes tels que dans les domaines du paiement en ligne, de l'informatique et des transports. Ils s'attaquent maintenant à un autre problème mondial : l'inégalité des richesses. Ils veulent permettre à chaque personne - qu'elle soit riche ou pauvre - de gagner suffisamment d'argent pour mener une vie heureuse et épanouie.</p>
         <h2><strong>LES GRANDES BANQUES NE VEULENT PAS QUE QUICONQUE SOIT AU COURANT DE CETTE MACHINE À ARGENT SECRÈTE</strong></h2>
         <p>Roger Federer poursuit son explication,</p>
         <p>"Nous constatons beaucoup de difficultés économiques, et c'est la solution que les gens attendaient. Jamais auparavant dans l'histoire nous n'avons eu une telle opportunité. Tout le monde peut en profiter pour se créer une importante richesse en très peu de temps".</p>
         <p>Parce qu'elle est si différente, beaucoup de gens hésitent à profiter de cette opportunité. D'autres n'osent même pas essayer parce que les grandes banques tentent faire passer ce programme pour illégal. Les grandes banques luttent activement contre les crypto-monnaies et les plateformes comme Immediate Edge, en disant qu’il s’agit d’escroquerie. Pourquoi ? Parce qu'elles craignent que, si les clients parviennent à faire des bénéfices par eux-mêmes, les profits de leurs entreprises vont diminuer.</p>
         <p>Cependant, la vérité est différente : La connaissance de la crypto-monnaie est en train de révolutionner nos vies et quiconque qui ne profite pas de cette opportunité, passe à côté d’une occasion en or. J'ai déjà reçu des menaces de la part de sociétés financières parce que je partage les points positifs de ce programme. J'ai pu ouvrir les yeux de nombreux suisses et ce n'est qu'une question de temps avant que de plus en plus de personnes utilisent "Immediate Edge".</p>
         <p>Mais j'ai aussi reçu des centaines de courriels de personnes me remerciant d'avoir partagé ce secret avec elles. Un de mes courriels préférés est celui dans lequel un jeune homme m’explique qu’il a acheté à son petit frère la voiture de ses rêves - une 911 Turbo, uniquement avec l'argent qu'il a gagné avec Immediate Edge. Cette plateforme améliore la vie des gens dans le monde entier.</p>
         <div className={styles.car}>
         <Image  width='70%' src='/img/roger/fr4-car.PNG' />

         </div>
         <p><em>Steﬀen Haller a utilisé une partie de ses gains qu’il a fait avec Immediate Edge pour offrir à son petit frère la voiture de ses rêves. Une façon inspirante d’investir sa richesse !</em></p>
         <h2><strong>IMMEDIATE FONCTIONNE-T-IL VRAIMENT ? NOUS L'AVONS SIMPLEMENT ESSAYÉ NOUS-MÊMES</strong></h2>
         <p>Notre rédacteur en chef voulait que nous mettions à l'épreuve Immediate Edge avant de publier l'interview de Lager. La direction voulait éviter de publier des informations qui pourraient faire perdre aux suisses leur argent qu’ils ont gagné.</p>
         <p>Notre équipe de rédaction a donc testé le programme Immediate Edge pour s'assurer qu'il fonctionnait comme Federer l’avait décrit. L'un de nos rédacteurs en ligne, Erol Kamisli, s'est porté volontaire pour investir son propre argent et tester Immediate Edge.</p>
         <p>La famille d'Erol lutte à la fin de chaque mois contre des problèmes financiers et espère qu’Immediate Edge pourra soulager sa situation financière. Il a donc décidé de tester ce programme et de publier ses résultats.</p>
         <Image width='100%' src='/img/roger/l4tebgz5cuohroqtccyi.jpg' />
         <p><em>La famille d'Erol lutte à la fin de chaque mois contre des problèmes financiers, et espère qu’"Immediate Edge" lui permette d’améliorer sa situation financière. Il a donc décidé de tester ce programme et de publier ses résultats.</em></p>
         <p><b>Rapports Erol :</b></p>
         <p>"Quand j'ai vu l’émission avec Roger Federer, j'ai cru qu'il plaisantait. Gagner de l'argent tout en restant chez soi n'est en principe qu'un rêve. J'ai décidé d'essayer quand même, à cause de ma situation financière – mais aussi pour être un bon journaliste.</p>
         <p>J'ai regardé une vidéo d'introduction au fonctionnement du programme et par la suite je me suis inscrit. La vidéo semblait un peu exagérée, mais c'était normal. En quelques heures, j'ai reçu un appel de mon conseiller personnel. Il a répondu à toutes mes questions et m'a ôté tous les doutes que j’avais. Il m'a assuré que je gagnerais de l'argent. Point final.</p>
         <p>Mon conseiller personnel m'a même promis que si je perdais un seul centime, il me rembourserait immédiatement mon investissement initial de 350 euros. C'est dire à quel point il était convaincu que cela allait changer ma vie. C'est le meilleur service clientèle que j’ai jamais eu, pas étonnant que les banques aient peur.</p>
         <p>Après avoir accédé à la plateforme, j'ai transféré mon premier investissement de 350 euros par carte de crédit, ce qui correspond à peu près au montant que ma famille dépense en "malbouffe" chaque mois. Non seulement nous devenons riches, mais nous faisons aussi quelque chose pour notre santé.</p>
         <p>Immediate Edge est une plateforme de commerce automatique de crypto-monnaie. Elle utilise des algorithmes d'IA de haute technologie et apprend constamment à prédire avec précision quand les crypto-monnaies vont augmenter et diminuer. Il achète et vend automatiquement 24 heures sur 24. La technologie a changé et nous a rendu la vie plus facile à tous les niveaux, alors pourquoi ne pas en tirer profit".</p>
         <h2><strong>LES RÉSULTATS D'EROL EN TEMPS RÉEL AVEC LE SYSTÈME</strong></h2>
         <p>"Dès la première heure de mon dépôt de 350 euros, le logiciel a commencé à négocier. J'étais extrêmement nerveux à l'idée que le système puisse perdre tout mon argent. Bien sûr, ma première transaction représenta une perte de 25 euros !</p>
         <p>Je me suis mis à transpirer un peu, je pensais avoir été arnaqué. J'allais appeler mon conseiller personnel et lui demander de me rendre mon argent. Mais je me suis ensuite souvenu de ce qu'il m'avait dit au téléphone : l'algorithme permet de réaliser 80 à 89 % des transactions avec succès. Il a dit que je ne gagnerai pas CHAQUE transaction, mais suffisamment pour être rentable dans l'ensemble.</p>
         <p>J'ai donc laissé le logiciel continuer à échanger pour moi et je l'ai surveillé de près. La transaction suivante a été rentable ! Elle m’a rapporté 19 € seulement, mais c'est mieux que rien. Ensuite, avec la transaction suivante, j’ai fait 51 € de profit. Puis 22 € de profit, pour un profit total de 67 €. Et tout cela en moins de 5 minutes !</p>
         <p>Je gagnais tellement d'argent que je n'en croyais pas mes yeux. Chaque fois que je cliquais sur F5 pour rafraîchir mon navigateur, le montant du gain était plus élevé. J'avais l'impression d'être sur un nuage.</p>
         <p>Je sais maintenant pourquoi Roger Federer est toujours de si bonne humeur, et surtout pourquoi les grandes banques ne veulent pas que les gens s'approchent de ce programme. A la fin de la journée, j'avais fait plus de 754 euros de bénéfices, avec seulement 350 euros de capital de départ ! J'étais tellement excité que je pouvais à peine dormir.</p>
         <p>Le lendemain matin, j'ai dû retourner au bureau de rédaction. Pour être honnête (et ne le dites pas à mon patron), il était difficile de me concentrer sur mon travail en sachant qu'Immediate Edge gagnait de l'argent pour moi.</p>
         <p>Je me suis faufilé plusieurs fois aux toilettes pour vérifier mes gains et ils n'ont cessé de s'accumuler (avec de petites pertes ici et là). En fin de compte, avant de mettre mes enfants au lit, mon solde était de 1 349,13 €. C'est plus que ce que je gagne par semaine en tant que journaliste !</p>
         <p>À la fin de la semaine, j'avais un total de 5 349,12 euros sur mon compte de trading. J'ai transféré 4 500 € sur mon compte courant, le reste étant à nouveau investi dans le "Immediate Edge". En deux jours, les 4 500 € ont été crédités sur mon compte. Il m'a fallu beaucoup de temps pour dépenser l'ensemble de la somme. C'était tout simplement incroyable !</p>
         <p>Erol a viré 4 500 € sur son compte chèque après sa première semaine de test avec Bitcoin Trader</p>
         <p><b>Erol continue</b></p>
         <p>"Je gagne 700 à 1 500 euros de plus par jour grâce à Immediate Edge. Je transfère régulièrement les bénéfices sur mon compte courant. En quelques clics, je fais transférer l'argent dans un délai de 24 à 48 heures. Je dois me pincer à chaque fois pour m'assurer que je ne rêve pas.</p>
         <p>J'ADORE mon travail, principalement parce que j'ai l'occasion de transmettre des messages importants (comme celui-ci) aux gens, sinon j'aurais déjà démissionné. J'ai prévu des vacances en famille à Bali pour fêter un peu le fait que nous sommes sortis de l'endettement et que notre situation financière est à nouveau dans le vert !</p>
         <p>Cela n'aurait pas été possible sans le courage et la générosité de M. Federer qui a tout expliquer à la télévision. Et je suis très heureux d'avoir pris le risque d'essayer moi-même Immediate Edge. Ma femme est enfin capable de rire à nouveau et mes enfants ont de nouveau un placard à jouets bien gonflé.</p>
         <p>Certains collègues sont embêtés de ne pas s'être inscrits à Immediate Edge il y a deux semaines. Mais maintenant, tout notre bureau s'est inscrit (y compris mon patron) et bien sûr, je suis le "héros" de l'innovation interne".</p>
         <h2><strong>COMMENT DÉMARRER AVEC L'AVANTAGE IMMÉDIAT (NOMBRE DE PLACES LIMITÉ)</strong></h2>
         <p>Pour commencer, il vous suffit d'avoir un ordinateur, un smartphone ou une tablette avec accès à Internet. Vous n'avez pas besoin de compétences particulières, mais vous devez savoir comment allumer un ordinateur et naviguer sur internet. Vous n'avez besoin d'aucune expérience en matière de technologie ou de cryptologie, car le logiciel et votre conseiller personnel vous aideront à garantir votre profit.</p>
         <p>Un autre avantage de ce programme est que vous pouvez commencer quand vous voulez. Vous pouvez créer votre propre temps de fonctionnement du programme - qu'il soit de 5 heures par semaine ou de 50 heures par semaine. Il suffit de démarrer le logiciel de commerce automatique quand vous voulez et vous pouvez l'arrêter quand vous le souhaitez (par contre je ne sais pas pourquoi vous feriez cela sachant que vous gagnez beaucoup d’argent).</p>
         <p>Afin de faire gagner du temps à nos lecteurs et de revoir le fonctionnement du programme, Erol a élaboré un guide pour les premières étapes.</p>
         
         <p>"Tout le monde veut être riche, mais personne ne sait comment y parvenir. C'est la meilleure chance de votre vie. Il n'a jamais été aussi facile de faire fortune pour pouvoir vivre la vie dont on rêve. Le programme ne sera pas disponible éternellement, alors ne manquez pas cette occasion" - Roger Federer</p>
         <p>(Conseil : même si vous ne voulez pas investir d'argent, je vous recommande de vous inscrire maintenant, car c'est gratuit et le nouvel enregistrement pour les suisses peut s’arrêter à tout moment)</p>
          <br />
          <div ref={signupRef}></div>
          {/* <Image width='100%' src='/img/ray/call.jpg' /> */}
          <div>
            <p className={styles.yellow}>
              <b> 
                  *Remplissez tous les détails avec les informations correctes pour éviter toute déception. </b>

            </p>
          </div>

          <LeadForm
            offer='Immediate Edge'
            geo='CH'
            savedSuccess={() => savedSuccess()}
            saveError={(error) => saveError(error)}
            btnDisabled={isLeadSaved}
            onClickRegister={() => onClickRegister()}
          />
         
           </Col>
        <Col md={4} className={styles.sideBar}>
        <Image width='100%' src='/img/roger/rev1.PNG' />
        <Image width='100%' src='/img/roger/rev2.PNG' />
        <Image width='100%' src='/img/roger/rev3.PNG' />
        <Image width='100%' src='/img/roger/rev4.PNG' />
        <Image width='100%' src='/img/roger/rev5.PNG' />
        <Image width='100%' src='/img/roger/rev6.PNG' />
        <Image width='100%' src='/img/roger/rev7.PNG' />
        </Col>
    
        {/* {
          isBottomScreen && !isLeadSaved ? <CtaButton lang='ENG' ctaClick={() => scollToRegister()} /> : ''

        } */}

      </Row>

    </Container>
  )
}

export default Lp