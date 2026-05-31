(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/lib/dict.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DICT",
    ()=>DICT,
    "LANGS",
    ()=>LANGS,
    "langFromCountry",
    ()=>langFromCountry,
    "langFromNavigator",
    ()=>langFromNavigator
]);
const LANGS = [
    {
        code: 'es',
        label: 'Español',
        flag: '🇪🇸'
    },
    {
        code: 'en',
        label: 'English',
        flag: '🇺🇸'
    },
    {
        code: 'pt',
        label: 'Português',
        flag: '🇧🇷'
    },
    {
        code: 'fr',
        label: 'Français',
        flag: '🇫🇷'
    }
];
const DICT = {
    es: {
        nav: {
            inicio: 'Inicio',
            servicios: 'Servicios',
            nosotros: 'Nosotros',
            como: 'Cómo trabajamos',
            contacto: 'Contacto',
            login: 'Iniciar sesión',
            hablemos: 'Hablemos',
            verTodos: 'Ver todos los servicios',
            megaFoot: 'Una empresa, varias formas de resolver tu problema.',
            noSabes: '¿No sabes cuál necesitas?',
            noSabesDesc: 'Cuéntanos tu problema y te orientamos.',
            estrella: 'Estrella',
            proximamente: 'Próximamente'
        },
        footer: {
            tagline: 'Software e inteligencia artificial que resuelve problemas reales.',
            servicios: 'Servicios',
            empresa: 'Empresa',
            contacto: 'Contacto',
            verTodos: 'Ver todos',
            nosotros: 'Nosotros',
            como: 'Cómo trabajamos',
            login: 'Iniciar sesión',
            copy: '© 2026 Vanty · Software e inteligencia artificial'
        },
        home: {
            h1a: 'Inteligencia que ',
            h1grad: 'transforma',
            h1b: ' la manera en que operas',
            lead: 'En Vanty construimos ecosistemas de software B2B SaaS con inteligencia artificial nativa. Automatizamos la complejidad para que tu equipo se enfoque en lo que realmente importa.',
            ctaEnfoque: 'Conoce nuestro enfoque',
            ctaProductos: 'Descubre nuestros productos',
            micro: 'Ingeniería sólida · Seguridad desde el día cero · Soporte dedicado',
            logos: 'Tecnología en operación real',
            enfEyebrow: 'Nuestro enfoque',
            enfTitle: 'No solo digitalizamos procesos: los hacemos pensar',
            enfLead: 'El software tradicional registra datos; el del futuro los entiende, los analiza y actúa. Diseñamos plataformas que llevan la eficiencia operativa a un nivel sin precedentes.',
            p1t: 'Orquestación de agentes',
            p1d: 'Asistentes y flujos de trabajo automatizados que reducen drásticamente la carga manual de tu equipo.',
            p2t: 'Arquitecturas modernas',
            p2d: 'Tecnología de última generación sobre infraestructura robusta: velocidad, estabilidad y escala.',
            p3t: 'Soluciones de nicho',
            p3d: 'Productos especializados que resuelven problemas concretos, de la gestión clínica a la operativa.',
            prodEyebrow: 'Productos y servicios',
            prodTitle: 'Software creado para resolver y escalar',
            prodLead: 'Desde productos propios listos para usar hasta soluciones construidas a tu medida.',
            secEyebrow: 'Dónde generamos impacto',
            secTitle: 'Operaciones complejas, soluciones elegantes',
            s1n: 'Gestión clínica',
            s1d: 'Operación de centros de salud y terapia, sin fricción administrativa.',
            s2n: 'Educación',
            s2d: 'Seguimiento, aprendizaje y comunicación con las familias.',
            s3n: 'Operación empresarial',
            s3d: 'Sistemas internos, automatización de procesos y datos accionables.',
            comoEyebrow: 'Cómo trabajamos',
            comoTitle: 'Del código a la solución, con rigor de ingeniería',
            comoLead: 'Combinamos la agilidad de una startup con arquitecturas sólidas y seguridad desde el día cero. Entendemos tu negocio, diseñamos la solución y la hacemos evolucionar contigo.',
            comoCk1: 'Análisis y arquitectura profunda',
            comoCk2: 'Seguridad y escalabilidad desde el día cero',
            comoCk3: 'Iteración continua: el software nunca está “terminado”',
            comoCta: 'Ver nuestra metodología',
            ctaTitle: 'El futuro de tu operación empieza aquí',
            ctaSub: 'Ya sea que busques transformar la gestión de tu centro clínico o llevar la eficiencia de tu empresa al siguiente nivel, en Vanty tenemos la infraestructura tecnológica para hacerlo realidad.',
            ctaDemo: 'Hablemos del futuro',
            ctaContacto: 'Contáctanos'
        }
    },
    en: {
        nav: {
            inicio: 'Home',
            servicios: 'Services',
            nosotros: 'About',
            como: 'How we work',
            contacto: 'Contact',
            login: 'Log in',
            hablemos: 'Let\'s talk',
            verTodos: 'See all services',
            megaFoot: 'One company, several ways to solve your problem.',
            noSabes: 'Not sure which you need?',
            noSabesDesc: 'Tell us your problem and we\'ll guide you.',
            estrella: 'Flagship',
            proximamente: 'Coming soon'
        },
        footer: {
            tagline: 'Software and artificial intelligence that solves real problems.',
            servicios: 'Services',
            empresa: 'Company',
            contacto: 'Contact',
            verTodos: 'See all',
            nosotros: 'About',
            como: 'How we work',
            login: 'Log in',
            copy: '© 2026 Vanty · Software & artificial intelligence'
        },
        home: {
            h1a: 'Intelligence that ',
            h1grad: 'transforms',
            h1b: ' the way you operate',
            lead: 'At Vanty we build B2B SaaS software ecosystems with native artificial intelligence. We automate complexity so your team can focus on what truly matters.',
            ctaEnfoque: 'See our approach',
            ctaProductos: 'Discover our products',
            micro: 'Solid engineering · Security from day zero · Dedicated support',
            logos: 'Technology in real-world use',
            enfEyebrow: 'Our approach',
            enfTitle: 'We don\'t just digitize processes: we make them think',
            enfLead: 'Traditional software records data; tomorrow\'s software understands, analyzes and acts on it. We design platforms that take operational efficiency to an unprecedented level.',
            p1t: 'Agent orchestration',
            p1d: 'Assistants and automated workflows that drastically reduce your team\'s manual workload.',
            p2t: 'Modern architectures',
            p2d: 'Cutting-edge technology on robust infrastructure: speed, stability and scale.',
            p3t: 'Niche solutions',
            p3d: 'Specialized products that solve concrete problems, from clinical to operational management.',
            prodEyebrow: 'Products & services',
            prodTitle: 'Software built to solve and scale',
            prodLead: 'From ready-to-use in-house products to solutions built to your measure.',
            secEyebrow: 'Where we make an impact',
            secTitle: 'Complex operations, elegant solutions',
            s1n: 'Clinical management',
            s1d: 'Running health and therapy centers without administrative friction.',
            s2n: 'Education',
            s2d: 'Tracking, learning and communication with families.',
            s3n: 'Business operations',
            s3d: 'Internal systems, process automation and actionable data.',
            comoEyebrow: 'How we work',
            comoTitle: 'From code to solution, with engineering rigor',
            comoLead: 'We combine startup agility with solid architectures and security from day zero. We understand your business, design the solution and evolve it with you.',
            comoCk1: 'Deep analysis and architecture',
            comoCk2: 'Security and scalability from day zero',
            comoCk3: 'Continuous iteration: software is never “finished”',
            comoCta: 'See our methodology',
            ctaTitle: 'The future of your operation starts here',
            ctaSub: 'Whether you want to transform your clinical center\'s management or take your company\'s efficiency to the next level, at Vanty we have the technological infrastructure to make it happen.',
            ctaDemo: 'Let\'s talk about the future',
            ctaContacto: 'Contact us'
        }
    },
    pt: {
        nav: {
            inicio: 'Início',
            servicios: 'Serviços',
            nosotros: 'Sobre nós',
            como: 'Como trabalhamos',
            contacto: 'Contato',
            login: 'Entrar',
            hablemos: 'Falar',
            verTodos: 'Ver todos os serviços',
            megaFoot: 'Uma empresa, várias formas de resolver o seu problema.',
            noSabes: 'Não sabe qual precisa?',
            noSabesDesc: 'Conte-nos o seu problema e te orientamos.',
            estrella: 'Destaque',
            proximamente: 'Em breve'
        },
        footer: {
            tagline: 'Software e inteligência artificial que resolve problemas reais.',
            servicios: 'Serviços',
            empresa: 'Empresa',
            contacto: 'Contato',
            verTodos: 'Ver todos',
            nosotros: 'Sobre nós',
            como: 'Como trabalhamos',
            login: 'Entrar',
            copy: '© 2026 Vanty · Software e inteligência artificial'
        },
        home: {
            h1a: 'Inteligência que ',
            h1grad: 'transforma',
            h1b: ' a forma como você opera',
            lead: 'Na Vanty construímos ecossistemas de software B2B SaaS com inteligência artificial nativa. Automatizamos a complexidade para que a sua equipe foque no que realmente importa.',
            ctaEnfoque: 'Conheça nossa abordagem',
            ctaProductos: 'Descubra nossos produtos',
            micro: 'Engenharia sólida · Segurança desde o dia zero · Suporte dedicado',
            logos: 'Tecnologia em operação real',
            enfEyebrow: 'Nossa abordagem',
            enfTitle: 'Não só digitalizamos processos: nós os fazemos pensar',
            enfLead: 'O software tradicional registra dados; o do futuro os entende, analisa e age. Projetamos plataformas que levam a eficiência operacional a um nível sem precedentes.',
            p1t: 'Orquestração de agentes',
            p1d: 'Assistentes e fluxos de trabalho automatizados que reduzem drasticamente a carga manual da sua equipe.',
            p2t: 'Arquiteturas modernas',
            p2d: 'Tecnologia de última geração sobre infraestrutura robusta: velocidade, estabilidade e escala.',
            p3t: 'Soluções de nicho',
            p3d: 'Produtos especializados que resolvem problemas concretos, da gestão clínica à operacional.',
            prodEyebrow: 'Produtos e serviços',
            prodTitle: 'Software criado para resolver e escalar',
            prodLead: 'De produtos próprios prontos para usar a soluções feitas sob medida.',
            secEyebrow: 'Onde geramos impacto',
            secTitle: 'Operações complexas, soluções elegantes',
            s1n: 'Gestão clínica',
            s1d: 'Operação de centros de saúde e terapia, sem fricção administrativa.',
            s2n: 'Educação',
            s2d: 'Acompanhamento, aprendizagem e comunicação com as famílias.',
            s3n: 'Operação empresarial',
            s3d: 'Sistemas internos, automação de processos e dados acionáveis.',
            comoEyebrow: 'Como trabalhamos',
            comoTitle: 'Do código à solução, com rigor de engenharia',
            comoLead: 'Combinamos a agilidade de uma startup com arquiteturas sólidas e segurança desde o dia zero. Entendemos o seu negócio, desenhamos a solução e a evoluímos com você.',
            comoCk1: 'Análise e arquitetura profunda',
            comoCk2: 'Segurança e escalabilidade desde o dia zero',
            comoCk3: 'Iteração contínua: o software nunca está “pronto”',
            comoCta: 'Ver nossa metodologia',
            ctaTitle: 'O futuro da sua operação começa aqui',
            ctaSub: 'Seja para transformar a gestão do seu centro clínico ou levar a eficiência da sua empresa ao próximo nível, na Vanty temos a infraestrutura tecnológica para tornar isso realidade.',
            ctaDemo: 'Vamos falar do futuro',
            ctaContacto: 'Fale conosco'
        }
    },
    fr: {
        nav: {
            inicio: 'Accueil',
            servicios: 'Services',
            nosotros: 'À propos',
            como: 'Notre méthode',
            contacto: 'Contact',
            login: 'Connexion',
            hablemos: 'Parlons-en',
            verTodos: 'Voir tous les services',
            megaFoot: 'Une entreprise, plusieurs façons de résoudre votre problème.',
            noSabes: 'Vous ne savez pas lequel ?',
            noSabesDesc: 'Dites-nous votre problème et on vous oriente.',
            estrella: 'Produit phare',
            proximamente: 'Bientôt'
        },
        footer: {
            tagline: 'Des logiciels et de l\'intelligence artificielle qui résolvent de vrais problèmes.',
            servicios: 'Services',
            empresa: 'Entreprise',
            contacto: 'Contact',
            verTodos: 'Voir tout',
            nosotros: 'À propos',
            como: 'Notre méthode',
            login: 'Connexion',
            copy: '© 2026 Vanty · Logiciels et intelligence artificielle'
        },
        home: {
            h1a: 'Une intelligence qui ',
            h1grad: 'transforme',
            h1b: ' votre façon d\'opérer',
            lead: 'Chez Vanty, nous créons des écosystèmes logiciels B2B SaaS avec une intelligence artificielle native. Nous automatisons la complexité pour que votre équipe se concentre sur l\'essentiel.',
            ctaEnfoque: 'Découvrir notre approche',
            ctaProductos: 'Découvrir nos produits',
            micro: 'Ingénierie solide · Sécurité dès le jour zéro · Support dédié',
            logos: 'Une technologie en usage réel',
            enfEyebrow: 'Notre approche',
            enfTitle: 'Nous ne numérisons pas seulement les processus : nous les faisons réfléchir',
            enfLead: 'Le logiciel traditionnel enregistre des données ; celui de demain les comprend, les analyse et agit. Nous concevons des plateformes qui portent l\'efficacité opérationnelle à un niveau inédit.',
            p1t: 'Orchestration d\'agents',
            p1d: 'Assistants et flux de travail automatisés qui réduisent fortement la charge manuelle de votre équipe.',
            p2t: 'Architectures modernes',
            p2d: 'Technologie de pointe sur une infrastructure robuste : vitesse, stabilité et passage à l\'échelle.',
            p3t: 'Solutions de niche',
            p3d: 'Produits spécialisés qui résolvent des problèmes concrets, de la gestion clinique à l\'opérationnel.',
            prodEyebrow: 'Produits et services',
            prodTitle: 'Des logiciels conçus pour résoudre et grandir',
            prodLead: 'De produits propres prêts à l\'emploi aux solutions sur mesure.',
            secEyebrow: 'Où nous créons de l\'impact',
            secTitle: 'Opérations complexes, solutions élégantes',
            s1n: 'Gestion clinique',
            s1d: 'Gestion de centres de santé et de thérapie, sans friction administrative.',
            s2n: 'Éducation',
            s2d: 'Suivi, apprentissage et communication avec les familles.',
            s3n: 'Opérations d\'entreprise',
            s3d: 'Systèmes internes, automatisation des processus et données exploitables.',
            comoEyebrow: 'Notre méthode',
            comoTitle: 'Du code à la solution, avec rigueur d\'ingénierie',
            comoLead: 'Nous combinons l\'agilité d\'une startup avec des architectures solides et la sécurité dès le jour zéro. Nous comprenons votre activité, concevons la solution et la faisons évoluer avec vous.',
            comoCk1: 'Analyse et architecture approfondies',
            comoCk2: 'Sécurité et évolutivité dès le jour zéro',
            comoCk3: 'Itération continue : un logiciel n\'est jamais « terminé »',
            comoCta: 'Voir notre méthodologie',
            ctaTitle: 'L\'avenir de votre opération commence ici',
            ctaSub: 'Que vous souhaitiez transformer la gestion de votre centre clinique ou faire passer l\'efficacité de votre entreprise au niveau supérieur, chez Vanty nous avons l\'infrastructure technologique pour y parvenir.',
            ctaDemo: 'Parlons de l\'avenir',
            ctaContacto: 'Contactez-nous'
        }
    }
};
function langFromCountry(country) {
    if (!country) return 'es';
    const c = country.toUpperCase();
    if (c === 'BR') return 'pt';
    if (c === 'US' || c === 'CA') return 'en';
    if ([
        'FR',
        'BE',
        'CH',
        'LU',
        'MC'
    ].includes(c)) return 'fr';
    if (c === 'ES' || [
        'PE',
        'MX',
        'CO',
        'AR',
        'CL',
        'EC',
        'BO',
        'PY',
        'UY',
        'VE',
        'GT',
        'CR',
        'PA',
        'DO',
        'HN',
        'SV',
        'NI',
        'PR'
    ].includes(c)) return 'es';
    // resto de Europa / mundo → inglés
    return 'en';
}
function langFromNavigator(l) {
    const x = (l || '').toLowerCase();
    if (x.startsWith('pt')) return 'pt';
    if (x.startsWith('fr')) return 'fr';
    if (x.startsWith('en')) return 'en';
    return 'es';
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/LangProvider.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "LangProvider",
    ()=>LangProvider,
    "useT",
    ()=>useT
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/dict.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
'use client';
;
;
const LangContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createContext"])({
    lang: 'es',
    setLang: ()=>{},
    t: (p)=>p
});
function resolve(obj, path) {
    return path.split('.').reduce((a, k)=>a == null ? a : a[k], obj);
}
function LangProvider({ children }) {
    _s();
    const [lang, setLangState] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('es');
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "LangProvider.useEffect": ()=>{
            const saved = localStorage.getItem('vanty-lang');
            if (saved && __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DICT"][saved]) {
                setLangState(saved);
                document.documentElement.lang = saved;
                return;
            }
            let cancelled = false;
            fetch('/api/geo').then({
                "LangProvider.useEffect": (r)=>r.json()
            }["LangProvider.useEffect"]).then({
                "LangProvider.useEffect": (d)=>{
                    if (!cancelled) {
                        const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["langFromCountry"])(d?.country);
                        setLangState(l);
                        document.documentElement.lang = l;
                    }
                }
            }["LangProvider.useEffect"]).catch({
                "LangProvider.useEffect": ()=>{
                    if (!cancelled) {
                        const l = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["langFromNavigator"])(navigator.language);
                        setLangState(l);
                        document.documentElement.lang = l;
                    }
                }
            }["LangProvider.useEffect"]);
            return ({
                "LangProvider.useEffect": ()=>{
                    cancelled = true;
                }
            })["LangProvider.useEffect"];
        }
    }["LangProvider.useEffect"], []);
    const setLang = (l)=>{
        setLangState(l);
        document.documentElement.lang = l;
        try {
            localStorage.setItem('vanty-lang', l);
        } catch  {}
    };
    const t = (path)=>{
        const v = resolve(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DICT"][lang], path);
        return (typeof v === 'string' ? v : resolve(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$dict$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["DICT"].es, path)) ?? path;
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LangContext.Provider, {
        value: {
            lang,
            setLang,
            t
        },
        children: children
    }, void 0, false, {
        fileName: "[project]/app/components/LangProvider.tsx",
        lineNumber: 38,
        columnNumber: 10
    }, this);
}
_s(LangProvider, "3tT//Atmrs3uzvy+GGk3sWp9Mg8=");
_c = LangProvider;
const useT = ()=>{
    _s1();
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useContext"])(LangContext);
};
_s1(useT, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");
var _c;
__turbopack_context__.k.register(_c, "LangProvider");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
/**
 * @license React
 * react-jsx-dev-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
"production" !== ("TURBOPACK compile-time value", "development") && function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
            case REACT_ACTIVITY_TYPE:
                return "Activity";
            case REACT_VIEW_TRANSITION_TYPE:
                return "ViewTransition";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_CONTEXT_TYPE:
                return type.displayName || "Context";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getTaskName(type) {
        if (type === REACT_FRAGMENT_TYPE) return "<>";
        if ("object" === typeof type && null !== type && type.$$typeof === REACT_LAZY_TYPE) return "<...>";
        try {
            var name = getComponentNameFromType(type);
            return name ? "<" + name + ">" : "<...>";
        } catch (x) {
            return "<...>";
        }
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function UnknownOwner() {
        return Error("react-stack-top-frame");
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, props, owner, debugStack, debugTask) {
        var refProp = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== refProp ? refProp : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.defineProperty(type, "_debugStack", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugStack
        });
        Object.defineProperty(type, "_debugTask", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: debugTask
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStack, debugTask) {
        var children = config.children;
        if (void 0 !== children) if (isStaticChildren) if (isArrayImpl(children)) {
            for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren]);
            Object.freeze && Object.freeze(children);
        } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
        else validateChildKeys(children);
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, maybeKey, getOwner(), debugStack, debugTask);
    }
    function validateChildKeys(node) {
        isValidElement(node) ? node._store && (node._store.validated = 1) : "object" === typeof node && null !== node && node.$$typeof === REACT_LAZY_TYPE && ("fulfilled" === node._payload.status ? isValidElement(node._payload.value) && node._payload.value._store && (node._payload.value._store.validated = 1) : node._store && (node._store.validated = 1));
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    var React = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler"), REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_ACTIVITY_TYPE = Symbol.for("react.activity"), REACT_VIEW_TRANSITION_TYPE = Symbol.for("react.view_transition"), REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, isArrayImpl = Array.isArray, createTask = console.createTask ? console.createTask : function() {
        return null;
    };
    React = {
        react_stack_bottom_frame: function(callStackForError) {
            return callStackForError();
        }
    };
    var specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var unknownOwnerDebugStack = React.react_stack_bottom_frame.bind(React, UnknownOwner)();
    var unknownOwnerDebugTask = createTask(getTaskName(UnknownOwner));
    var didWarnAboutKeySpread = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsxDEV = function(type, config, maybeKey, isStaticChildren) {
        var trackActualOwner = 1e4 > ReactSharedInternals.recentlyCreatedOwnerStacks++;
        if (trackActualOwner) {
            var previousStackTraceLimit = Error.stackTraceLimit;
            Error.stackTraceLimit = 10;
            var debugStackDEV = Error("react-stack-top-frame");
            Error.stackTraceLimit = previousStackTraceLimit;
        } else debugStackDEV = unknownOwnerDebugStack;
        return jsxDEVImpl(type, config, maybeKey, isStaticChildren, debugStackDEV, trackActualOwner ? createTask(getTaskName(type)) : unknownOwnerDebugTask);
    };
}();
}),
"[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$polyfills$2f$process$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = /*#__PURE__*/ __turbopack_context__.i("[project]/node_modules/next/dist/build/polyfills/process.js [app-client] (ecmascript)");
'use strict';
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
else {
    module.exports = __turbopack_context__.r("[project]/node_modules/next/dist/compiled/react/cjs/react-jsx-dev-runtime.development.js [app-client] (ecmascript)");
}
}),
]);

//# sourceMappingURL=_b9a08b91._.js.map