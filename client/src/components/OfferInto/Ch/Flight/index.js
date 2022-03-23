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
            <u>Les dernières nouvelles:</u> Emma prend un emploi faiblement rémunéré en tant que femme de ménage et quitte son emploi après être devenue millionnaire.
           </h1>
          {/* <h5>
              {date}/{month}/{year}
           </h5> */}
          <Image width='100%' src='/img/flight/ch/AsSeen.jpg' /> 
          <Image width='100%' src='/img/flight/ch/in18be2n-main.jpg' />
          <p>
            <em>L'année dernière, de plus en plus de Suisses recherchaient des revenus supplémentaires. Si cela s'applique à vous aussi, ne manquez pas l'histoire à succès d'Emma.</em>
          </p>

          <p>            
						Emma vit à Zurich, avec son mari Ludo et leur jeune fille. Mais il y a quelques mois à peine, ils étaient au bord de la faillite après que la compagnie aérienne pour laquelle elle travaillait ait dû licencier presque tout son personnel. Emma a perdu son emploi et le couple était sur le point d'être expulsé de leur domicile.
          </p>
          <p>
						Emma est ensuite allée travailler comme femme de ménage et a travaillé des heures sans fin pour aider sa famille et en quelques mois, elle était millionnaire avec 1 320 000 CHF sur son compte bancaire. C'est l'histoire d'Emma.
          </p>
          <p>
            <b>Emma dit:</b> En mars, les choses se sont si mal passées pour la compagnie aérienne car de nombreux vols ont été annulés en raison de la crise mondiale. C'était une période émouvante pour nous tous. Nous ne savions pas ce qui allait se passer jusqu'à ce qu'ils aient à renvoyer la plupart d'entre nous.
          </p>
          <p>
						Mon mari pensait que nous ne survivrions pas financièrement à cela parce que personne ne partirait en vacances ou en affaires dans un avenir prévisible en ces temps difficiles.
          </p>
          <p>
						«J'ai signé un contrat pour travailler comme femme de ménage. Cela ne rapportait pas beaucoup d'argent, mais c'était mieux que rien. Le travail de femme de ménage est assez difficile, surtout après avoir travaillé comme hôtesse de l'air chez Swiss Airlines pendant que mon mari restait à la maison avec notre enfant. J'ai raté les voyages et mes amis de Swiss Airlines, mais je n'avais pas le choix. Jusque-là, j'avais toujours travaillé comme hôtesse de l'air et je ne savais vraiment pas à quoi m'attendre en tant que femme de ménage.
          </p>
          <p>            
						Heureusement, ils cherchaient des employés, alors j'ai tout de suite trouvé un emploi quand je suis arrivé. Les premières semaines ont été difficiles mais la pensée de ma famille m'a permis de continuer et rien ne pouvait m'empêcher de gagner mon salaire.
          </p>
          <p>
						Je savais que mon salaire ne suffirait pas à nous sortir de problèmes financiers et j'étais déterminé à trouver un moyen de nous débarrasser de nos dettes. J'avais besoin de plus d'argent que ce que je gagnais de mon travail.
          </p>
          <p>
            
						Pendant mon temps libre, je regardais divers groupes Facebook à la recherche d'un emploi lorsque je suis tombé sur des conseils sur la façon de gagner de l'argent en ligne via Bit Profit 
						. Je n'ai jamais été bon en maths, mais cela me semblait assez facile, alors j'ai décidé d'essayer.
          </p>
          <p>
          Après un court tutoriel, j'ai pris 250 CHF et placé mon premier investissement. J'étais nerveuse mais aussi contente en récupérant mon investissement et en réalisant un bénéfice supplémentaire de 500 CHF. J'ai rapidement appuyé sur le bouton de retrait d'argent pour transférer l'argent sur mon compte bancaire afin de ne pas le perdre. L'argent était sur mon compte dans les deux heures.
          </p>
          <Image width='100%' src='/img/flight/ch/in18be2n-2.jpg' />
          <p>
            <b>
            "Je me suis connecté tous les jours pour trader. C'était aussi simple que ça."
            </b>
          </p>
          <p>
          Au cours des mois suivants, les bénéfices affluent, ce fut la période la plus excitante de ma vie. Après 4 mois, mon compte s'élevait à 292 750 CHF. Je n'oublierai jamais qu'après 9 mois, j'avais atteint un solde de 1 000 000 CHF. Mes collègues n'en savaient rien et je ne l'avais même pas dit à mon mari.
          </p>
          <p>
            <b>Je me suis dit que je retirerais l'argent une fois que j'aurais atteint le million de CHF mais je ne pouvais pas m'arrêter alors j'ai continué</b>
          </p>
          <p>
          En fin de compte, j'ai dit à mon mari qu'il ne pouvait pas y croire. Il m'a même envoyé à la banque pour retirer 10 000 CHF pour prouver que je ne plaisantais pas. À ce moment-là, il croyait que nous n'étions plus pauvres.
          </p>
          <p>
          J'ai acheté une nouvelle voiture, payé un acompte pour notre nouvelle maison à Genève et finalement j'ai payé nos dettes, tout s'est bien passé.
          </p>
          <p>
          C'est un sentiment formidable de savoir que vous n'avez pas à vous soucier tous les jours de savoir si votre famille sera expulsée de la maison ou que vous serez renvoyée par votre patron et que vous ne pourrez pas nourrir votre fille.
          </p>
          <h2>
						Mais de quoi parle exactement Emma?
					</h2>
          <p>
          Emma a pu gagner de l'argent supplémentaire en ligne grâce à un système en ligne qui enrichit tranquillement quelques Suisses ordinaires depuis des décennies.
          </p>
          <p>
          Une source d'un cabinet de conseil de premier plan a déclaré: «Cela fait maintenant beaucoup plus de millionnaires hebdomadaires que la loterie. En effet, nous constatons que 90% des nouveaux clients à la recherche de conseils patrimoniaux en tirent désormais leur principal revenu. C'est incroyable qu'un si grand nombre de ces personnes n'occupent que des emplois normaux, comme dans la construction, au bureau ou même au chômage, et maintenant ils gagnent plus que les meilleurs PDG de Londres, New York ou Tokyo.
          </p>
          <p>
          Après des recherches approfondies, chez De Gazet, nous avons été submergés par les résultats.
          </p>
          <p>
          Les experts l'appellent « Bitcoin trading ».
          </p>
          <p>
          C'est la machine à gagner de l'argent la plus rapide de l'histoire. Il est très probable que vous entendiez parler des bases sur CNN, NBC et Fox et que vous en lirez éventuellement dans USA Today, Time, Fortune et votre journal local.
          </p>
          <p>
          Cela a commencé dans les années 1990 et depuis lors, de riches banquiers et d'autres membres du 1% ont fait littéralement des milliards et des milliards de CHF à partir de rien. C'est 100 fois plus efficace que de démarrer une entreprise. Pas de tracas, pas d '«employés», pas de ventes.
          </p>
          <p>
          Nous avons découvert qu'BitProfit gagne de l'argent en vendant lorsque le prix augmente ET en achetant lorsque le prix baisse. Ceci est également appelé vente à court terme, vous venez d'ouvrir une position et le profit arrive rapidement.
          </p>
          <p>
          Il est surprenant que 9 personnes sur 10 n'en aient jamais entendu parler. Nous ne parlons pas de plates-formes compliquées ou de quelque chose comme ça ici ... Ce système est si simple que vous pouvez l'utiliser sans avoir aucune connaissance du trading ... Même si vous n'avez jamais investi dans votre vie.
          </p>
          <p>
            
						Pour être honnête:
					
          </p>
          <ul>            
          <li>Vous n'avez pas besoin de savoir quoi que ce soit sur le trading (moins vous en savez, mieux c'est, vous n'êtes pas biaisé);</li>
          <li>Vous n'avez pas besoin de savoir quoi que ce soit sur l'investissement;</li>
          <li>Vous n'avez PAS besoin de beaucoup d'argent;</li>
          <li>Et vous n'avez PAS besoin de beaucoup de temps libre;</li>
          </ul>
          <p>
          Tout ce que vous devez savoir, c'est que vous pouvez simplement commencer par transférer un petit montant de 250 CHF sur un compte 100% sécurisé et un compte de courtier gratuit et puis commencer à récupérer les gains en un clic de souris.
          </p>
          <p>
          Il n'y a pas de montant maximum. Les riches peuvent déposer 1 million de CHF, 10 millions de CHF ou même 100 millions de CHF. Et ils verront tous que le solde de ce compte augmentera dans quelques heures ...
          </p>
          <p>
          Tout le monde peut maîtriser cela en un rien de temps. Vous n'avez besoin d'aucune expérience d'investissement ou d'expérience en affaires. Vous n'avez pas besoin d'un diplôme universitaire. Vous n'avez pas besoin d'être bon en mathématiques non plus. Il n'y a pas de travail difficile et vous n'avez rien à vendre. Vous gardez le contrôle et vous n'avez pas à suivre des directives compliquées. Aucune conjecture ou «chance» n'est requise. Une fois que vous avez commencé, cela ne prend que quelques heures par semaine pour tout faire. Et vous pouvez tout faire à la maison, ou où vous voulez, tout en faisant d'autres choses aussi!
          </p>
          <p>
          C'est encore plus étonnant: là où une action ou une obligation normale fait normalement un maigre bénéfice de 10%, un «avantage immédiat» peut rapporter 10, 50 ou même 200 fois plus! C'est génial, non?
          </p>
          <p>
          C'est en moyenne 44 fois votre argent! Cela suffit pour convertir chaque 250 CHF en 25710 CHF ... Et chaque 490 CHF en 57510 CHF ...
          </p>
          <p>
          Cela semble trop beau pour être vrai, n'est-ce pas? C'est ce que ces gens ordinaires ont d'abord pensé:
          </p>
          <ul>
            <li>Eric de Jong, par exemple, a fait une petite fortune de 11 520 875 CHF avec une expérience d'investissement antérieure NUL ";</li>
            <li>Colinda Timmermans s'est enrichie de centaines de milliers d'euros à l'âge de 24 ans, alors qu'elle a commencé avec 2 000 CHF de son père;</li>
            <li>A 27 ans, Cees van der Steen avait plus de 5 300 000 CHF dans sa banque et il dit «La vie est belle».</li>
            <li>Le capital net d'Eva de Bruyn s'élève à plus de 6 chiffres en quelques semaines!</li>
          </ul>
          <Image width='100%' src='/img/my/checks.gif' />
          <p>
            <b>"Ils ont tous gagné BEAUCOUP d'argent en investissant pas plus de 250 CHF - 500 CHF …"</b>
          </p>
          <p>
          Avant de continuer, nous devons vous avertir. L'élite financière est terrifiée à l'idée que davantage de Suisses le fassent. Il existe déjà plusieurs banques puissantes qui sont très remontées à ce sujet. Les grandes sociétés de courtage sont à bout parce qu'elles perdent des millions et avec le gouvernement, elles font tout ce qui est en leur pouvoir pour INTERDIRE cette méthode aux Suisses normaux et empêcher davantage de citoyens de la «classe ouvrière» de devenir riches.
          </p>
          
          <h2>
          La preuve: l'un de nos lecteurs a converti 250 CHF en 10000 CHF
          </h2>
       
          <p>
          Bien sûr, vous pourriez être sceptique que quelque chose d'aussi simple puisse être si rentable. C'est pourquoi les éditeurs de notre magazine ont décidé de mettre ce système à l'épreuve - et nos sceptiques ont été complètement époustouflés.
          </p>
          <p>
          Il n'a pas été difficile de trouver un volontaire. Notre boîte de réception était inondée de demandes et nous avons finalement choisi Marc Keizer comme l'heureux gagnant. Il est père de 42 ans et vit avec sa femme à Bruxelles. En tant qu'électricien, il pouvait toujours payer ses factures, mais il n'avait jamais assez d'argent pour offrir à sa famille des vacances bien méritées. Et comme il n'avait aucune compétence en informatique, aucun diplôme ou aucune connaissance du fonctionnement des marchés financiers, il était le candidat idéal pour ce test.
          </p>
          <Image width='100%' src='/img/flight/ch/euro-money.jpg' />
          <p>
            <b>Marc Keizer, 5 jours après son inscription: «Je n'en croyais pas mes yeux. Je n'avais pas besoin d'apprendre et cela ne nécessitait presque aucun travail »</b>
          </p>
          <p>
           <b>Jour 1:</b>
          </p>
          <p>
          «Tout d'abord, j'ai créé un compte sur la page d'inscription BitProfit. Il m'a fallu environ 2 minutes pour saisir mon nom, mon e-mail, mon numéro de téléphone et mon mot de passe.
          </p>
          <p>
          Pour activer le système, j'ai dû transférer 250 CHF sur mon nouveau portefeuille en ligne. Comme il ne s'agissait que d'un virement bancaire, je n'ai pas eu à payer de frais. J'étais sûr de pouvoir récupérer mon argent à tout moment.
          </p>
          <p>
          Je me suis senti très enthousiaste quand j'ai commencé à trader après toutes les nouvelles concernant des personnes qui avaient fait d'énormes sommes d'argent avec ce système. Ensuite, j'ai reçu mon appel gratuit. Serait-ce vraiment aussi simple?
          </p>
          <p>
            <b>Jour 2:</b>
          </p>
          <p>
          Le deuxième jour, je me suis réveillé et me suis précipité pour travailler. J'ai dormi trop longtemps et j'allais être en retard. Quand je suis arrivé au travail, j'ai vérifié mes e-mails et pris une tasse de café. Puis-je me suis souvenu que j'avais oublié de vérifier mes transactions? Il était déjà 10 h 45, donc 12 heures s'étaient écoulées depuis que j'ai placé mon investissement. Je me suis connecté au site, me sentant nerveux et excité en même temps. Mon argent serait-il toujours là? Je me sentais un peu anxieux...
          </p>
          <p>
          J'ai ouvert le tableau de bord du site, au début, je pensais avoir fait une erreur. Était-ce mon compte? J'ai vérifié à nouveau le nom du compte et oui, c'était mon compte. À ce moment-là, j'ai presque renversé mon café! Je pouvais voir que le solde à l'époque était incroyable de 1 224 CHF! En seulement 12 heures, pendant que je dormais, le compte avait fait 1 004 CHF de profit sur les 250 CHF que j'avais déposés. Je suis content d'avoir pensé à prendre une capture d'écran pour que vous puissiez voir ce que j'ai vu ce matin ci-dessous. J'ai envoyé un message à mon mentor de compte personnel. Étonnamment, il n'était pas aussi surpris que moi. «C'est normal», dit-il. "Pour être honnête, nous voyons souvent des gens gagner plus que cela dans les 12 premières heures." J'ai été impressionné, cette chose a vraiment fonctionné. Pour le reste de la journée, j'ai eu du mal à me concentrer sur mon travail.
          </p>
          <Image width='100%' src='/img/flight/ch/profits.jpg' />
          <p>
            <b>Le solde du compte de Marc après un jour ...</b>
          </p>
          <p>
            <b>Jour 3:</b>
            </p>
            <p>
            «Le troisième jour où je faisais du trading, j'y suis allé plus profondément. Je pouvais voir que ce n'était pas un système compliqué pour les gestionnaires de fonds et les courtiers. C'était facile et pas seulement ça, c'était très clairement expliqué de comment j'avais fait autant. J'ai finalement commencé à comprendre pourquoi de célèbres milliardaires appellent cela une nouvelle économie: 100 fois plus puissante que tout ce que j'ai jamais imaginé. Avant de me coucher ce soir-là, le solde de mon portefeuille était d'un montant incroyable de 15 560 CHF. "
          </p>
          <p>
            <b>Jour 4:</b>
          </p>
          <p>
          «Cela s'est très bien passé aujourd'hui. Mon mentor chez BitProfit m'a expliqué que plus je gagnais d'argent, plus je pouvais potentiellement gagner plus. J'ai fait quelques autres transactions. Le solde à la fin de la journée était de 30 934 CHF. C'est bien plus que ce que je gagne par an. En seulement 4 jours remarquables, j'avais gagné assez pour parcourir le monde avec ma femme, et toujours en première classe! Elle ne savait même pas mon succès. J'ai réservé une chambre dans un hôtel cinq étoiles pour le week-end pour lui raconter cette merveilleuse histoire. J'ai décidé de rembourser sa dette étudiante afin qu'elle puisse poursuivre son rêve de devenir acheteuse de mode. Cet argent changerait nos vies.
          </p>
          <p>
            <b>Jour 5:</b>
          </p>
          <p>
          «La première chose que j'ai faite a été de vérifier mes statistiques sur mon téléphone. Je n'avais pas à me soucier de me rendre au travail à l'heure, car j'avais déjà organisé une limousine ce matin-là pour venir me chercher. Bien sûr, cela coûte beaucoup d'argent, mais je voulais voir le visage de mon patron quand je suis arrivé au travail dans une limousine longue et noire! J'ai décidé que je ne voulais pas travailler tous les jours pour peu d'argent alors que je pouvais gagner tellement plus en travaillant à domicile (si vous pouvez appeler cela du travail!) J'ai quitté mon travail et j'ai donné un grand pot de départ à tous mes amis du bureau. Certains pensaient que j'avais peut-être gagné à la loterie. Je ne leur ai pas dit mon secret. Je voulais attendre et le dire d'abord à ma femme.
          </p>
          <p>
            <b>Jour 6:</b>
          </p>
          <p>
          «C'est le dernier jour de mes rapports de trading. C'est dimanche et notre «journée famille», donc je ne travaille pas aujourd'hui. Heureusement, mon solde augmente encore aujourd'hui. Peu importe que je passe du temps avec ma famille ou que je fasse autre chose, les marchés sont ouverts tous les jours donc je continue à faire des bénéfices. À l'heure actuelle, mon solde est de 51 200 CHF et il ne cesse d'augmenter.
          </p>
          <p>
          «J'ai décidé de transférer 5 000 CHF sur mon compte d'épargne. En moins de 5 minutes, j'ai reçu un appel du directeur de la banque qui se demandait comment je pouvais gagner autant d'argent. Quand je lui ai dit que j'avais accès à BitProfit, il m'a dit que je n'étais pas le premier à gagner autant d'argent avec ce système et m'a invité à parler d'opportunités d'investissement. 
          </p>
          <p>
          Il y a à peine trois semaines, je ne pouvais même pas obtenir de prêt hypothécaire et maintenant la banque m'invite à un événement professionnel spécial. C'est incroyable à quelle vitesse les choses peuvent changer ... »
          </p>
          <h2>Et finalement</h2>
          <p>En tant que consommateur, vous pouvez avoir des doutes sur l'effet de BitProfit, mais vous devriez vraiment l'essayer; les résultats sont réels. Les preuves tirées des témoignages en disent assez. Là, vous ne pouvez pratiquement rien perdre ici car la plateforme vous propose un remboursement intégral de votre tout premier dépôt.</p>
          <p>Vous n'entendrez pas beaucoup parler de cela dans les médias grand public car c'est l'un des secrets les mieux gardés de Wall Street. Ils ne veulent pas que les gens normaux gagnent autant d'argent. Parce que la richesse signifie le pouvoir. Et c'est quelque chose qu'ils n'aiment pas partager.</p>
          <p>En ces temps économiques difficiles, tout le monde a droit à une chance de gagner de l'argent supplémentaire et, malheureusement, de tels programmes ne sont disponibles que pour un groupe sélectionné.</p>
          <p>Comment savoir si un compte BitProfit est le bon choix pour vous? Vous ne pouvez pas le savoir non plus, mais si vous avez au moins 250 CHF dans votre compte d'épargne, vous avez une obligation morale envers votre famille - pour votre propre bien-être et pour celui des générations futures - de regarder au moins cela.</p>
          <p>Nous pensons que tout le monde doit faire la même chose qu'Emma.<u>Mais il est temps d'agir, car vous ne voulez pas rater ça.</u></p>
           <h2>Les instructions étape par étape d'Emma pour un trading réussi</h2>
           <ol>
             <li>Vous devez d'abord créer un compte, si cela est toujours possible. La page du site Web s'ouvre dans le même écran. Voici ce que vous verrez en premier:</li>
             <li>Si vous vous inscrivez pour un compte gratuit, des conseillers professionnels vous contacteront pour vérifier votre nouveau compte et vous aurez amplement l'occasion de vous assurer que ce compte vous convient, avant d'effectuer des dépôts, à travers tous vos répondre aux questions d'une manière claire et non technique.</li>
             <li>Une fois que vous êtes inscrit, appuyez sur le bouton «Déposer de l'argent» pour déposer 250 CHF ou plus sur votre compte. Le montant que vous déposez est le montant avec lequel vous échangerez - BitProfit est totalement gratuit et vous pouvez retirer votre argent à tout moment!</li>
           </ol>
         <br />
          <br />
          <div ref={signupRef}></div>
          <Image width='100%' src='/img/ray/call.jpg' />
          <div>
            <p className={styles.yellow}>
              <b> 
              En raison de la très forte demande, il ne reste plus que 100 places. Les candidats sont acceptés sur la base du «premier arrivé, premier servi» 
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
          <p>Lorsque nous avons demandé à Emma de montrer son portefeuille électronique, comme je n'avais jamais vu autant d'argent auparavant, elle a accepté avec joie:</p>
          <p>Pour ceux qui ont encore des doutes (comme moi), voici une photo de son portefeuille électronique:</p>
          <Image width='100%' src='/img/flight/ch/w17-check.jpg' />
           </Col>
        <Col md={4} className={styles.sideBar}>
        <Image width='100%' src='/img/flight/ch/rev1.PNG' />
        <Image width='100%' src='/img/flight/ch/rev2.PNG' />
        <Image width='100%' src='/img/flight/ch/rev3.PNG' />
        <Image width='100%' src='/img/flight/ch/rev4.PNG' />
        <Image width='100%' src='/img/flight/ch/rev6.PNG' />
        <Image width='100%' src='/img/flight/ch/rev7.PNG' />
        <Image width='100%' src='/img/flight/ch/rev8.PNG' />
        </Col>
    
        {/* {
          isBottomScreen && !isLeadSaved ? <CtaButton lang='ENG' ctaClick={() => scollToRegister()} /> : ''

        } */}

      </Row>

    </Container>
  )
}

export default Lp