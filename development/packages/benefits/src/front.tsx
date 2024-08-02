import {useGSAP} from '@gsap/react';
import {hydrateRoot, useRef} from '@wordpress/element';
import Lottie from 'lottie-react';
import letter from './Lotties/E.json';
import {gsap, SplitText} from './gsap';

import Icon1 from './img/Icon-4.png';
import Icon2 from './img/Icon-5.png';
import Icon3 from './img/Icon-6.png';
import {DoubleButton} from "./DoubleButton";

const elements = document.querySelectorAll('.wp-block-entrepreneurs-benefits');

export const Benefits = () => {
    const headerRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        if (!headerRef.current || !cardsRef.current) return;

        const split1 = new SplitText(headerRef.current?.querySelectorAll('h1 span'), {
            type: 'words',
        });
        const split2 = new SplitText(headerRef.current?.querySelector('p'), {
            type: 'words',
        });

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: '#benefits',
                scrub: true,
                markers: false,
                start: 'top 70%',
                end: '80% 80%',
                once: true,
            },
            onComplete: () => {
                split1.revert();
                split2.revert();
            },
        });
        const cardSplits = Array.from(cardsRef.current?.querySelectorAll('.card h2')).map((el) => {
            const split = new SplitText(el, {
                type: 'words',
            });
            return split;
        });

        tl.add('start', 0);
        tl.fromTo(
            headerRef.current.querySelector('.small-badge'),
            { y: 150, opacity: 0 },
            { y: 0, opacity: 1 },
            'start'
        )
            .fromTo(split1.words, { y: 150 }, { y: 0, stagger: 0.1 }, 'start+=.25')
            .fromTo(split2.words, { opacity: 0 }, { opacity: 1, stagger: 0.05 }, 'start+=0.5')
            .fromTo(
                gsap.utils.toArray(cardsRef.current?.querySelectorAll('.card img')),
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    stagger: 0.5,
                    duration: 0.75,
                },
                'start+=3.5'
            )
            .fromTo(
                cardsRef.current.querySelectorAll('.card .border-line'),
                {
                    width: '0%',
                },
                {
                    width: '100%',
                    duration: 0.75,
                    stagger: 0.5,
                },
                'start+=3.5'
            )
            .fromTo(
                gsap.utils.toArray(cardsRef.current?.querySelectorAll('.card img')),
                {
                    rotateY: 90,
                    translateX: -60,
                },
                {
                    rotateY: 0,
                    translateX: 0,
                    stagger: 0.5,
                    // duration: 0.5,
                },
                'start+=3.5'
            )
            .fromTo(
                cardSplits.map((split) => split.words),
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    stagger: 0.1,
                },
                'start+=3.5'
            );
    });

    return (
        <>
            <Lottie animationData={letter} className="letter-e"/>

            <div className="highlight highlight-red"></div>
            <div ref={headerRef} className="header">
                {/*<div className="small-badge">Nos programmes</div>*/}
                <h1 className="section-title">
                    <span>ENTREPRENEURS.COM</span>
                </h1>
                <p>
                    Une équipe d’experts au service d'entrepreneurs ambitieux souhaitant être accompagnés
                    personnellement, tout en intégrant la puissance du collectif, dans l’atteinte de leur succès.
                </p>
            </div>
            <div className="cards" ref={cardsRef}>
                <div className="card">
                    <img src={Icon1} alt=""/>
                    <h2>Stratégies</h2>
                    <p>Nous vous délivrons toutes les stratégies et process vous permettant d’aller dans un chemin de
                        croissance et de scaling prédictible. </p>
                    <div className="border-line"></div>
                </div>
                <div className="card">
                    <img src={Icon2} alt=""/>
                    <h2>Actions</h2>
                    <p>Obtenez un plan d’action précis et évolutif, qui suit les stratégies conceptualisées, vous
                        permettant de savoir exactement quelles actions menées pour être certain d’atteindre les
                        objectifs définis au préalable. </p>
                    <div className="border-line"></div>
                </div>
                <div className="card">
                    <img src={Icon3} alt=""/>
                    <h2>Résultats</h2>
                    <p>Dépassez les 100K mensuel et libérez-vous du temps en sortant de l’opérationnel sans entraver la
                        qualité de votre produit ou service délivré.
                    </p>
                    <div className="border-line"></div>
                </div>
            </div>
            <DoubleButton text={"En savoir plus sur l’équipe Entrepreneurs.com"} disableAnimation={false}/>

            <div className="header" style={{marginTop: '10rem'}}>
                {/*<div className="small-badge">Nos programmes</div>*/}
                <h1 className="section-title">
                    <span>Les 3 piliers fondamentaux</span>
                    <span>du succès d’un entrepreneur</span>
                </h1>

            </div>
            <div className="cards" ref={cardsRef}>
                <div className="card">
                    <img src={Icon1} alt=""/>
                    <h2>Accompagnement
                        individuel
                    </h2>
                    <p>Votre activité et votre personnalité sont uniques, donc les stratégies qui permettront sa
                        croissance doivent l’être aussi. </p>
                    <div className="border-line"></div>
                </div>
                <div className="card">
                    <img src={Icon2} alt=""/>
                    <h2>Mise en place de stratégies et d’actions</h2>
                    <p>L’atteinte de vos objectifs passe inévitablement par votre passage à l’action.
                        Avec un bon suivi, une bonne énergie et une idée précise de ce qui doit être fait, jour
                        après jour pour performer, vous ne pourrez que réussir.
                    </p>
                    <div className="border-line"></div>
                </div>
                <div className="card">
                    <img src={Icon3} alt=""/>
                    <h2>Accompagnement collectif</h2>
                    <p>Faire partie d’un puissant réseau d’entrepreneurs et de mettre en commun les idées de chacun
                        permet de créer un puissant cerveau collectif permettant de se challenger et de faire
                        avancer 5x plus vite ses idées, donc ses résultats</p>
                    <div className="border-line"></div>
                </div>
            </div>
        </>
    );
};

if (elements.length) {
    elements.forEach((element) => {
        hydrateRoot(element, <Benefits/>);
    });
}
