(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/lib/site.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ════════════════════════════════════════════════
//  Datos compartidos del sitio Vanty
// ════════════════════════════════════════════════
__turbopack_context__.s([
    "EMAIL",
    ()=>EMAIL,
    "FB_URL",
    ()=>FB_URL,
    "IG_URL",
    ()=>IG_URL,
    "NAV_LINKS",
    ()=>NAV_LINKS,
    "SERVICES",
    ()=>SERVICES,
    "WA_MSG",
    ()=>WA_MSG,
    "WA_NUM",
    ()=>WA_NUM,
    "WA_URL",
    ()=>WA_URL
]);
const WA_NUM = '51924685557';
const EMAIL = 'soporte@vanty.xyz';
const WA_MSG = encodeURIComponent('Hola, vi la página de Vanty y quiero conocer más sobre lo que hacen.');
const WA_URL = `https://wa.me/${WA_NUM}?text=${WA_MSG}`;
const FB_URL = 'https://www.facebook.com/profile.php?id=61587764677406';
const IG_URL = 'https://www.instagram.com/vanty.app';
const SERVICES = [
    {
        slug: 'vanty-aba',
        href: '/vanty-aba',
        icon: 'brain',
        name: 'Vanty ABA',
        tagline: 'Plataforma clínica ABA con IA',
        desc: 'La primera plataforma ABA multi-rol de LATAM: dirección, especialistas, secretaría y familias en un solo lugar, con IA clínica, facturación y portal familiar.',
        badge: 'Producto estrella',
        accent: '#1D4ED8',
        tags: [
            'Hub de IA clínica',
            'Multi-rol nativo',
            'Facturación',
            'Portal familiar'
        ]
    },
    {
        slug: 'software-a-medida',
        href: '/servicios/software-a-medida',
        icon: 'code',
        name: 'Software a medida',
        tagline: 'Plataformas, apps y sistemas',
        desc: 'Diseñamos y desarrollamos plataformas web, apps móviles y sistemas internos pensados para tu operación real. Del prototipo a producción.',
        badge: 'A medida',
        accent: '#0F766E',
        tags: [
            'Web & móvil',
            'Dashboards',
            'Integraciones',
            'Automatización'
        ]
    },
    {
        slug: 'productos-saas',
        href: '/servicios/productos-saas',
        icon: 'rocket',
        name: 'Productos SaaS con IA',
        tagline: 'Productos propios con IA',
        desc: 'Creamos nuestros propios productos digitales potenciados con inteligencia artificial para resolver problemas concretos en sectores con impacto.',
        badge: 'Productos propios',
        accent: '#7C3AED',
        tags: [
            'IA aplicada',
            'Escalable',
            'En la nube',
            'Multi-tenant'
        ]
    }
];
const NAV_LINKS = [
    {
        label: 'Inicio',
        href: '/'
    },
    {
        label: 'Servicios',
        href: '/servicios',
        dropdown: true
    },
    {
        label: 'Nosotros',
        href: '/nosotros'
    },
    {
        label: 'Cómo trabajamos',
        href: '/como-trabajamos'
    },
    {
        label: 'Contacto',
        href: '/contacto'
    }
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/SiteNav.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteNav
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-right.js [app-client] (ecmascript) <export default as ChevronRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/code-xml.js [app-client] (ecmascript) <export default as Code2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/rocket.js [app-client] (ecmascript) <export default as Rocket>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-client] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/site.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
const ICONS = {
    brain: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"],
    code: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$code$2d$xml$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Code2$3e$__["Code2"],
    rocket: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$rocket$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Rocket$3e$__["Rocket"]
};
function SiteNav() {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [megaOpen, setMegaOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileOpen, setMobileOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [mobileSvc, setMobileSvc] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteNav.useEffect": ()=>{
            const fn = {
                "SiteNav.useEffect.fn": ()=>setScrolled(window.scrollY > 8)
            }["SiteNav.useEffect.fn"];
            window.addEventListener('scroll', fn);
            return ({
                "SiteNav.useEffect": ()=>window.removeEventListener('scroll', fn)
            })["SiteNav.useEffect"];
        }
    }["SiteNav.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SiteNav.useEffect": ()=>{
            setMobileOpen(false);
            setMegaOpen(false);
        }
    }["SiteNav.useEffect"], [
        pathname
    ]);
    const isActive = (href)=>href === '/' ? pathname === '/' : pathname.startsWith(href);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
        className: `vt-nav${scrolled ? ' scrolled' : ''}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vt-nav-row",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        className: "vt-logo",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/logo.png",
                                alt: "Vanty",
                                style: {
                                    height: 40,
                                    width: 'auto',
                                    display: 'block'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/SiteNav.tsx",
                                lineNumber: 33,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    lineHeight: 1.1
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "vt-logo-name",
                                        children: "VANTY"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteNav.tsx",
                                        lineNumber: 35,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "vt-logo-sub",
                                        children: "software & inteligencia artificial"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteNav.tsx",
                                        lineNumber: 36,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SiteNav.tsx",
                                lineNumber: 34,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SiteNav.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "vt-nav-links",
                        children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NAV_LINKS"].map((link)=>'dropdown' in link && link.dropdown ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: `vt-nav-item${megaOpen ? ' open' : ''}`,
                                onMouseEnter: ()=>setMegaOpen(true),
                                onMouseLeave: ()=>setMegaOpen(false),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: link.href,
                                        className: `vt-nav-link${isActive(link.href) ? ' active' : ''}`,
                                        onClick: (e)=>{
                                            if (!megaOpen) {
                                                e.preventDefault();
                                                setMegaOpen(true);
                                            }
                                        },
                                        children: [
                                            link.label,
                                            " ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 15,
                                                className: "chev"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SiteNav.tsx",
                                                lineNumber: 55,
                                                columnNumber: 32
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/SiteNav.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "vt-mega",
                                        role: "menu",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "vt-mega-grid",
                                                children: [
                                                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES"].map((s)=>{
                                                        const Icon = ICONS[s.icon];
                                                        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                            href: s.href,
                                                            className: "vt-mega-card",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    className: "vt-mega-ico",
                                                                    style: {
                                                                        background: s.accent
                                                                    },
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                                                        size: 20
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/SiteNav.tsx",
                                                                        lineNumber: 64,
                                                                        columnNumber: 90
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/SiteNav.tsx",
                                                                    lineNumber: 64,
                                                                    columnNumber: 27
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "vt-mega-name",
                                                                            children: [
                                                                                s.name,
                                                                                s.slug === 'vanty-aba' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                    className: "vt-mega-star",
                                                                                    children: "Estrella"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/app/components/SiteNav.tsx",
                                                                                    lineNumber: 68,
                                                                                    columnNumber: 58
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/app/components/SiteNav.tsx",
                                                                            lineNumber: 66,
                                                                            columnNumber: 29
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                            className: "vt-mega-tag",
                                                                            children: s.tagline
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/app/components/SiteNav.tsx",
                                                                            lineNumber: 70,
                                                                            columnNumber: 29
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/app/components/SiteNav.tsx",
                                                                    lineNumber: 65,
                                                                    columnNumber: 27
                                                                }, this)
                                                            ]
                                                        }, s.slug, true, {
                                                            fileName: "[project]/app/components/SiteNav.tsx",
                                                            lineNumber: 63,
                                                            columnNumber: 25
                                                        }, this);
                                                    }),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "/contacto",
                                                        className: "vt-mega-card",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                className: "vt-mega-ico",
                                                                style: {
                                                                    background: 'linear-gradient(135deg,#1D4ED8,#7c3aed)'
                                                                },
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                    size: 20
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/components/SiteNav.tsx",
                                                                    lineNumber: 76,
                                                                    columnNumber: 119
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/SiteNav.tsx",
                                                                lineNumber: 76,
                                                                columnNumber: 23
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "vt-mega-name",
                                                                        children: "¿No sabes cuál necesitas?"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/SiteNav.tsx",
                                                                        lineNumber: 78,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        className: "vt-mega-tag",
                                                                        children: "Cuéntanos tu problema y te orientamos."
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/app/components/SiteNav.tsx",
                                                                        lineNumber: 79,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/components/SiteNav.tsx",
                                                                lineNumber: 77,
                                                                columnNumber: 23
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/SiteNav.tsx",
                                                        lineNumber: 75,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/SiteNav.tsx",
                                                lineNumber: 59,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "vt-mega-foot",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 12.5,
                                                            color: 'var(--muted)'
                                                        },
                                                        children: "Una empresa, varias formas de resolver tu problema."
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/components/SiteNav.tsx",
                                                        lineNumber: 84,
                                                        columnNumber: 21
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                        href: "/servicios",
                                                        children: [
                                                            "Ver todos los servicios ",
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                                size: 14
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/components/SiteNav.tsx",
                                                                lineNumber: 85,
                                                                columnNumber: 66
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/app/components/SiteNav.tsx",
                                                        lineNumber: 85,
                                                        columnNumber: 21
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/components/SiteNav.tsx",
                                                lineNumber: 83,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/SiteNav.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, this)
                                ]
                            }, link.href, true, {
                                fileName: "[project]/app/components/SiteNav.tsx",
                                lineNumber: 44,
                                columnNumber: 15
                            }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: link.href,
                                    className: `vt-nav-link${isActive(link.href) ? ' active' : ''}`,
                                    children: link.label
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SiteNav.tsx",
                                    lineNumber: 91,
                                    columnNumber: 17
                                }, this)
                            }, link.href, false, {
                                fileName: "[project]/app/components/SiteNav.tsx",
                                lineNumber: 90,
                                columnNumber: 15
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/components/SiteNav.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "vt-nav-right",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/login",
                                className: "vt-btn vt-btn-ghost vt-btn-sm",
                                children: "Iniciar sesión"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SiteNav.tsx",
                                lineNumber: 99,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WA_URL"],
                                className: "vt-btn vt-btn-primary vt-btn-sm",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteNav.tsx",
                                        lineNumber: 100,
                                        columnNumber: 114
                                    }, this),
                                    " Hablemos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SiteNav.tsx",
                                lineNumber: 100,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                className: "vt-burger",
                                onClick: ()=>setMobileOpen((o)=>!o),
                                "aria-label": "Menú",
                                children: mobileOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SiteNav.tsx",
                                    lineNumber: 102,
                                    columnNumber: 27
                                }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/app/components/SiteNav.tsx",
                                    lineNumber: 102,
                                    columnNumber: 45
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/SiteNav.tsx",
                                lineNumber: 101,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SiteNav.tsx",
                        lineNumber: 98,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SiteNav.tsx",
                lineNumber: 30,
                columnNumber: 7
            }, this),
            mobileOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vt-mobile",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/",
                        children: "Inicio"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SiteNav.tsx",
                        lineNumber: 110,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileSvc((s)=>!s),
                        children: [
                            "Servicios ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                size: 17,
                                style: {
                                    transform: mobileSvc ? 'rotate(180deg)' : 'none',
                                    transition: 'transform .2s'
                                }
                            }, void 0, false, {
                                fileName: "[project]/app/components/SiteNav.tsx",
                                lineNumber: 112,
                                columnNumber: 23
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SiteNav.tsx",
                        lineNumber: 111,
                        columnNumber: 11
                    }, this),
                    mobileSvc && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "vt-mobile-sub",
                        children: [
                            __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: s.href,
                                    children: [
                                        s.name,
                                        " ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                            size: 15
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SiteNav.tsx",
                                            lineNumber: 116,
                                            columnNumber: 73
                                        }, this)
                                    ]
                                }, s.slug, true, {
                                    fileName: "[project]/app/components/SiteNav.tsx",
                                    lineNumber: 116,
                                    columnNumber: 34
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/servicios",
                                children: [
                                    "Ver todos ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$right$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronRight$3e$__["ChevronRight"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteNav.tsx",
                                        lineNumber: 117,
                                        columnNumber: 46
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SiteNav.tsx",
                                lineNumber: 117,
                                columnNumber: 15
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SiteNav.tsx",
                        lineNumber: 115,
                        columnNumber: 13
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/nosotros",
                        children: "Nosotros"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SiteNav.tsx",
                        lineNumber: 120,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/como-trabajamos",
                        children: "Cómo trabajamos"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SiteNav.tsx",
                        lineNumber: 121,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "/contacto",
                        children: "Contacto"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SiteNav.tsx",
                        lineNumber: 122,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "vt-mobile-cta",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "/login",
                                className: "vt-btn vt-btn-ghost",
                                children: "Iniciar sesión"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SiteNav.tsx",
                                lineNumber: 124,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WA_URL"],
                                className: "vt-btn vt-btn-primary",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        size: 15
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteNav.tsx",
                                        lineNumber: 125,
                                        columnNumber: 106
                                    }, this),
                                    " Hablemos"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SiteNav.tsx",
                                lineNumber: 125,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SiteNav.tsx",
                        lineNumber: 123,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SiteNav.tsx",
                lineNumber: 109,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SiteNav.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
_s(SiteNav, "0Ov78PRhtLuVqxqmRriWKmMIbpY=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = SiteNav;
var _c;
__turbopack_context__.k.register(_c, "SiteNav");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/SiteFooter.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SiteFooter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/instagram.js [app-client] (ecmascript) <export default as Instagram>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/site.ts [app-client] (ecmascript)");
;
;
;
function SiteFooter() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "vt-footer",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vt-footer-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: 10,
                                    marginBottom: 4
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                        src: "/images/logo.png",
                                        alt: "Vanty",
                                        style: {
                                            height: 38,
                                            width: 'auto',
                                            display: 'block'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteFooter.tsx",
                                        lineNumber: 10,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "vt-display",
                                        style: {
                                            fontWeight: 800,
                                            fontSize: 19,
                                            color: '#fff'
                                        },
                                        children: "VANTY"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteFooter.tsx",
                                        lineNumber: 11,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SiteFooter.tsx",
                                lineNumber: 9,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "vt-footer-tag",
                                children: "Software e inteligencia artificial que resuelve problemas reales. Hecho con 💜 desde Perú para toda América Latina."
                            }, void 0, false, {
                                fileName: "[project]/app/components/SiteFooter.tsx",
                                lineNumber: 13,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "vt-socials",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WA_URL"],
                                        className: "vt-soc",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "WhatsApp",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SiteFooter.tsx",
                                            lineNumber: 15,
                                            columnNumber: 113
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteFooter.tsx",
                                        lineNumber: 15,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMAIL"]}`,
                                        className: "vt-soc",
                                        "aria-label": "Email",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SiteFooter.tsx",
                                            lineNumber: 16,
                                            columnNumber: 79
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteFooter.tsx",
                                        lineNumber: 16,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IG_URL"],
                                        className: "vt-soc",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Instagram",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$instagram$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Instagram$3e$__["Instagram"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SiteFooter.tsx",
                                            lineNumber: 17,
                                            columnNumber: 114
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteFooter.tsx",
                                        lineNumber: 17,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                        href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FB_URL"],
                                        className: "vt-soc",
                                        target: "_blank",
                                        rel: "noopener noreferrer",
                                        "aria-label": "Facebook",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                            size: 17
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SiteFooter.tsx",
                                            lineNumber: 18,
                                            columnNumber: 113
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteFooter.tsx",
                                        lineNumber: 18,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SiteFooter.tsx",
                                lineNumber: 14,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SiteFooter.tsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: "Servicios"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SiteFooter.tsx",
                                lineNumber: 22,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: [
                                    __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SERVICES"].map((s)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: s.href,
                                                children: s.name
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/SiteFooter.tsx",
                                                lineNumber: 24,
                                                columnNumber: 49
                                            }, this)
                                        }, s.slug, false, {
                                            fileName: "[project]/app/components/SiteFooter.tsx",
                                            lineNumber: 24,
                                            columnNumber: 32
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/servicios",
                                            children: "Ver todos"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SiteFooter.tsx",
                                            lineNumber: 25,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteFooter.tsx",
                                        lineNumber: 25,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SiteFooter.tsx",
                                lineNumber: 23,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SiteFooter.tsx",
                        lineNumber: 21,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: "Empresa"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SiteFooter.tsx",
                                lineNumber: 29,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/nosotros",
                                            children: "Nosotros"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SiteFooter.tsx",
                                            lineNumber: 31,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteFooter.tsx",
                                        lineNumber: 31,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/como-trabajamos",
                                            children: "Cómo trabajamos"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SiteFooter.tsx",
                                            lineNumber: 32,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteFooter.tsx",
                                        lineNumber: 32,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/contacto",
                                            children: "Contacto"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SiteFooter.tsx",
                                            lineNumber: 33,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteFooter.tsx",
                                        lineNumber: 33,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SiteFooter.tsx",
                                lineNumber: 30,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SiteFooter.tsx",
                        lineNumber: 28,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                children: "Contacto"
                            }, void 0, false, {
                                fileName: "[project]/app/components/SiteFooter.tsx",
                                lineNumber: 37,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["WA_URL"],
                                            target: "_blank",
                                            rel: "noopener noreferrer",
                                            children: "WhatsApp"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SiteFooter.tsx",
                                            lineNumber: 39,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteFooter.tsx",
                                        lineNumber: 39,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMAIL"]}`,
                                            children: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$site$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EMAIL"]
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SiteFooter.tsx",
                                            lineNumber: 40,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteFooter.tsx",
                                        lineNumber: 40,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                            href: "/login",
                                            children: "Iniciar sesión"
                                        }, void 0, false, {
                                            fileName: "[project]/app/components/SiteFooter.tsx",
                                            lineNumber: 41,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/SiteFooter.tsx",
                                        lineNumber: 41,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/SiteFooter.tsx",
                                lineNumber: 38,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/SiteFooter.tsx",
                        lineNumber: 36,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SiteFooter.tsx",
                lineNumber: 7,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "vt-footer-bottom",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "© 2026 Vanty · Software e inteligencia artificial para LATAM"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SiteFooter.tsx",
                        lineNumber: 46,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        children: "Hecho con 💜 desde Perú"
                    }, void 0, false, {
                        fileName: "[project]/app/components/SiteFooter.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/SiteFooter.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/SiteFooter.tsx",
        lineNumber: 6,
        columnNumber: 5
    }, this);
}
_c = SiteFooter;
var _c;
__turbopack_context__.k.register(_c, "SiteFooter");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/vanty-aba/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>VantyLanding
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/styled-jsx/style.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/brain.js [app-client] (ecmascript) <export default as Brain>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/shield.js [app-client] (ecmascript) <export default as Shield>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/message-square.js [app-client] (ecmascript) <export default as MessageSquare>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/phone.js [app-client] (ecmascript) <export default as Phone>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-client] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/sparkles.js [app-client] (ecmascript) <export default as Sparkles>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pause.js [app-client] (ecmascript) <export default as Pause>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/facebook.js [app-client] (ecmascript) <export default as Facebook>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/globe.js [app-client] (ecmascript) <export default as Globe>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SiteNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/SiteNav.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SiteFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/SiteFooter.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature(), _s2 = __turbopack_context__.k.signature(), _s3 = __turbopack_context__.k.signature(), _s4 = __turbopack_context__.k.signature(), _s5 = __turbopack_context__.k.signature(), _s6 = __turbopack_context__.k.signature(), _s7 = __turbopack_context__.k.signature(), _s8 = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
const WA_NUM = '51924685557';
const EMAIL = 'soporte@vanty.xyz';
const HERO_VIDEO_SRC = '/video/demo.mp4';
const HERO_VIDEO_POSTER = '/images/video-poster.jpg';
// ════════════════════════════════════════════════
//  TRADUCCIONES
// ════════════════════════════════════════════════
const T = {
    es: {
        lang: 'ES',
        langLabel: 'Español',
        nav: {
            platform: 'Plataforma',
            features: 'Características',
            aria: 'ARIA IA',
            pricing: 'Precios',
            faq: 'FAQ',
            contact: 'Contacto',
            whatsapp: 'WhatsApp'
        },
        hero: {
            sub: 'Primera plataforma ABA multi-rol en LATAM · 100% en español · IA clínica integrada',
            note: 'Sin contratos · Setup en 24 horas · Soporte incluido',
            pause: 'Pausar',
            resume: 'Reanudar',
            slides: [
                {
                    label: 'Gestión ABA',
                    tag: 'Primera plataforma ABA multi-rol en LATAM',
                    title: 'Gestión clínica ABA\nhecha para quienes\ntrabajan en campo'
                },
                {
                    label: 'ARIA IA',
                    tag: 'ARIA — IA Clínica',
                    title: 'Reportes de sesión\ngenerados por IA\nen segundos'
                },
                {
                    label: 'Portal Familiar',
                    tag: 'Portal Familiar · Videollamadas · Push',
                    title: 'Los padres conectados\nal progreso de\nsu hijo en tiempo real'
                }
            ]
        },
        trust: [
            'Primera plataforma ABA en LATAM',
            'Hub de IA clínica',
            'Facturación integrada',
            'Multi-rol nativo',
            '100% en español'
        ],
        priTitle: '¿Cuál es la prioridad de tu centro ABA?',
        priTabs: [
            'Recomendado',
            'Analistas',
            'Especialistas',
            'Secretaría',
            'Familias'
        ],
        showcaseTitle: 'Crea una operación clínica que funcione para tu centro',
        showcaseCols: [
            {
                title: 'Hub de IA para todo el flujo ABA',
                desc: 'ARIA y agentes especializados analizan datos, generan reportes, detectan patrones y anticipan alertas. Entrenados para ABA, no chatbots genéricos.'
            },
            {
                title: 'Toda tu operación en un solo lugar',
                desc: 'Clínica, agenda, facturación, comunicación y familias conectadas. Setup completo incluido el primer mes, sin perfiles técnicos.'
            },
            {
                title: 'Multi-rol: dirección, especialistas, secretaría y familias',
                desc: 'Cada usuario ve exactamente lo que necesita. Permisos diferenciados, portal familiar nativo y WhatsApp integrado.'
            }
        ],
        whyTitle: '¿Por qué trabajar\ncon Vanty?',
        whySub: 'Primera plataforma ABA con IA, multi-rol y portal familiar en América Latina.',
        whyCards: [
            {
                icon: '🤖',
                title: 'Hub de IA clínica: ARIA y agentes especializados',
                desc: 'ARIA genera reportes y notas; agentes de objetivos, patrones, predicción y alertas trabajan por ti en segundo plano.'
            },
            {
                icon: '🧩',
                title: 'Multi-rol real: dirección, especialista, secretaría y familia',
                desc: 'Cada rol con su propio portal y permisos. La secretaría gestiona agenda, pagos y comunicación sin tocar lo clínico.'
            },
            {
                icon: '💳',
                title: 'Facturación y pagos integrados',
                desc: 'Cobros, comprobantes y reportes financieros dentro de la misma plataforma. Sin hojas de cálculo sueltas.'
            },
            {
                icon: '📅',
                title: 'Agenda con Google y Outlook + WhatsApp',
                desc: 'Sincroniza calendarios, agenda sesiones y notifica a las familias por WhatsApp automáticamente.'
            },
            {
                icon: '🩺',
                title: 'Evaluaciones, CIE-11 y base de conocimiento',
                desc: 'Evaluaciones iniciales con análisis IA, buscador diagnóstico CIE-11 y biblioteca clínica siempre a mano.'
            },
            {
                icon: '🔐',
                title: 'Seguridad clínica y datos 100% tuyos',
                desc: 'Estándares de seguridad para datos de pacientes. Nunca compartimos tu información con terceros.'
            }
        ],
        testimonialBrand: 'Vanty todos los días, por siempre',
        testimonialQuote: 'Antes tardaba horas escribiendo reportes. Ahora con ARIA lo hago en minutos y puedo enfocarme en lo que importa: mis pacientes.',
        testimonialModules: 'Módulos que usa',
        testimonialProducts: [
            'Registro de sesiones ABA',
            'Hub de IA · ARIA y agentes',
            'Facturación y pagos',
            'Portal familiar + WhatsApp'
        ],
        testimonialName: 'Ana M.',
        testimonialRole: 'Analista ABA · Lima, Perú',
        compareLabel: 'Vanty ABA vs CentralReach',
        compareTitle: 'La alternativa LATAM\na CentralReach',
        compareSub: 'Todo lo que esperas de un software ABA internacional como CentralReach — IA clínica, facturación y portal familiar — pero en español, en soles y pensado para tu centro.',
        compareHeaders: [
            'Característica',
            'CentralReach y similares',
            'Otras apps',
            '⭐ Vanty ABA'
        ],
        compareRows: [
            [
                'Multi-rol: dirección, especialista, secretaría y familia',
                '⚠️ Limitado',
                '❌ No aplica',
                '✅ 4 roles nativos'
            ],
            [
                'Hub de IA con agentes clínicos (ARIA + más)',
                '❌ No',
                '❌ No',
                '✅ Suite completa'
            ],
            [
                'Reportes clínicos con IA en segundos',
                '⚠️ Manual',
                '❌ No',
                '✅ Automáticos'
            ],
            [
                'Evaluaciones iniciales + diagnóstico CIE-11',
                '⚠️ Parcial',
                '❌ No',
                '✅ Con IA'
            ],
            [
                'Facturación y pagos integrados',
                '⚠️ Módulo aparte',
                '❌ No',
                '✅ Incluido'
            ],
            [
                'WhatsApp integrado para familias',
                '❌ No',
                '⚠️ Básico',
                '✅ Nativo'
            ],
            [
                'Sincronización Google y Outlook',
                '⚠️ Parcial',
                '❌ No',
                '✅ Incluida'
            ],
            [
                'Videollamadas y notificaciones push',
                '❌ No',
                '⚠️ Básico',
                '✅ Nativas'
            ],
            [
                'Portal familiar con bienestar de padres',
                '❌ No',
                '❌ No',
                '✅ Nativo'
            ],
            [
                '100% en español, pensado para LATAM',
                '❌ Inglés',
                '⚠️ Parcial',
                '✅ Español'
            ],
            [
                'Precio justo en soles',
                '❌ USD, caro',
                '⚠️ Variable',
                '✅ S/120/mes'
            ],
            [
                'Setup completo incluido',
                '❌ Costo extra',
                '❌ No',
                '✅ Incluido'
            ]
        ],
        helpBrand: 'Vanty Guides',
        helpTeam: 'Equipo Vanty',
        helpRole: 'Soporte clínico ABA',
        helpTitle: 'Nos encanta ayudar.\nDe verdad.',
        helpDesc: '¿Aún no sabes bien lo que necesitas? Escríbenos. Es un placer ayudarte, incluso antes de ser cliente.',
        pricingLabel: 'Precios',
        pricingTitle: 'Planes claros.\nSin sorpresas.',
        pricingSub: 'Sin contratos anuales. Tu plataforma activa en 24 horas desde el primer pago.',
        pricingNote: '🔐 Activación en 24 hrs · Gestionado directamente con el equipo Vanty',
        plan1Label: 'Primer mes · Setup incluido',
        plan1Desc: 'Configuración completa, carga inicial de datos y capacitación de tu equipo incluida.',
        plan1Features: [
            'Setup completo del sistema',
            'Carga inicial de pacientes',
            'Capacitación del equipo',
            'Todos los módulos ABA',
            'IA ARIA activada',
            'Portal familiar',
            'Soporte prioritario'
        ],
        plan2Badge: 'Mes 2 en adelante',
        plan2Label: 'Mensual · Sin permanencia',
        plan2Desc: 'Acceso a todos los módulos, IA ilimitada, actualizaciones automáticas y soporte incluido.',
        plan2Features: [
            'Todos los módulos activos',
            'ARIA · IA clínica 24/7',
            'Videollamadas integradas',
            'Notificaciones push',
            'Actualizaciones incluidas',
            'Sin límite de usuarios',
            'Portal familiar nativo',
            'Reportes IA ilimitados',
            'Soporte WhatsApp y email'
        ],
        plan3Badge: '🎁 2 MESES GRATIS · ANUAL',
        plan3Label: 'Plan Anual · Pagas 10, usas 12',
        plan3Desc: 'Paga solo 10 meses y llévate 12. Ahorra S/260 vs. pago mensual — sin permanencias ni letras pequeñas.',
        plan3Features: [
            'Todo lo del plan mensual incluido',
            '2 meses completamente gratis',
            'Precio bloqueado 12 meses',
            'Soporte VIP dedicado',
            'Onboarding prioritario',
            'Acceso anticipado a funciones beta'
        ],
        faqLabel: 'Preguntas frecuentes',
        faqTitle: '¿Tienes dudas?\nLas respondemos.',
        faqs: [
            {
                q: '¿En qué se diferencia Vanty ABA de CentralReach?',
                a: 'CentralReach es un gran software, pero está en inglés, se paga en dólares y está pensado para Estados Unidos. Vanty ABA te ofrece lo mismo y más —Hub de IA clínica, facturación, agenda y portal familiar— 100% en español, en soles y con soporte cercano en LATAM. Además incluimos el setup completo y un rol de secretaría que otras plataformas no contemplan.'
            },
            {
                q: '¿Cuánto cuesta Vanty para mi centro?',
                a: 'El primer mes es S/200 e incluye configuración completa, carga inicial de pacientes y capacitación de tu equipo. Desde el segundo mes pagas S/120/mes sin permanencia mínima. Si eliges el plan anual, pagas solo S/1,180 (equivalente a 10 meses) y obtienes 2 meses gratis — un ahorro de S/260.'
            },
            {
                q: '¿Necesito conocimientos técnicos para usarlo?',
                a: 'Para nada. Vanty está diseñado para analistas de conducta y terapeutas, no para perfiles técnicos. La interfaz es 100% en español y nosotros hacemos el setup completo contigo en las primeras 24 horas.'
            },
            {
                q: '¿Mis datos de pacientes están seguros?',
                a: 'Absolutamente. Tus datos son 100% tuyos, almacenados con estándares de seguridad clínica. Nunca compartimos información con terceros y tienes control total en todo momento.'
            },
            {
                q: '¿Cuántos usuarios puedo agregar?',
                a: 'Sin límite. El plan mensual cubre a todo tu equipo —analistas, especialistas, administración— más los portales familiares de cada paciente, sin costo adicional por usuario.'
            },
            {
                q: '¿Cómo funciona el asistente ARIA?',
                a: 'ARIA analiza los datos de sesión y genera reportes, notas clínicas y resúmenes para padres en segundos. También detecta automáticamente cuando un objetivo alcanza ≥80% y notifica al equipo en tiempo real.'
            },
            {
                q: '¿Qué incluye el plan anual y cómo funciona?',
                a: 'Pagas S/1,180 una sola vez — equivale a 10 meses al precio mensual — y usas Vanty durante 12 meses completos. Los 2 meses extra son completamente gratis. Incluye todo lo del plan mensual más soporte VIP dedicado y acceso anticipado a nuevas funciones.'
            },
            {
                q: '¿Puedo cancelar cuando quiera?',
                a: 'Sí. El plan mensual no tiene permanencia mínima: cancelas cuando quieras desde el panel sin trámites. El plan anual es pago único por 12 meses, pasado ese período no se renueva automáticamente.'
            }
        ],
        ctaReady: '¿LISTO PARA EMPEZAR?',
        ctaTitle: 'Ordenemos el trabajo\nclínico ABA en LATAM, juntos.',
        ctaSub: 'Un solo sistema para analistas, especialistas y familias.\nHecho en Perú para toda América Latina. 💜',
        ctaWa: 'WhatsApp',
        footerTagline: 'Conectando analistas, especialistas y familias. 100% en español, desde Perú para toda América Latina.',
        footerCols: [
            {
                title: 'Plataforma',
                links: [
                    {
                        label: 'Roles',
                        href: '#roles'
                    },
                    {
                        label: 'Características',
                        href: '#diferencial'
                    },
                    {
                        label: 'ARIA IA',
                        href: '#aria'
                    },
                    {
                        label: 'Precios',
                        href: '#precios'
                    },
                    {
                        label: 'FAQ',
                        href: '#faq'
                    }
                ]
            },
            {
                title: 'Soporte',
                links: [
                    {
                        label: 'WhatsApp',
                        href: 'wa'
                    },
                    {
                        label: 'Email',
                        href: 'mail'
                    },
                    {
                        label: 'Panel Admin',
                        href: '/admin'
                    },
                    {
                        label: 'Documentación',
                        href: '#'
                    }
                ]
            },
            {
                title: 'Empresa',
                links: [
                    {
                        label: 'Acerca de Vanty',
                        href: '#'
                    },
                    {
                        label: 'Blog',
                        href: '#'
                    },
                    {
                        label: 'Privacidad',
                        href: '#'
                    },
                    {
                        label: 'Términos',
                        href: '#'
                    }
                ]
            }
        ],
        footerAllied: '🏆 Primer centro aliado',
        footerAlliedName: 'Jugando Aprendo · Lima, Perú 🇵🇪',
        footerCopy: '© 2026 Vanty · Primera plataforma ABA multi-rol en LATAM',
        footerMade: 'Hecho con 💜 desde Perú para toda América Latina',
        marqueeItems: [
            'Vanty ABA, el futuro del ABA en LATAM',
            'Hub de IA clínica',
            'Facturación y pagos integrados',
            'WhatsApp para familias',
            'Agenda con Google y Outlook',
            'Portal familiar nativo',
            '100% en español',
            'Setup en 24 horas'
        ],
        tagline: 'evolución terapéutica inteligente'
    },
    en: {
        lang: 'EN',
        langLabel: 'English',
        nav: {
            platform: 'Platform',
            features: 'Features',
            aria: 'ARIA AI',
            pricing: 'Pricing',
            faq: 'FAQ',
            contact: 'Contact',
            whatsapp: 'WhatsApp'
        },
        hero: {
            sub: 'First multi-role ABA platform in LATAM · 100% in Spanish · Integrated clinical AI',
            note: 'No contracts · Setup in 24 hours · Support included',
            pause: 'Pause',
            resume: 'Resume',
            slides: [
                {
                    label: 'ABA Management',
                    tag: 'First multi-role ABA platform in LATAM',
                    title: 'Clinical ABA management\nbuilt for those who\nwork in the field'
                },
                {
                    label: 'ARIA AI',
                    tag: 'ARIA — Clinical AI',
                    title: 'Session reports\ngenerated by AI\nin seconds'
                },
                {
                    label: 'Family Portal',
                    tag: 'Family Portal',
                    title: 'Parents connected\nto their child\'s\nprogress in real time'
                }
            ]
        },
        trust: [
            'First ABA platform in LATAM',
            'Clinical AI hub',
            'Integrated billing',
            'Native multi-role',
            '100% in Spanish'
        ],
        priTitle: 'What is your ABA center\'s priority?',
        priTabs: [
            'Recommended',
            'Analysts',
            'Specialists',
            'Front desk',
            'Families'
        ],
        showcaseTitle: 'Build a clinical operation that works for your center',
        showcaseCols: [
            {
                title: 'An AI hub for the whole ABA workflow',
                desc: 'ARIA and specialized agents analyze data, generate reports, detect patterns and anticipate alerts. Trained for ABA, not generic chatbots.'
            },
            {
                title: 'Your whole operation in one place',
                desc: 'Clinical work, calendar, billing, communication and families connected. Full setup included the first month, no technical profiles.'
            },
            {
                title: 'Multi-role: director, specialists, front desk and families',
                desc: 'Each user sees exactly what they need. Differentiated permissions, native family portal and integrated WhatsApp.'
            }
        ],
        whyTitle: 'Why work\nwith Vanty?',
        whySub: 'First ABA platform with AI, multi-role and family portal in Latin America.',
        whyCards: [
            {
                icon: '🤖',
                title: 'Clinical AI hub: ARIA and specialized agents',
                desc: 'ARIA generates reports and notes; agents for goals, patterns, prediction and alerts work for you in the background.'
            },
            {
                icon: '🧩',
                title: 'Real multi-role: director, specialist, front desk and family',
                desc: 'Each role with its own portal and permissions. Front desk handles calendar, payments and communication without touching clinical data.'
            },
            {
                icon: '💳',
                title: 'Integrated billing and payments',
                desc: 'Charges, receipts and financial reports inside the same platform. No loose spreadsheets.'
            },
            {
                icon: '📅',
                title: 'Calendar with Google and Outlook + WhatsApp',
                desc: 'Sync calendars, schedule sessions and notify families via WhatsApp automatically.'
            },
            {
                icon: '🩺',
                title: 'Evaluations, ICD-11 and knowledge base',
                desc: 'Initial evaluations with AI analysis, ICD-11 diagnostic search and a clinical library always at hand.'
            },
            {
                icon: '🔐',
                title: 'Clinical security, data 100% yours',
                desc: 'Security standards for patient data. We never share your information with third parties.'
            }
        ],
        testimonialBrand: 'Vanty every day, forever',
        testimonialQuote: 'I used to spend hours writing reports. Now with ARIA I do it in minutes and can focus on what matters: my patients.',
        testimonialModules: 'Modules she uses',
        testimonialProducts: [
            'ABA session recording',
            'AI hub · ARIA and agents',
            'Billing and payments',
            'Family portal + WhatsApp'
        ],
        testimonialName: 'Ana M.',
        testimonialRole: 'ABA Analyst · Lima, Peru',
        compareLabel: 'Vanty ABA vs CentralReach',
        compareTitle: 'The LATAM alternative\nto CentralReach',
        compareSub: 'Everything you expect from international ABA software like CentralReach — clinical AI, billing and family portal — but in Spanish, in local currency and built for your center.',
        compareHeaders: [
            'Feature',
            'CentralReach & similar',
            'Other apps',
            '⭐ Vanty ABA'
        ],
        compareRows: [
            [
                'Multi-role: director, specialist, front desk and family',
                '⚠️ Limited',
                '❌ N/A',
                '✅ 4 native roles'
            ],
            [
                'AI hub with clinical agents (ARIA + more)',
                '❌ No',
                '❌ No',
                '✅ Full suite'
            ],
            [
                'Clinical reports with AI in seconds',
                '⚠️ Manual',
                '❌ No',
                '✅ Automatic'
            ],
            [
                'Initial evaluations + ICD-11 diagnosis',
                '⚠️ Partial',
                '❌ No',
                '✅ With AI'
            ],
            [
                'Integrated billing and payments',
                '⚠️ Separate module',
                '❌ No',
                '✅ Included'
            ],
            [
                'Integrated WhatsApp for families',
                '❌ No',
                '⚠️ Basic',
                '✅ Native'
            ],
            [
                'Google and Outlook sync',
                '⚠️ Partial',
                '❌ No',
                '✅ Included'
            ],
            [
                'Video calls and push notifications',
                '❌ No',
                '⚠️ Basic',
                '✅ Native'
            ],
            [
                'Family portal with parent wellbeing',
                '❌ No',
                '❌ No',
                '✅ Native'
            ],
            [
                '100% in Spanish, built for LATAM',
                '❌ English',
                '⚠️ Partial',
                '✅ Spanish'
            ],
            [
                'Fair local-currency pricing',
                '❌ USD, expensive',
                '⚠️ Variable',
                '✅ S/120/mo'
            ],
            [
                'Full setup included',
                '❌ Extra cost',
                '❌ No',
                '✅ Included'
            ]
        ],
        helpBrand: 'Vanty Guides',
        helpTeam: 'Vanty Team',
        helpRole: 'ABA Clinical Support',
        helpTitle: 'We love helping.\nReally.',
        helpDesc: 'Not sure what you need yet? Write to us. It\'s a pleasure to help, even before you become a client.',
        pricingLabel: 'Pricing',
        pricingTitle: 'Clear plans.\nNo surprises.',
        pricingSub: 'No annual contracts. Your platform active in 24 hours from the first payment.',
        pricingNote: '🔐 Activation in 24 hrs · Managed directly with the Vanty team',
        plan1Label: 'First month · Setup included',
        plan1Desc: 'Complete configuration, initial data load and team training included.',
        plan1Features: [
            'Full system setup',
            'Initial patient load',
            'Team training',
            'All ABA modules',
            'ARIA AI activated',
            'Family portal',
            'Priority support'
        ],
        plan2Badge: 'Month 2 onwards',
        plan2Label: 'Monthly · No commitment',
        plan2Desc: 'Access to all modules, unlimited AI, automatic updates and support included.',
        plan2Features: [
            'All active modules',
            'ARIA · Clinical AI 24/7',
            'Integrated video calls',
            'Push notifications',
            'Updates included',
            'Unlimited users',
            'Native family portal',
            'Unlimited AI reports',
            'WhatsApp & email support'
        ],
        plan3Badge: '🎁 2 MONTHS FREE · ANNUAL',
        plan3Label: 'Annual Plan · Pay 10, use 12',
        plan3Desc: 'Pay only 10 months and get 12. Save S/260 vs. monthly — no commitments, no fine print.',
        plan3Features: [
            'Everything in the monthly plan',
            '2 months completely free',
            'Price locked 12 months',
            'Dedicated VIP support',
            'Priority onboarding',
            'Early access to beta features'
        ],
        faqLabel: 'Frequently asked questions',
        faqTitle: 'Have questions?\nWe\'ll answer them.',
        faqs: [
            {
                q: 'How is Vanty ABA different from CentralReach?',
                a: 'CentralReach is great software, but it\'s in English, billed in US dollars and built for the US. Vanty ABA gives you the same and more —a clinical AI hub, billing, calendar and family portal— 100% in Spanish, in local currency and with close support in LATAM. We also include full setup and a front-desk role other platforms don\'t offer.'
            },
            {
                q: 'How much does Vanty cost for my center?',
                a: 'The first month is S/200 and includes full configuration, initial patient load and team training. From the second month you pay S/120/mo with no minimum commitment. With the annual plan you pay just S/1,180 (10 months\' worth) and get 12 months — that\'s 2 months free and S/260 in savings.'
            },
            {
                q: 'Do I need technical knowledge to use it?',
                a: 'Not at all. Vanty is built for behavioral analysts and therapists, not IT teams. The interface is fully in Spanish and we handle the complete setup with you within the first 24 hours.'
            },
            {
                q: 'Is my patient data secure?',
                a: 'Absolutely. Your data is 100% yours, stored to clinical security standards. We never share information with third parties and you retain full control at all times.'
            },
            {
                q: 'How many users can I add?',
                a: 'Unlimited. The monthly plan covers your entire team — analysts, specialists, admin staff — plus family portals for every patient, at no extra cost per user.'
            },
            {
                q: 'How does the ARIA assistant work?',
                a: 'ARIA analyzes session data and generates reports, clinical notes and parent summaries in seconds. It also automatically detects when an objective reaches ≥80% and notifies the team in real time.'
            },
            {
                q: 'What does the annual plan include and how does it work?',
                a: 'You pay S/1,180 once — the equivalent of 10 monthly payments — and use Vanty for a full 12 months. The extra 2 months are completely free. Includes everything in the monthly plan plus dedicated VIP support and early access to new features.'
            },
            {
                q: 'Can I cancel at any time?',
                a: 'Yes. The monthly plan has no minimum commitment: cancel anytime from your dashboard. The annual plan is a one-time payment for 12 months; it does not auto-renew once the period ends.'
            }
        ],
        ctaReady: 'READY TO START?',
        ctaTitle: 'Let\'s organize ABA clinical\nwork in LATAM, together.',
        ctaSub: 'One system for analysts, specialists and families.\nBuilt in Peru for all of Latin America. 💜',
        ctaWa: 'WhatsApp',
        footerTagline: 'Connecting analysts, specialists and families. 100% in Spanish, from Peru for all of Latin America.',
        footerCols: [
            {
                title: 'Platform',
                links: [
                    {
                        label: 'Roles',
                        href: '#roles'
                    },
                    {
                        label: 'Features',
                        href: '#diferencial'
                    },
                    {
                        label: 'ARIA AI',
                        href: '#aria'
                    },
                    {
                        label: 'Pricing',
                        href: '#precios'
                    },
                    {
                        label: 'FAQ',
                        href: '#faq'
                    }
                ]
            },
            {
                title: 'Support',
                links: [
                    {
                        label: 'WhatsApp',
                        href: 'wa'
                    },
                    {
                        label: 'Email',
                        href: 'mail'
                    },
                    {
                        label: 'Admin Panel',
                        href: '/admin'
                    },
                    {
                        label: 'Docs',
                        href: '#'
                    }
                ]
            },
            {
                title: 'Company',
                links: [
                    {
                        label: 'About Vanty',
                        href: '#'
                    },
                    {
                        label: 'Blog',
                        href: '#'
                    },
                    {
                        label: 'Privacy',
                        href: '#'
                    },
                    {
                        label: 'Terms',
                        href: '#'
                    }
                ]
            }
        ],
        footerAllied: '🏆 First allied center',
        footerAlliedName: 'Jugando Aprendo · Lima, Peru 🇵🇪',
        footerCopy: '© 2026 Vanty · First multi-role ABA platform in LATAM',
        footerMade: 'Made with 💜 from Peru for all of Latin America',
        marqueeItems: [
            'Vanty ABA, the future of ABA in LATAM',
            'Clinical AI hub',
            'Integrated billing & payments',
            'WhatsApp for families',
            'Calendar with Google & Outlook',
            'Native family portal',
            '100% in Spanish',
            'Setup in 24 hours'
        ],
        tagline: 'intelligent therapeutic evolution'
    },
    pt: {
        lang: 'PT',
        langLabel: 'Português',
        nav: {
            platform: 'Plataforma',
            features: 'Características',
            aria: 'ARIA IA',
            pricing: 'Preços',
            faq: 'FAQ',
            contact: 'Contato',
            whatsapp: 'WhatsApp'
        },
        hero: {
            sub: 'Primeira plataforma ABA multi-papel na LATAM · 100% em espanhol · IA clínica integrada',
            note: 'Sem contratos · Configuração em 24 horas · Suporte incluído',
            pause: 'Pausar',
            resume: 'Retomar',
            slides: [
                {
                    label: 'Gestão ABA',
                    tag: 'Primeira plataforma ABA multi-papel na LATAM',
                    title: 'Gestão clínica ABA\nfeita para quem\ntrabalha em campo'
                },
                {
                    label: 'ARIA IA',
                    tag: 'ARIA — IA Clínica',
                    title: 'Relatórios de sessão\ngerados por IA\nem segundos'
                },
                {
                    label: 'Portal Familiar',
                    tag: 'Portal Familiar',
                    title: 'Pais conectados\nao progresso do\nseu filho em tempo real'
                }
            ]
        },
        trust: [
            'Primeira plataforma ABA na LATAM',
            'Hub de IA clínica',
            'Faturamento integrado',
            'Multi-papel nativo',
            '100% em espanhol'
        ],
        priTitle: 'Qual é a prioridade do seu centro ABA?',
        priTabs: [
            'Recomendado',
            'Analistas',
            'Especialistas',
            'Secretaria',
            'Famílias'
        ],
        showcaseTitle: 'Crie uma operação clínica que funcione para o seu centro',
        showcaseCols: [
            {
                title: 'Um hub de IA para todo o fluxo ABA',
                desc: 'ARIA e agentes especializados analisam dados, geram relatórios, detectam padrões e antecipam alertas. Treinados para ABA, não chatbots genéricos.'
            },
            {
                title: 'Toda a sua operação em um só lugar',
                desc: 'Clínica, agenda, faturamento, comunicação e famílias conectadas. Configuração completa incluída no primeiro mês, sem perfis técnicos.'
            },
            {
                title: 'Multi-papel: direção, especialistas, secretaria e famílias',
                desc: 'Cada usuário vê exatamente o que precisa. Permissões diferenciadas, portal familiar nativo e WhatsApp integrado.'
            }
        ],
        whyTitle: 'Por que trabalhar\ncom a Vanty?',
        whySub: 'Primeira plataforma ABA com IA, multi-papel e portal familiar na América Latina.',
        whyCards: [
            {
                icon: '🤖',
                title: 'Hub de IA clínica: ARIA e agentes especializados',
                desc: 'ARIA gera relatórios e notas; agentes de objetivos, padrões, previsão e alertas trabalham por você em segundo plano.'
            },
            {
                icon: '🧩',
                title: 'Multi-papel real: direção, especialista, secretaria e família',
                desc: 'Cada papel com seu próprio portal e permissões. A secretaria gerencia agenda, pagamentos e comunicação sem tocar no clínico.'
            },
            {
                icon: '💳',
                title: 'Faturamento e pagamentos integrados',
                desc: 'Cobranças, comprovantes e relatórios financeiros dentro da mesma plataforma. Sem planilhas soltas.'
            },
            {
                icon: '📅',
                title: 'Agenda com Google e Outlook + WhatsApp',
                desc: 'Sincronize calendários, agende sessões e notifique as famílias por WhatsApp automaticamente.'
            },
            {
                icon: '🩺',
                title: 'Avaliações, CID-11 e base de conhecimento',
                desc: 'Avaliações iniciais com análise de IA, busca diagnóstica CID-11 e biblioteca clínica sempre à mão.'
            },
            {
                icon: '🔐',
                title: 'Segurança clínica, dados 100% seus',
                desc: 'Padrões de segurança para dados de pacientes. Nunca compartilhamos suas informações com terceiros.'
            }
        ],
        testimonialBrand: 'Vanty todos os dias, para sempre',
        testimonialQuote: 'Antes eu levava horas escrevendo relatórios. Agora com ARIA faço em minutos e posso me concentrar no que importa: meus pacientes.',
        testimonialModules: 'Módulos que usa',
        testimonialProducts: [
            'Registro de sessões ABA',
            'Hub de IA · ARIA e agentes',
            'Faturamento e pagamentos',
            'Portal familiar + WhatsApp'
        ],
        testimonialName: 'Ana M.',
        testimonialRole: 'Analista ABA · Lima, Peru',
        compareLabel: 'Vanty ABA vs CentralReach',
        compareTitle: 'A alternativa LATAM\nao CentralReach',
        compareSub: 'Tudo o que você espera de um software ABA internacional como o CentralReach — IA clínica, faturamento e portal familiar — mas em espanhol, em moeda local e pensado para o seu centro.',
        compareHeaders: [
            'Característica',
            'CentralReach e similares',
            'Outras apps',
            '⭐ Vanty ABA'
        ],
        compareRows: [
            [
                'Multi-papel: direção, especialista, secretaria e família',
                '⚠️ Limitado',
                '❌ N/A',
                '✅ 4 papéis nativos'
            ],
            [
                'Hub de IA com agentes clínicos (ARIA + mais)',
                '❌ Não',
                '❌ Não',
                '✅ Suite completa'
            ],
            [
                'Relatórios clínicos com IA em segundos',
                '⚠️ Manual',
                '❌ Não',
                '✅ Automáticos'
            ],
            [
                'Avaliações iniciais + diagnóstico CID-11',
                '⚠️ Parcial',
                '❌ Não',
                '✅ Com IA'
            ],
            [
                'Faturamento e pagamentos integrados',
                '⚠️ Módulo à parte',
                '❌ Não',
                '✅ Incluído'
            ],
            [
                'WhatsApp integrado para famílias',
                '❌ Não',
                '⚠️ Básico',
                '✅ Nativo'
            ],
            [
                'Sincronização Google e Outlook',
                '⚠️ Parcial',
                '❌ Não',
                '✅ Incluída'
            ],
            [
                'Videochamadas e notificações push',
                '❌ Não',
                '⚠️ Básico',
                '✅ Nativas'
            ],
            [
                'Portal familiar com bem-estar dos pais',
                '❌ Não',
                '❌ Não',
                '✅ Nativo'
            ],
            [
                '100% em espanhol, pensado para LATAM',
                '❌ Inglês',
                '⚠️ Parcial',
                '✅ Espanhol'
            ],
            [
                'Preço justo em moeda local',
                '❌ USD, caro',
                '⚠️ Variável',
                '✅ S/120/mês'
            ],
            [
                'Setup completo incluído',
                '❌ Custo extra',
                '❌ Não',
                '✅ Incluído'
            ]
        ],
        helpBrand: 'Vanty Guides',
        helpTeam: 'Equipe Vanty',
        helpRole: 'Suporte clínico ABA',
        helpTitle: 'Adoramos ajudar.\nDe verdade.',
        helpDesc: 'Ainda não sabe bem o que precisa? Escreva para nós. É um prazer ajudar, mesmo antes de ser cliente.',
        pricingLabel: 'Preços',
        pricingTitle: 'Planos claros.\nSem surpresas.',
        pricingSub: 'Sem contratos anuais. Sua plataforma ativa em 24 horas a partir do primeiro pagamento.',
        pricingNote: '🔐 Ativação em 24 hrs · Gerenciado diretamente com a equipe Vanty',
        plan1Label: 'Primeiro mês · Configuração incluída',
        plan1Desc: 'Configuração completa, carga inicial de dados e treinamento da sua equipe incluídos.',
        plan1Features: [
            'Configuração completa do sistema',
            'Carga inicial de pacientes',
            'Treinamento da equipe',
            'Todos os módulos ABA',
            'IA ARIA ativada',
            'Portal familiar',
            'Suporte prioritário'
        ],
        plan2Badge: 'Mês 2 em diante',
        plan2Label: 'Mensal · Sem fidelidade',
        plan2Desc: 'Acesso a todos os módulos, IA ilimitada, atualizações automáticas e suporte incluído.',
        plan2Features: [
            'Todos os módulos ativos',
            'ARIA · IA clínica 24/7',
            'Atualizações incluídas',
            'Sem limite de usuários',
            'Portal familiar nativo',
            'Relatórios IA ilimitados',
            'Suporte WhatsApp e e-mail'
        ],
        plan3Badge: '🎁 2 MESES GRÁTIS · ANUAL',
        plan3Label: 'Plano Anual · Pague 10, use 12',
        plan3Desc: 'Pague apenas 10 meses e use por 12. Economize S/260 vs. mensal — sem fidelidade nem letras miúdas.',
        plan3Features: [
            'Tudo do plano mensal incluído',
            '2 meses completamente grátis',
            'Preço bloqueado 12 meses',
            'Suporte VIP dedicado',
            'Onboarding prioritário',
            'Acesso antecipado a novas funções'
        ],
        faqLabel: 'Perguntas frequentes',
        faqTitle: 'Tem dúvidas?\nNós respondemos.',
        faqs: [
            {
                q: 'Qual a diferença entre a Vanty ABA e o CentralReach?',
                a: 'O CentralReach é um ótimo software, mas está em inglês, é cobrado em dólares e foi pensado para os EUA. A Vanty ABA oferece o mesmo e mais —hub de IA clínica, faturamento, agenda e portal familiar— 100% em espanhol, em moeda local e com suporte próximo na LATAM. Também incluímos a configuração completa e um papel de secretaria que outras plataformas não têm.'
            },
            {
                q: 'Quanto custa a Vanty para o meu centro?',
                a: 'O primeiro mês é S/200 e inclui configuração completa, carga inicial de pacientes e treinamento da equipe. A partir do segundo mês você paga S/120/mês sem fidelidade mínima. Com o plano anual, paga apenas S/1.180 (equivalente a 10 meses) e usa por 12 — 2 meses grátis e uma economia de S/260.'
            },
            {
                q: 'Preciso de conhecimentos técnicos para usar?',
                a: 'De jeito nenhum. A Vanty foi projetada para analistas e terapeutas comportamentais, não para TI. A interface é 100% em espanhol e fazemos a configuração completa com você nas primeiras 24 horas.'
            },
            {
                q: 'Meus dados de pacientes estão seguros?',
                a: 'Absolutamente. Seus dados são 100% seus, armazenados com padrões de segurança clínica. Nunca compartilhamos informações com terceiros e você tem controle total a qualquer momento.'
            },
            {
                q: 'Quantos usuários posso adicionar?',
                a: 'Ilimitado. O plano mensal cobre toda a sua equipe — analistas, especialistas, administrativo — mais os portais familiares de cada paciente, sem custo extra por usuário.'
            },
            {
                q: 'Como funciona o assistente ARIA?',
                a: 'ARIA analisa os dados de sessão e gera relatórios, notas clínicas e resumos para os pais em segundos. Também detecta automaticamente quando um objetivo atinge ≥80% e notifica a equipe em tempo real.'
            },
            {
                q: 'O que inclui o plano anual e como funciona?',
                a: 'Você paga S/1.180 uma única vez — equivalente a 10 pagamentos mensais — e usa a Vanty por 12 meses completos. Os 2 meses extras são totalmente grátis. Inclui tudo do plano mensal mais suporte VIP dedicado e acesso antecipado a novas funções.'
            },
            {
                q: 'Posso cancelar quando quiser?',
                a: 'Sim. O plano mensal não tem fidelidade: cancele quando quiser pelo painel sem burocracia. O plano anual é um pagamento único por 12 meses; não é renovado automaticamente ao final do período.'
            }
        ],
        ctaReady: 'PRONTO PARA COMEÇAR?',
        ctaTitle: 'Vamos organizar o trabalho\nclínico ABA na LATAM, juntos.',
        ctaSub: 'Um só sistema para analistas, especialistas e famílias.\nFeito no Peru para toda a América Latina. 💜',
        ctaWa: 'WhatsApp',
        footerTagline: 'Conectando analistas, especialistas e famílias. 100% em espanhol, desde o Peru para toda a América Latina.',
        footerCols: [
            {
                title: 'Plataforma',
                links: [
                    {
                        label: 'Papéis',
                        href: '#roles'
                    },
                    {
                        label: 'Características',
                        href: '#diferencial'
                    },
                    {
                        label: 'ARIA IA',
                        href: '#aria'
                    },
                    {
                        label: 'Preços',
                        href: '#precios'
                    },
                    {
                        label: 'FAQ',
                        href: '#faq'
                    }
                ]
            },
            {
                title: 'Suporte',
                links: [
                    {
                        label: 'WhatsApp',
                        href: 'wa'
                    },
                    {
                        label: 'E-mail',
                        href: 'mail'
                    },
                    {
                        label: 'Painel Admin',
                        href: '/admin'
                    },
                    {
                        label: 'Documentação',
                        href: '#'
                    }
                ]
            },
            {
                title: 'Empresa',
                links: [
                    {
                        label: 'Sobre a Vanty',
                        href: '#'
                    },
                    {
                        label: 'Blog',
                        href: '#'
                    },
                    {
                        label: 'Privacidade',
                        href: '#'
                    },
                    {
                        label: 'Termos',
                        href: '#'
                    }
                ]
            }
        ],
        footerAllied: '🏆 Primeiro centro parceiro',
        footerAlliedName: 'Jugando Aprendo · Lima, Peru 🇵🇪',
        footerCopy: '© 2026 Vanty · Primeira plataforma ABA multi-papel na LATAM',
        footerMade: 'Feito com 💜 desde o Peru para toda a América Latina',
        marqueeItems: [
            'Vanty ABA, o futuro do ABA na LATAM',
            'Hub de IA clínica',
            'Faturamento e pagamentos integrados',
            'WhatsApp para famílias',
            'Agenda com Google e Outlook',
            'Portal familiar nativo',
            '100% em espanhol',
            'Configuração em 24 horas'
        ],
        tagline: 'evolução terapêutica inteligente'
    },
    fr: {
        lang: 'FR',
        langLabel: 'Français',
        nav: {
            platform: 'Plateforme',
            features: 'Fonctionnalités',
            aria: 'ARIA IA',
            pricing: 'Tarifs',
            faq: 'FAQ',
            contact: 'Contact',
            whatsapp: 'WhatsApp'
        },
        hero: {
            sub: 'Première plateforme ABA multi-rôles en LATAM · 100% en espagnol · IA clinique intégrée',
            note: 'Sans contrats · Démarrage en 24 heures · Support inclus',
            pause: 'Pause',
            resume: 'Reprendre',
            slides: [
                {
                    label: 'Gestion ABA',
                    tag: 'Première plateforme ABA multi-rôles en LATAM',
                    title: 'Gestion clinique ABA\nconçue pour ceux qui\ntravaillent sur le terrain'
                },
                {
                    label: 'ARIA IA',
                    tag: 'ARIA — IA Clinique',
                    title: 'Rapports de session\ngénérés par IA\nen quelques secondes'
                },
                {
                    label: 'Portail Famille',
                    tag: 'Portail Famille',
                    title: 'Les parents connectés\naux progrès de\nleur enfant en temps réel'
                }
            ]
        },
        trust: [
            'Première plateforme ABA en LATAM',
            'Hub d\'IA clinique',
            'Facturation intégrée',
            'Multi-rôles natif',
            '100% en espagnol'
        ],
        priTitle: 'Quelle est la priorité de votre centre ABA ?',
        priTabs: [
            'Recommandé',
            'Analystes',
            'Spécialistes',
            'Secrétariat',
            'Familles'
        ],
        showcaseTitle: 'Créez une opération clinique qui fonctionne pour votre centre',
        showcaseCols: [
            {
                title: 'Un hub d\'IA pour tout le flux ABA',
                desc: 'ARIA et des agents spécialisés analysent les données, génèrent des rapports, détectent des tendances et anticipent les alertes. Formés pour l\'ABA, pas des chatbots génériques.'
            },
            {
                title: 'Toute votre opération au même endroit',
                desc: 'Clinique, agenda, facturation, communication et familles connectées. Configuration complète incluse le premier mois, sans profils techniques.'
            },
            {
                title: 'Multi-rôles : direction, spécialistes, secrétariat et familles',
                desc: 'Chaque utilisateur voit exactement ce dont il a besoin. Autorisations différenciées, portail familial natif et WhatsApp intégré.'
            }
        ],
        whyTitle: 'Pourquoi travailler\navec Vanty ?',
        whySub: 'Première plateforme ABA avec IA, multi-rôles et portail familial en Amérique Latine.',
        whyCards: [
            {
                icon: '🤖',
                title: 'Hub d\'IA clinique : ARIA et agents spécialisés',
                desc: 'ARIA génère rapports et notes ; des agents d\'objectifs, de tendances, de prédiction et d\'alertes travaillent pour vous en arrière-plan.'
            },
            {
                icon: '🧩',
                title: 'Multi-rôles réel : direction, spécialiste, secrétariat et famille',
                desc: 'Chaque rôle avec son propre portail et ses permissions. Le secrétariat gère agenda, paiements et communication sans toucher au clinique.'
            },
            {
                icon: '💳',
                title: 'Facturation et paiements intégrés',
                desc: 'Encaissements, reçus et rapports financiers dans la même plateforme. Sans tableurs épars.'
            },
            {
                icon: '📅',
                title: 'Agenda avec Google et Outlook + WhatsApp',
                desc: 'Synchronisez les agendas, planifiez les séances et notifiez les familles par WhatsApp automatiquement.'
            },
            {
                icon: '🩺',
                title: 'Évaluations, CIM-11 et base de connaissances',
                desc: 'Évaluations initiales avec analyse IA, recherche diagnostique CIM-11 et bibliothèque clinique toujours à portée de main.'
            },
            {
                icon: '🔐',
                title: 'Sécurité clinique, données 100% à vous',
                desc: 'Normes de sécurité pour les données patients. Nous ne partageons jamais vos informations avec des tiers.'
            }
        ],
        testimonialBrand: 'Vanty chaque jour, pour toujours',
        testimonialQuote: 'Avant je passais des heures à écrire des rapports. Maintenant avec ARIA je le fais en minutes et je peux me concentrer sur ce qui compte : mes patients.',
        testimonialModules: 'Modules utilisés',
        testimonialProducts: [
            'Enregistrement de sessions ABA',
            'Hub d\'IA · ARIA et agents',
            'Facturation et paiements',
            'Portail familial + WhatsApp'
        ],
        testimonialName: 'Ana M.',
        testimonialRole: 'Analyste ABA · Lima, Pérou',
        compareLabel: 'Vanty ABA vs CentralReach',
        compareTitle: 'L\'alternative LATAM\nà CentralReach',
        compareSub: 'Tout ce que vous attendez d\'un logiciel ABA international comme CentralReach — IA clinique, facturation et portail familial — mais en espagnol, en monnaie locale et conçu pour votre centre.',
        compareHeaders: [
            'Fonctionnalité',
            'CentralReach et similaires',
            'Autres apps',
            '⭐ Vanty ABA'
        ],
        compareRows: [
            [
                'Multi-rôles : direction, spécialiste, secrétariat et famille',
                '⚠️ Limité',
                '❌ N/A',
                '✅ 4 rôles natifs'
            ],
            [
                'Hub d\'IA avec agents cliniques (ARIA + plus)',
                '❌ Non',
                '❌ Non',
                '✅ Suite complète'
            ],
            [
                'Rapports cliniques avec IA en secondes',
                '⚠️ Manuel',
                '❌ Non',
                '✅ Automatiques'
            ],
            [
                'Évaluations initiales + diagnostic CIM-11',
                '⚠️ Partiel',
                '❌ Non',
                '✅ Avec IA'
            ],
            [
                'Facturation et paiements intégrés',
                '⚠️ Module à part',
                '❌ Non',
                '✅ Inclus'
            ],
            [
                'WhatsApp intégré pour les familles',
                '❌ Non',
                '⚠️ Basique',
                '✅ Natif'
            ],
            [
                'Synchronisation Google et Outlook',
                '⚠️ Partiel',
                '❌ Non',
                '✅ Incluse'
            ],
            [
                'Appels vidéo et notifications push',
                '❌ Non',
                '⚠️ Basique',
                '✅ Natifs'
            ],
            [
                'Portail familial avec bien-être des parents',
                '❌ Non',
                '❌ Non',
                '✅ Natif'
            ],
            [
                '100% en espagnol, conçu pour LATAM',
                '❌ Anglais',
                '⚠️ Partiel',
                '✅ Espagnol'
            ],
            [
                'Prix juste en monnaie locale',
                '❌ USD, cher',
                '⚠️ Variable',
                '✅ S/120/mois'
            ],
            [
                'Configuration complète incluse',
                '❌ Coût extra',
                '❌ Non',
                '✅ Incluse'
            ]
        ],
        helpBrand: 'Vanty Guides',
        helpTeam: 'Équipe Vanty',
        helpRole: 'Support clinique ABA',
        helpTitle: 'Nous adorons aider.\nVraiment.',
        helpDesc: 'Vous ne savez pas encore ce dont vous avez besoin ? Écrivez-nous. C\'est un plaisir d\'aider, même avant d\'être client.',
        pricingLabel: 'Tarifs',
        pricingTitle: 'Des forfaits clairs.\nSans surprises.',
        pricingSub: 'Sans contrats annuels. Votre plateforme active en 24 heures dès le premier paiement.',
        pricingNote: '🔐 Activation en 24 hrs · Géré directement avec l\'équipe Vanty',
        plan1Label: 'Premier mois · Configuration incluse',
        plan1Desc: 'Configuration complète, chargement initial des données et formation de votre équipe inclus.',
        plan1Features: [
            'Configuration complète du système',
            'Chargement initial des patients',
            'Formation de l\'équipe',
            'Tous les modules ABA',
            'IA ARIA activée',
            'Portail familial',
            'Support prioritaire'
        ],
        plan2Badge: 'Mois 2 et suivants',
        plan2Label: 'Mensuel · Sans engagement',
        plan2Desc: 'Accès à tous les modules, IA illimitée, mises à jour automatiques et support inclus.',
        plan2Features: [
            'Tous les modules actifs',
            'ARIA · IA clinique 24/7',
            'Mises à jour incluses',
            'Utilisateurs illimités',
            'Portail familial natif',
            'Rapports IA illimités',
            'Support WhatsApp et e-mail'
        ],
        plan3Badge: '🎁 2 MOIS OFFERTS · ANNUEL',
        plan3Label: 'Forfait Annuel · Payez 10, profitez 12',
        plan3Desc: 'Payez seulement 10 mois et utilisez Vanty 12 mois. Économisez S/260 vs. mensuel — sans engagement ni surprises.',
        plan3Features: [
            'Tout du forfait mensuel inclus',
            '2 mois complètement offerts',
            'Prix bloqué 12 mois',
            'Support VIP dédié',
            'Onboarding prioritaire',
            'Accès anticipé aux nouvelles fonctions'
        ],
        faqLabel: 'Questions fréquentes',
        faqTitle: 'Des questions ?\nNous y répondons.',
        faqs: [
            {
                q: 'Quelle est la différence entre Vanty ABA et CentralReach ?',
                a: 'CentralReach est un excellent logiciel, mais il est en anglais, facturé en dollars et conçu pour les États-Unis. Vanty ABA vous offre la même chose et plus —un hub d\'IA clinique, facturation, agenda et portail familial— 100% en espagnol, en monnaie locale et avec un support proche en LATAM. Nous incluons aussi la configuration complète et un rôle de secrétariat que d\'autres plateformes n\'offrent pas.'
            },
            {
                q: 'Combien coûte Vanty pour mon centre ?',
                a: 'Le premier mois est S/200 et comprend la configuration complète, le chargement initial des patients et la formation de l\'équipe. À partir du deuxième mois, vous payez S/120/mois sans engagement. Avec le forfait annuel, vous payez seulement S/1 180 (l\'équivalent de 10 mois) pour 12 mois complets — 2 mois offerts et S/260 d\'économies.'
            },
            {
                q: 'Ai-je besoin de compétences techniques pour l\'utiliser ?',
                a: 'Pas du tout. Vanty est conçu pour les analystes et thérapeutes comportementaux, pas pour les équipes techniques. L\'interface est 100% en espagnol et nous faisons la configuration complète avec vous dans les 24 premières heures.'
            },
            {
                q: 'Mes données patients sont-elles sécurisées ?',
                a: 'Absolument. Vos données vous appartiennent à 100%, stockées selon les normes de sécurité clinique. Nous ne partageons jamais d\'informations avec des tiers et vous gardez le contrôle total en permanence.'
            },
            {
                q: 'Combien d\'utilisateurs puis-je ajouter ?',
                a: 'Illimité. Le forfait mensuel couvre toute votre équipe — analystes, spécialistes, administration — plus les portails familiaux de chaque patient, sans surcoût par utilisateur.'
            },
            {
                q: 'Comment fonctionne l\'assistant ARIA ?',
                a: 'ARIA analyse les données de session et génère des rapports, des notes cliniques et des résumés pour les parents en quelques secondes. Il détecte aussi automatiquement quand un objectif atteint ≥80% et notifie l\'équipe en temps réel.'
            },
            {
                q: 'Que comprend le forfait annuel et comment ça marche ?',
                a: 'Vous payez S/1 180 une seule fois — l\'équivalent de 10 paiements mensuels — et utilisez Vanty pendant 12 mois complets. Les 2 mois supplémentaires sont entièrement offerts. Comprend tout du forfait mensuel plus support VIP dédié et accès anticipé aux nouvelles fonctions.'
            },
            {
                q: 'Puis-je annuler à tout moment ?',
                a: 'Oui. Le forfait mensuel n\'a pas d\'engagement minimum : annulez quand vous voulez depuis votre tableau de bord. Le forfait annuel est un paiement unique pour 12 mois ; il ne se renouvelle pas automatiquement.'
            }
        ],
        ctaReady: 'PRÊT À COMMENCER ?',
        ctaTitle: 'Organisons le travail\nclinique ABA en LATAM, ensemble.',
        ctaSub: 'Un seul système pour analystes, spécialistes et familles.\nFait au Pérou pour toute l\'Amérique Latine. 💜',
        ctaWa: 'WhatsApp',
        footerTagline: 'Connectant analystes, spécialistes et familles. 100% en espagnol, depuis le Pérou pour toute l\'Amérique Latine.',
        footerCols: [
            {
                title: 'Plateforme',
                links: [
                    {
                        label: 'Rôles',
                        href: '#roles'
                    },
                    {
                        label: 'Fonctionnalités',
                        href: '#diferencial'
                    },
                    {
                        label: 'ARIA IA',
                        href: '#aria'
                    },
                    {
                        label: 'Tarifs',
                        href: '#precios'
                    },
                    {
                        label: 'FAQ',
                        href: '#faq'
                    }
                ]
            },
            {
                title: 'Support',
                links: [
                    {
                        label: 'WhatsApp',
                        href: 'wa'
                    },
                    {
                        label: 'E-mail',
                        href: 'mail'
                    },
                    {
                        label: 'Panneau Admin',
                        href: '/admin'
                    },
                    {
                        label: 'Documentation',
                        href: '#'
                    }
                ]
            },
            {
                title: 'Entreprise',
                links: [
                    {
                        label: 'À propos de Vanty',
                        href: '#'
                    },
                    {
                        label: 'Blog',
                        href: '#'
                    },
                    {
                        label: 'Confidentialité',
                        href: '#'
                    },
                    {
                        label: 'Conditions',
                        href: '#'
                    }
                ]
            }
        ],
        footerAllied: '🏆 Premier centre partenaire',
        footerAlliedName: 'Jugando Aprendo · Lima, Pérou 🇵🇪',
        footerCopy: '© 2026 Vanty · Première plateforme ABA multi-rôles en LATAM',
        footerMade: 'Fait avec 💜 depuis le Pérou pour toute l\'Amérique Latine',
        marqueeItems: [
            'Vanty ABA, le futur de l\'ABA en LATAM',
            'Hub d\'IA clinique',
            'Facturation et paiements intégrés',
            'WhatsApp pour les familles',
            'Agenda avec Google et Outlook',
            'Portail familial natif',
            '100% en espagnol',
            'Démarrage en 24 heures'
        ],
        tagline: 'évolution thérapeutique intelligente'
    }
};
const LANGS = [
    'es',
    'en',
    'pt',
    'fr'
];
const FLAG = {
    es: '🇵🇪',
    en: '🇺🇸',
    pt: '🇧🇷',
    fr: '🇫🇷'
};
// ════════════════════════════════════════════════
//  PRICING SECTION — ANIMATED
// ════════════════════════════════════════════════
function PricingSection({ t }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "PricingSection.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "PricingSection.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                }
            }["PricingSection.useEffect"], {
                threshold: 0.15
            });
            obs.observe(el);
            return ({
                "PricingSection.useEffect": ()=>obs.disconnect()
            })["PricingSection.useEffect"];
        }
    }["PricingSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "pricing-section",
        id: "precios",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes priceCardIn { from{opacity:0;transform:translateY(28px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes priceNumCount { from{opacity:0;transform:scale(.7)} to{opacity:1;transform:scale(1)} }
        @keyframes offerPulse { 0%,100%{box-shadow:0 0 0 0 rgba(29,78,216,.25)} 50%{box-shadow:0 0 0 8px rgba(29,78,216,0)} }
        .price-card-anim { opacity:0; }
        .price-card-anim.in { animation:priceCardIn .65s cubic-bezier(0.22,1,0.36,1) both; }
        .price-num-anim { opacity:0; }
        .price-num-anim.in { animation:priceNumCount .6s cubic-bezier(0.34,1.56,0.64,1) both; }
        .p-card { transition:all .25s cubic-bezier(0.22,1,0.36,1); }
        .p-card:hover { transform:translateY(-6px); box-shadow:0 20px 50px rgba(0,0,0,.12); }
        .p-card.featured:hover { box-shadow:0 20px 60px rgba(29,78,216,.25); }
        .p-card.annual-offer { animation: offerPulse 2.5s ease-in-out infinite; }
        .p-card.annual-offer:hover { box-shadow:0 20px 60px rgba(29,78,216,.3); animation:none; }
        .p-list li { opacity:0; transform:translateX(-8px); }
        .p-list li.in { opacity:1; transform:translateX(0); transition:all .35s; }
        .price-title-anim { opacity:0; }
        .price-title-anim.in { animation:priceCardIn .6s .05s both; }
        .savings-badge { display:inline-flex; align-items:center; gap:5px; background:linear-gradient(135deg,#fef3c7,#fde68a); color:#92400e; font-size:11px; font-weight:800; padding:4px 10px; border-radius:99px; margin-top:8px; }
      `
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 426,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `price-title-anim${visible ? ' in' : ''}`,
                        style: {
                            textAlign: 'center',
                            maxWidth: 580,
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-label",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        size: 11
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 447,
                                        columnNumber: 42
                                    }, this),
                                    " ",
                                    t.pricingLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 447,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-h2",
                                style: {
                                    whiteSpace: 'pre-line'
                                },
                                children: t.pricingTitle
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 448,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-sub",
                                style: {
                                    marginTop: 12
                                },
                                children: t.pricingSub
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 449,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 446,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            display: 'grid',
                            gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))',
                            gap: 24,
                            maxWidth: 1020,
                            margin: '48px auto 0'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-card price-card-anim${visible ? ' in' : ''}`,
                                style: visible ? {
                                    animationDelay: '.1s'
                                } : {},
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-label",
                                        children: t.plan1Label
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 454,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-amt",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-cur",
                                                children: "S/"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 456,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `p-num price-num-anim${visible ? ' in' : ''}`,
                                                style: visible ? {
                                                    animationDelay: '.25s'
                                                } : {},
                                                children: "200"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 457,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 455,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "p-desc",
                                        children: t.plan1Desc
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 459,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "p-list",
                                        children: t.plan1Features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: visible ? 'in' : '',
                                                style: visible ? {
                                                    transitionDelay: `${0.35 + i * 0.07}s`
                                                } : {},
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 15,
                                                        color: "#1D4ED8",
                                                        style: {
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 463,
                                                        columnNumber: 19
                                                    }, this),
                                                    f
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 462,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 460,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 453,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-card featured price-card-anim${visible ? ' in' : ''}`,
                                style: visible ? {
                                    animationDelay: '.22s',
                                    borderColor: '#1D4ED8',
                                    boxShadow: '0 8px 40px rgba(29,78,216,.18)'
                                } : {},
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-badge",
                                        style: {
                                            background: '#1D4ED8'
                                        },
                                        children: t.plan2Badge
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 470,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-label",
                                        style: {
                                            marginTop: 16
                                        },
                                        children: t.plan2Label
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 471,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-amt",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-cur",
                                                children: "S/"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 473,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `p-num price-num-anim${visible ? ' in' : ''}`,
                                                style: visible ? {
                                                    animationDelay: '.37s'
                                                } : {},
                                                children: "120"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 474,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "p-per",
                                                children: "/mes"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 475,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 472,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "p-desc",
                                        children: t.plan2Desc
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 477,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "p-list",
                                        children: t.plan2Features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: visible ? 'in' : '',
                                                style: visible ? {
                                                    transitionDelay: `${0.45 + i * 0.07}s`
                                                } : {},
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 15,
                                                        color: "#1D4ED8",
                                                        style: {
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 481,
                                                        columnNumber: 19
                                                    }, this),
                                                    f
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 480,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 478,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 469,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `p-card price-card-anim${visible ? ' in' : ''}`,
                                style: visible ? {
                                    animationDelay: '.34s',
                                    animation: 'priceCardIn .65s .34s cubic-bezier(0.22,1,0.36,1) both, offerPulse 2.5s 1s ease-in-out infinite',
                                    background: 'linear-gradient(135deg,#eff6ff 0%,#dbeafe 100%)',
                                    borderColor: '#1D4ED8',
                                    borderWidth: '2px'
                                } : {},
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-badge",
                                        style: {
                                            background: 'linear-gradient(135deg,#1e40af,#1D4ED8)',
                                            fontSize: 10,
                                            letterSpacing: '.03em'
                                        },
                                        children: t.plan3Badge
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 489,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-label",
                                        style: {
                                            marginTop: 16
                                        },
                                        children: t.plan3Label
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 490,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "p-amt",
                                        style: {
                                            flexDirection: 'column',
                                            alignItems: 'flex-start',
                                            gap: 2
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'baseline',
                                                    gap: 4
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "p-cur",
                                                        children: "S/"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 493,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: `p-num price-num-anim${visible ? ' in' : ''}`,
                                                        style: visible ? {
                                                            animationDelay: '.5s',
                                                            color: '#1D4ED8'
                                                        } : {},
                                                        children: "1,180"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 494,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "p-per",
                                                        children: "/año"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 495,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 492,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    gap: 6
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        style: {
                                                            fontSize: 13,
                                                            color: '#9ca3af',
                                                            textDecoration: 'line-through'
                                                        },
                                                        children: "S/1,440"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 498,
                                                        columnNumber: 17
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "savings-badge",
                                                        children: "🎁 2 meses gratis · Ahorras S/260"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 499,
                                                        columnNumber: 17
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 497,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 491,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "p-desc",
                                        children: t.plan3Desc
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 502,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                        className: "p-list",
                                        children: t.plan3Features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                className: visible ? 'in' : '',
                                                style: visible ? {
                                                    transitionDelay: `${0.55 + i * 0.07}s`
                                                } : {},
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                                        size: 15,
                                                        color: "#1D4ED8",
                                                        style: {
                                                            flexShrink: 0
                                                        }
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 506,
                                                        columnNumber: 19
                                                    }, this),
                                                    f
                                                ]
                                            }, i, true, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 505,
                                                columnNumber: 17
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 503,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 487,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 451,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        style: {
                            textAlign: 'center',
                            fontSize: 13,
                            color: '#9ca3af',
                            marginTop: 24,
                            opacity: visible ? 1 : 0,
                            transition: 'opacity .8s .8s'
                        },
                        children: t.pricingNote
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 512,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 445,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/vanty-aba/page.tsx",
        lineNumber: 425,
        columnNumber: 5
    }, this);
}
_s(PricingSection, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c = PricingSection;
// ════════════════════════════════════════════════
//  FAQ SECTION — ANIMATED
// ════════════════════════════════════════════════
function FaqSection({ t, faq, setFaq }) {
    _s1();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "FaqSection.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "FaqSection.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                }
            }["FaqSection.useEffect"], {
                threshold: 0.1
            });
            obs.observe(el);
            return ({
                "FaqSection.useEffect": ()=>obs.disconnect()
            })["FaqSection.useEffect"];
        }
    }["FaqSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "faq-section",
        id: "faq",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes faqSlideIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes faqBodyOpen { from{opacity:0;max-height:0;transform:translateY(-8px)} to{opacity:1;max-height:200px;transform:translateY(0)} }
        .faq-item-anim { opacity:0; }
        .faq-item-anim.in { animation:faqSlideIn .5s cubic-bezier(0.22,1,0.36,1) both; }
        .faq-body-animated { animation:faqBodyOpen .3s cubic-bezier(0.22,1,0.36,1) both; overflow:hidden; }
        .faq-item { transition:border-color .2s, box-shadow .2s; }
        .faq-item:hover:not(.open) { border-color:#dbeafe; box-shadow:0 4px 16px rgba(29,78,216,.06); }
        .faq-head { transition:background .2s; }
        .faq-item:hover .faq-head { background:rgba(239,246,255,.7); }
        .faq-item.open .faq-head { background:#eff6ff; }
      `
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 531,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            maxWidth: 520,
                            margin: '0 auto',
                            opacity: visible ? 1 : 0,
                            transition: 'opacity .6s',
                            transform: visible ? 'none' : 'translateY(16px)'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-label",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$square$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageSquare$3e$__["MessageSquare"], {
                                        size: 11
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 545,
                                        columnNumber: 42
                                    }, this),
                                    " ",
                                    t.faqLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 545,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-h2",
                                style: {
                                    whiteSpace: 'pre-line'
                                },
                                children: t.faqTitle
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 546,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 544,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "faq-list",
                        children: t.faqs.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `faq-item${faq === i ? ' open' : ''} faq-item-anim${visible ? ' in' : ''}`,
                                style: visible ? {
                                    animationDelay: `${0.1 + i * 0.07}s`
                                } : {},
                                onClick: ()=>setFaq(faq === i ? null : i),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "faq-head",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "faq-q",
                                                children: f.q
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 555,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                                                size: 18,
                                                className: "faq-chev"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 556,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 554,
                                        columnNumber: 15
                                    }, this),
                                    faq === i && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "faq-body faq-body-animated",
                                        children: f.a
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 558,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 550,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 548,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 543,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/vanty-aba/page.tsx",
        lineNumber: 530,
        columnNumber: 5
    }, this);
}
_s1(FaqSection, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c1 = FaqSection;
// ════════════════════════════════════════════════
//  TESTIMONIAL SECTION — ANIMATED
// ════════════════════════════════════════════════
function TestimonialSection({ t }) {
    _s2();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TestimonialSection.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "TestimonialSection.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                }
            }["TestimonialSection.useEffect"], {
                threshold: 0.2
            });
            obs.observe(el);
            return ({
                "TestimonialSection.useEffect": ()=>obs.disconnect()
            })["TestimonialSection.useEffect"];
        }
    }["TestimonialSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "testimonial-section",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes imgReveal { from{clipPath:'inset(0 100% 0 0)'} to{clipPath:'inset(0 0% 0 0)'} }
        @keyframes testiFadeL { from{opacity:0;transform:translateX(-30px)} to{opacity:1;transform:translateX(0)} }
        @keyframes testiFadeR { from{opacity:0;transform:translateX(30px)} to{opacity:1;transform:translateX(0)} }
        @keyframes quoteScale { from{opacity:0;transform:scale(.95)} to{opacity:1;transform:scale(1)} }
        .testi-img-anim { opacity:0; }
        .testi-img-anim.in { animation:testiFadeL .8s .1s cubic-bezier(0.22,1,0.36,1) both; }
        .testi-body-anim { opacity:0; }
        .testi-body-anim.in { animation:testiFadeR .8s .25s cubic-bezier(0.22,1,0.36,1) both; }
        .testi-quote-anim { opacity:0; }
        .testi-quote-anim.in { animation:quoteScale .7s .4s cubic-bezier(0.22,1,0.36,1) both; }
        .testi-product-anim { opacity:0; transform:translateX(10px); }
        .testi-product-anim.in { opacity:1; transform:translateX(0); transition:all .4s; }
        .testi-brand-dot-pulse { animation: pulse2 2s infinite; }
      `
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 580,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `testimonial-img-wrap testi-img-anim${visible ? ' in' : ''}`,
                style: {
                    position: 'relative',
                    overflow: 'hidden',
                    minHeight: '420px'
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                        src: "/images/Testimonial.png",
                        alt: t.testimonialName,
                        style: {
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center top'
                        }
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 596,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "testimonial-name",
                        children: [
                            t.testimonialName,
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 598,
                                columnNumber: 30
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "testimonial-role",
                                children: t.testimonialRole
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 599,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 597,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 595,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `testimonial-body testi-body-anim${visible ? ' in' : ''}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "testimonial-brand",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "testimonial-brand-dot testi-brand-dot-pulse"
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 603,
                                columnNumber: 44
                            }, this),
                            t.testimonialBrand
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 603,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `testimonial-quote testi-quote-anim${visible ? ' in' : ''}`,
                        children: t.testimonialQuote
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 604,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "testimonial-products-label",
                                children: t.testimonialModules
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 606,
                                columnNumber: 11
                            }, this),
                            t.testimonialProducts.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: `testimonial-product-item testi-product-anim${visible ? ' in' : ''}`,
                                    style: visible ? {
                                        transitionDelay: `${0.5 + i * 0.1}s`
                                    } : {},
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                            size: 16
                                        }, void 0, false, {
                                            fileName: "[project]/app/vanty-aba/page.tsx",
                                            lineNumber: 610,
                                            columnNumber: 15
                                        }, this),
                                        " ",
                                        p
                                    ]
                                }, i, true, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 608,
                                    columnNumber: 13
                                }, this))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 605,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 602,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/vanty-aba/page.tsx",
        lineNumber: 579,
        columnNumber: 5
    }, this);
}
_s2(TestimonialSection, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c2 = TestimonialSection;
// ════════════════════════════════════════════════
//  TRUSTED CENTERS SECTION
// ════════════════════════════════════════════════
function TrustedCentersSection({ t }) {
    _s3();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TrustedCentersSection.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "TrustedCentersSection.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                }
            }["TrustedCentersSection.useEffect"], {
                threshold: 0.2
            });
            obs.observe(el);
            return ({
                "TrustedCentersSection.useEffect": ()=>obs.disconnect()
            })["TrustedCentersSection.useEffect"];
        }
    }["TrustedCentersSection.useEffect"], []);
    const label = t.lang === 'EN' ? 'Centers advancing with us' : t.lang === 'PT' ? 'Centros avançando conosco' : t.lang === 'FR' ? 'Centres qui avancent avec nous' : 'Centros que avanzan con nosotros';
    const sub = t.lang === 'EN' ? 'Pioneers who bet on the future of ABA in Latin America' : t.lang === 'PT' ? 'Pioneiros que apostaram no futuro do ABA na América Latina' : t.lang === 'FR' ? 'Les pionniers qui misent sur le futur de l\'ABA en Amérique Latine' : 'Pioneros que apuestan al futuro del ABA en América Latina';
    const since = t.lang === 'EN' ? 'Pioneer center · Since 2026' : t.lang === 'PT' ? 'Centro pioneiro · Desde 2026' : t.lang === 'FR' ? 'Centre pionnier · Depuis 2026' : 'Centro pionero · Desde 2026';
    const badge = t.lang === 'EN' ? 'PIONEER PARTNER' : t.lang === 'PT' ? 'PARCEIRO PIONEIRO' : t.lang === 'FR' ? 'PARTENAIRE PIONNIER' : 'ALIADO PIONERO';
    const soon = t.lang === 'EN' ? 'More centers joining the movement' : t.lang === 'PT' ? 'Mais centros se juntando ao movimento' : t.lang === 'FR' ? 'Plus de centres rejoignant le mouvement' : 'Más centros uniéndose al movimiento';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: ref,
        id: "aliados",
        style: {
            padding: '96px clamp(20px,4vw,48px) 80px',
            background: '#fff',
            overflow: 'hidden',
            position: 'relative'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes tcUp2   { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes tcPop   { from{opacity:0;transform:scale(.88)} to{opacity:1;transform:scale(1)} }
        @keyframes tcFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-7px)} }
        @keyframes tcSpin  { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes tcLine  { from{width:0} to{width:100%} }

        .tc2-label,.tc2-title,.tc2-sub,.tc2-center,.tc2-stats,.tc2-soon { opacity:0; }
        .tc2-label.in  { animation:tcUp2 .6s .05s cubic-bezier(0.22,1,0.36,1) both; }
        .tc2-title.in  { animation:tcUp2 .7s .12s cubic-bezier(0.22,1,0.36,1) both; }
        .tc2-sub.in    { animation:tcUp2 .6s .22s cubic-bezier(0.22,1,0.36,1) both; }
        .tc2-center.in { animation:tcPop  .8s .35s cubic-bezier(0.34,1.56,0.64,1) both; }
        .tc2-stats.in  { animation:tcUp2 .6s .55s cubic-bezier(0.22,1,0.36,1) both; }
        .tc2-soon.in   { animation:tcUp2 .6s .7s  cubic-bezier(0.22,1,0.36,1) both; }

        /* Center layout */
        .tc2-center-wrap {
          display:flex; flex-direction:column; align-items:center; gap:20px;
          max-width:360px; margin:0 auto;
        }

        /* Logo — floating */
        .tc2-logo-ring {
          position:relative; display:flex; align-items:center; justify-content:center;
        }
        .tc2-logo-ring-svg {
          position:absolute; inset:-18px;
          animation:tcSpin 18s linear infinite;
          opacity:.25;
        }
        .tc2-logo-img {
          width:160px; height:160px; border-radius:28px;
          background:#fff;
          box-shadow:0 20px 60px rgba(0,0,0,.1), 0 4px 16px rgba(0,0,0,.06);
          display:flex; align-items:center; justify-content:center;
          overflow:hidden;
          animation:tcFloat 4s ease-in-out infinite;
          border:1px solid rgba(0,0,0,.06);
        }
        .tc2-logo-img img { width:100%; height:100%; object-fit:contain; padding:16px; }

        /* Badge */
        .tc2-badge {
          display:inline-flex; align-items:center; gap:7px;
          padding:5px 14px; border-radius:99px;
          background:#eff6ff; border:1px solid #bfdbfe;
          font-size:10.5px; font-weight:800; color:#2563eb;
          font-family:'Poppins',sans-serif; letter-spacing:.07em;
        }
        .tc2-badge-dot { width:5px; height:5px; border-radius:50%; background:#3b82f6; animation:pulse2 1.8s infinite; }

        .tc2-name  { font-family:'Poppins',sans-serif; font-size:24px; font-weight:800; color:#111; text-align:center; letter-spacing:-.02em; }
        .tc2-loc   { font-size:13px; color:#9ca3af; text-align:center; }
        .tc2-since { font-size:12px; color:#2563eb; font-weight:600; text-align:center; }

        /* Divider line animated */
        .tc2-divline {
          height:1px; background:linear-gradient(90deg,transparent,#e5e7eb,transparent);
          width:200px; margin:4px auto;
        }

        /* Stats */
        .tc2-stats-row {
          display:flex; justify-content:center; gap:0;
          border:1.5px solid #f3f4f6; border-radius:16px; overflow:hidden;
          max-width:400px; margin:40px auto 0;
        }
        .tc2-stat-cell {
          flex:1; padding:20px 12px; text-align:center;
          border-right:1.5px solid #f3f4f6; transition:background .2s;
        }
        .tc2-stat-cell:last-child { border-right:none; }
        .tc2-stat-cell:hover { background:#f9fafb; }
        .tc2-stat-n { font-family:'Poppins',sans-serif; font-size:26px; font-weight:900; color:#111; line-height:1; }
        .tc2-stat-l { font-size:10px; color:#9ca3af; font-weight:700; text-transform:uppercase; letter-spacing:.07em; margin-top:5px; }

        /* Soon chips */
        .tc2-soon-row { display:flex; align-items:center; justify-content:center; gap:10px; margin-top:20px; }
        .tc2-soon-text { font-size:12px; color:#9ca3af; font-weight:500; letter-spacing:.04em; }
        .tc2-soon-chip {
          padding:4px 12px; border-radius:99px;
          border:1.5px dashed #e5e7eb;
          font-size:11px; color:#d1d5db; font-weight:600;
          font-family:'Poppins',sans-serif;
        }

        /* Decorative dots grid */
        .tc2-dots-bg {
          position:absolute; inset:0; pointer-events:none;
          background-image:radial-gradient(#e5e7eb 1px, transparent 1px);
          background-size:28px 28px;
          mask-image:radial-gradient(ellipse 60% 70% at 50% 50%, black 0%, transparent 100%);
          opacity:.5;
        }

        /* Accent lines */
        .tc2-accent-l {
          position:absolute; top:50%; left:clamp(20px,6vw,80px);
          height:1px; background:linear-gradient(90deg,transparent,#e5e7eb);
          width:15%; opacity:.7;
        }
        .tc2-accent-r {
          position:absolute; top:50%; right:clamp(20px,6vw,80px);
          height:1px; background:linear-gradient(270deg,transparent,#e5e7eb);
          width:15%; opacity:.7;
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 639,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tc2-dots-bg"
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 748,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tc2-accent-l"
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 749,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "tc2-accent-r"
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 750,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    maxWidth: 900,
                    margin: '0 auto',
                    position: 'relative',
                    zIndex: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            textAlign: 'center',
                            marginBottom: 56
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `tc2-label${visible ? ' in' : ''}`,
                                style: {
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: 8,
                                    padding: '5px 14px',
                                    borderRadius: 99,
                                    background: '#eff6ff',
                                    border: '1px solid #bfdbfe',
                                    fontSize: 11,
                                    fontWeight: 700,
                                    color: '#2563eb',
                                    letterSpacing: '.07em',
                                    textTransform: 'uppercase',
                                    marginBottom: 18,
                                    fontFamily: "'Poppins',sans-serif"
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                        size: 10,
                                        fill: "#2563eb",
                                        color: "#2563eb"
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 757,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    t.lang === 'EN' ? 'Our community' : t.lang === 'PT' ? 'Nossa comunidade' : t.lang === 'FR' ? 'Notre communauté' : 'Nuestra comunidad'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 756,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: `tc2-title${visible ? ' in' : ''}`,
                                style: {
                                    fontFamily: "'Poppins',sans-serif",
                                    fontSize: 'clamp(28px,4vw,48px)',
                                    fontWeight: 800,
                                    color: '#111',
                                    letterSpacing: '-.03em',
                                    lineHeight: 1.1,
                                    marginBottom: 14
                                },
                                children: label
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 759,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: `tc2-sub${visible ? ' in' : ''}`,
                                style: {
                                    fontSize: 16,
                                    color: '#6b7280',
                                    lineHeight: 1.75,
                                    maxWidth: 480,
                                    margin: '0 auto'
                                },
                                children: sub
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 763,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 755,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `tc2-center tc2-center-wrap${visible ? ' in' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tc2-logo-ring",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        className: "tc2-logo-ring-svg",
                                        width: "196",
                                        height: "196",
                                        viewBox: "0 0 196 196",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            cx: "98",
                                            cy: "98",
                                            r: "90",
                                            fill: "none",
                                            stroke: "#1D4ED8",
                                            strokeWidth: "1.5",
                                            strokeDasharray: "6 10",
                                            strokeLinecap: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vanty-aba/page.tsx",
                                            lineNumber: 776,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 775,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tc2-logo-img",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                            src: "/images/aprendo.png",
                                            alt: "Jugando Aprendo"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vanty-aba/page.tsx",
                                            lineNumber: 779,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 778,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 773,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tc2-badge",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "tc2-badge-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 785,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    badge
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 784,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tc2-name",
                                children: "Jugando Aprendo"
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 789,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tc2-loc",
                                children: "Lima, Perú 🇵🇪"
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 790,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tc2-divline"
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 791,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tc2-since",
                                children: since
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 792,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 770,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `tc2-stats tc2-stats-row${visible ? ' in' : ''}`,
                        children: [
                            {
                                n: '6+',
                                l: t.lang === 'EN' ? 'Modules active' : t.lang === 'PT' ? 'Módulos ativos' : t.lang === 'FR' ? 'Modules actifs' : 'Módulos activos'
                            },
                            {
                                n: 'IA',
                                l: t.lang === 'EN' ? 'ARIA + Reports' : t.lang === 'PT' ? 'ARIA + Relatórios' : t.lang === 'FR' ? 'ARIA + Rapports' : 'ARIA + Reportes'
                            },
                            {
                                n: '24h',
                                l: t.lang === 'EN' ? 'Setup time' : t.lang === 'PT' ? 'Tempo de setup' : t.lang === 'FR' ? 'Temps de setup' : 'Tiempo de setup'
                            }
                        ].map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tc2-stat-cell",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tc2-stat-n",
                                        children: s.n
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 803,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "tc2-stat-l",
                                        children: s.l
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 804,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 802,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 796,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: visible ? 'tc2-soon' : '',
                        style: {
                            opacity: visible ? 1 : 0,
                            transition: 'opacity .8s .8s',
                            maxWidth: 480,
                            margin: '28px auto 0',
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: 8,
                            justifyContent: 'center'
                        },
                        children: [
                            '🎥 Videollamadas',
                            '🔔 Notificaciones push',
                            '📊 Analytics clínico',
                            '💬 Chat con padres',
                            '🤖 ARIA · IA',
                            '📋 Reportes ABA',
                            '⚡ Alertas clínicas',
                            '📅 Gestión de citas'
                        ].map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                style: {
                                    padding: '4px 12px',
                                    borderRadius: 99,
                                    border: '1.5px solid #e5e7eb',
                                    fontSize: 11,
                                    color: '#374151',
                                    fontWeight: 600,
                                    fontFamily: "'Poppins',sans-serif",
                                    background: '#fff'
                                },
                                children: f
                            }, i, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 812,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 810,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `tc2-soon tc2-soon-row${visible ? ' in' : ''}`,
                        style: {
                            marginTop: 24
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tc2-soon-chip",
                                children: "?"
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 818,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "tc2-soon-text",
                                children: soon
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 819,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "tc2-soon-chip",
                                children: "?"
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 820,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 817,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 752,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/vanty-aba/page.tsx",
        lineNumber: 638,
        columnNumber: 5
    }, this);
}
_s3(TrustedCentersSection, "F7BtIAxVh3vOWU1Jr24RYsj9CHc=");
_c3 = TrustedCentersSection;
// ════════════════════════════════════════════════
//  COMPARE SECTION — ANIMATED
// ════════════════════════════════════════════════
function CompareSection({ t }) {
    _s4();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hovRow, setHovRow] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CompareSection.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "CompareSection.useEffect": ([e])=>{
                    if (e.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                }
            }["CompareSection.useEffect"], {
                threshold: 0.15
            });
            obs.observe(el);
            return ({
                "CompareSection.useEffect": ()=>obs.disconnect()
            })["CompareSection.useEffect"];
        }
    }["CompareSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "compare-section",
        ref: ref,
        style: {
            background: 'linear-gradient(180deg,#f0f4ff 0%,#fff 100%)'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes cmpFadeIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .cmp-title-anim { opacity:0; }
        .cmp-title-anim.in { animation:cmpFadeIn .6s .05s cubic-bezier(0.22,1,0.36,1) both; }
        .cmp-table-anim { opacity:0; }
        .cmp-table-anim.in { animation:cmpFadeIn .7s .2s cubic-bezier(0.22,1,0.36,1) both; }
        .cmp-row-hover { transition:background .15s; }
        .cmp-row-hover:hover td { background:#eff6ff !important; }
        .cmp-row-hover:hover td:last-child { background:#dbeafe !important; }
        .cmp-cell-anim { opacity:0; transform:scale(.85); }
        .cmp-cell-anim.in { opacity:1; transform:scale(1); transition:all .35s cubic-bezier(0.34,1.56,0.64,1); }
        .cmp-vanty-th { background:linear-gradient(135deg,#1D4ED8,#2563eb); color:#fff !important; border-radius:8px 8px 0 0; }
        .cmp-vanty-td { background:#eff6ff; font-weight:800 !important; color:#1D4ED8 !important; }
        .cmp-win-bar { display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin:28px auto 0; max-width:680px; }
        .cmp-win-chip { display:flex; align-items:center; gap:6px; background:#eff6ff; border:1.5px solid #bfdbfe; border-radius:99px; padding:7px 16px; font-size:12.5px; font-weight:700; color:#1D4ED8; font-family:'Poppins',sans-serif; animation:cmpFadeIn .5s both; }
      `
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 845,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `cmp-title-anim${visible ? ' in' : ''}`,
                        style: {
                            textAlign: 'center',
                            maxWidth: 620,
                            margin: '0 auto'
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "section-label",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                        size: 11
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 863,
                                        columnNumber: 42
                                    }, this),
                                    " ",
                                    t.compareLabel
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 863,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "section-h2",
                                children: t.compareTitle
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 864,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "section-sub",
                                style: {
                                    marginTop: 10
                                },
                                children: t.compareSub
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 865,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 862,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "cmp-win-bar",
                        children: (t.lang === 'EN' ? [
                            '✅ Native clinical AI',
                            '✅ Real multi-role',
                            '✅ Family portal',
                            '✅ Fair pricing in S/',
                            '✅ 100% in Spanish',
                            '✅ Setup included'
                        ] : t.lang === 'PT' ? [
                            '✅ IA clínica nativa',
                            '✅ Multi-papel real',
                            '✅ Portal familiar',
                            '✅ Preço justo em S/',
                            '✅ 100% em espanhol',
                            '✅ Setup incluído'
                        ] : t.lang === 'FR' ? [
                            '✅ IA clinique native',
                            '✅ Multi-rôles réel',
                            '✅ Portail familial',
                            '✅ Prix juste en S/',
                            '✅ 100% en espagnol',
                            '✅ Setup inclus'
                        ] : [
                            '✅ IA clínica nativa',
                            '✅ Multi-rol real',
                            '✅ Portal familiar',
                            '✅ Precio justo en S/',
                            '✅ 100% en español',
                            '✅ Setup incluido'
                        ]).map((chip, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "cmp-win-chip",
                                style: visible ? {
                                    animationDelay: `${0.1 + i * 0.08}s`
                                } : {},
                                children: chip
                            }, i, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 875,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 869,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `cmp-wrap cmp-table-anim${visible ? ' in' : ''}`,
                        style: {
                            marginTop: 32
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                            className: "cmp-table",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                        children: t.compareHeaders.map((h, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                                className: `${i === 1 || i === 2 ? 'hide-xs' : ''} ${i === 3 ? 'cmp-vanty-th' : ''}`,
                                                children: i === 3 ? '⭐ Vanty ABA' : h
                                            }, i, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 884,
                                                columnNumber: 19
                                            }, this))
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 882,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 881,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                                    children: t.compareRows.map((row, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                            className: "cmp-row-hover",
                                            onMouseEnter: ()=>setHovRow(i),
                                            onMouseLeave: ()=>setHovRow(null),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    style: {
                                                        fontWeight: hovRow === i ? 700 : 600,
                                                        transition: 'font-weight .15s'
                                                    },
                                                    children: row[0]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                                    lineNumber: 895,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: `hide-xs ${row[1].startsWith('❌') ? 't-no' : row[1].startsWith('⚠️') ? 't-par' : 't-yes'}`,
                                                    children: row[1]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                                    lineNumber: 896,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: `hide-xs ${row[2].startsWith('❌') ? 't-no' : row[2].startsWith('⚠️') ? 't-par' : 't-yes'}`,
                                                    children: row[2]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                                    lineNumber: 897,
                                                    columnNumber: 19
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                                    className: `t-yes cmp-cell-anim cmp-vanty-td${visible ? ' in' : ''}`,
                                                    style: visible ? {
                                                        transitionDelay: `${0.3 + i * 0.06}s`
                                                    } : {},
                                                    children: row[3]
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                                    lineNumber: 898,
                                                    columnNumber: 19
                                                }, this)
                                            ]
                                        }, i, true, {
                                            fileName: "[project]/app/vanty-aba/page.tsx",
                                            lineNumber: 892,
                                            columnNumber: 17
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 890,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/vanty-aba/page.tsx",
                            lineNumber: 880,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 879,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 861,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/vanty-aba/page.tsx",
        lineNumber: 844,
        columnNumber: 5
    }, this);
}
_s4(CompareSection, "wPlQ3f5UnMSmQ7SBTN+NRNdQSm4=");
_c4 = CompareSection;
// ════════════════════════════════════════════════
//  WHY SECTION — ANIMATED
// ════════════════════════════════════════════════
function WhySection({ t }) {
    _s5();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [hoveredCard, setHoveredCard] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "WhySection.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "WhySection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                }
            }["WhySection.useEffect"], {
                threshold: 0.15
            });
            obs.observe(el);
            return ({
                "WhySection.useEffect": ()=>obs.disconnect()
            })["WhySection.useEffect"];
        }
    }["WhySection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "why-section",
        id: "diferencial",
        ref: ref,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes whyFadeUp {
          from { opacity:0; transform:translateY(32px) scale(0.97); }
          to   { opacity:1; transform:translateY(0)    scale(1); }
        }
        @keyframes whyTitleIn {
          from { opacity:0; transform:translateY(20px); }
          to   { opacity:1; transform:translateY(0); }
        }
        @keyframes iconBounce {
          0%   { transform:scale(1); }
          40%  { transform:scale(1.18) rotate(-4deg); }
          70%  { transform:scale(0.95) rotate(2deg); }
          100% { transform:scale(1) rotate(0deg); }
        }
        .why-card-animated {
          opacity: 0;
          transition: border-color .25s, box-shadow .25s, transform .25s;
        }
        .why-card-animated.in {
          animation: whyFadeUp .55s cubic-bezier(0.22,1,0.36,1) both;
          opacity: 1;
        }
        .why-card-animated:hover {
          border-color:#dbeafe !important;
          box-shadow:0 12px 40px rgba(29,78,216,.12) !important;
          transform:translateY(-5px) scale(1.01) !important;
        }
        .why-icon-wrap {
          height:80px; border-radius:12px; display:flex; align-items:center;
          justify-content:center; font-size:40px; background:#fff;
          border:1px solid #f3f4f6; margin-top:24px;
          transition: background .3s, border-color .3s;
        }
        .why-card-animated:hover .why-icon-wrap {
          background:#eff6ff;
          border-color:#bfdbfe;
        }
        .why-card-animated:hover .why-icon-inner {
          animation: iconBounce .5s cubic-bezier(0.34,1.56,0.64,1) both;
        }
        .why-title-anim {
          opacity:0;
        }
        .why-title-anim.in {
          animation: whyTitleIn .6s .05s cubic-bezier(0.22,1,0.36,1) both;
        }
        .why-sub-anim {
          opacity:0;
        }
        .why-sub-anim.in {
          animation: whyTitleIn .6s .15s cubic-bezier(0.22,1,0.36,1) both;
        }
      `
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 930,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `why-h2 why-title-anim${visible ? ' in' : ''}`,
                        children: t.whyTitle
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 985,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `why-sub why-sub-anim${visible ? ' in' : ''}`,
                        children: t.whySub
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 986,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "why-grid",
                        children: t.whyCards.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: `why-card why-card-animated${visible ? ' in' : ''}`,
                                style: visible ? {
                                    animationDelay: `${0.1 + i * 0.08}s`
                                } : {},
                                onMouseEnter: ()=>setHoveredCard(i),
                                onMouseLeave: ()=>setHoveredCard(null),
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "why-card-title",
                                                children: c.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 997,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "why-card-desc",
                                                children: c.desc
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 998,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 996,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "why-icon-wrap",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "why-icon-inner",
                                            style: {
                                                display: 'block',
                                                lineHeight: 1
                                            },
                                            children: c.icon
                                        }, void 0, false, {
                                            fileName: "[project]/app/vanty-aba/page.tsx",
                                            lineNumber: 1001,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1000,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 989,
                                columnNumber: 13
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 987,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 984,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/vanty-aba/page.tsx",
        lineNumber: 929,
        columnNumber: 5
    }, this);
}
_s5(WhySection, "L98o+aGTw25H6hWR1z8Z+0h5QFA=");
_c5 = WhySection;
// ════════════════════════════════════════════════
//  CTA SECTION — ANIMATED
// ════════════════════════════════════════════════
function CtaSection({ t, WA_URL, EMAIL }) {
    _s6();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [particles, setParticles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CtaSection.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "CtaSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                }
            }["CtaSection.useEffect"], {
                threshold: 0.2
            });
            obs.observe(el);
            return ({
                "CtaSection.useEffect": ()=>obs.disconnect()
            })["CtaSection.useEffect"];
        }
    }["CtaSection.useEffect"], []);
    // Generate floating particles
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CtaSection.useEffect": ()=>{
            if (!visible) return;
            setParticles(Array.from({
                length: 18
            }, {
                "CtaSection.useEffect": (_, i)=>({
                        x: Math.random() * 100,
                        y: Math.random() * 100,
                        size: Math.random() * 3 + 1,
                        speed: Math.random() * 8 + 6,
                        opacity: Math.random() * 0.25 + 0.05
                    })
            }["CtaSection.useEffect"]));
        }
    }["CtaSection.useEffect"], [
        visible
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "cta-section",
        ref: ref,
        style: {
            overflow: 'hidden'
        },
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes ctaLabelIn  { from{opacity:0;letterSpacing:'.2em'} to{opacity:1} }
        @keyframes ctaTitleIn  { from{opacity:0;transform:translateY(24px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ctaSubIn    { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes ctaBtnsIn   { from{opacity:0;transform:translateY(12px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes floatUp     { from{transform:translateY(0)} to{transform:translateY(-120px)} }
        @keyframes shimmer     { 0%,100%{opacity:.15} 50%{opacity:.35} }
        .cta-label-anim  { opacity:0; }
        .cta-h2-anim     { opacity:0; }
        .cta-sub-anim    { opacity:0; }
        .cta-btns-anim   { opacity:0; }
        .cta-label-anim.in  { animation:ctaLabelIn  .7s .05s both; }
        .cta-h2-anim.in     { animation:ctaTitleIn  .7s .15s cubic-bezier(0.22,1,0.36,1) both; }
        .cta-sub-anim.in    { animation:ctaSubIn    .7s .3s  cubic-bezier(0.22,1,0.36,1) both; }
        .cta-btns-anim.in   { animation:ctaBtnsIn   .7s .45s cubic-bezier(0.34,1.56,0.64,1) both; }
        .cta-btn-white:hover { transform:translateY(-2px) scale(1.03); box-shadow:0 8px 24px rgba(0,0,0,.2); }
        .cta-btn-ghost:hover { transform:translateY(-2px); }
        .cta-btn-white, .cta-btn-ghost { transition: all .2s cubic-bezier(0.34,1.56,0.64,1); }
        .cta-particle { position:absolute; border-radius:50%; background:#fff; animation: floatUp linear infinite; pointer-events:none; }
        @keyframes glowPulse { 0%,100%{opacity:.08} 50%{opacity:.18} }
        .cta-glow { position:absolute; border-radius:50%; background:radial-gradient(circle, #60a5fa 0%, transparent 70%); pointer-events:none; animation:glowPulse 4s ease-in-out infinite; }
      `
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 1043,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cta-dots"
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 1067,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cta-glow",
                style: {
                    width: 400,
                    height: 400,
                    top: '-10%',
                    left: '-5%',
                    opacity: .1
                }
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 1070,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cta-glow",
                style: {
                    width: 300,
                    height: 300,
                    bottom: '-5%',
                    right: '5%',
                    opacity: .08,
                    animationDelay: '2s'
                }
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 1071,
                columnNumber: 7
            }, this),
            particles.map((p, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cta-particle",
                    style: {
                        left: `${p.x}%`,
                        bottom: `-${p.size * 2}px`,
                        width: p.size,
                        height: p.size,
                        opacity: p.opacity,
                        animationDuration: `${p.speed}s`,
                        animationDelay: `${Math.random() * 6}s`
                    }
                }, i, false, {
                    fileName: "[project]/app/vanty-aba/page.tsx",
                    lineNumber: 1075,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cta-inner",
                style: {
                    position: 'relative',
                    zIndex: 2
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `cta-label-anim${visible ? ' in' : ''}`,
                        style: {
                            fontSize: 12,
                            fontWeight: 700,
                            letterSpacing: '.07em',
                            textTransform: 'uppercase',
                            color: 'rgba(255,255,255,.45)',
                            marginBottom: 14
                        },
                        children: t.ctaReady
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 1085,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: `cta-h2 cta-h2-anim${visible ? ' in' : ''}`,
                        children: t.ctaTitle
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 1089,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: `cta-sub cta-sub-anim${visible ? ' in' : ''}`,
                        children: t.ctaSub
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 1090,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `cta-btns cta-btns-anim${visible ? ' in' : ''}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: WA_URL,
                                className: "cta-btn-white",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$phone$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Phone$3e$__["Phone"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1093,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    t.ctaWa
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 1092,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: `mailto:${EMAIL}`,
                                className: "cta-btn-ghost",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1096,
                                        columnNumber: 13
                                    }, this),
                                    " ",
                                    EMAIL
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 1095,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: "https://www.facebook.com/profile.php?id=61587764677406",
                                className: "cta-btn-ghost",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$facebook$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Facebook$3e$__["Facebook"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1099,
                                        columnNumber: 13
                                    }, this),
                                    " Facebook"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 1098,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 1091,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 1084,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/vanty-aba/page.tsx",
        lineNumber: 1042,
        columnNumber: 5
    }, this);
}
_s6(CtaSection, "8U/INFf9VKfloaFFXZGPULr4VpE=");
_c6 = CtaSection;
// ════════════════════════════════════════════════
//  SHOWCASE ANIMATED COMPONENT
// ════════════════════════════════════════════════
function ShowcaseAnimated({ t }) {
    _s7();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const [visible, setVisible] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [barWidths, setBarWidths] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([
        0,
        0,
        0,
        0
    ]);
    const [activeTab, setActiveTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [typedText, setTypedText] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const [showChip, setShowChip] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [activeNav, setActiveNav] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [counter, setCounter] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const tabCycleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const typeRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const metrics = [
        {
            name: 'Comunicación funcional',
            pct: 82,
            color: '#2563EB',
            done: true
        },
        {
            name: 'Habilidades sociales',
            pct: 67,
            color: '#2563EB',
            done: false
        },
        {
            name: 'Autorregulación',
            pct: 54,
            color: '#7C3AED',
            done: false
        },
        {
            name: 'Juego simbólico',
            pct: 91,
            color: '#2563EB',
            done: true
        }
    ];
    const navItems = [
        'Inicio',
        'Pacientes',
        'Reportes',
        'ARIA'
    ];
    const sidebarContents = [
        {
            label: 'ARIA',
            objective: 'Autorregulación — Semana 4',
            text: 'Mejora del 12% en las últimas 3 sesiones. Se recomienda refuerzo diferencial.',
            chip: '🤖 ARIA sugiere 2 actividades nuevas para casa esta semana.'
        },
        {
            label: 'Reporte',
            objective: 'Comunicación funcional — Mes 3',
            text: 'Objetivo alcanzado: 82%. El paciente mantiene comunicación espontánea en 4 de 5 ensayos.',
            chip: '📄 Reporte mensual listo para enviar a los padres.'
        },
        {
            label: 'Notas',
            objective: 'Juego simbólico — Sesión 14',
            text: 'El niño inició juego simbólico de forma independiente en 3 ocasiones durante la sesión.',
            chip: '✏️ Nota guardada automáticamente por ARIA.'
        }
    ];
    // Intersection observer — trigger when visible
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShowcaseAnimated.useEffect": ()=>{
            const el = sectionRef.current;
            if (!el) return;
            const obs = new IntersectionObserver({
                "ShowcaseAnimated.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        setVisible(true);
                        obs.disconnect();
                    }
                }
            }["ShowcaseAnimated.useEffect"], {
                threshold: 0.25
            });
            obs.observe(el);
            return ({
                "ShowcaseAnimated.useEffect": ()=>obs.disconnect()
            })["ShowcaseAnimated.useEffect"];
        }
    }["ShowcaseAnimated.useEffect"], []);
    // Animate bars when visible
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShowcaseAnimated.useEffect": ()=>{
            if (!visible) return;
            const targets = metrics.map({
                "ShowcaseAnimated.useEffect.targets": (m)=>m.pct
            }["ShowcaseAnimated.useEffect.targets"]);
            let start = null;
            const duration = 1200;
            const ease = {
                "ShowcaseAnimated.useEffect.ease": (t)=>1 - Math.pow(1 - t, 3)
            }["ShowcaseAnimated.useEffect.ease"];
            const step = {
                "ShowcaseAnimated.useEffect.step": (ts)=>{
                    if (!start) start = ts;
                    const progress = Math.min((ts - start) / duration, 1);
                    setBarWidths(targets.map({
                        "ShowcaseAnimated.useEffect.step": (t)=>Math.round(t * ease(progress))
                    }["ShowcaseAnimated.useEffect.step"]));
                    if (progress < 1) requestAnimationFrame(step);
                }
            }["ShowcaseAnimated.useEffect.step"];
            requestAnimationFrame(step);
        }
    }["ShowcaseAnimated.useEffect"], [
        visible
    ]);
    // Animate counter (patients)
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShowcaseAnimated.useEffect": ()=>{
            if (!visible) return;
            let i = 0;
            const interval = setInterval({
                "ShowcaseAnimated.useEffect.interval": ()=>{
                    i++;
                    setCounter(i);
                    if (i >= 8) clearInterval(interval);
                }
            }["ShowcaseAnimated.useEffect.interval"], 80);
            return ({
                "ShowcaseAnimated.useEffect": ()=>clearInterval(interval)
            })["ShowcaseAnimated.useEffect"];
        }
    }["ShowcaseAnimated.useEffect"], [
        visible
    ]);
    // Typewriter effect for sidebar text
    const runTypewriter = (text)=>{
        clearInterval(typeRef.current);
        setTypedText('');
        setShowChip(false);
        let i = 0;
        typeRef.current = setInterval(()=>{
            i++;
            setTypedText(text.slice(0, i));
            if (i >= text.length) {
                clearInterval(typeRef.current);
                setTimeout(()=>setShowChip(true), 300);
            }
        }, 18);
    };
    // Auto-cycle sidebar tabs
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShowcaseAnimated.useEffect": ()=>{
            if (!visible) return;
            runTypewriter(sidebarContents[0].text);
            tabCycleRef.current = setInterval({
                "ShowcaseAnimated.useEffect": ()=>{
                    setActiveTab({
                        "ShowcaseAnimated.useEffect": (prev)=>{
                            const next = (prev + 1) % sidebarContents.length;
                            runTypewriter(sidebarContents[next].text);
                            return next;
                        }
                    }["ShowcaseAnimated.useEffect"]);
                }
            }["ShowcaseAnimated.useEffect"], 4500);
            return ({
                "ShowcaseAnimated.useEffect": ()=>clearInterval(tabCycleRef.current)
            })["ShowcaseAnimated.useEffect"];
        }
    }["ShowcaseAnimated.useEffect"], [
        visible
    ]);
    // Auto-cycle nav highlight
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ShowcaseAnimated.useEffect": ()=>{
            if (!visible) return;
            const items = [
                0,
                1,
                2,
                3
            ];
            let idx = 0;
            const interval = setInterval({
                "ShowcaseAnimated.useEffect.interval": ()=>{
                    idx = (idx + 1) % items.length;
                    setActiveNav(items[idx]);
                }
            }["ShowcaseAnimated.useEffect.interval"], 3000);
            return ({
                "ShowcaseAnimated.useEffect": ()=>clearInterval(interval)
            })["ShowcaseAnimated.useEffect"];
        }
    }["ShowcaseAnimated.useEffect"], [
        visible
    ]);
    const cur = sidebarContents[activeTab];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "showcase-section",
        id: "aria",
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("style", {
                children: `
        @keyframes barGrow { from{width:0} }
        @keyframes fadeInUp { from{opacity:0;transform:translateY(10px)} to{opacity:1;transform:translateY(0)} }
        @keyframes chipIn { from{opacity:0;transform:scale(.9)} to{opacity:1;transform:scale(1)} }
        @keyframes pulse2 { 0%,100%{opacity:1} 50%{opacity:.5} }
        .sc-bar-fill-anim { transition: width 1.2s cubic-bezier(0.16,1,0.3,1); }
        .sc-tab-active-indicator { position:absolute; bottom:0; left:0; right:0; height:2px; background:#111; border-radius:2px; animation: fadeInUp .2s both; }
        .sc-typed-text { display:inline; }
        .sc-cursor { display:inline-block; width:2px; height:13px; background:#374151; margin-left:1px; vertical-align:middle; animation: pulse2 .8s infinite; }
        .sc-chip-anim { animation: chipIn .35s cubic-bezier(0.34,1.56,0.64,1) both; }
        .sc-nav-link-anim { transition: color .3s, font-weight .3s; }
        .sc-metric-row-anim { transition: all .3s; }
        .sc-sidebar-tab-anim { transition: all .2s; cursor: pointer; }
      `
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 1237,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "section-inner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "showcase-h2",
                        children: t.showcaseTitle
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 1252,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "showcase-screen",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "showcase-screen-top",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sc-dot",
                                        style: {
                                            background: '#FF5F57'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1256,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sc-dot",
                                        style: {
                                            background: '#FFBD2E'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1257,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sc-dot",
                                        style: {
                                            background: '#28C940'
                                        }
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1258,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sc-bar",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: "vanty.app/dashboard"
                                        }, void 0, false, {
                                            fileName: "[project]/app/vanty-aba/page.tsx",
                                            lineNumber: 1259,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1259,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 1255,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "showcase-screen-body",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sc-main",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sc-nav",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: "sc-nav-logo",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$brain$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Brain$3e$__["Brain"], {
                                                            size: 14,
                                                            color: "#fff"
                                                        }, void 0, false, {
                                                            fileName: "[project]/app/vanty-aba/page.tsx",
                                                            lineNumber: 1266,
                                                            columnNumber: 46
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1266,
                                                        columnNumber: 17
                                                    }, this),
                                                    navItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: `sc-nav-link sc-nav-link-anim${activeNav === i ? ' active' : ''}`,
                                                            style: {
                                                                cursor: 'default'
                                                            },
                                                            children: item
                                                        }, i, false, {
                                                            fileName: "[project]/app/vanty-aba/page.tsx",
                                                            lineNumber: 1268,
                                                            columnNumber: 19
                                                        }, this))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1265,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sc-dash-title",
                                                style: {
                                                    animation: visible ? 'fadeInUp .5s .1s both' : 'none'
                                                },
                                                children: "Panel — Centro ABA"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1275,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sc-dash-sub",
                                                style: {
                                                    animation: visible ? 'fadeInUp .5s .2s both' : 'none'
                                                },
                                                children: [
                                                    "Semana del 17 al 24 Feb · ",
                                                    visible ? counter : 0,
                                                    " pacientes activos"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1278,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sc-metrics",
                                                style: {
                                                    animation: visible ? 'fadeInUp .5s .3s both' : 'none'
                                                },
                                                children: metrics.map((m, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "sc-metric-row sc-metric-row-anim",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: 13,
                                                                            color: '#374151'
                                                                        },
                                                                        children: [
                                                                            m.name,
                                                                            ' ',
                                                                            m.done && barWidths[i] >= m.pct && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                                style: {
                                                                                    color: '#2563EB',
                                                                                    fontWeight: 700,
                                                                                    animation: 'fadeInUp .3s both'
                                                                                },
                                                                                children: "✓ META"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                                                lineNumber: 1289,
                                                                                columnNumber: 27
                                                                            }, this)
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                                        lineNumber: 1286,
                                                                        columnNumber: 23
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                                        style: {
                                                                            fontSize: 13,
                                                                            fontWeight: 700,
                                                                            color: m.color,
                                                                            transition: 'color .3s'
                                                                        },
                                                                        children: [
                                                                            barWidths[i],
                                                                            "%"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                                        lineNumber: 1292,
                                                                        columnNumber: 23
                                                                    }, this)
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                                lineNumber: 1285,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                className: "sc-metric-bar",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                                    className: "sc-metric-fill sc-bar-fill-anim",
                                                                    style: {
                                                                        width: visible ? `${m.pct}%` : '0%',
                                                                        background: m.color
                                                                    }
                                                                }, void 0, false, {
                                                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                                                    lineNumber: 1297,
                                                                    columnNumber: 23
                                                                }, this)
                                                            }, void 0, false, {
                                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                                lineNumber: 1296,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1284,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1282,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1264,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sc-sidebar",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sc-sidebar-tabs",
                                                children: sidebarContents.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                        className: `sc-stab sc-sidebar-tab-anim${activeTab === i ? ' active' : ''}`,
                                                        style: {
                                                            position: 'relative'
                                                        },
                                                        onClick: ()=>{
                                                            clearInterval(tabCycleRef.current);
                                                            setActiveTab(i);
                                                            runTypewriter(sidebarContents[i].text);
                                                        },
                                                        children: s.label
                                                    }, i, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1311,
                                                        columnNumber: 19
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1309,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sc-label",
                                                style: {
                                                    animation: visible ? 'fadeInUp .4s .5s both' : 'none',
                                                    opacity: visible ? undefined : 0
                                                },
                                                children: "Objetivo"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1326,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sc-input",
                                                style: {
                                                    animation: 'fadeInUp .3s both'
                                                },
                                                children: cur.objective
                                            }, cur.objective, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1329,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sc-label",
                                                children: "Análisis ARIA"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1337,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sc-answer",
                                                style: {
                                                    minHeight: 56
                                                },
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sc-typed-text",
                                                        children: typedText
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1339,
                                                        columnNumber: 17
                                                    }, this),
                                                    typedText.length < cur.text.length && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                        className: "sc-cursor"
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1340,
                                                        columnNumber: 56
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1338,
                                                columnNumber: 15
                                            }, this),
                                            showChip && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sc-aria-chip sc-chip-anim",
                                                children: cur.chip
                                            }, cur.chip, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1344,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1308,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 1262,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "showcase-cols",
                                style: {
                                    borderTop: '1px solid #e5e7eb'
                                },
                                children: t.showcaseCols.map((c, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "sc-col",
                                        style: {
                                            animation: visible ? `fadeInUp .5s ${0.2 + i * 0.15}s both` : 'none',
                                            opacity: visible ? undefined : 0
                                        },
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sc-col-title",
                                                children: c.title
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1355,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "sc-col-desc",
                                                children: c.desc
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1356,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, i, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1354,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 1352,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 1253,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 1251,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/vanty-aba/page.tsx",
        lineNumber: 1236,
        columnNumber: 5
    }, this);
}
_s7(ShowcaseAnimated, "MZGz9Spt65jlWzFgS4d9aYDLBJ8=");
_c7 = ShowcaseAnimated;
function VantyLanding() {
    _s8();
    const [lang, setLang] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('es');
    const [scrolled, setScrolled] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [faq, setFaq] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [menuOpen, setMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [heroSlide, setHeroSlide] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [paused, setPaused] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [priTab, setPriTab] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(0);
    const [langOpen, setLangOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const timerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const videoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const t = T[lang];
    const WA_MSG_LOCAL = encodeURIComponent(lang === 'es' ? 'Hola, vi la página de Vanty y quiero conocer más.' : lang === 'en' ? 'Hi, I saw the Vanty page and want to learn more.' : lang === 'pt' ? 'Olá, vi a página da Vanty e quero saber mais.' : 'Bonjour, j\'ai vu la page Vanty et je veux en savoir plus.');
    const WA_URL = `https://wa.me/${WA_NUM}?text=${WA_MSG_LOCAL}`;
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VantyLanding.useEffect": ()=>{
            const fn = {
                "VantyLanding.useEffect.fn": ()=>setScrolled(window.scrollY > 10)
            }["VantyLanding.useEffect.fn"];
            window.addEventListener('scroll', fn);
            return ({
                "VantyLanding.useEffect": ()=>window.removeEventListener('scroll', fn)
            })["VantyLanding.useEffect"];
        }
    }["VantyLanding.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VantyLanding.useEffect": ()=>{
            if (!paused) {
                timerRef.current = setInterval({
                    "VantyLanding.useEffect": ()=>setHeroSlide({
                            "VantyLanding.useEffect": (s)=>(s + 1) % t.hero.slides.length
                        }["VantyLanding.useEffect"])
                }["VantyLanding.useEffect"], 5500);
            }
            return ({
                "VantyLanding.useEffect": ()=>clearInterval(timerRef.current)
            })["VantyLanding.useEffect"];
        }
    }["VantyLanding.useEffect"], [
        paused,
        lang
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "VantyLanding.useEffect": ()=>{
            setHeroSlide(0);
            setFaq(null);
        }
    }["VantyLanding.useEffect"], [
        lang
    ]);
    const slide = t.hero.slides[heroSlide];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$styled$2d$jsx$2f$style$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                id: "45bd77bd28ae34fd",
                children: '@import "https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap";*,:before,:after{box-sizing:border-box;margin:0;padding:0}html{scroll-behavior:smooth}body{color:#111;-webkit-font-smoothing:antialiased;background:#fff;font-family:Inter,sans-serif;overflow-x:hidden}@keyframes fadeUp{0%{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}@keyframes pulse{0%,to{opacity:1}50%{opacity:.4}}@keyframes marquee{0%{transform:translate(0)}to{transform:translate(-50%)}}.fu0{animation:.7s both fadeUp}.fu1{animation:.7s .15s both fadeUp}.fu2{animation:.7s .28s both fadeUp}.fu3{animation:.7s .4s both fadeUp}.nav{z-index:300;background:#fff;border-bottom:1px solid #e5e7eb;align-items:center;height:68px;padding:0 max(16px,min(4vw,48px));transition:box-shadow .3s;display:flex;position:sticky;top:0}.nav.scrolled{border-bottom-color:#0000;box-shadow:0 2px 12px #00000014}.nav-inner{justify-content:space-between;align-items:center;gap:8px;width:100%;max-width:1400px;margin:0 auto;display:flex}.nav-logo{flex-shrink:0;align-items:center;gap:10px;text-decoration:none;display:flex}.nav-links{gap:0;list-style:none;display:flex}@media (width<=960px){.nav-links{display:none}}.nav-links a{color:#374151;border-radius:8px;align-items:center;gap:4px;padding:8px 14px;font-size:14px;font-weight:500;text-decoration:none;transition:all .15s;display:flex}.nav-links a:hover{color:#111;background:#f3f4f6}.nav-right{flex-shrink:0;align-items:center;gap:8px;display:flex}.nav-login{color:#374151;border:1.5px solid #d1d5db;border-radius:8px;padding:9px 16px;font-size:14px;font-weight:600;text-decoration:none;transition:all .15s}.nav-login:hover{color:#111;border-color:#111}.nav-burger{cursor:pointer;color:#374151;background:0 0;border:1.5px solid #d1d5db;border-radius:8px;padding:8px;display:none}@media (width<=960px){.nav-burger{align-items:center;display:flex}}@media (width<=600px){.nav-login{display:none}}.lang-btn{color:#374151;cursor:pointer;background:#fff;border:1.5px solid #d1d5db;border-radius:8px;align-items:center;gap:6px;padding:8px 12px;font-family:Poppins,sans-serif;font-size:13px;font-weight:700;transition:all .15s;display:flex}.lang-btn:hover{color:#111;border-color:#111}.lang-wrap{position:relative}.lang-dropdown{z-index:500;background:#fff;border:1.5px solid #e5e7eb;border-radius:12px;min-width:160px;padding:6px;position:absolute;top:calc(100% + 8px);right:0;box-shadow:0 8px 32px #0000001f}.lang-option{color:#374151;cursor:pointer;border-radius:8px;align-items:center;gap:10px;padding:10px 14px;font-size:14px;font-weight:500;transition:background .15s;display:flex}.lang-option:hover{background:#f3f4f6}.lang-option.active{color:#1e40af;background:#eff6ff;font-weight:700}.mobile-menu{z-index:299;background:#fff;border-bottom:1px solid #e5e7eb;padding:16px max(16px,min(4vw,48px)) 24px;position:fixed;top:68px;left:0;right:0}.mobile-menu a{color:#374151;border-bottom:1px solid #f3f4f6;justify-content:space-between;align-items:center;padding:14px 0;font-size:15px;font-weight:500;text-decoration:none;display:flex}.hero{background:#0a1a0f;border-radius:0 0 20px 20px;flex-direction:column;min-height:max(520px,min(58vw,740px));margin:0 8px;display:flex;position:relative;overflow:hidden}@media (width<=640px){.hero{border-radius:0;margin:0}}.hero-video-bg{object-fit:cover;width:100%;height:100%;position:absolute;inset:0}.hero-overlay{background:linear-gradient(#00000080 0%,#0000004d 45%,#0009 100%);position:absolute;inset:0}.hero-body{z-index:10;text-align:center;flex-direction:column;flex:1;justify-content:center;align-items:center;padding:80px max(20px,min(6vw,80px)) 56px;display:flex;position:relative}.hero-pretitle{-webkit-backdrop-filter:blur(10px);backdrop-filter:blur(10px);color:#fff;letter-spacing:.06em;text-transform:uppercase;background:#ffffff1f;border:1.5px solid #ffffff47;border-radius:99px;align-items:center;gap:8px;margin-bottom:24px;padding:6px 16px;font-size:12px;font-weight:700;display:inline-flex}.hero-pretitle-dot{background:#60a5fa;border-radius:50%;flex-shrink:0;width:7px;height:7px;animation:2s infinite pulse}.hero-h1{color:#fff;letter-spacing:-.03em;white-space:pre-line;text-shadow:0 2px 24px #00000059;margin-bottom:22px;font-family:Poppins,sans-serif;font-size:max(38px,min(6vw,78px));font-weight:800;line-height:1.06}.hero-sub{color:#ffffffc7;max-width:520px;margin-bottom:16px;font-size:17px;line-height:1.65}.hero-tabbar{z-index:10;-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);background:#00000061;border-top:1px solid #ffffff1a;align-items:center;padding:0 max(20px,min(5vw,60px));display:flex;position:relative;overflow-x:auto}.hero-tab{color:#ffffff80;cursor:pointer;white-space:nowrap;background:0 0;border:none;border-bottom:3px solid #0000;padding:18px 24px;font-size:13.5px;font-weight:600;transition:all .2s}.hero-tab.on{color:#fff;border-bottom-color:#fff}.hero-tab-flex{flex:1}.hero-tab-right{flex-shrink:0;align-items:center;gap:10px;display:flex}.hero-dot{cursor:pointer;background:#ffffff4d;border:none;border-radius:50%;width:8px;height:8px;padding:0}.hero-dot.on{background:#fff}.hero-pause{color:#ffffffbf;cursor:pointer;background:#ffffff1f;border:1px solid #fff3;border-radius:99px;align-items:center;gap:5px;padding:7px 14px;font-size:12px;font-weight:600;display:flex}.trustbar{color:#374151;border-bottom:1px solid #e5e7eb;flex-wrap:wrap;justify-content:center;align-items:center;gap:32px;padding:18px max(16px,min(4vw,48px));font-size:13px;font-weight:600;display:flex}.trustbar-item{align-items:center;gap:8px;display:flex}.trustbar-item svg{color:#1d4ed8}.section-inner{max-width:1280px;margin:0 auto}.section-label{color:#1e40af;letter-spacing:.06em;text-transform:uppercase;background:#eff6ff;border:1px solid #bfdbfe;border-radius:99px;align-items:center;gap:6px;margin-bottom:16px;padding:5px 14px;font-size:11.5px;font-weight:700;display:inline-flex}.section-h2{color:#111;letter-spacing:-.03em;margin-bottom:12px;font-family:Poppins,sans-serif;font-size:max(28px,min(4vw,46px));font-weight:800;line-height:1.1}.section-sub{color:#6b7280;font-size:16px;line-height:1.7}.pri-section{background:#fff;padding:80px max(20px,min(4vw,48px))}.pri-h2{text-align:center;color:#111;letter-spacing:-.03em;margin-bottom:36px;font-family:Poppins,sans-serif;font-size:max(28px,min(4vw,48px));font-weight:800}.pri-tabs{flex-wrap:wrap;justify-content:center;gap:10px;margin-bottom:40px;display:flex}.pri-tab{cursor:pointer;color:#374151;background:#fff;border:2px solid #e5e7eb;border-radius:99px;padding:10px 22px;font-family:Poppins,sans-serif;font-size:14px;font-weight:600;transition:all .2s}.pri-tab.on{color:#fff;background:#111;border-color:#111}.pri-grid{grid-template-rows:auto auto;grid-template-columns:1.1fr 1fr;gap:16px;display:grid}@media (width<=720px){.pri-grid{grid-template-columns:1fr}}.pri-main{border:1px solid #00000012;border-radius:20px;flex-direction:column;grid-row:1/3;min-height:380px;padding:36px;display:flex}@media (width<=720px){.pri-main{grid-row:auto;min-height:auto}}.pri-small{border:1px solid #00000012;border-radius:20px;padding:28px}.pri-icon{margin-bottom:14px;font-size:36px}.pri-title{color:#111;letter-spacing:-.02em;margin-bottom:10px;font-family:Poppins,sans-serif;font-size:22px;font-weight:800}.pri-desc{color:#6b7280;margin-bottom:14px;font-size:14px;line-height:1.65}.pri-features{flex-direction:column;gap:7px;margin-top:8px;list-style:none;display:flex}.pri-features li{color:#374151;font-size:13px;font-weight:500}.pri-badge{color:#fff;letter-spacing:.04em;text-transform:uppercase;background:#111;border-radius:99px;align-items:center;margin-bottom:14px;padding:4px 12px;font-family:Poppins,sans-serif;font-size:11px;font-weight:700;display:inline-flex}.showcase-section{background:#f9fafb;padding:80px max(20px,min(4vw,48px))}.showcase-h2{text-align:center;color:#111;letter-spacing:-.03em;margin-bottom:48px;font-family:Poppins,sans-serif;font-size:max(28px,min(4vw,46px));font-weight:800}.showcase-screen{background:#fff;border:1px solid #e5e7eb;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px #00000014}.showcase-screen-top{background:#1e293b;align-items:center;gap:8px;padding:12px 20px;display:flex}.sc-dot{border-radius:50%;width:12px;height:12px}.sc-bar{background:#ffffff1a;border-radius:6px;flex:1;align-items:center;height:28px;margin:0 12px;padding:0 12px;display:flex}.sc-bar span{color:#ffffff80;font-size:12px}.showcase-screen-body{grid-template-columns:1fr 340px;min-height:320px;display:grid}@media (width<=800px){.showcase-screen-body{grid-template-columns:1fr}}.sc-main{padding:28px}.sc-nav{border-bottom:1px solid #f3f4f6;align-items:center;gap:20px;margin-bottom:20px;padding-bottom:20px;display:flex}.sc-nav-logo{background:#1d4ed8;border-radius:7px;justify-content:center;align-items:center;width:32px;height:32px;display:flex}.sc-nav-link{color:#6b7280;font-size:13px;font-weight:500}.sc-nav-link.active{color:#111;font-weight:700}.sc-dash-title{color:#111;margin-bottom:4px;font-family:Poppins,sans-serif;font-size:18px;font-weight:800}.sc-dash-sub{color:#9ca3af;margin-bottom:20px;font-size:13px}.sc-metrics{flex-direction:column;gap:12px;display:flex}.sc-metric-row{justify-content:space-between;align-items:center;margin-bottom:4px;font-size:13px;display:flex}.sc-metric-bar{background:#f3f4f6;border-radius:99px;height:8px;overflow:hidden}.sc-metric-fill{border-radius:99px;height:100%}.sc-sidebar{background:#f8fafc;border-left:1px solid #f3f4f6;flex-direction:column;gap:14px;padding:24px;display:flex}@media (width<=800px){.sc-sidebar{display:none}}.sc-sidebar-tabs{gap:6px;margin-bottom:4px;display:flex}.sc-stab{cursor:pointer;border-radius:6px;padding:6px 12px;font-family:Poppins,sans-serif;font-size:12px;font-weight:700}.sc-stab.active{color:#fff;background:#111}.sc-stab:not(.active){color:#6b7280;background:#f3f4f6}.sc-label{color:#9ca3af;text-transform:uppercase;letter-spacing:.05em;font-size:11px;font-weight:700}.sc-input{color:#111;background:#fff;border:1.5px solid #e5e7eb;border-radius:8px;padding:10px 12px;font-size:13px}.sc-answer{color:#374151;background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:12px;font-size:13px;line-height:1.6}.sc-aria-chip{color:#1d4ed8;background:#eff6ff;border:1px solid #bfdbfe;border-radius:8px;padding:10px 12px;font-size:12px;line-height:1.6}.showcase-cols{grid-template-columns:repeat(3,1fr);display:grid}@media (width<=680px){.showcase-cols{grid-template-columns:1fr}}.sc-col{border-right:1px solid #e5e7eb;padding:28px}.sc-col:last-child{border-right:none}.sc-col-title{color:#111;margin-bottom:8px;font-family:Poppins,sans-serif;font-size:16px;font-weight:800}.sc-col-desc{color:#6b7280;font-size:14px;line-height:1.65}.why-section{background:#fff;padding:80px max(20px,min(4vw,48px))}.why-h2{text-align:center;color:#111;letter-spacing:-.03em;white-space:pre-line;margin-bottom:12px;font-family:Poppins,sans-serif;font-size:max(28px,min(4vw,48px));font-weight:800}.why-sub{text-align:center;color:#6b7280;max-width:640px;margin:0 auto 52px;font-size:16px;line-height:1.65}.why-grid{grid-template-columns:repeat(3,1fr);gap:16px;display:grid}@media (width<=860px){.why-grid{grid-template-columns:repeat(2,1fr)}}@media (width<=560px){.why-grid{grid-template-columns:1fr}}.why-card{background:#f9fafb;border:1px solid #f3f4f6;border-radius:20px;flex-direction:column;justify-content:space-between;min-height:240px;padding:32px;transition:all .2s;display:flex}.why-card:hover{border-color:#dbeafe;transform:translateY(-3px);box-shadow:0 8px 32px #1d4ed814}.why-card-title{color:#111;margin-bottom:12px;font-family:Poppins,sans-serif;font-size:20px;font-weight:800;line-height:1.2}.why-card-desc{color:#6b7280;font-size:14px;line-height:1.7}.why-card-visual{background:#fff;border:1px solid #f3f4f6;border-radius:12px;justify-content:center;align-items:center;height:80px;margin-top:24px;font-size:40px;display:flex}.testimonial-section{grid-template-columns:1fr 1fr;align-items:stretch;min-height:420px;padding:0;display:grid;overflow:hidden}@media (width<=760px){.testimonial-section{grid-template-columns:1fr}}.testimonial-img-wrap{background:#e0f2f1;height:100%;min-height:420px;position:relative;overflow:hidden}.testimonial-name{color:#111;z-index:2;background:#ffffffe6;border-radius:6px;padding:6px 12px;font-size:13px;font-weight:700;position:absolute;bottom:24px;left:24px}.testimonial-role{color:#374151;font-size:12px;font-weight:500}.testimonial-body{background:#eff6ff;flex-direction:column;justify-content:center;gap:24px;padding:60px 48px;display:flex}@media (width<=760px){.testimonial-body{padding:40px 24px}}.testimonial-brand{color:#111;align-items:center;gap:8px;font-family:Poppins,sans-serif;font-size:15px;font-weight:700;display:flex}.testimonial-brand-dot{background:#1d4ed8;border-radius:50%;width:8px;height:8px}.testimonial-quote{color:#111;letter-spacing:-.02em;font-family:Poppins,sans-serif;font-size:max(20px,min(3vw,28px));font-weight:800;line-height:1.25}.testimonial-quote:before,.testimonial-quote:after{content:"\\""}.testimonial-products-label{color:#9ca3af;text-transform:uppercase;letter-spacing:.06em;margin-bottom:10px;font-size:12px;font-weight:700}.testimonial-product-item{color:#374151;align-items:center;gap:10px;margin-bottom:6px;font-size:14px;font-weight:500;display:flex}.testimonial-product-item svg{color:#1d4ed8;flex-shrink:0}.marquee-section{background:#1d4ed8;border-top:1px solid #1e40af;border-bottom:1px solid #1e40af;padding:18px 0;overflow:hidden}.marquee-track{white-space:nowrap;width:max-content;animation:28s linear infinite marquee;display:flex}.marquee-item{color:#fff;letter-spacing:.04em;text-transform:uppercase;align-items:center;gap:12px;padding:0 32px;font-family:Poppins,sans-serif;font-size:14px;font-weight:700;display:flex}.marquee-dot{background:#ffffff80;border-radius:50%;flex-shrink:0;width:6px;height:6px}.compare-section{background:#f9fafb;padding:80px max(20px,min(4vw,48px))}.cmp-wrap{border:1px solid #e5e7eb;border-radius:16px;margin-top:40px;overflow:hidden}.cmp-table{border-collapse:collapse;width:100%;min-width:580px}.cmp-table th{text-align:left;color:#6b7280;background:#f9fafb;border-bottom:2px solid #e5e7eb;padding:16px 24px;font-family:Poppins,sans-serif;font-size:13px;font-weight:700}.cmp-table th:last-child{color:#1e40af;background:#eff6ff}.cmp-table td{background:#fff;border-bottom:1px solid #f3f4f6;padding:15px 24px;font-size:14px}.cmp-table td:first-child{color:#111;font-weight:600}.cmp-table td:last-child{background:#f9fffe;font-weight:700}.cmp-table tr:last-child td{border-bottom:none}.t-yes{color:#2563eb}.t-no{color:#dc2626}.t-par{color:#d97706}@media (width<=600px){.hide-xs{display:none}}.help-section{background:#f0fdfa;grid-template-columns:1fr 1fr;align-items:stretch;min-height:380px;display:grid;overflow:hidden}@media (width<=720px){.help-section{grid-template-columns:1fr}}.help-img-wrap{background:#ccfbf1;min-height:380px;position:relative;overflow:hidden}.help-name{color:#111;z-index:2;font-size:12px;font-weight:700;position:absolute;top:20px;left:20px}.help-role{color:#374151;font-size:11px;font-weight:500}.help-body{flex-direction:column;justify-content:center;gap:16px;padding:60px 48px;display:flex}@media (width<=720px){.help-body{padding:40px 24px}}.help-brand{color:#1d4ed8;align-items:center;gap:6px;font-family:Poppins,sans-serif;font-size:14px;font-weight:700;display:flex}.help-h2{color:#111;letter-spacing:-.02em;white-space:pre-line;font-family:Poppins,sans-serif;font-size:max(24px,min(3.5vw,40px));font-weight:800;line-height:1.15}.help-desc{color:#374151;font-size:15px;line-height:1.7}.pricing-section{background:#fff;padding:80px max(20px,min(4vw,48px))}.pricing-grid{grid-template-columns:1fr 1fr;gap:24px;max-width:860px;margin:48px auto 0;display:grid}@media (width<=620px){.pricing-grid{grid-template-columns:1fr}}.p-card{background:#fff;border:2px solid #e5e7eb;border-radius:20px;padding:36px;transition:all .2s;position:relative;overflow:hidden}.p-card:hover{border-color:#dbeafe;box-shadow:0 12px 40px #1d4ed81a}.p-card.featured{border-color:#1d4ed8;box-shadow:0 8px 40px #1d4ed826}.p-badge{color:#fff;letter-spacing:.04em;text-transform:uppercase;background:#1d4ed8;border-radius:0 0 10px 10px;padding:5px 14px;font-family:Poppins,sans-serif;font-size:11px;font-weight:700;position:absolute;top:0;right:28px}.p-label{color:#9ca3af;text-transform:uppercase;letter-spacing:.07em;margin-bottom:16px;font-size:12px;font-weight:700}.p-amt{align-items:baseline;gap:4px;margin-bottom:16px;display:flex}.p-cur{color:#111;font-family:Poppins,sans-serif;font-size:22px;font-weight:800}.p-num{color:#111;letter-spacing:-.04em;font-family:Poppins,sans-serif;font-size:60px;font-weight:900;line-height:1}.p-per{color:#9ca3af;font-size:17px;font-weight:500}.p-desc{color:#6b7280;margin-bottom:24px;font-size:14px;line-height:1.7}.p-list{flex-direction:column;gap:11px;margin-bottom:28px;list-style:none;display:flex}.p-list li{color:#374151;align-items:center;gap:10px;font-size:14px;display:flex}.faq-section{background:#f9fafb;padding:80px max(20px,min(4vw,48px))}.faq-list{max-width:760px;margin:40px auto 0}.faq-item{cursor:pointer;background:#fff;border:1.5px solid #e5e7eb;border-radius:14px;margin-bottom:10px;transition:border-color .2s;overflow:hidden}.faq-item.open{border-color:#1d4ed8}.faq-head{justify-content:space-between;align-items:center;gap:12px;padding:20px 24px;display:flex}.faq-q{color:#111;font-family:Poppins,sans-serif;font-size:15px;font-weight:700}.faq-chev{color:#9ca3af;flex-shrink:0;transition:transform .25s}.faq-item.open .faq-chev{transform:rotate(180deg)}.faq-body{color:#6b7280;padding:0 24px 20px;font-size:14px;line-height:1.75}.cta-section{text-align:center;background:linear-gradient(135deg,#0c1a4a 0%,#1d4ed8 50%,#0c1a4a 100%);padding:96px max(20px,min(6vw,80px));position:relative;overflow:hidden}.cta-dots{opacity:.05;background-image:radial-gradient(#fff 1px,#0000 1px);background-size:24px 24px;position:absolute;inset:0}.cta-inner{z-index:2;max-width:680px;margin:0 auto;position:relative}.cta-h2{color:#fff;letter-spacing:-.03em;white-space:pre-line;margin-bottom:16px;font-family:Poppins,sans-serif;font-size:max(30px,min(5vw,52px));font-weight:800}.cta-sub{color:#ffffffb8;white-space:pre-line;margin-bottom:40px;font-size:17px;line-height:1.7}.cta-btns{flex-wrap:wrap;justify-content:center;gap:14px;display:flex}.cta-btn-white{color:#111;background:#fff;border-radius:8px;align-items:center;gap:8px;padding:16px 32px;font-family:Poppins,sans-serif;font-size:15px;font-weight:700;text-decoration:none;transition:all .2s;display:inline-flex}.cta-btn-ghost{color:#fff;background:0 0;border:2px solid #ffffff59;border-radius:8px;align-items:center;gap:8px;padding:16px 32px;font-family:Poppins,sans-serif;font-size:15px;font-weight:700;text-decoration:none;transition:all .2s;display:inline-flex}.cta-btn-ghost:hover{background:#ffffff14;border-color:#ffffffb3}.footer{background:#111;padding:56px max(20px,min(4vw,48px)) 0}.footer-grid{grid-template-columns:2fr 1fr 1fr 1fr;gap:40px;max-width:1280px;margin:0 auto;padding-bottom:48px;display:grid}@media (width<=900px){.footer-grid{grid-template-columns:repeat(2,1fr)}}@media (width<=560px){.footer-grid{grid-template-columns:1fr}}.footer h4{color:#9ca3af;text-transform:uppercase;letter-spacing:.07em;margin-bottom:18px;font-family:Poppins,sans-serif;font-size:13px;font-weight:700}.footer ul{flex-direction:column;gap:11px;list-style:none;display:flex}.footer ul li a{color:#6b7280;font-size:13.5px;text-decoration:none;transition:color .15s}.footer ul li a:hover{color:#fff}.footer-logo{align-items:center;gap:10px;margin-bottom:16px;display:flex}.footer-tagline{color:#6b7280;max-width:280px;margin-bottom:22px;font-size:13px;line-height:1.7}.footer-socials{gap:10px;display:flex}.fsoc{color:#9ca3af;background:#1f2937;border-radius:8px;justify-content:center;align-items:center;width:36px;height:36px;text-decoration:none;transition:all .2s;display:flex}.fsoc:hover{color:#fff;background:#374151}.footer-bottom{border-top:1px solid #1f2937;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;max-width:1280px;margin:0 auto;padding:24px 0;display:flex}.footer-bottom p{color:#4b5563;font-size:12px}'
            }, void 0, false, void 0, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SiteNav$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 1633,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "jsx-45bd77bd28ae34fd" + " " + "hero",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("video", {
                        ref: videoRef,
                        src: HERO_VIDEO_SRC,
                        poster: HERO_VIDEO_POSTER,
                        autoPlay: true,
                        muted: true,
                        loop: true,
                        playsInline: true,
                        preload: "auto",
                        className: "jsx-45bd77bd28ae34fd" + " " + "hero-video-bg"
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 1637,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-45bd77bd28ae34fd" + " " + "hero-overlay"
                    }, void 0, false, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 1638,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-45bd77bd28ae34fd" + " " + "hero-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-45bd77bd28ae34fd" + " " + "hero-pretitle fu0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-45bd77bd28ae34fd" + " " + "hero-pretitle-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1640,
                                        columnNumber: 46
                                    }, this),
                                    slide.tag
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 1640,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "jsx-45bd77bd28ae34fd" + " " + "hero-h1 fu1",
                                children: slide.title
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 1641,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-45bd77bd28ae34fd" + " " + "hero-sub fu2",
                                children: t.hero.sub
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 1642,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                style: {
                                    fontSize: 13,
                                    opacity: .6,
                                    marginBottom: 0
                                },
                                className: "jsx-45bd77bd28ae34fd" + " " + "hero-sub fu3",
                                children: t.hero.note
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 1643,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 1639,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-45bd77bd28ae34fd" + " " + "hero-tabbar",
                        children: [
                            t.hero.slides.map((s, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>{
                                        setHeroSlide(i);
                                        setPaused(true);
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + `hero-tab${heroSlide === i ? ' on' : ''}`,
                                    children: s.label
                                }, i, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1647,
                                    columnNumber: 13
                                }, this)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "jsx-45bd77bd28ae34fd" + " " + "hero-tab-flex"
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 1649,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-45bd77bd28ae34fd" + " " + "hero-tab-right",
                                children: [
                                    t.hero.slides.map((_, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                            onClick: ()=>{
                                                setHeroSlide(i);
                                                setPaused(true);
                                            },
                                            className: "jsx-45bd77bd28ae34fd" + " " + `hero-dot${heroSlide === i ? ' on' : ''}`
                                        }, i, false, {
                                            fileName: "[project]/app/vanty-aba/page.tsx",
                                            lineNumber: 1652,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setPaused((p)=>!p),
                                        className: "jsx-45bd77bd28ae34fd" + " " + "hero-pause",
                                        children: paused ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                                    size: 10
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                                    lineNumber: 1655,
                                                    columnNumber: 25
                                                }, this),
                                                t.hero.resume
                                            ]
                                        }, void 0, true) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pause$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Pause$3e$__["Pause"], {
                                                    size: 10
                                                }, void 0, false, {
                                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                                    lineNumber: 1655,
                                                    columnNumber: 63
                                                }, this),
                                                t.hero.pause
                                            ]
                                        }, void 0, true)
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1654,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 1650,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 1645,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 1636,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-45bd77bd28ae34fd" + " " + "trustbar",
                children: [
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$shield$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Shield$3e$__["Shield"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$sparkles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Sparkles$3e$__["Sparkles"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"]
                ].map((Icon, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-45bd77bd28ae34fd" + " " + "trustbar-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                                size: 15,
                                className: "jsx-45bd77bd28ae34fd"
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 1664,
                                columnNumber: 50
                            }, this),
                            " ",
                            t.trust[i]
                        ]
                    }, i, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 1664,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 1662,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                id: "roles",
                className: "jsx-45bd77bd28ae34fd" + " " + "pri-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-45bd77bd28ae34fd" + " " + "section-inner",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "jsx-45bd77bd28ae34fd" + " " + "pri-h2",
                            children: t.priTitle
                        }, void 0, false, {
                            fileName: "[project]/app/vanty-aba/page.tsx",
                            lineNumber: 1671,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-45bd77bd28ae34fd" + " " + "pri-tabs",
                            children: t.priTabs.map((tab, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: ()=>setPriTab(i),
                                    className: "jsx-45bd77bd28ae34fd" + " " + `pri-tab${priTab === i ? ' on' : ''}`,
                                    children: tab
                                }, i, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1674,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/app/vanty-aba/page.tsx",
                            lineNumber: 1672,
                            columnNumber: 11
                        }, this),
                        priTab === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-45bd77bd28ae34fd" + " " + "pri-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#e6f4ed'
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + "pri-main",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-45bd77bd28ae34fd",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-icon",
                                                children: "🚀"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1682,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-badge",
                                                children: lang === 'es' ? 'Más popular' : lang === 'en' ? 'Most popular' : lang === 'pt' ? 'Mais popular' : 'Le plus populaire'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1683,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-title",
                                                children: lang === 'es' ? 'Empezar con Vanty' : lang === 'en' ? 'Get started with Vanty' : lang === 'pt' ? 'Começar com Vanty' : 'Démarrer avec Vanty'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1684,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-desc",
                                                children: lang === 'es' ? 'Todo lo que necesita tu centro ABA para operar desde el primer día.' : lang === 'en' ? 'Everything your ABA center needs to operate from day one.' : lang === 'pt' ? 'Tudo o que o seu centro ABA precisa para operar desde o primeiro dia.' : 'Tout ce dont votre centre ABA a besoin pour fonctionner dès le premier jour.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1685,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-features",
                                                children: t.plan1Features.map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-45bd77bd28ae34fd",
                                                        children: [
                                                            "✓ ",
                                                            f
                                                        ]
                                                    }, i, true, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1686,
                                                        columnNumber: 76
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1686,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1681,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1680,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#e8f0fb'
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + "pri-small",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-45bd77bd28ae34fd",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 30,
                                                    marginBottom: 12
                                                },
                                                className: "jsx-45bd77bd28ae34fd",
                                                children: "🤖"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1691,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-badge",
                                                children: lang === 'es' ? 'Novedad' : lang === 'en' ? 'New' : lang === 'pt' ? 'Novidade' : 'Nouveau'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1692,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 18
                                                },
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-title",
                                                children: "ARIA · IA"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1693,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-desc",
                                                children: lang === 'es' ? 'Genera reportes clínicos completos en segundos.' : lang === 'en' ? 'Generates complete clinical reports in seconds.' : lang === 'pt' ? 'Gera relatórios clínicos completos em segundos.' : 'Génère des rapports cliniques complets en quelques secondes.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1694,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-features",
                                                children: (lang === 'es' ? [
                                                    '✓ Reportes automáticos',
                                                    '✓ Notas clínicas',
                                                    '✓ Resúmenes para familias'
                                                ] : lang === 'en' ? [
                                                    '✓ Automatic reports',
                                                    '✓ Clinical notes',
                                                    '✓ Family summaries'
                                                ] : lang === 'pt' ? [
                                                    '✓ Relatórios automáticos',
                                                    '✓ Notas clínicas',
                                                    '✓ Resumos para famílias'
                                                ] : [
                                                    '✓ Rapports automatiques',
                                                    '✓ Notes cliniques',
                                                    '✓ Résumés familles'
                                                ]).map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-45bd77bd28ae34fd",
                                                        children: f
                                                    }, i, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1700,
                                                        columnNumber: 34
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1695,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1690,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1689,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#fef3e8'
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + "pri-small",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-45bd77bd28ae34fd",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 30,
                                                    marginBottom: 12
                                                },
                                                className: "jsx-45bd77bd28ae34fd",
                                                children: "📊"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1706,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 18
                                                },
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-title",
                                                children: lang === 'es' ? 'Datos ABA' : lang === 'en' ? 'ABA Data' : lang === 'pt' ? 'Dados ABA' : 'Données ABA'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1707,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-desc",
                                                children: lang === 'es' ? 'Gráficos de dominio con alertas al ≥80%.' : lang === 'en' ? 'Domain charts with alerts at ≥80%.' : lang === 'pt' ? 'Gráficos de domínio com alertas ao ≥80%.' : 'Graphiques avec alertes à ≥80%.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1708,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-features",
                                                children: (lang === 'es' ? [
                                                    '✓ Gráficos por objetivo',
                                                    '✓ Alertas automáticas',
                                                    '✓ Excel import'
                                                ] : lang === 'en' ? [
                                                    '✓ Charts per objective',
                                                    '✓ Auto alerts',
                                                    '✓ Excel import'
                                                ] : lang === 'pt' ? [
                                                    '✓ Gráficos por objetivo',
                                                    '✓ Alertas automáticas',
                                                    '✓ Import Excel'
                                                ] : [
                                                    '✓ Graphiques par objectif',
                                                    '✓ Alertes auto',
                                                    '✓ Import Excel'
                                                ]).map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-45bd77bd28ae34fd",
                                                        children: f
                                                    }, i, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1714,
                                                        columnNumber: 34
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1709,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1705,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1704,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/vanty-aba/page.tsx",
                            lineNumber: 1679,
                            columnNumber: 13
                        }, this),
                        priTab === 1 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-45bd77bd28ae34fd" + " " + "pri-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#eff6ff'
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + "pri-main",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-45bd77bd28ae34fd",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-icon",
                                                children: "🧠"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1726,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#2563EB'
                                                },
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-badge",
                                                children: lang === 'es' ? 'Para analistas' : lang === 'en' ? 'For analysts' : lang === 'pt' ? 'Para analistas' : 'Pour analystes'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1727,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-title",
                                                children: lang === 'es' ? 'Herramientas para el analista ABA' : lang === 'en' ? 'Tools for the ABA analyst' : lang === 'pt' ? 'Ferramentas para o analista ABA' : 'Outils pour l\'analyste ABA'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1728,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-desc",
                                                children: lang === 'es' ? 'Todo lo que necesitas para gestionar programas, registrar sesiones y supervisar el progreso de tus pacientes desde un solo lugar.' : lang === 'en' ? 'Everything you need to manage programs, record sessions and monitor your patients\' progress from one place.' : lang === 'pt' ? 'Tudo o que você precisa para gerenciar programas, registrar sessões e monitorar o progresso dos seus pacientes.' : 'Tout ce qu\'il faut pour gérer les programmes, enregistrer les séances et suivre les progrès de vos patients.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1729,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-features",
                                                children: (lang === 'es' ? [
                                                    '✓ Registro de sesiones ABA en tiempo real',
                                                    '✓ Programas de intervención por paciente',
                                                    '✓ Gráficos de dominio automáticos',
                                                    '✓ Alertas al alcanzar ≥80% por objetivo',
                                                    '✓ Supervisión de especialistas a distancia',
                                                    '✓ Importar datos desde Excel'
                                                ] : lang === 'en' ? [
                                                    '✓ Real-time ABA session recording',
                                                    '✓ Intervention programs per patient',
                                                    '✓ Automatic domain charts',
                                                    '✓ Alerts when reaching ≥80% per goal',
                                                    '✓ Remote specialist supervision',
                                                    '✓ Import data from Excel'
                                                ] : lang === 'pt' ? [
                                                    '✓ Registro de sessões ABA em tempo real',
                                                    '✓ Programas de intervenção por paciente',
                                                    '✓ Gráficos de domínio automáticos',
                                                    '✓ Alertas ao atingir ≥80% por objetivo',
                                                    '✓ Supervisão de especialistas à distância',
                                                    '✓ Importar dados do Excel'
                                                ] : [
                                                    '✓ Enregistrement de séances ABA en temps réel',
                                                    '✓ Programmes d\'intervention par patient',
                                                    '✓ Graphiques de domaine automatiques',
                                                    '✓ Alertes à ≥80% par objectif',
                                                    '✓ Supervision à distance',
                                                    '✓ Importation depuis Excel'
                                                ]).map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-45bd77bd28ae34fd",
                                                        children: f
                                                    }, i, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1759,
                                                        columnNumber: 35
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1730,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1725,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1724,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#e8f0fb'
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + "pri-small",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-45bd77bd28ae34fd",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 30,
                                                    marginBottom: 12
                                                },
                                                className: "jsx-45bd77bd28ae34fd",
                                                children: "🤖"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1765,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#2563EB'
                                                },
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-badge",
                                                children: lang === 'es' ? 'IA para analistas' : lang === 'en' ? 'AI for analysts' : lang === 'pt' ? 'IA para analistas' : 'IA pour analystes'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1766,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 18
                                                },
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-title",
                                                children: [
                                                    "ARIA · ",
                                                    lang === 'es' || lang === 'pt' ? 'Reportes IA' : lang === 'en' ? 'AI Reports' : 'Rapports IA'
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1767,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-desc",
                                                children: lang === 'es' ? 'Genera reportes de sesión completos y notas clínicas en segundos.' : lang === 'en' ? 'Generate complete session reports and clinical notes in seconds.' : lang === 'pt' ? 'Gera relatórios de sessão completos e notas clínicas em segundos.' : 'Générez des rapports de séance complets en quelques secondes.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1768,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-features",
                                                children: (lang === 'es' ? [
                                                    '✓ Reportes automáticos por sesión',
                                                    '✓ Notas SOAP clínicas',
                                                    '✓ Resúmenes para supervisión'
                                                ] : lang === 'en' ? [
                                                    '✓ Automatic per-session reports',
                                                    '✓ Clinical SOAP notes',
                                                    '✓ Supervision summaries'
                                                ] : lang === 'pt' ? [
                                                    '✓ Relatórios automáticos por sessão',
                                                    '✓ Notas SOAP clínicas',
                                                    '✓ Resumos para supervisão'
                                                ] : [
                                                    '✓ Rapports automatiques par séance',
                                                    '✓ Notes SOAP cliniques',
                                                    '✓ Résumés de supervision'
                                                ]).map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-45bd77bd28ae34fd",
                                                        children: f
                                                    }, i, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1774,
                                                        columnNumber: 34
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1769,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1764,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1763,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#eff6ff'
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + "pri-small",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-45bd77bd28ae34fd",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 30,
                                                    marginBottom: 12
                                                },
                                                className: "jsx-45bd77bd28ae34fd",
                                                children: "📋"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1780,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 18
                                                },
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-title",
                                                children: lang === 'es' ? 'Dashboard del analista' : lang === 'en' ? 'Analyst dashboard' : lang === 'pt' ? 'Dashboard do analista' : 'Tableau de bord analyste'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1781,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-desc",
                                                children: lang === 'es' ? 'Vista centralizada de todos tus pacientes y su progreso semanal.' : lang === 'en' ? 'Centralized view of all your patients and their weekly progress.' : lang === 'pt' ? 'Visão centralizada de todos os seus pacientes e seu progresso semanal.' : 'Vue centralisée de tous vos patients et leurs progrès hebdomadaires.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1782,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-features",
                                                children: (lang === 'es' ? [
                                                    '✓ Lista de pacientes activos',
                                                    '✓ Resumen semanal de sesiones',
                                                    '✓ Notificaciones de metas alcanzadas'
                                                ] : lang === 'en' ? [
                                                    '✓ Active patient list',
                                                    '✓ Weekly session summary',
                                                    '✓ Goal achievement notifications'
                                                ] : lang === 'pt' ? [
                                                    '✓ Lista de pacientes ativos',
                                                    '✓ Resumo semanal de sessões',
                                                    '✓ Notificações de metas atingidas'
                                                ] : [
                                                    '✓ Liste des patients actifs',
                                                    '✓ Résumé hebdomadaire',
                                                    '✓ Notifications d\'objectifs atteints'
                                                ]).map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-45bd77bd28ae34fd",
                                                        children: f
                                                    }, i, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1788,
                                                        columnNumber: 34
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1783,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1779,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1778,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/vanty-aba/page.tsx",
                            lineNumber: 1723,
                            columnNumber: 13
                        }, this),
                        priTab === 2 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-45bd77bd28ae34fd" + " " + "pri-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#fdf4ff'
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + "pri-main",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-45bd77bd28ae34fd",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-icon",
                                                children: "🩺"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1800,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#7C3AED'
                                                },
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-badge",
                                                children: lang === 'es' ? 'Para especialistas' : lang === 'en' ? 'For specialists' : lang === 'pt' ? 'Para especialistas' : 'Pour spécialistes'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1801,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-title",
                                                children: lang === 'es' ? 'Portal del especialista ABA' : lang === 'en' ? 'ABA specialist portal' : lang === 'pt' ? 'Portal do especialista ABA' : 'Portail du spécialiste ABA'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1802,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-desc",
                                                children: lang === 'es' ? 'Registra tus sesiones, accede al historial clínico de cada paciente y comunícate con analistas y familias desde un solo portal.' : lang === 'en' ? 'Record your sessions, access each patient\'s clinical history and communicate with analysts and families from one portal.' : lang === 'pt' ? 'Registre suas sessões, acesse o histórico clínico de cada paciente e comunique-se com analistas e famílias.' : 'Enregistrez vos séances, accédez à l\'historique clinique et communiquez avec analystes et familles.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1803,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-features",
                                                children: (lang === 'es' ? [
                                                    '✓ Registro de sesiones propias',
                                                    '✓ Acceso al historial clínico del paciente',
                                                    '✓ Comunicación directa con analistas',
                                                    '✓ Mensajería con padres de familia',
                                                    '✓ Agenda de citas y sesiones',
                                                    '✓ Notas clínicas generadas con ARIA'
                                                ] : lang === 'en' ? [
                                                    '✓ Own session recording',
                                                    '✓ Access to patient clinical history',
                                                    '✓ Direct communication with analysts',
                                                    '✓ Messaging with parents',
                                                    '✓ Appointment and session calendar',
                                                    '✓ Clinical notes generated with ARIA'
                                                ] : lang === 'pt' ? [
                                                    '✓ Registro de sessões próprias',
                                                    '✓ Acesso ao histórico clínico do paciente',
                                                    '✓ Comunicação direta com analistas',
                                                    '✓ Mensagens com pais de família',
                                                    '✓ Agenda de consultas e sessões',
                                                    '✓ Notas clínicas geradas com ARIA'
                                                ] : [
                                                    '✓ Enregistrement de ses propres séances',
                                                    '✓ Accès à l\'historique clinique',
                                                    '✓ Communication directe avec les analystes',
                                                    '✓ Messagerie avec les parents',
                                                    '✓ Agenda des rendez-vous',
                                                    '✓ Notes cliniques générées par ARIA'
                                                ]).map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-45bd77bd28ae34fd",
                                                        children: f
                                                    }, i, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1833,
                                                        columnNumber: 35
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1804,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1799,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1798,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#ede9fe'
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + "pri-small",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-45bd77bd28ae34fd",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 30,
                                                    marginBottom: 12
                                                },
                                                className: "jsx-45bd77bd28ae34fd",
                                                children: "📅"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1839,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 18
                                                },
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-title",
                                                children: lang === 'es' ? 'Agenda inteligente' : lang === 'en' ? 'Smart calendar' : lang === 'pt' ? 'Agenda inteligente' : 'Agenda intelligente'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1840,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-desc",
                                                children: lang === 'es' ? 'Gestiona tus citas, sesiones y seguimientos en un solo lugar.' : lang === 'en' ? 'Manage your appointments, sessions and follow-ups in one place.' : lang === 'pt' ? 'Gerencie seus compromissos, sessões e acompanhamentos em um só lugar.' : 'Gérez vos rendez-vous, séances et suivis en un seul endroit.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1841,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-features",
                                                children: (lang === 'es' ? [
                                                    '✓ Vista semanal y mensual',
                                                    '✓ Recordatorios automáticos',
                                                    '✓ Historial de citas por paciente'
                                                ] : lang === 'en' ? [
                                                    '✓ Weekly and monthly view',
                                                    '✓ Automatic reminders',
                                                    '✓ Appointment history per patient'
                                                ] : lang === 'pt' ? [
                                                    '✓ Vista semanal e mensal',
                                                    '✓ Lembretes automáticos',
                                                    '✓ Histórico de consultas por paciente'
                                                ] : [
                                                    '✓ Vue hebdomadaire et mensuelle',
                                                    '✓ Rappels automatiques',
                                                    '✓ Historique des rendez-vous'
                                                ]).map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-45bd77bd28ae34fd",
                                                        children: f
                                                    }, i, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1847,
                                                        columnNumber: 34
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1842,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1838,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1837,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#fef3e8'
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + "pri-small",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-45bd77bd28ae34fd",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 30,
                                                    marginBottom: 12
                                                },
                                                className: "jsx-45bd77bd28ae34fd",
                                                children: "💬"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1853,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 18
                                                },
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-title",
                                                children: lang === 'es' ? 'Comunicación integrada' : lang === 'en' ? 'Integrated communication' : lang === 'pt' ? 'Comunicação integrada' : 'Communication intégrée'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1854,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-desc",
                                                children: lang === 'es' ? 'Mensajería interna con el equipo y los padres, sin salir de la plataforma.' : lang === 'en' ? 'Internal messaging with the team and parents, without leaving the platform.' : lang === 'pt' ? 'Mensagens internas com a equipe e os pais, sem sair da plataforma.' : 'Messagerie interne avec l\'équipe et les parents, sans quitter la plateforme.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1855,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-features",
                                                children: (lang === 'es' ? [
                                                    '✓ Chat con analistas',
                                                    '✓ Mensajes a padres',
                                                    '✓ Notificaciones push'
                                                ] : lang === 'en' ? [
                                                    '✓ Chat with analysts',
                                                    '✓ Messages to parents',
                                                    '✓ Push notifications'
                                                ] : lang === 'pt' ? [
                                                    '✓ Chat com analistas',
                                                    '✓ Mensagens para pais',
                                                    '✓ Notificações push'
                                                ] : [
                                                    '✓ Chat avec les analystes',
                                                    '✓ Messages aux parents',
                                                    '✓ Notifications push'
                                                ]).map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-45bd77bd28ae34fd",
                                                        children: f
                                                    }, i, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1861,
                                                        columnNumber: 34
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1856,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1852,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1851,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/vanty-aba/page.tsx",
                            lineNumber: 1797,
                            columnNumber: 13
                        }, this),
                        priTab === 3 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-45bd77bd28ae34fd" + " " + "pri-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#ecfeff'
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + "pri-main",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-45bd77bd28ae34fd",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-icon",
                                                children: "🗂️"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1873,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#0891B2'
                                                },
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-badge",
                                                children: lang === 'es' ? 'Para secretaría' : lang === 'en' ? 'For front desk' : lang === 'pt' ? 'Para secretaria' : 'Pour le secrétariat'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1874,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-title",
                                                children: lang === 'es' ? 'Portal de secretaría y administración' : lang === 'en' ? 'Front desk & admin portal' : lang === 'pt' ? 'Portal de secretaria e administração' : 'Portail secrétariat & administration'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1875,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-desc",
                                                children: lang === 'es' ? 'La secretaría gestiona toda la operación no clínica: agenda del centro, pagos, comunicación con familias y reportes, sin acceder a la información clínica sensible.' : lang === 'en' ? 'Front desk manages all non-clinical operations: center calendar, payments, family communication and reports, without accessing sensitive clinical data.' : lang === 'pt' ? 'A secretaria gerencia toda a operação não clínica: agenda do centro, pagamentos, comunicação com famílias e relatórios, sem acessar dados clínicos sensíveis.' : 'Le secrétariat gère toute l\'opération non clinique : agenda du centre, paiements, communication avec les familles et rapports, sans accéder aux données cliniques sensibles.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1876,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-features",
                                                children: (lang === 'es' ? [
                                                    '✓ Agenda y cronograma del centro',
                                                    '✓ Registro de pagos y cobros',
                                                    '✓ Comprobantes y reportes financieros',
                                                    '✓ Comunicación con familias por WhatsApp',
                                                    '✓ Recordatorios automáticos de citas',
                                                    '✓ Permisos sin acceso clínico sensible'
                                                ] : lang === 'en' ? [
                                                    '✓ Center calendar and schedule',
                                                    '✓ Payment and billing records',
                                                    '✓ Receipts and financial reports',
                                                    '✓ Family communication via WhatsApp',
                                                    '✓ Automatic appointment reminders',
                                                    '✓ Permissions without sensitive clinical access'
                                                ] : lang === 'pt' ? [
                                                    '✓ Agenda e cronograma do centro',
                                                    '✓ Registro de pagamentos e cobranças',
                                                    '✓ Comprovantes e relatórios financeiros',
                                                    '✓ Comunicação com famílias por WhatsApp',
                                                    '✓ Lembretes automáticos de consultas',
                                                    '✓ Permissões sem acesso clínico sensível'
                                                ] : [
                                                    '✓ Agenda et planning du centre',
                                                    '✓ Enregistrement des paiements',
                                                    '✓ Reçus et rapports financiers',
                                                    '✓ Communication avec les familles via WhatsApp',
                                                    '✓ Rappels automatiques de rendez-vous',
                                                    '✓ Permissions sans accès clinique sensible'
                                                ]).map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-45bd77bd28ae34fd",
                                                        children: f
                                                    }, i, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1906,
                                                        columnNumber: 35
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1877,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1872,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1871,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#cffafe'
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + "pri-small",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-45bd77bd28ae34fd",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 30,
                                                    marginBottom: 12
                                                },
                                                className: "jsx-45bd77bd28ae34fd",
                                                children: "💳"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1912,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 18
                                                },
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-title",
                                                children: lang === 'es' ? 'Pagos y facturación' : lang === 'en' ? 'Payments & billing' : lang === 'pt' ? 'Pagamentos e faturamento' : 'Paiements & facturation'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1913,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-desc",
                                                children: lang === 'es' ? 'Controla cobros, comprobantes y el estado financiero del centro en un solo lugar.' : lang === 'en' ? 'Track payments, receipts and the center\'s financial status in one place.' : lang === 'pt' ? 'Controle cobranças, comprovantes e o estado financeiro do centro em um só lugar.' : 'Suivez les paiements, reçus et l\'état financier du centre en un seul endroit.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1914,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-features",
                                                children: (lang === 'es' ? [
                                                    '✓ Registro de pagos',
                                                    '✓ Comprobantes automáticos',
                                                    '✓ Reportes financieros'
                                                ] : lang === 'en' ? [
                                                    '✓ Payment records',
                                                    '✓ Automatic receipts',
                                                    '✓ Financial reports'
                                                ] : lang === 'pt' ? [
                                                    '✓ Registro de pagamentos',
                                                    '✓ Comprovantes automáticos',
                                                    '✓ Relatórios financeiros'
                                                ] : [
                                                    '✓ Enregistrement des paiements',
                                                    '✓ Reçus automatiques',
                                                    '✓ Rapports financiers'
                                                ]).map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-45bd77bd28ae34fd",
                                                        children: f
                                                    }, i, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1920,
                                                        columnNumber: 34
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1915,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1911,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1910,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#e8f0fb'
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + "pri-small",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-45bd77bd28ae34fd",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 30,
                                                    marginBottom: 12
                                                },
                                                className: "jsx-45bd77bd28ae34fd",
                                                children: "📲"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1926,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 18
                                                },
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-title",
                                                children: lang === 'es' ? 'Comunicación y agenda' : lang === 'en' ? 'Communication & calendar' : lang === 'pt' ? 'Comunicação e agenda' : 'Communication & agenda'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1927,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-desc",
                                                children: lang === 'es' ? 'Coordina citas y mantén informadas a las familias por WhatsApp desde la plataforma.' : lang === 'en' ? 'Coordinate appointments and keep families informed via WhatsApp from the platform.' : lang === 'pt' ? 'Coordene consultas e mantenha as famílias informadas por WhatsApp pela plataforma.' : 'Coordonnez les rendez-vous et informez les familles via WhatsApp depuis la plateforme.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1928,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-features",
                                                children: (lang === 'es' ? [
                                                    '✓ WhatsApp integrado',
                                                    '✓ Recordatorios de citas',
                                                    '✓ Sincronización de calendarios'
                                                ] : lang === 'en' ? [
                                                    '✓ Integrated WhatsApp',
                                                    '✓ Appointment reminders',
                                                    '✓ Calendar sync'
                                                ] : lang === 'pt' ? [
                                                    '✓ WhatsApp integrado',
                                                    '✓ Lembretes de consultas',
                                                    '✓ Sincronização de calendários'
                                                ] : [
                                                    '✓ WhatsApp intégré',
                                                    '✓ Rappels de rendez-vous',
                                                    '✓ Synchronisation des agendas'
                                                ]).map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-45bd77bd28ae34fd",
                                                        children: f
                                                    }, i, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1934,
                                                        columnNumber: 34
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1929,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1925,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1924,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/vanty-aba/page.tsx",
                            lineNumber: 1870,
                            columnNumber: 13
                        }, this),
                        priTab === 4 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "jsx-45bd77bd28ae34fd" + " " + "pri-grid",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#fff7ed'
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + "pri-main",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-45bd77bd28ae34fd",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-icon",
                                                children: "👨‍👩‍👧"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1946,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    background: '#EA580C'
                                                },
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-badge",
                                                children: lang === 'es' ? 'Para familias' : lang === 'en' ? 'For families' : lang === 'pt' ? 'Para famílias' : 'Pour familles'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1947,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-title",
                                                children: lang === 'es' ? 'Portal familiar nativo' : lang === 'en' ? 'Native family portal' : lang === 'pt' ? 'Portal familiar nativo' : 'Portail familial natif'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1948,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-desc",
                                                children: lang === 'es' ? 'Los padres se mantienen conectados al progreso de su hijo en tiempo real, sin necesitar conocimientos técnicos. Transparencia total con el equipo clínico.' : lang === 'en' ? 'Parents stay connected to their child\'s progress in real time, without needing technical knowledge. Full transparency with the clinical team.' : lang === 'pt' ? 'Os pais ficam conectados ao progresso do filho em tempo real, sem precisar de conhecimentos técnicos.' : 'Les parents restent connectés aux progrès de leur enfant en temps réel, sans connaissances techniques.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1949,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-features",
                                                children: (lang === 'es' ? [
                                                    '✓ Ver el progreso del paciente en tiempo real',
                                                    '✓ Acceso a reportes y resúmenes de sesión',
                                                    '✓ Mensajería directa con el especialista',
                                                    '✓ Agenda de citas y sesiones',
                                                    '✓ Actividades recomendadas para el hogar',
                                                    '✓ Notificaciones de metas alcanzadas'
                                                ] : lang === 'en' ? [
                                                    '✓ View patient progress in real time',
                                                    '✓ Access to session reports and summaries',
                                                    '✓ Direct messaging with the specialist',
                                                    '✓ Appointment and session calendar',
                                                    '✓ Recommended home activities',
                                                    '✓ Goal achievement notifications'
                                                ] : lang === 'pt' ? [
                                                    '✓ Ver o progresso do paciente em tempo real',
                                                    '✓ Acesso a relatórios e resumos de sessão',
                                                    '✓ Mensagens diretas com o especialista',
                                                    '✓ Agenda de consultas e sessões',
                                                    '✓ Atividades recomendadas para casa',
                                                    '✓ Notificações de metas atingidas'
                                                ] : [
                                                    '✓ Voir les progrès du patient en temps réel',
                                                    '✓ Accès aux rapports de séance',
                                                    '✓ Messagerie directe avec le spécialiste',
                                                    '✓ Agenda des rendez-vous',
                                                    '✓ Activités recommandées à domicile',
                                                    '✓ Notifications d\'objectifs atteints'
                                                ]).map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-45bd77bd28ae34fd",
                                                        children: f
                                                    }, i, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1979,
                                                        columnNumber: 35
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1950,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1945,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1944,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#fef9c3'
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + "pri-small",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-45bd77bd28ae34fd",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 30,
                                                    marginBottom: 12
                                                },
                                                className: "jsx-45bd77bd28ae34fd",
                                                children: "📈"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1985,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 18
                                                },
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-title",
                                                children: lang === 'es' ? 'Progreso visible' : lang === 'en' ? 'Visible progress' : lang === 'pt' ? 'Progresso visível' : 'Progrès visible'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1986,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-desc",
                                                children: lang === 'es' ? 'Gráficos claros del avance de tu hijo por cada objetivo ABA.' : lang === 'en' ? 'Clear charts of your child\'s progress for each ABA goal.' : lang === 'pt' ? 'Gráficos claros do avanço do seu filho por cada objetivo ABA.' : 'Graphiques clairs des progrès de votre enfant par objectif ABA.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1987,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-features",
                                                children: (lang === 'es' ? [
                                                    '✓ Gráficos por objetivo',
                                                    '✓ Porcentaje de avance semanal',
                                                    '✓ Alertas de metas cumplidas'
                                                ] : lang === 'en' ? [
                                                    '✓ Charts per goal',
                                                    '✓ Weekly progress percentage',
                                                    '✓ Goal completion alerts'
                                                ] : lang === 'pt' ? [
                                                    '✓ Gráficos por objetivo',
                                                    '✓ Porcentagem de avanço semanal',
                                                    '✓ Alertas de metas cumpridas'
                                                ] : [
                                                    '✓ Graphiques par objectif',
                                                    '✓ Pourcentage de progrès hebdomadaire',
                                                    '✓ Alertes d\'objectifs atteints'
                                                ]).map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-45bd77bd28ae34fd",
                                                        children: f
                                                    }, i, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 1993,
                                                        columnNumber: 34
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1988,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1984,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1983,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    style: {
                                        background: '#fce7f3'
                                    },
                                    className: "jsx-45bd77bd28ae34fd" + " " + "pri-small",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "jsx-45bd77bd28ae34fd",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 30,
                                                    marginBottom: 12
                                                },
                                                className: "jsx-45bd77bd28ae34fd",
                                                children: "🏠"
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 1999,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                style: {
                                                    fontSize: 18
                                                },
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-title",
                                                children: lang === 'es' ? 'Actividades en casa' : lang === 'en' ? 'Home activities' : lang === 'pt' ? 'Atividades em casa' : 'Activités à domicile'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 2000,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-desc",
                                                children: lang === 'es' ? 'Recibe guías y actividades personalizadas para reforzar el trabajo terapéutico en el hogar.' : lang === 'en' ? 'Receive personalized guides and activities to reinforce therapeutic work at home.' : lang === 'pt' ? 'Receba guias e atividades personalizadas para reforçar o trabalho terapêutico em casa.' : 'Recevez des guides et activités personnalisés pour renforcer le travail thérapeutique à domicile.'
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 2001,
                                                columnNumber: 19
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                                className: "jsx-45bd77bd28ae34fd" + " " + "pri-features",
                                                children: (lang === 'es' ? [
                                                    '✓ Guías semanales personalizadas',
                                                    '✓ Actividades sugeridas por ARIA',
                                                    '✓ Seguimiento de tareas en casa'
                                                ] : lang === 'en' ? [
                                                    '✓ Personalized weekly guides',
                                                    '✓ Activities suggested by ARIA',
                                                    '✓ Home task tracking'
                                                ] : lang === 'pt' ? [
                                                    '✓ Guias semanais personalizados',
                                                    '✓ Atividades sugeridas por ARIA',
                                                    '✓ Acompanhamento de tarefas em casa'
                                                ] : [
                                                    '✓ Guides hebdomadaires personnalisés',
                                                    '✓ Activités suggérées par ARIA',
                                                    '✓ Suivi des tâches à domicile'
                                                ]).map((f, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                                        className: "jsx-45bd77bd28ae34fd",
                                                        children: f
                                                    }, i, false, {
                                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                                        lineNumber: 2007,
                                                        columnNumber: 34
                                                    }, this))
                                            }, void 0, false, {
                                                fileName: "[project]/app/vanty-aba/page.tsx",
                                                lineNumber: 2002,
                                                columnNumber: 19
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 1998,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/app/vanty-aba/page.tsx",
                                    lineNumber: 1997,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/app/vanty-aba/page.tsx",
                            lineNumber: 1943,
                            columnNumber: 13
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/app/vanty-aba/page.tsx",
                    lineNumber: 1670,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 1669,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(ShowcaseAnimated, {
                t: t
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 2017,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(WhySection, {
                t: t
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 2020,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TestimonialSection, {
                t: t
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 2023,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-45bd77bd28ae34fd" + " " + "marquee-section",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "jsx-45bd77bd28ae34fd" + " " + "marquee-track",
                    children: [
                        ...Array(2)
                    ].map((_, rep)=>t.marqueeItems.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-45bd77bd28ae34fd" + " " + "marquee-item",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-45bd77bd28ae34fd" + " " + "marquee-dot"
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 2029,
                                        columnNumber: 63
                                    }, this),
                                    item
                                ]
                            }, `${rep}-${i}`, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 2029,
                                columnNumber: 13
                            }, this)))
                }, void 0, false, {
                    fileName: "[project]/app/vanty-aba/page.tsx",
                    lineNumber: 2027,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 2026,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(TrustedCentersSection, {
                t: t
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 2035,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CompareSection, {
                t: t
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 2038,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "jsx-45bd77bd28ae34fd" + " " + "help-section",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            position: 'relative',
                            overflow: 'hidden',
                            minHeight: '380px'
                        },
                        className: "jsx-45bd77bd28ae34fd" + " " + "help-img-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                src: "/images/banner.png",
                                alt: t.helpTeam,
                                style: {
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    objectPosition: 'center'
                                },
                                className: "jsx-45bd77bd28ae34fd"
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 2043,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-45bd77bd28ae34fd" + " " + "help-name",
                                children: [
                                    t.helpTeam,
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
                                        className: "jsx-45bd77bd28ae34fd"
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 2044,
                                        columnNumber: 50
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "jsx-45bd77bd28ae34fd" + " " + "help-role",
                                        children: t.helpRole
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 2044,
                                        columnNumber: 55
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 2044,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 2042,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "jsx-45bd77bd28ae34fd" + " " + "help-body",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "jsx-45bd77bd28ae34fd" + " " + "help-brand",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$globe$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Globe$3e$__["Globe"], {
                                        size: 16
                                    }, void 0, false, {
                                        fileName: "[project]/app/vanty-aba/page.tsx",
                                        lineNumber: 2047,
                                        columnNumber: 39
                                    }, this),
                                    " ",
                                    t.helpBrand
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 2047,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "jsx-45bd77bd28ae34fd" + " " + "help-h2",
                                children: t.helpTitle
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 2048,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "jsx-45bd77bd28ae34fd" + " " + "help-desc",
                                children: t.helpDesc
                            }, void 0, false, {
                                fileName: "[project]/app/vanty-aba/page.tsx",
                                lineNumber: 2049,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/vanty-aba/page.tsx",
                        lineNumber: 2046,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 2041,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(PricingSection, {
                t: t
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 2054,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(FaqSection, {
                t: t,
                faq: faq,
                setFaq: setFaq
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 2057,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CtaSection, {
                t: t,
                WA_URL: WA_URL,
                EMAIL: EMAIL
            }, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 2060,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$SiteFooter$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/app/vanty-aba/page.tsx",
                lineNumber: 2063,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
_s8(VantyLanding, "QbD8qWXiQnB/IdfzH7RU223cFeY=");
_c8 = VantyLanding;
var _c, _c1, _c2, _c3, _c4, _c5, _c6, _c7, _c8;
__turbopack_context__.k.register(_c, "PricingSection");
__turbopack_context__.k.register(_c1, "FaqSection");
__turbopack_context__.k.register(_c2, "TestimonialSection");
__turbopack_context__.k.register(_c3, "TrustedCentersSection");
__turbopack_context__.k.register(_c4, "CompareSection");
__turbopack_context__.k.register(_c5, "WhySection");
__turbopack_context__.k.register(_c6, "CtaSection");
__turbopack_context__.k.register(_c7, "ShowcaseAnimated");
__turbopack_context__.k.register(_c8, "VantyLanding");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_2a27adfa._.js.map