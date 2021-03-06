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
    setRegisterTitle('Registeration Failed...')
    setRegisterMessage(error)
    setShowRegisterMessage(true)
    setIsLoading(false)
  }

  const savedSuccess = () => {
    setIsLeadSaved(true)
    setRegisterTitle('Thank you for registering.')
    setRegisterMessage('Stay tuned and available for a call from your personal investment manager to help you get started')
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
            <u>Les derni??res nouvelles:</u> Emma prend un emploi faiblement r??mun??r?? en tant que femme de m??nage et quitte son emploi apr??s ??tre devenue millionnaire.
           </h1>
          {/* <h5>
              {date}/{month}/{year}
           </h5> */}
          <Image width='100%' src='/img/flight/ch/AsSeen.jpg' /> 
          <Image width='100%' src='/img/flight/ch/in18be2n-main.jpg' />
          <p>
            <em>L'ann??e derni??re, de plus en plus de Suisses recherchaient des revenus suppl??mentaires. Si cela s'applique ?? vous aussi, ne manquez pas l'histoire ?? succ??s d'Emma.</em>
          </p>

          <p>            
						Emma vit ?? Zurich, avec son mari Ludo et leur jeune fille. Mais il y a quelques mois ?? peine, ils ??taient au bord de la faillite apr??s que la compagnie a??rienne pour laquelle elle travaillait ait d?? licencier presque tout son personnel. Emma a perdu son emploi et le couple ??tait sur le point d'??tre expuls?? de leur domicile.
          </p>
          <p>
						Emma est ensuite all??e travailler comme femme de m??nage et a travaill?? des heures sans fin pour aider sa famille et en quelques mois, elle ??tait millionnaire avec 1 320 000 CHF sur son compte bancaire. C'est l'histoire d'Emma.
          </p>
          <p>
            <b>Emma dit:</b> En mars, les choses se sont si mal pass??es pour la compagnie a??rienne car de nombreux vols ont ??t?? annul??s en raison de la crise mondiale. C'??tait une p??riode ??mouvante pour nous tous. Nous ne savions pas ce qui allait se passer jusqu'?? ce qu'ils aient ?? renvoyer la plupart d'entre nous.
          </p>
          <p>
						Mon mari pensait que nous ne survivrions pas financi??rement ?? cela parce que personne ne partirait en vacances ou en affaires dans un avenir pr??visible en ces temps difficiles.
          </p>
          <p>
						??J'ai sign?? un contrat pour travailler comme femme de m??nage. Cela ne rapportait pas beaucoup d'argent, mais c'??tait mieux que rien. Le travail de femme de m??nage est assez difficile, surtout apr??s avoir travaill?? comme h??tesse de l'air chez Swiss Airlines pendant que mon mari restait ?? la maison avec notre enfant. J'ai rat?? les voyages et mes amis de Swiss Airlines, mais je n'avais pas le choix. Jusque-l??, j'avais toujours travaill?? comme h??tesse de l'air et je ne savais vraiment pas ?? quoi m'attendre en tant que femme de m??nage.
          </p>
          <p>            
						Heureusement, ils cherchaient des employ??s, alors j'ai tout de suite trouv?? un emploi quand je suis arriv??. Les premi??res semaines ont ??t?? difficiles mais la pens??e de ma famille m'a permis de continuer et rien ne pouvait m'emp??cher de gagner mon salaire.
          </p>
          <p>
						Je savais que mon salaire ne suffirait pas ?? nous sortir de probl??mes financiers et j'??tais d??termin?? ?? trouver un moyen de nous d??barrasser de nos dettes. J'avais besoin de plus d'argent que ce que je gagnais de mon travail.
          </p>
          <p>
            
						Pendant mon temps libre, je regardais divers groupes Facebook ?? la recherche d'un emploi lorsque je suis tomb?? sur des conseils sur la fa??on de gagner de l'argent en ligne via Bit Profit 
						. Je n'ai jamais ??t?? bon en maths, mais cela me semblait assez facile, alors j'ai d??cid?? d'essayer.
          </p>
          <p>
          Apr??s un court tutoriel, j'ai pris 250 CHF et plac?? mon premier investissement. J'??tais nerveuse mais aussi contente en r??cup??rant mon investissement et en r??alisant un b??n??fice suppl??mentaire de 500 CHF. J'ai rapidement appuy?? sur le bouton de retrait d'argent pour transf??rer l'argent sur mon compte bancaire afin de ne pas le perdre. L'argent ??tait sur mon compte dans les deux heures.
          </p>
          <Image width='100%' src='/img/flight/ch/in18be2n-2.jpg' />
          <p>
            <b>
            "Je me suis connect?? tous les jours pour trader. C'??tait aussi simple que ??a."
            </b>
          </p>
          <p>
          Au cours des mois suivants, les b??n??fices affluent, ce fut la p??riode la plus excitante de ma vie. Apr??s 4 mois, mon compte s'??levait ?? 292 750 CHF. Je n'oublierai jamais qu'apr??s 9 mois, j'avais atteint un solde de 1 000 000 CHF. Mes coll??gues n'en savaient rien et je ne l'avais m??me pas dit ?? mon mari.
          </p>
          <p>
            <b>Je me suis dit que je retirerais l'argent une fois que j'aurais atteint le million de CHF mais je ne pouvais pas m'arr??ter alors j'ai continu??</b>
          </p>
          <p>
          En fin de compte, j'ai dit ?? mon mari qu'il ne pouvait pas y croire. Il m'a m??me envoy?? ?? la banque pour retirer 10 000 CHF pour prouver que je ne plaisantais pas. ?? ce moment-l??, il croyait que nous n'??tions plus pauvres.
          </p>
          <p>
          J'ai achet?? une nouvelle voiture, pay?? un acompte pour notre nouvelle maison ?? Gen??ve et finalement j'ai pay?? nos dettes, tout s'est bien pass??.
          </p>
          <p>
          C'est un sentiment formidable de savoir que vous n'avez pas ?? vous soucier tous les jours de savoir si votre famille sera expuls??e de la maison ou que vous serez renvoy??e par votre patron et que vous ne pourrez pas nourrir votre fille.
          </p>
          <h2>
						Mais de quoi parle exactement Emma?
					</h2>
          <p>
          Emma a pu gagner de l'argent suppl??mentaire en ligne gr??ce ?? un syst??me en ligne qui enrichit tranquillement quelques Suisses ordinaires depuis des d??cennies.
          </p>
          <p>
          Une source d'un cabinet de conseil de premier plan a d??clar??: ??Cela fait maintenant beaucoup plus de millionnaires hebdomadaires que la loterie. En effet, nous constatons que 90% des nouveaux clients ?? la recherche de conseils patrimoniaux en tirent d??sormais leur principal revenu. C'est incroyable qu'un si grand nombre de ces personnes n'occupent que des emplois normaux, comme dans la construction, au bureau ou m??me au ch??mage, et maintenant ils gagnent plus que les meilleurs PDG de Londres, New York ou Tokyo.
          </p>
          <p>
          Apr??s des recherches approfondies, chez De Gazet, nous avons ??t?? submerg??s par les r??sultats.
          </p>
          <p>
          Les experts l'appellent ?? Bitcoin trading ??.
          </p>
          <p>
          C'est la machine ?? gagner de l'argent la plus rapide de l'histoire. Il est tr??s probable que vous entendiez parler des bases sur CNN, NBC et Fox et que vous en lirez ??ventuellement dans USA Today, Time, Fortune et votre journal local.
          </p>
          <p>
          Cela a commenc?? dans les ann??es 1990 et depuis lors, de riches banquiers et d'autres membres du 1% ont fait litt??ralement des milliards et des milliards de CHF ?? partir de rien. C'est 100 fois plus efficace que de d??marrer une entreprise. Pas de tracas, pas d '??employ??s??, pas de ventes.
          </p>
          <p>
          Nous avons d??couvert qu'BitProfit gagne de l'argent en vendant lorsque le prix augmente ET en achetant lorsque le prix baisse. Ceci est ??galement appel?? vente ?? court terme, vous venez d'ouvrir une position et le profit arrive rapidement.
          </p>
          <p>
          Il est surprenant que 9 personnes sur 10 n'en aient jamais entendu parler. Nous ne parlons pas de plates-formes compliqu??es ou de quelque chose comme ??a ici ... Ce syst??me est si simple que vous pouvez l'utiliser sans avoir aucune connaissance du trading ... M??me si vous n'avez jamais investi dans votre vie.
          </p>
          <p>
            
						Pour ??tre honn??te:
					
          </p>
          <ul>            
          <li>Vous n'avez pas besoin de savoir quoi que ce soit sur le trading (moins vous en savez, mieux c'est, vous n'??tes pas biais??);</li>
          <li>Vous n'avez pas besoin de savoir quoi que ce soit sur l'investissement;</li>
          <li>Vous n'avez PAS besoin de beaucoup d'argent;</li>
          <li>Et vous n'avez PAS besoin de beaucoup de temps libre;</li>
          </ul>
          <p>
          Tout ce que vous devez savoir, c'est que vous pouvez simplement commencer par transf??rer un petit montant de 250 CHF sur un compte 100% s??curis?? et un compte de courtier gratuit et puis commencer ?? r??cup??rer les gains en un clic de souris.
          </p>
          <p>
          Il n'y a pas de montant maximum. Les riches peuvent d??poser 1 million de CHF, 10 millions de CHF ou m??me 100 millions de CHF. Et ils verront tous que le solde de ce compte augmentera dans quelques heures ...
          </p>
          <p>
          Tout le monde peut ma??triser cela en un rien de temps. Vous n'avez besoin d'aucune exp??rience d'investissement ou d'exp??rience en affaires. Vous n'avez pas besoin d'un dipl??me universitaire. Vous n'avez pas besoin d'??tre bon en math??matiques non plus. Il n'y a pas de travail difficile et vous n'avez rien ?? vendre. Vous gardez le contr??le et vous n'avez pas ?? suivre des directives compliqu??es. Aucune conjecture ou ??chance?? n'est requise. Une fois que vous avez commenc??, cela ne prend que quelques heures par semaine pour tout faire. Et vous pouvez tout faire ?? la maison, ou o?? vous voulez, tout en faisant d'autres choses aussi!
          </p>
          <p>
          C'est encore plus ??tonnant: l?? o?? une action ou une obligation normale fait normalement un maigre b??n??fice de 10%, un ??avantage imm??diat?? peut rapporter 10, 50 ou m??me 200 fois plus! C'est g??nial, non?
          </p>
          <p>
          C'est en moyenne 44 fois votre argent! Cela suffit pour convertir chaque 250 CHF en 25710 CHF ... Et chaque 490 CHF en 57510 CHF ...
          </p>
          <p>
          Cela semble trop beau pour ??tre vrai, n'est-ce pas? C'est ce que ces gens ordinaires ont d'abord pens??:
          </p>
          <ul>
            <li>Eric de Jong, par exemple, a fait une petite fortune de 11 520 875 CHF avec une exp??rience d'investissement ant??rieure NUL ";</li>
            <li>Colinda Timmermans s'est enrichie de centaines de milliers d'euros ?? l'??ge de 24 ans, alors qu'elle a commenc?? avec 2 000 CHF de son p??re;</li>
            <li>A 27 ans, Cees van der Steen avait plus de 5 300 000 CHF dans sa banque et il dit ??La vie est belle??.</li>
            <li>Le capital net d'Eva de Bruyn s'??l??ve ?? plus de 6 chiffres en quelques semaines!</li>
          </ul>
          <Image width='100%' src='/img/my/checks.gif' />
          <p>
            <b>"Ils ont tous gagn?? BEAUCOUP d'argent en investissant pas plus de 250 CHF - 500 CHF ???"</b>
          </p>
          <p>
          Avant de continuer, nous devons vous avertir. L'??lite financi??re est terrifi??e ?? l'id??e que davantage de Suisses le fassent. Il existe d??j?? plusieurs banques puissantes qui sont tr??s remont??es ?? ce sujet. Les grandes soci??t??s de courtage sont ?? bout parce qu'elles perdent des millions et avec le gouvernement, elles font tout ce qui est en leur pouvoir pour INTERDIRE cette m??thode aux Suisses normaux et emp??cher davantage de citoyens de la ??classe ouvri??re?? de devenir riches.
          </p>
          
          <h2>
          La preuve: l'un de nos lecteurs a converti 250 CHF en 10000 CHF
          </h2>
       
          <p>
          Bien s??r, vous pourriez ??tre sceptique que quelque chose d'aussi simple puisse ??tre si rentable. C'est pourquoi les ??diteurs de notre magazine ont d??cid?? de mettre ce syst??me ?? l'??preuve - et nos sceptiques ont ??t?? compl??tement ??poustoufl??s.
          </p>
          <p>
          Il n'a pas ??t?? difficile de trouver un volontaire. Notre bo??te de r??ception ??tait inond??e de demandes et nous avons finalement choisi Marc Keizer comme l'heureux gagnant. Il est p??re de 42 ans et vit avec sa femme ?? Bruxelles. En tant qu'??lectricien, il pouvait toujours payer ses factures, mais il n'avait jamais assez d'argent pour offrir ?? sa famille des vacances bien m??rit??es. Et comme il n'avait aucune comp??tence en informatique, aucun dipl??me ou aucune connaissance du fonctionnement des march??s financiers, il ??tait le candidat id??al pour ce test.
          </p>
          <Image width='100%' src='/img/flight/ch/euro-money.jpg' />
          <p>
            <b>Marc Keizer, 5 jours apr??s son inscription: ??Je n'en croyais pas mes yeux. Je n'avais pas besoin d'apprendre et cela ne n??cessitait presque aucun travail ??</b>
          </p>
          <p>
           <b>Jour 1:</b>
          </p>
          <p>
          ??Tout d'abord, j'ai cr???? un compte sur la page d'inscription BitProfit. Il m'a fallu environ 2 minutes pour saisir mon nom, mon e-mail, mon num??ro de t??l??phone et mon mot de passe.
          </p>
          <p>
          Pour activer le syst??me, j'ai d?? transf??rer 250 CHF sur mon nouveau portefeuille en ligne. Comme il ne s'agissait que d'un virement bancaire, je n'ai pas eu ?? payer de frais. J'??tais s??r de pouvoir r??cup??rer mon argent ?? tout moment.
          </p>
          <p>
          Je me suis senti tr??s enthousiaste quand j'ai commenc?? ?? trader apr??s toutes les nouvelles concernant des personnes qui avaient fait d'??normes sommes d'argent avec ce syst??me. Ensuite, j'ai re??u mon appel gratuit. Serait-ce vraiment aussi simple?
          </p>
          <p>
            <b>Jour 2:</b>
          </p>
          <p>
          Le deuxi??me jour, je me suis r??veill?? et me suis pr??cipit?? pour travailler. J'ai dormi trop longtemps et j'allais ??tre en retard. Quand je suis arriv?? au travail, j'ai v??rifi?? mes e-mails et pris une tasse de caf??. Puis-je me suis souvenu que j'avais oubli?? de v??rifier mes transactions? Il ??tait d??j?? 10 h 45, donc 12 heures s'??taient ??coul??es depuis que j'ai plac?? mon investissement. Je me suis connect?? au site, me sentant nerveux et excit?? en m??me temps. Mon argent serait-il toujours l??? Je me sentais un peu anxieux...
          </p>
          <p>
          J'ai ouvert le tableau de bord du site, au d??but, je pensais avoir fait une erreur. ??tait-ce mon compte? J'ai v??rifi?? ?? nouveau le nom du compte et oui, c'??tait mon compte. ?? ce moment-l??, j'ai presque renvers?? mon caf??! Je pouvais voir que le solde ?? l'??poque ??tait incroyable de 1 224 CHF! En seulement 12 heures, pendant que je dormais, le compte avait fait 1 004 CHF de profit sur les 250 CHF que j'avais d??pos??s. Je suis content d'avoir pens?? ?? prendre une capture d'??cran pour que vous puissiez voir ce que j'ai vu ce matin ci-dessous. J'ai envoy?? un message ?? mon mentor de compte personnel. ??tonnamment, il n'??tait pas aussi surpris que moi. ??C'est normal??, dit-il. "Pour ??tre honn??te, nous voyons souvent des gens gagner plus que cela dans les 12 premi??res heures." J'ai ??t?? impressionn??, cette chose a vraiment fonctionn??. Pour le reste de la journ??e, j'ai eu du mal ?? me concentrer sur mon travail.
          </p>
          <Image width='100%' src='/img/flight/ch/profits.jpg' />
          <p>
            <b>Le solde du compte de Marc apr??s un jour ...</b>
          </p>
          <p>
            <b>Jour 3:</b>
            </p>
            <p>
            ??Le troisi??me jour o?? je faisais du trading, j'y suis all?? plus profond??ment. Je pouvais voir que ce n'??tait pas un syst??me compliqu?? pour les gestionnaires de fonds et les courtiers. C'??tait facile et pas seulement ??a, c'??tait tr??s clairement expliqu?? de comment j'avais fait autant. J'ai finalement commenc?? ?? comprendre pourquoi de c??l??bres milliardaires appellent cela une nouvelle ??conomie: 100 fois plus puissante que tout ce que j'ai jamais imagin??. Avant de me coucher ce soir-l??, le solde de mon portefeuille ??tait d'un montant incroyable de 15 560 CHF. "
          </p>
          <p>
            <b>Jour 4:</b>
          </p>
          <p>
          ??Cela s'est tr??s bien pass?? aujourd'hui. Mon mentor chez BitProfit m'a expliqu?? que plus je gagnais d'argent, plus je pouvais potentiellement gagner plus. J'ai fait quelques autres transactions. Le solde ?? la fin de la journ??e ??tait de 30 934 CHF. C'est bien plus que ce que je gagne par an. En seulement 4 jours remarquables, j'avais gagn?? assez pour parcourir le monde avec ma femme, et toujours en premi??re classe! Elle ne savait m??me pas mon succ??s. J'ai r??serv?? une chambre dans un h??tel cinq ??toiles pour le week-end pour lui raconter cette merveilleuse histoire. J'ai d??cid?? de rembourser sa dette ??tudiante afin qu'elle puisse poursuivre son r??ve de devenir acheteuse de mode. Cet argent changerait nos vies.
          </p>
          <p>
            <b>Jour 5:</b>
          </p>
          <p>
          ??La premi??re chose que j'ai faite a ??t?? de v??rifier mes statistiques sur mon t??l??phone. Je n'avais pas ?? me soucier de me rendre au travail ?? l'heure, car j'avais d??j?? organis?? une limousine ce matin-l?? pour venir me chercher. Bien s??r, cela co??te beaucoup d'argent, mais je voulais voir le visage de mon patron quand je suis arriv?? au travail dans une limousine longue et noire! J'ai d??cid?? que je ne voulais pas travailler tous les jours pour peu d'argent alors que je pouvais gagner tellement plus en travaillant ?? domicile (si vous pouvez appeler cela du travail!) J'ai quitt?? mon travail et j'ai donn?? un grand pot de d??part ?? tous mes amis du bureau. Certains pensaient que j'avais peut-??tre gagn?? ?? la loterie. Je ne leur ai pas dit mon secret. Je voulais attendre et le dire d'abord ?? ma femme.
          </p>
          <p>
            <b>Jour 6:</b>
          </p>
          <p>
          ??C'est le dernier jour de mes rapports de trading. C'est dimanche et notre ??journ??e famille??, donc je ne travaille pas aujourd'hui. Heureusement, mon solde augmente encore aujourd'hui. Peu importe que je passe du temps avec ma famille ou que je fasse autre chose, les march??s sont ouverts tous les jours donc je continue ?? faire des b??n??fices. ?? l'heure actuelle, mon solde est de 51 200 CHF et il ne cesse d'augmenter.
          </p>
          <p>
          ??J'ai d??cid?? de transf??rer 5 000 CHF sur mon compte d'??pargne. En moins de 5 minutes, j'ai re??u un appel du directeur de la banque qui se demandait comment je pouvais gagner autant d'argent. Quand je lui ai dit que j'avais acc??s ?? BitProfit, il m'a dit que je n'??tais pas le premier ?? gagner autant d'argent avec ce syst??me et m'a invit?? ?? parler d'opportunit??s d'investissement. 
          </p>
          <p>
          Il y a ?? peine trois semaines, je ne pouvais m??me pas obtenir de pr??t hypoth??caire et maintenant la banque m'invite ?? un ??v??nement professionnel sp??cial. C'est incroyable ?? quelle vitesse les choses peuvent changer ... ??
          </p>
          <h2>Et finalement</h2>
          <p>En tant que consommateur, vous pouvez avoir des doutes sur l'effet de BitProfit, mais vous devriez vraiment l'essayer; les r??sultats sont r??els. Les preuves tir??es des t??moignages en disent assez. L??, vous ne pouvez pratiquement rien perdre ici car la plateforme vous propose un remboursement int??gral de votre tout premier d??p??t.</p>
          <p>Vous n'entendrez pas beaucoup parler de cela dans les m??dias grand public car c'est l'un des secrets les mieux gard??s de Wall Street. Ils ne veulent pas que les gens normaux gagnent autant d'argent. Parce que la richesse signifie le pouvoir. Et c'est quelque chose qu'ils n'aiment pas partager.</p>
          <p>En ces temps ??conomiques difficiles, tout le monde a droit ?? une chance de gagner de l'argent suppl??mentaire et, malheureusement, de tels programmes ne sont disponibles que pour un groupe s??lectionn??.</p>
          <p>Comment savoir si un compte BitProfit est le bon choix pour vous? Vous ne pouvez pas le savoir non plus, mais si vous avez au moins 250 CHF dans votre compte d'??pargne, vous avez une obligation morale envers votre famille - pour votre propre bien-??tre et pour celui des g??n??rations futures - de regarder au moins cela.</p>
          <p>Nous pensons que tout le monde doit faire la m??me chose qu'Emma.<u>Mais il est temps d'agir, car vous ne voulez pas rater ??a.</u></p>
           <h2>Les instructions ??tape par ??tape d'Emma pour un trading r??ussi</h2>
           <ol>
             <li>Vous devez d'abord cr??er un compte, si cela est toujours possible. La page du site Web s'ouvre dans le m??me ??cran. Voici ce que vous verrez en premier:</li>
             <li>Si vous vous inscrivez pour un compte gratuit, des conseillers professionnels vous contacteront pour v??rifier votre nouveau compte et vous aurez amplement l'occasion de vous assurer que ce compte vous convient, avant d'effectuer des d??p??ts, ?? travers tous vos r??pondre aux questions d'une mani??re claire et non technique.</li>
             <li>Une fois que vous ??tes inscrit, appuyez sur le bouton ??D??poser de l'argent?? pour d??poser 250 CHF ou plus sur votre compte. Le montant que vous d??posez est le montant avec lequel vous ??changerez - BitProfit est totalement gratuit et vous pouvez retirer votre argent ?? tout moment!</li>
           </ol>
         <br />
          <br />
          <div ref={signupRef}></div>
          <Image width='100%' src='/img/ray/call.jpg' />
          <div>
            <p className={styles.yellow}>
              <b> 
              En raison de la tr??s forte demande, il ne reste plus que 100 places. Les candidats sont accept??s sur la base du ??premier arriv??, premier servi?? 
              *Remplissez tous les d??tails avec les informations correctes pour ??viter toute d??ception. </b>

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
          <p>Lorsque nous avons demand?? ?? Emma de montrer son portefeuille ??lectronique, comme je n'avais jamais vu autant d'argent auparavant, elle a accept?? avec joie:</p>
          <p>Pour ceux qui ont encore des doutes (comme moi), voici une photo de son portefeuille ??lectronique:</p>
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