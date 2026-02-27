'use client'

import { useState, useEffect, useRef } from 'react'
import {
  Brain, Users, ChevronDown, ArrowRight, Check,
  Shield, Zap, BarChart2, MessageSquare,
  Phone, Mail, Instagram, Star, CheckCircle,
  Heart, X, Menu, Sparkles, ChevronRight,
  Play, Pause, Search, Facebook, Globe, Lock
} from 'lucide-react'

const WA_NUM = '51924685557'
const EMAIL  = 'andrewmanasias10@gmail.com'
const HERO_VIDEO_SRC    = '/video/demo.mp4'
const HERO_VIDEO_POSTER = '/images/video-poster.jpg'

// ════════════════════════════════════════════════
//  TRADUCCIONES
// ════════════════════════════════════════════════
const T = {
  es: {
    lang: 'ES', langLabel: 'Español',
    nav: { platform:'Plataforma', features:'Características', aria:'ARIA IA', pricing:'Precios', faq:'FAQ', contact:'Contacto', whatsapp:'WhatsApp' },
    hero: {
      sub: 'Primera plataforma ABA multi-rol en LATAM · 100% en español · IA clínica integrada',
      note: 'Sin contratos · Setup en 24 horas · Soporte incluido',
      pause: 'Pausar', resume: 'Reanudar',
      slides: [
        { label:'Gestión ABA',    tag:'Primera plataforma ABA multi-rol en LATAM', title:'Gestión clínica ABA\nhecha para quienes\ntrabajan en campo' },
        { label:'ARIA IA',        tag:'ARIA — IA Clínica',                          title:'Reportes de sesión\ngenerados por IA\nen segundos' },
        { label:'Portal Familiar',tag:'Portal Familiar',                            title:'Los padres conectados\nal progreso de\nsu hijo en tiempo real' },
      ],
    },
    trust: ['Primera plataforma ABA en LATAM','Datos 100% seguros','IA clínica integrada','Multi-rol nativo','100% en español'],
    priTitle: '¿Cuál es la prioridad de tu centro ABA?',
    priTabs: ['Recomendado','Analistas','Especialistas','Familias'],
    showcaseTitle: 'Crea una operación clínica que funcione para tu centro',
    showcaseCols: [
      { title:'Herramientas de IA para el flujo clínico ABA', desc:'ARIA analiza datos de sesión, genera reportes y notas clínicas en segundos. Entrenada para ABA, no un chatbot genérico.' },
      { title:'Lanza tu operación en pocos días', desc:'Setup completo incluido el primer mes. Nosotros configuramos todo contigo. Sin técnicos ni experiencia en software.' },
      { title:'Multi-rol: analistas, especialistas y familias', desc:'Cada usuario ve exactamente lo que necesita. Permisos diferenciados, portal familiar nativo y comunicación integrada.' },
    ],
    whyTitle: '¿Por qué trabajar\ncon Vanty?',
    whySub: 'Primera plataforma ABA con IA, multi-rol y portal familiar en América Latina.',
    whyCards: [
      { icon:'🧠', title:'IA clínica para ABA, no un chatbot genérico', desc:'ARIA está entrenada en el flujo real de sesiones ABA. Genera reportes, notas y guías en segundos.' },
      { icon:'🔐', title:'Seguridad para que trabajes con tranquilidad', desc:'Tus datos de pacientes están protegidos con estándares clínicos. Nunca compartimos información.' },
      { icon:'🌎', title:'Más que software. Una plataforma para LATAM', desc:'100% en español, precios en soles, soporte local. Pensado desde Perú para toda América Latina.' },
      { icon:'👥', title:'Multi-rol real: analistas, especialistas y familias', desc:'Permisos diferenciados para cada rol. Cada quien ve exactamente lo que necesita.' },
      { icon:'📊', title:'Datos ABA visualizados automáticamente', desc:'Gráficos de dominio con alertas al alcanzar ≥80% por objetivo, sin trabajo manual extra.' },
      { icon:'⚡', title:'Tu plataforma activa en 24 horas', desc:'Activación rápida con setup completo incluido. Sin necesitar conocimientos técnicos.' },
    ],
    testimonialBrand: 'Vanty todos los días, por siempre',
    testimonialQuote: 'Antes tardaba horas escribiendo reportes. Ahora con ARIA lo hago en minutos y puedo enfocarme en lo que importa: mis pacientes.',
    testimonialModules: 'Módulos que usa',
    testimonialProducts: ['Registro de sesiones ABA','ARIA · IA clínica','Portal familiar nativo','Dashboard de analista'],
    testimonialName: 'Ana M.', testimonialRole: 'Analista ABA · Lima, Perú',
    compareLabel: 'Comparativa', compareTitle: 'Vanty vs. las alternativas',
    compareSub: 'La única plataforma ABA con IA, multi-rol y portal familiar en América Latina.',
    compareHeaders: ['Característica','Software internacional','Otras Apps','✦ Vanty'],
    compareRows: [
      ['Multi-rol: analista + especialista + familia','❌ Solo terapeuta','❌ No aplica','✅ Completo'],
      ['Módulos ABA específicos','⚠️ Parcial','❌ No','✅ Completo'],
      ['IA para reportes clínicos','❌ No','❌ No','✅ ARIA integrada'],
      ['Portal para familias','❌ No','❌ No','✅ Nativo'],
      ['100% en español','❌ Inglés','⚠️ Parcial','✅ Español'],
      ['Precio en soles (S/)','❌ USD alto','⚠️ Variable','✅ S/250/mes'],
    ],
    helpBrand: 'Vanty Guides', helpTeam: 'Equipo Vanty', helpRole: 'Soporte clínico ABA',
    helpTitle: 'Nos encanta ayudar.\nDe verdad.',
    helpDesc: '¿Aún no sabes bien lo que necesitas? Escríbenos. Es un placer ayudarte, incluso antes de ser cliente.',
    pricingLabel: 'Precios', pricingTitle: 'Planes claros.\nSin sorpresas.',
    pricingSub: 'Sin contratos anuales. Tu plataforma activa en 24 horas desde el primer pago.',
    pricingNote: '🔐 Activación en 24 hrs · Gestionado directamente con el equipo Vanty',
    plan1Label: 'Primer mes · Setup incluido',
    plan1Desc: 'Configuración completa, carga inicial de datos y capacitación de tu equipo incluida.',
    plan1Features: ['Setup completo del sistema','Carga inicial de pacientes','Capacitación del equipo','Todos los módulos ABA','IA ARIA activada','Portal familiar','Soporte prioritario'],
    plan2Badge: 'Mes 2 en adelante', plan2Label: 'Mensual · Sin permanencia',
    plan2Desc: 'Acceso a todos los módulos, IA ilimitada, actualizaciones automáticas y soporte incluido.',
    plan2Features: ['Todos los módulos activos','ARIA · IA clínica 24/7','Actualizaciones incluidas','Sin límite de usuarios','Portal familiar nativo','Reportes IA ilimitados','Soporte WhatsApp y email'],
    faqLabel: 'Preguntas frecuentes', faqTitle: '¿Tienes dudas?\nLas respondemos.',
    faqs: [
      { q:'¿Cuánto cuesta Vanty para mi centro?', a:'El primer mes es S/350, que incluye configuración completa, carga inicial y capacitación. Desde el segundo mes la suscripción es S/250 mensuales sin permanencia mínima.' },
      { q:'¿Necesito conocimientos técnicos para usarlo?', a:'No. Vanty está diseñado para analistas y terapeutas conductuales, no para técnicos. La interfaz es 100% en español y el setup lo hacemos nosotros contigo.' },
      { q:'¿Mis datos de pacientes están seguros?', a:'Sí. Tus datos son completamente tuyos, protegidos con estándares de seguridad clínica. Nunca compartimos información con terceros.' },
      { q:'¿Cuántos usuarios puedo agregar?', a:'Sin límite de usuarios internos. El plan mensual cubre todo tu equipo más los accesos familiares para cada paciente.' },
      { q:'¿Puedo migrar mis datos actuales de Excel?', a:'Sí. Vanty tiene importador nativo de Excel para porcentajes de objetivos ABA. Durante el primer mes te ayudamos con la migración completa.' },
      { q:'¿Cómo funciona el asistente ARIA?', a:'ARIA analiza datos de sesión y genera reportes, notas clínicas y resúmenes para padres. También detecta cuando un objetivo alcanza ≥80% y notifica en tiempo real.' },
    ],
    ctaReady: '¿LISTO PARA EMPEZAR?',
    ctaTitle: 'Ordenemos el trabajo\nclínico ABA en LATAM, juntos.',
    ctaSub: 'Un solo sistema para analistas, especialistas y familias.\nHecho en Perú para toda América Latina. 💜',
    ctaWa: 'WhatsApp',
    footerTagline: 'Conectando analistas, especialistas y familias. 100% en español, desde Perú para toda América Latina.',
    footerCols: [
      { title:'Plataforma', links:[{label:'Roles',href:'#roles'},{label:'Características',href:'#diferencial'},{label:'ARIA IA',href:'#aria'},{label:'Precios',href:'#precios'},{label:'FAQ',href:'#faq'}] },
      { title:'Soporte',    links:[{label:'WhatsApp',href:'wa'},{label:'Email',href:'mail'},{label:'Panel Admin',href:'/admin'},{label:'Documentación',href:'#'}] },
      { title:'Empresa',   links:[{label:'Acerca de Vanty',href:'#'},{label:'Blog',href:'#'},{label:'Privacidad',href:'#'},{label:'Términos',href:'#'}] },
    ],
    footerAllied: '🏆 Primer centro aliado', footerAlliedName: 'Jugando Aprendo · Lima, Perú 🇵🇪',
    footerCopy: '© 2026 Vanty · Primera plataforma ABA multi-rol en LATAM',
    footerMade: 'Hecho con 💜 desde Perú para toda América Latina',
    marqueeItems: ['Vanty es el futuro del ABA en LATAM','Gestiona tu centro ABA','IA clínica en segundos','Portal familiar nativo','Multi-rol real','100% en español','Hecho en Perú para LATAM','Setup en 24 horas'],
    tagline: 'evolución terapéutica inteligente',
  },
  en: {
    lang: 'EN', langLabel: 'English',
    nav: { platform:'Platform', features:'Features', aria:'ARIA AI', pricing:'Pricing', faq:'FAQ', contact:'Contact', whatsapp:'WhatsApp' },
    hero: {
      sub: 'First multi-role ABA platform in LATAM · 100% in Spanish · Integrated clinical AI',
      note: 'No contracts · Setup in 24 hours · Support included',
      pause: 'Pause', resume: 'Resume',
      slides: [
        { label:'ABA Management', tag:'First multi-role ABA platform in LATAM', title:'Clinical ABA management\nbuilt for those who\nwork in the field' },
        { label:'ARIA AI',        tag:'ARIA — Clinical AI',                      title:'Session reports\ngenerated by AI\nin seconds' },
        { label:'Family Portal',  tag:'Family Portal',                           title:'Parents connected\nto their child\'s\nprogress in real time' },
      ],
    },
    trust: ['First ABA platform in LATAM','100% secure data','Integrated clinical AI','Native multi-role','100% in Spanish'],
    priTitle: 'What is your ABA center\'s priority?',
    priTabs: ['Recommended','Analysts','Specialists','Families'],
    showcaseTitle: 'Build a clinical operation that works for your center',
    showcaseCols: [
      { title:'AI tools for the ABA clinical workflow', desc:'ARIA analyzes session data, generates reports and clinical notes in seconds. Trained for ABA, not a generic chatbot.' },
      { title:'Launch your operation in days', desc:'Full setup included in the first month. We configure everything with you. No technical knowledge needed.' },
      { title:'Multi-role: analysts, specialists and families', desc:'Each user sees exactly what they need. Differentiated permissions, native family portal and integrated communication.' },
    ],
    whyTitle: 'Why work\nwith Vanty?',
    whySub: 'First ABA platform with AI, multi-role and family portal in Latin America.',
    whyCards: [
      { icon:'🧠', title:'Clinical AI for ABA, not a generic chatbot', desc:'ARIA is trained on the real ABA session workflow. Generates reports, notes and guides in seconds.' },
      { icon:'🔐', title:'Security so you can work with peace of mind', desc:'Your patient data is protected with clinical security standards. We never share information.' },
      { icon:'🌎', title:'More than software. A platform for LATAM', desc:'100% in Spanish, local pricing, local support. Built from Peru for all of Latin America.' },
      { icon:'👥', title:'Real multi-role: analysts, specialists and families', desc:'Differentiated permissions for each role. Everyone sees exactly what they need.' },
      { icon:'📊', title:'ABA data visualized automatically', desc:'Domain charts with alerts when reaching ≥80% per objective, without extra manual work.' },
      { icon:'⚡', title:'Your platform active in 24 hours', desc:'Fast activation with full setup included. No technical knowledge required.' },
    ],
    testimonialBrand: 'Vanty every day, forever',
    testimonialQuote: 'I used to spend hours writing reports. Now with ARIA I do it in minutes and can focus on what matters: my patients.',
    testimonialModules: 'Modules she uses',
    testimonialProducts: ['ABA session recording','ARIA · Clinical AI','Native family portal','Analyst dashboard'],
    testimonialName: 'Ana M.', testimonialRole: 'ABA Analyst · Lima, Peru',
    compareLabel: 'Comparison', compareTitle: 'Vanty vs. the alternatives',
    compareSub: 'The only ABA platform with AI, multi-role and family portal in Latin America.',
    compareHeaders: ['Feature','International software','Appointment apps','✦ Vanty'],
    compareRows: [
      ['Multi-role: analyst + specialist + family','❌ Therapist only','❌ N/A','✅ Complete'],
      ['ABA-specific modules','⚠️ Partial','❌ No','✅ Complete'],
      ['AI for clinical reports','❌ No','❌ No','✅ ARIA integrated'],
      ['Family portal','❌ No','❌ No','✅ Native'],
      ['100% in Spanish','❌ English','⚠️ Partial','✅ Spanish'],
      ['Local currency pricing','❌ High USD','⚠️ Variable','✅ S/250/mo'],
    ],
    helpBrand: 'Vanty Guides', helpTeam: 'Vanty Team', helpRole: 'ABA Clinical Support',
    helpTitle: 'We love helping.\nReally.',
    helpDesc: 'Not sure what you need yet? Write to us. It\'s a pleasure to help, even before you become a client.',
    pricingLabel: 'Pricing', pricingTitle: 'Clear plans.\nNo surprises.',
    pricingSub: 'No annual contracts. Your platform active in 24 hours from the first payment.',
    pricingNote: '🔐 Activation in 24 hrs · Managed directly with the Vanty team',
    plan1Label: 'First month · Setup included',
    plan1Desc: 'Complete configuration, initial data load and team training included.',
    plan1Features: ['Full system setup','Initial patient load','Team training','All ABA modules','ARIA AI activated','Family portal','Priority support'],
    plan2Badge: 'Month 2 onwards', plan2Label: 'Monthly · No commitment',
    plan2Desc: 'Access to all modules, unlimited AI, automatic updates and support included.',
    plan2Features: ['All active modules','ARIA · Clinical AI 24/7','Updates included','Unlimited users','Native family portal','Unlimited AI reports','WhatsApp & email support'],
    faqLabel: 'Frequently asked questions', faqTitle: 'Have questions?\nWe\'ll answer them.',
    faqs: [
      { q:'How much does Vanty cost for my center?', a:'The first month is S/350, which includes full configuration, initial load and training. From the second month the subscription is S/250 per month with no minimum commitment.' },
      { q:'Do I need technical knowledge to use it?', a:'No. Vanty is designed for behavioral analysts and therapists, not technicians. The interface is 100% in Spanish and we do the setup with you.' },
      { q:'Is my patient data secure?', a:'Yes. Your data is completely yours, protected with clinical security standards. We never share information with third parties.' },
      { q:'How many users can I add?', a:'No limit on internal users. The monthly plan covers your entire team plus family access for each patient.' },
      { q:'Can I migrate my current Excel data?', a:'Yes. Vanty has a native Excel importer for ABA objective percentages. During the first month we help with the complete migration.' },
      { q:'How does the ARIA assistant work?', a:'ARIA analyzes session data and generates reports, clinical notes and summaries for parents. It also detects when an objective reaches ≥80% and notifies in real time.' },
    ],
    ctaReady: 'READY TO START?',
    ctaTitle: 'Let\'s organize ABA clinical\nwork in LATAM, together.',
    ctaSub: 'One system for analysts, specialists and families.\nBuilt in Peru for all of Latin America. 💜',
    ctaWa: 'WhatsApp',
    footerTagline: 'Connecting analysts, specialists and families. 100% in Spanish, from Peru for all of Latin America.',
    footerCols: [
      { title:'Platform', links:[{label:'Roles',href:'#roles'},{label:'Features',href:'#diferencial'},{label:'ARIA AI',href:'#aria'},{label:'Pricing',href:'#precios'},{label:'FAQ',href:'#faq'}] },
      { title:'Support',  links:[{label:'WhatsApp',href:'wa'},{label:'Email',href:'mail'},{label:'Admin Panel',href:'/admin'},{label:'Docs',href:'#'}] },
      { title:'Company', links:[{label:'About Vanty',href:'#'},{label:'Blog',href:'#'},{label:'Privacy',href:'#'},{label:'Terms',href:'#'}] },
    ],
    footerAllied: '🏆 First allied center', footerAlliedName: 'Jugando Aprendo · Lima, Peru 🇵🇪',
    footerCopy: '© 2026 Vanty · First multi-role ABA platform in LATAM',
    footerMade: 'Made with 💜 from Peru for all of Latin America',
    marqueeItems: ['Vanty is the future of ABA in LATAM','Manage your ABA center','Clinical AI in seconds','Native family portal','Real multi-role','100% in Spanish','Built in Peru for LATAM','Setup in 24 hours'],
    tagline: 'intelligent therapeutic evolution',
  },
  pt: {
    lang: 'PT', langLabel: 'Português',
    nav: { platform:'Plataforma', features:'Características', aria:'ARIA IA', pricing:'Preços', faq:'FAQ', contact:'Contato', whatsapp:'WhatsApp' },
    hero: {
      sub: 'Primeira plataforma ABA multi-papel na LATAM · 100% em espanhol · IA clínica integrada',
      note: 'Sem contratos · Configuração em 24 horas · Suporte incluído',
      pause: 'Pausar', resume: 'Retomar',
      slides: [
        { label:'Gestão ABA',      tag:'Primeira plataforma ABA multi-papel na LATAM', title:'Gestão clínica ABA\nfeita para quem\ntrabalha em campo' },
        { label:'ARIA IA',         tag:'ARIA — IA Clínica',                             title:'Relatórios de sessão\ngerados por IA\nem segundos' },
        { label:'Portal Familiar', tag:'Portal Familiar',                               title:'Pais conectados\nao progresso do\nseu filho em tempo real' },
      ],
    },
    trust: ['Primeira plataforma ABA na LATAM','Dados 100% seguros','IA clínica integrada','Multi-papel nativo','100% em espanhol'],
    priTitle: 'Qual é a prioridade do seu centro ABA?',
    priTabs: ['Recomendado','Analistas','Especialistas','Famílias'],
    showcaseTitle: 'Crie uma operação clínica que funcione para o seu centro',
    showcaseCols: [
      { title:'Ferramentas de IA para o fluxo clínico ABA', desc:'ARIA analisa dados de sessão, gera relatórios e notas clínicas em segundos. Treinada para ABA, não um chatbot genérico.' },
      { title:'Lance sua operação em poucos dias', desc:'Configuração completa incluída no primeiro mês. Nós configuramos tudo com você. Sem necessidade de técnicos.' },
      { title:'Multi-papel: analistas, especialistas e famílias', desc:'Cada usuário vê exatamente o que precisa. Permissões diferenciadas, portal familiar nativo e comunicação integrada.' },
    ],
    whyTitle: 'Por que trabalhar\ncom a Vanty?',
    whySub: 'Primeira plataforma ABA com IA, multi-papel e portal familiar na América Latina.',
    whyCards: [
      { icon:'🧠', title:'IA clínica para ABA, não um chatbot genérico', desc:'ARIA é treinada no fluxo real de sessões ABA. Gera relatórios, notas e guias em segundos.' },
      { icon:'🔐', title:'Segurança para você trabalhar com tranquilidade', desc:'Seus dados de pacientes são protegidos com padrões de segurança clínica. Nunca compartilhamos informações.' },
      { icon:'🌎', title:'Mais que software. Uma plataforma para a LATAM', desc:'100% em espanhol, preços locais, suporte local. Pensado desde o Peru para toda a América Latina.' },
      { icon:'👥', title:'Multi-papel real: analistas, especialistas e famílias', desc:'Permissões diferenciadas para cada papel. Cada um vê exatamente o que precisa.' },
      { icon:'📊', title:'Dados ABA visualizados automaticamente', desc:'Gráficos de domínio com alertas ao atingir ≥80% por objetivo, sem trabalho manual extra.' },
      { icon:'⚡', title:'Sua plataforma ativa em 24 horas', desc:'Ativação rápida com configuração completa incluída. Sem necessidade de conhecimentos técnicos.' },
    ],
    testimonialBrand: 'Vanty todos os dias, para sempre',
    testimonialQuote: 'Antes eu levava horas escrevendo relatórios. Agora com ARIA faço em minutos e posso me concentrar no que importa: meus pacientes.',
    testimonialModules: 'Módulos que usa',
    testimonialProducts: ['Registro de sessões ABA','ARIA · IA clínica','Portal familiar nativo','Dashboard de analista'],
    testimonialName: 'Ana M.', testimonialRole: 'Analista ABA · Lima, Peru',
    compareLabel: 'Comparativo', compareTitle: 'Vanty vs. as alternativas',
    compareSub: 'A única plataforma ABA com IA, multi-papel e portal familiar na América Latina.',
    compareHeaders: ['Característica','Software internacional','Apps de consultas','✦ Vanty'],
    compareRows: [
      ['Multi-papel: analista + especialista + família','❌ Só terapeuta','❌ N/A','✅ Completo'],
      ['Módulos ABA específicos','⚠️ Parcial','❌ Não','✅ Completo'],
      ['IA para relatórios clínicos','❌ Não','❌ Não','✅ ARIA integrada'],
      ['Portal para famílias','❌ Não','❌ Não','✅ Nativo'],
      ['100% em espanhol','❌ Inglês','⚠️ Parcial','✅ Espanhol'],
      ['Preço em moeda local','❌ USD alto','⚠️ Variável','✅ S/250/mês'],
    ],
    helpBrand: 'Vanty Guides', helpTeam: 'Equipe Vanty', helpRole: 'Suporte clínico ABA',
    helpTitle: 'Adoramos ajudar.\nDe verdade.',
    helpDesc: 'Ainda não sabe bem o que precisa? Escreva para nós. É um prazer ajudar, mesmo antes de ser cliente.',
    pricingLabel: 'Preços', pricingTitle: 'Planos claros.\nSem surpresas.',
    pricingSub: 'Sem contratos anuais. Sua plataforma ativa em 24 horas a partir do primeiro pagamento.',
    pricingNote: '🔐 Ativação em 24 hrs · Gerenciado diretamente com a equipe Vanty',
    plan1Label: 'Primeiro mês · Configuração incluída',
    plan1Desc: 'Configuração completa, carga inicial de dados e treinamento da sua equipe incluídos.',
    plan1Features: ['Configuração completa do sistema','Carga inicial de pacientes','Treinamento da equipe','Todos os módulos ABA','IA ARIA ativada','Portal familiar','Suporte prioritário'],
    plan2Badge: 'Mês 2 em diante', plan2Label: 'Mensal · Sem fidelidade',
    plan2Desc: 'Acesso a todos os módulos, IA ilimitada, atualizações automáticas e suporte incluído.',
    plan2Features: ['Todos os módulos ativos','ARIA · IA clínica 24/7','Atualizações incluídas','Sem limite de usuários','Portal familiar nativo','Relatórios IA ilimitados','Suporte WhatsApp e e-mail'],
    faqLabel: 'Perguntas frequentes', faqTitle: 'Tem dúvidas?\nNós respondemos.',
    faqs: [
      { q:'Quanto custa a Vanty para o meu centro?', a:'O primeiro mês é S/350, que inclui configuração completa, carga inicial e treinamento. A partir do segundo mês a assinatura é S/250 mensais sem fidelidade mínima.' },
      { q:'Preciso de conhecimentos técnicos para usar?', a:'Não. A Vanty foi projetada para analistas e terapeutas comportamentais, não para técnicos. A interface é 100% em espanhol e fazemos a configuração com você.' },
      { q:'Meus dados de pacientes estão seguros?', a:'Sim. Seus dados são completamente seus, protegidos com padrões de segurança clínica. Nunca compartilhamos informações com terceiros.' },
      { q:'Quantos usuários posso adicionar?', a:'Sem limite de usuários internos. O plano mensal cobre toda a sua equipe mais os acessos familiares para cada paciente.' },
      { q:'Posso migrar meus dados atuais do Excel?', a:'Sim. A Vanty tem importador nativo do Excel para percentuais de objetivos ABA. Durante o primeiro mês ajudamos com a migração completa.' },
      { q:'Como funciona o assistente ARIA?', a:'ARIA analisa dados de sessão e gera relatórios, notas clínicas e resumos para os pais. Também detecta quando um objetivo atinge ≥80% e notifica em tempo real.' },
    ],
    ctaReady: 'PRONTO PARA COMEÇAR?',
    ctaTitle: 'Vamos organizar o trabalho\nclínico ABA na LATAM, juntos.',
    ctaSub: 'Um só sistema para analistas, especialistas e famílias.\nFeito no Peru para toda a América Latina. 💜',
    ctaWa: 'WhatsApp',
    footerTagline: 'Conectando analistas, especialistas e famílias. 100% em espanhol, desde o Peru para toda a América Latina.',
    footerCols: [
      { title:'Plataforma', links:[{label:'Papéis',href:'#roles'},{label:'Características',href:'#diferencial'},{label:'ARIA IA',href:'#aria'},{label:'Preços',href:'#precios'},{label:'FAQ',href:'#faq'}] },
      { title:'Suporte',    links:[{label:'WhatsApp',href:'wa'},{label:'E-mail',href:'mail'},{label:'Painel Admin',href:'/admin'},{label:'Documentação',href:'#'}] },
      { title:'Empresa',   links:[{label:'Sobre a Vanty',href:'#'},{label:'Blog',href:'#'},{label:'Privacidade',href:'#'},{label:'Termos',href:'#'}] },
    ],
    footerAllied: '🏆 Primeiro centro parceiro', footerAlliedName: 'Jugando Aprendo · Lima, Peru 🇵🇪',
    footerCopy: '© 2026 Vanty · Primeira plataforma ABA multi-papel na LATAM',
    footerMade: 'Feito com 💜 desde o Peru para toda a América Latina',
    marqueeItems: ['Vanty é o futuro do ABA na LATAM','Gerencie seu centro ABA','IA clínica em segundos','Portal familiar nativo','Multi-papel real','100% em espanhol','Feito no Peru para LATAM','Configuração em 24 horas'],
    tagline: 'evolução terapêutica inteligente',
  },
  fr: {
    lang: 'FR', langLabel: 'Français',
    nav: { platform:'Plateforme', features:'Fonctionnalités', aria:'ARIA IA', pricing:'Tarifs', faq:'FAQ', contact:'Contact', whatsapp:'WhatsApp' },
    hero: {
      sub: 'Première plateforme ABA multi-rôles en LATAM · 100% en espagnol · IA clinique intégrée',
      note: 'Sans contrats · Démarrage en 24 heures · Support inclus',
      pause: 'Pause', resume: 'Reprendre',
      slides: [
        { label:'Gestion ABA',    tag:'Première plateforme ABA multi-rôles en LATAM', title:'Gestion clinique ABA\nconçue pour ceux qui\ntravaillent sur le terrain' },
        { label:'ARIA IA',        tag:'ARIA — IA Clinique',                            title:'Rapports de session\ngénérés par IA\nen quelques secondes' },
        { label:'Portail Famille',tag:'Portail Famille',                               title:'Les parents connectés\naux progrès de\nleur enfant en temps réel' },
      ],
    },
    trust: ['Première plateforme ABA en LATAM','Données 100% sécurisées','IA clinique intégrée','Multi-rôles natif','100% en espagnol'],
    priTitle: 'Quelle est la priorité de votre centre ABA ?',
    priTabs: ['Recommandé','Analystes','Spécialistes','Familles'],
    showcaseTitle: 'Créez une opération clinique qui fonctionne pour votre centre',
    showcaseCols: [
      { title:'Outils IA pour le flux clinique ABA', desc:'ARIA analyse les données de session, génère des rapports et des notes cliniques en quelques secondes. Formée pour ABA, pas un chatbot générique.' },
      { title:'Lancez votre opération en quelques jours', desc:'Configuration complète incluse le premier mois. Nous configurons tout avec vous. Sans techniciens ni expérience logicielle.' },
      { title:'Multi-rôles : analystes, spécialistes et familles', desc:'Chaque utilisateur voit exactement ce dont il a besoin. Autorisations différenciées, portail familial natif et communication intégrée.' },
    ],
    whyTitle: 'Pourquoi travailler\navec Vanty ?',
    whySub: 'Première plateforme ABA avec IA, multi-rôles et portail familial en Amérique Latine.',
    whyCards: [
      { icon:'🧠', title:'IA clinique pour ABA, pas un chatbot générique', desc:'ARIA est formée sur le flux réel des sessions ABA. Génère des rapports, notes et guides en quelques secondes.' },
      { icon:'🔐', title:'Sécurité pour travailler en toute tranquillité', desc:'Vos données patients sont protégées par des normes de sécurité clinique. Nous ne partageons jamais d\'informations.' },
      { icon:'🌎', title:'Plus qu\'un logiciel. Une plateforme pour LATAM', desc:'100% en espagnol, tarifs locaux, support local. Conçu depuis le Pérou pour toute l\'Amérique Latine.' },
      { icon:'👥', title:'Multi-rôles réel : analystes, spécialistes et familles', desc:'Autorisations différenciées pour chaque rôle. Chacun voit exactement ce dont il a besoin.' },
      { icon:'📊', title:'Données ABA visualisées automatiquement', desc:'Graphiques de domaine avec alertes à ≥80% par objectif, sans travail manuel supplémentaire.' },
      { icon:'⚡', title:'Votre plateforme active en 24 heures', desc:'Activation rapide avec configuration complète incluse. Sans connaissances techniques requises.' },
    ],
    testimonialBrand: 'Vanty chaque jour, pour toujours',
    testimonialQuote: 'Avant je passais des heures à écrire des rapports. Maintenant avec ARIA je le fais en minutes et je peux me concentrer sur ce qui compte : mes patients.',
    testimonialModules: 'Modules utilisés',
    testimonialProducts: ['Enregistrement de sessions ABA','ARIA · IA clinique','Portail familial natif','Tableau de bord analyste'],
    testimonialName: 'Ana M.', testimonialRole: 'Analyste ABA · Lima, Pérou',
    compareLabel: 'Comparaison', compareTitle: 'Vanty vs. les alternatives',
    compareSub: 'La seule plateforme ABA avec IA, multi-rôles et portail familial en Amérique Latine.',
    compareHeaders: ['Fonctionnalité','Logiciels internationaux','Apps de rendez-vous','✦ Vanty'],
    compareRows: [
      ['Multi-rôles : analyste + spécialiste + famille','❌ Thérapeute seulement','❌ N/A','✅ Complet'],
      ['Modules ABA spécifiques','⚠️ Partiel','❌ Non','✅ Complet'],
      ['IA pour rapports cliniques','❌ Non','❌ Non','✅ ARIA intégrée'],
      ['Portail pour familles','❌ Non','❌ Non','✅ Natif'],
      ['100% en espagnol','❌ Anglais','⚠️ Partiel','✅ Espagnol'],
      ['Prix en monnaie locale','❌ USD élevé','⚠️ Variable','✅ S/250/mois'],
    ],
    helpBrand: 'Vanty Guides', helpTeam: 'Équipe Vanty', helpRole: 'Support clinique ABA',
    helpTitle: 'Nous adorons aider.\nVraiment.',
    helpDesc: 'Vous ne savez pas encore ce dont vous avez besoin ? Écrivez-nous. C\'est un plaisir d\'aider, même avant d\'être client.',
    pricingLabel: 'Tarifs', pricingTitle: 'Des forfaits clairs.\nSans surprises.',
    pricingSub: 'Sans contrats annuels. Votre plateforme active en 24 heures dès le premier paiement.',
    pricingNote: '🔐 Activation en 24 hrs · Géré directement avec l\'équipe Vanty',
    plan1Label: 'Premier mois · Configuration incluse',
    plan1Desc: 'Configuration complète, chargement initial des données et formation de votre équipe inclus.',
    plan1Features: ['Configuration complète du système','Chargement initial des patients','Formation de l\'équipe','Tous les modules ABA','IA ARIA activée','Portail familial','Support prioritaire'],
    plan2Badge: 'Mois 2 et suivants', plan2Label: 'Mensuel · Sans engagement',
    plan2Desc: 'Accès à tous les modules, IA illimitée, mises à jour automatiques et support inclus.',
    plan2Features: ['Tous les modules actifs','ARIA · IA clinique 24/7','Mises à jour incluses','Utilisateurs illimités','Portail familial natif','Rapports IA illimités','Support WhatsApp et e-mail'],
    faqLabel: 'Questions fréquentes', faqTitle: 'Des questions ?\nNous y répondons.',
    faqs: [
      { q:'Combien coûte Vanty pour mon centre ?', a:'Le premier mois est S/350, qui comprend la configuration complète, le chargement initial et la formation. À partir du deuxième mois l\'abonnement est S/250 par mois sans engagement minimum.' },
      { q:'Ai-je besoin de connaissances techniques pour l\'utiliser ?', a:'Non. Vanty est conçu pour les analystes et thérapeutes comportementaux, pas pour les techniciens. L\'interface est 100% en espagnol et nous faisons la configuration avec vous.' },
      { q:'Mes données patients sont-elles sécurisées ?', a:'Oui. Vos données vous appartiennent entièrement, protégées par des normes de sécurité clinique. Nous ne partageons jamais d\'informations avec des tiers.' },
      { q:'Combien d\'utilisateurs puis-je ajouter ?', a:'Pas de limite d\'utilisateurs internes. Le forfait mensuel couvre toute votre équipe plus les accès familiaux pour chaque patient.' },
      { q:'Puis-je migrer mes données Excel actuelles ?', a:'Oui. Vanty dispose d\'un importateur Excel natif pour les pourcentages d\'objectifs ABA. Pendant le premier mois, nous aidons avec la migration complète.' },
      { q:'Comment fonctionne l\'assistant ARIA ?', a:'ARIA analyse les données de session et génère des rapports, des notes cliniques et des résumés pour les parents. Elle détecte aussi quand un objectif atteint ≥80% et notifie en temps réel.' },
    ],
    ctaReady: 'PRÊT À COMMENCER ?',
    ctaTitle: 'Organisons le travail\nclinique ABA en LATAM, ensemble.',
    ctaSub: 'Un seul système pour analystes, spécialistes et familles.\nFait au Pérou pour toute l\'Amérique Latine. 💜',
    ctaWa: 'WhatsApp',
    footerTagline: 'Connectant analystes, spécialistes et familles. 100% en espagnol, depuis le Pérou pour toute l\'Amérique Latine.',
    footerCols: [
      { title:'Plateforme', links:[{label:'Rôles',href:'#roles'},{label:'Fonctionnalités',href:'#diferencial'},{label:'ARIA IA',href:'#aria'},{label:'Tarifs',href:'#precios'},{label:'FAQ',href:'#faq'}] },
      { title:'Support',    links:[{label:'WhatsApp',href:'wa'},{label:'E-mail',href:'mail'},{label:'Panneau Admin',href:'/admin'},{label:'Documentation',href:'#'}] },
      { title:'Entreprise', links:[{label:'À propos de Vanty',href:'#'},{label:'Blog',href:'#'},{label:'Confidentialité',href:'#'},{label:'Conditions',href:'#'}] },
    ],
    footerAllied: '🏆 Premier centre partenaire', footerAlliedName: 'Jugando Aprendo · Lima, Pérou 🇵🇪',
    footerCopy: '© 2026 Vanty · Première plateforme ABA multi-rôles en LATAM',
    footerMade: 'Fait avec 💜 depuis le Pérou pour toute l\'Amérique Latine',
    marqueeItems: ['Vanty est le futur du ABA en LATAM','Gérez votre centre ABA','IA clinique en secondes','Portail familial natif','Multi-rôles réel','100% en espagnol','Fait au Pérou pour LATAM','Démarrage en 24 heures'],
    tagline: 'évolution thérapeutique intelligente',
  },
}

type LangKey = 'es'|'en'|'pt'|'fr'
const LANGS: LangKey[] = ['es','en','pt','fr']
const FLAG: Record<LangKey,string> = { es:'🇵🇪', en:'🇺🇸', pt:'🇧🇷', fr:'🇫🇷' }

// ════════════════════════════════════════════════
//  PRICING SECTION — ANIMATED
// ════════════════════════════════════════════════
function PricingSection({ t }: { t: typeof T['es'] }) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.15 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return (
    <section className="pricing-section" id="precios" ref={ref}>
      <style>{`
        @keyframes priceCardIn { from{opacity:0;transform:translateY(28px) scale(.97)} to{opacity:1;transform:translateY(0) scale(1)} }
        @keyframes priceNumCount { from{opacity:0;transform:scale(.7)} to{opacity:1;transform:scale(1)} }
        @keyframes shimmerPrice { 0%{background-position:-200% center} 100%{background-position:200% center} }
        .price-card-anim { opacity:0; }
        .price-card-anim.in { animation:priceCardIn .65s cubic-bezier(0.22,1,0.36,1) both; }
        .price-num-anim { opacity:0; }
        .price-num-anim.in { animation:priceNumCount .6s cubic-bezier(0.34,1.56,0.64,1) both; }
        .p-card { transition:all .25s cubic-bezier(0.22,1,0.36,1); }
        .p-card:hover { transform:translateY(-6px); box-shadow:0 20px 50px rgba(0,0,0,.12); }
        .p-card.featured:hover { box-shadow:0 20px 60px rgba(29,111,66,.25); }
        .p-list li { opacity:0; transform:translateX(-8px); }
        .p-list li.in { opacity:1; transform:translateX(0); transition:all .35s; }
        .price-title-anim { opacity:0; }
        .price-title-anim.in { animation:priceCardIn .6s .05s both; }
      `}</style>
      <div className="section-inner">
        <div className={`price-title-anim${visible?' in':''}`} style={{textAlign:'center',maxWidth:520,margin:'0 auto'}}>
          <div className="section-label"><Star size={11}/> {t.pricingLabel}</div>
          <h2 className="section-h2" style={{whiteSpace:'pre-line'}}>{t.pricingTitle}</h2>
          <p className="section-sub" style={{marginTop:12}}>{t.pricingSub}</p>
        </div>
        <div className="pricing-grid">
          {/* Card 1 */}
          <div className={`p-card price-card-anim${visible?' in':''}`} style={visible?{animationDelay:'.15s'}:{}}>
            <div className="p-label">{t.plan1Label}</div>
            <div className="p-amt">
              <span className="p-cur">S/</span>
              <span className={`p-num price-num-anim${visible?' in':''}`} style={visible?{animationDelay:'.3s'}:{}}>350</span>
            </div>
            <p className="p-desc">{t.plan1Desc}</p>
            <ul className="p-list">
              {t.plan1Features.map((f,i)=>(
                <li key={i} className={visible?'in':''} style={visible?{transitionDelay:`${0.4+i*0.07}s`}:{}}>
                  <Check size={15} color="#16A34A" style={{flexShrink:0}}/>{f}
                </li>
              ))}
            </ul>
          </div>
          {/* Card 2 — featured */}
          <div className={`p-card featured price-card-anim${visible?' in':''}`} style={visible?{animationDelay:'.28s'}:{}}>
            <div className="p-badge">{t.plan2Badge}</div>
            <div className="p-label" style={{marginTop:16}}>{t.plan2Label}</div>
            <div className="p-amt">
              <span className="p-cur">S/</span>
              <span className={`p-num price-num-anim${visible?' in':''}`} style={visible?{animationDelay:'.42s'}:{}}>250</span>
              <span className="p-per">/mes</span>
            </div>
            <p className="p-desc">{t.plan2Desc}</p>
            <ul className="p-list">
              {t.plan2Features.map((f,i)=>(
                <li key={i} className={visible?'in':''} style={visible?{transitionDelay:`${0.5+i*0.07}s`}:{}}>
                  <Check size={15} color="#16A34A" style={{flexShrink:0}}/>{f}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p style={{textAlign:'center',fontSize:13,color:'#9ca3af',marginTop:24,opacity:visible?1:0,transition:'opacity .8s .8s'}}>{t.pricingNote}</p>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════
//  FAQ SECTION — ANIMATED
// ════════════════════════════════════════════════
function FaqSection({ t, faq, setFaq }: { t: typeof T['es']; faq: number|null; setFaq: (v:number|null)=>void }) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.1 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return (
    <section className="faq-section" id="faq" ref={ref}>
      <style>{`
        @keyframes faqSlideIn { from{opacity:0;transform:translateY(16px)} to{opacity:1;transform:translateY(0)} }
        @keyframes faqBodyOpen { from{opacity:0;max-height:0;transform:translateY(-8px)} to{opacity:1;max-height:200px;transform:translateY(0)} }
        .faq-item-anim { opacity:0; }
        .faq-item-anim.in { animation:faqSlideIn .5s cubic-bezier(0.22,1,0.36,1) both; }
        .faq-body-animated { animation:faqBodyOpen .3s cubic-bezier(0.22,1,0.36,1) both; overflow:hidden; }
        .faq-item { transition:border-color .2s, box-shadow .2s; }
        .faq-item:hover:not(.open) { border-color:#d1fae5; box-shadow:0 4px 16px rgba(29,111,66,.06); }
        .faq-head { transition:background .2s; }
        .faq-item:hover .faq-head { background:rgba(240,253,244,.5); }
        .faq-item.open .faq-head { background:#f0fdf4; }
      `}</style>
      <div className="section-inner">
        <div style={{textAlign:'center',maxWidth:520,margin:'0 auto',opacity:visible?1:0,transition:'opacity .6s',transform:visible?'none':'translateY(16px)'}}>
          <div className="section-label"><MessageSquare size={11}/> {t.faqLabel}</div>
          <h2 className="section-h2" style={{whiteSpace:'pre-line'}}>{t.faqTitle}</h2>
        </div>
        <div className="faq-list">
          {t.faqs.map((f,i)=>(
            <div key={i}
              className={`faq-item${faq===i?' open':''} faq-item-anim${visible?' in':''}`}
              style={visible?{animationDelay:`${0.1+i*0.07}s`}:{}}
              onClick={()=>setFaq(faq===i?null:i)}>
              <div className="faq-head">
                <span className="faq-q">{f.q}</span>
                <ChevronDown size={18} className="faq-chev"/>
              </div>
              {faq===i && <div className="faq-body faq-body-animated">{f.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════
//  TESTIMONIAL SECTION — ANIMATED
// ════════════════════════════════════════════════
function TestimonialSection({ t }: { t: typeof T['es'] }) {
  const ref = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.2 })
    obs.observe(el); return () => obs.disconnect()
  }, [])
  return (
    <div className="testimonial-section" ref={ref}>
      <style>{`
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
      `}</style>
      <div className={`testimonial-img-wrap testi-img-anim${visible?' in':''}`} style={{position:'relative',overflow:'hidden',minHeight:'420px'}}>
        <img src="/images/testimonial.png" alt={t.testimonialName} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center top'}}/>
        <div className="testimonial-name">
          {t.testimonialName}<br/>
          <span className="testimonial-role">{t.testimonialRole}</span>
        </div>
      </div>
      <div className={`testimonial-body testi-body-anim${visible?' in':''}`}>
        <div className="testimonial-brand"><div className="testimonial-brand-dot testi-brand-dot-pulse"/>{t.testimonialBrand}</div>
        <div className={`testimonial-quote testi-quote-anim${visible?' in':''}`}>{t.testimonialQuote}</div>
        <div>
          <div className="testimonial-products-label">{t.testimonialModules}</div>
          {t.testimonialProducts.map((p,i)=>(
            <div key={i} className={`testimonial-product-item testi-product-anim${visible?' in':''}`}
              style={visible?{transitionDelay:`${0.5+i*0.1}s`}:{}}>
              <CheckCircle size={16}/> {p}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// ════════════════════════════════════════════════
//  TRUSTED CENTERS SECTION
// ════════════════════════════════════════════════
function TrustedCentersSection({ t }: { t: typeof T['es'] }) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.2 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  const label = t.lang==='EN'?'Betting on the future of ABA':t.lang==='PT'?'Apostando no futuro do ABA':t.lang==='FR'?'Parier sur l\'avenir de l\'ABA':'Apostando al avance del ABA'
  const sub   = t.lang==='EN'?'Centers that chose to lead the change in Latin America':t.lang==='PT'?'Centros que escolheram liderar a mudança na América Latina':t.lang==='FR'?'Des centres qui ont choisi de mener le changement en Amérique latine':'Centros que eligieron liderar el cambio en América Latina'
  const since = t.lang==='EN'?'Pioneer center · Since 2026':t.lang==='PT'?'Centro pioneiro · Desde 2026':t.lang==='FR'?'Centre pionnier · Depuis 2026':'Centro pionero · Desde 2026'
  const badge = t.lang==='EN'?'PIONEER PARTNER':t.lang==='PT'?'PARCEIRO PIONEIRO':t.lang==='FR'?'PARTENAIRE PIONNIER':'ALIADO PIONERO'
  const soon  = t.lang==='EN'?'More centers joining the movement':t.lang==='PT'?'Mais centros se juntando ao movimento':t.lang==='FR'?'Plus de centres rejoignant le mouvement':'Más centros uniéndose al movimiento'

  return (
    <section ref={ref} id="aliados" style={{padding:'96px clamp(20px,4vw,48px) 80px',background:'#fff',overflow:'hidden',position:'relative'}}>
      <style>{`
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
          background:#f0fdf4; border:1px solid #bbf7d0;
          font-size:10.5px; font-weight:800; color:#16a34a;
          font-family:'Poppins',sans-serif; letter-spacing:.07em;
        }
        .tc2-badge-dot { width:5px; height:5px; border-radius:50%; background:#22c55e; animation:pulse2 1.8s infinite; }

        .tc2-name  { font-family:'Poppins',sans-serif; font-size:24px; font-weight:800; color:#111; text-align:center; letter-spacing:-.02em; }
        .tc2-loc   { font-size:13px; color:#9ca3af; text-align:center; }
        .tc2-since { font-size:12px; color:#16a34a; font-weight:600; text-align:center; }

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
      `}</style>

      {/* Dot grid bg */}
      <div className="tc2-dots-bg"/>
      <div className="tc2-accent-l"/>
      <div className="tc2-accent-r"/>

      <div style={{maxWidth:900,margin:'0 auto',position:'relative',zIndex:2}}>

        {/* Header */}
        <div style={{textAlign:'center',marginBottom:56}}>
          <div className={`tc2-label${visible?' in':''}`} style={{display:'inline-flex',alignItems:'center',gap:8,padding:'5px 14px',borderRadius:99,background:'#f0fdf4',border:'1px solid #bbf7d0',fontSize:11,fontWeight:700,color:'#16a34a',letterSpacing:'.07em',textTransform:'uppercase',marginBottom:18,fontFamily:"'Poppins',sans-serif"}}>
            <Heart size={10} fill="#16a34a" color="#16a34a"/> {t.lang==='EN'?'Our community':t.lang==='PT'?'Nossa comunidade':t.lang==='FR'?'Notre communauté':'Nuestra comunidad'}
          </div>
          <h2 className={`tc2-title${visible?' in':''}`}
            style={{fontFamily:"'Poppins',sans-serif",fontSize:'clamp(28px,4vw,48px)',fontWeight:800,color:'#111',letterSpacing:'-.03em',lineHeight:1.1,marginBottom:14}}>
            {label}
          </h2>
          <p className={`tc2-sub${visible?' in':''}`}
            style={{fontSize:16,color:'#6b7280',lineHeight:1.75,maxWidth:480,margin:'0 auto'}}>
            {sub}
          </p>
        </div>

        {/* Center — open layout, no box */}
        <div className={`tc2-center tc2-center-wrap${visible?' in':''}`}>

          {/* Floating logo with spinning ring */}
          <div className="tc2-logo-ring">
            {/* Spinning dashed ring */}
            <svg className="tc2-logo-ring-svg" width="196" height="196" viewBox="0 0 196 196">
              <circle cx="98" cy="98" r="90" fill="none" stroke="#1D6F42" strokeWidth="1.5" strokeDasharray="6 10" strokeLinecap="round"/>
            </svg>
            <div className="tc2-logo-img">
              <img src="/images/aprendo.png" alt="Jugando Aprendo"/>
            </div>
          </div>

          {/* Badge */}
          <div className="tc2-badge">
            <span className="tc2-badge-dot"/> {badge}
          </div>

          {/* Info */}
          <div className="tc2-name">Jugando Aprendo</div>
          <div className="tc2-loc">Lima, Perú 🇵🇪</div>
          <div className="tc2-divline"/>
          <div className="tc2-since">{since}</div>
        </div>

        {/* Stats */}
        <div className={`tc2-stats tc2-stats-row${visible?' in':''}`}>
          {[
            {n:'1',  l:t.lang==='EN'?'Active center':t.lang==='PT'?'Centro ativo':t.lang==='FR'?'Centre actif':'Centro activo'},
            {n:'∞',  l:t.lang==='EN'?'Potential':t.lang==='PT'?'Potencial':t.lang==='FR'?'Potentiel':'Potencial'},
            {n:'24h',l:t.lang==='EN'?'Setup time':t.lang==='PT'?'Tempo de setup':t.lang==='FR'?'Temps de setup':'Tiempo de setup'},
          ].map((s,i)=>(
            <div key={i} className="tc2-stat-cell">
              <div className="tc2-stat-n">{s.n}</div>
              <div className="tc2-stat-l">{s.l}</div>
            </div>
          ))}
        </div>

        {/* Coming soon */}
        <div className={`tc2-soon tc2-soon-row${visible?' in':''}`}>
          <div className="tc2-soon-chip">?</div>
          <span className="tc2-soon-text">{soon}</span>
          <div className="tc2-soon-chip">?</div>
        </div>

      </div>
    </section>
  )
}


// ════════════════════════════════════════════════
//  COMPARE SECTION — ANIMATED
// ════════════════════════════════════════════════
function CompareSection({ t }: { t: typeof T['es'] }) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [hovRow, setHovRow] = useState<number|null>(null)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect() } }, { threshold: 0.15 })
    obs.observe(el); return () => obs.disconnect()
  }, [])

  return (
    <section className="compare-section" ref={ref}>
      <style>{`
        @keyframes cmpFadeIn { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
        .cmp-title-anim { opacity:0; }
        .cmp-title-anim.in { animation:cmpFadeIn .6s .05s cubic-bezier(0.22,1,0.36,1) both; }
        .cmp-table-anim { opacity:0; }
        .cmp-table-anim.in { animation:cmpFadeIn .7s .2s cubic-bezier(0.22,1,0.36,1) both; }
        .cmp-row-hover { transition:background .15s; }
        .cmp-row-hover:hover td { background:#f0fdf4 !important; }
        .cmp-row-hover:hover td:last-child { background:#e6f9ee !important; }
        .cmp-cell-anim { opacity:0; transform:scale(.85); }
        .cmp-cell-anim.in { opacity:1; transform:scale(1); transition:all .35s cubic-bezier(0.34,1.56,0.64,1); }
      `}</style>
      <div className="section-inner">
        <div className={`cmp-title-anim${visible?' in':''}`} style={{textAlign:'center',maxWidth:560,margin:'0 auto'}}>
          <div className="section-label"><Star size={11}/> {t.compareLabel}</div>
          <h2 className="section-h2">{t.compareTitle}</h2>
          <p className="section-sub" style={{marginTop:10}}>{t.compareSub}</p>
        </div>
        <div className={`cmp-wrap cmp-table-anim${visible?' in':''}`}>
          <table className="cmp-table">
            <thead>
              <tr>{t.compareHeaders.map((h,i)=><th key={i} className={i===1||i===2?'hide-xs':''}>{h}</th>)}</tr>
            </thead>
            <tbody>
              {t.compareRows.map((row,i)=>(
                <tr key={i} className="cmp-row-hover"
                  onMouseEnter={()=>setHovRow(i)}
                  onMouseLeave={()=>setHovRow(null)}>
                  <td style={{fontWeight:hovRow===i?700:600,transition:'font-weight .15s'}}>{row[0]}</td>
                  <td className={`hide-xs ${row[1].startsWith('❌')?'t-no':row[1].startsWith('⚠️')?'t-par':'t-yes'}`}>{row[1]}</td>
                  <td className={`hide-xs ${row[2].startsWith('❌')?'t-no':row[2].startsWith('⚠️')?'t-par':'t-yes'}`}>{row[2]}</td>
                  <td className={`t-yes cmp-cell-anim${visible?' in':''}`}
                    style={visible?{transitionDelay:`${0.3+i*0.06}s`}:{}}>{row[3]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════
//  WHY SECTION — ANIMATED
// ════════════════════════════════════════════════
function WhySection({ t }: { t: typeof T['es'] }) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number|null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.15 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="why-section" id="diferencial" ref={ref}>
      <style>{`
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
          border-color:#d1fae5 !important;
          box-shadow:0 12px 40px rgba(29,111,66,.12) !important;
          transform:translateY(-5px) scale(1.01) !important;
        }
        .why-icon-wrap {
          height:80px; border-radius:12px; display:flex; align-items:center;
          justify-content:center; font-size:40px; background:#fff;
          border:1px solid #f3f4f6; margin-top:24px;
          transition: background .3s, border-color .3s;
        }
        .why-card-animated:hover .why-icon-wrap {
          background:#f0fdf4;
          border-color:#bbf7d0;
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
      `}</style>
      <div className="section-inner">
        <h2 className={`why-h2 why-title-anim${visible?' in':''}`}>{t.whyTitle}</h2>
        <p className={`why-sub why-sub-anim${visible?' in':''}`}>{t.whySub}</p>
        <div className="why-grid">
          {t.whyCards.map((c, i) => (
            <div
              key={i}
              className={`why-card why-card-animated${visible?' in':''}`}
              style={visible ? { animationDelay:`${0.1 + i * 0.08}s` } : {}}
              onMouseEnter={() => setHoveredCard(i)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              <div>
                <div className="why-card-title">{c.title}</div>
                <div className="why-card-desc">{c.desc}</div>
              </div>
              <div className="why-icon-wrap">
                <span className="why-icon-inner" style={{display:'block',lineHeight:1}}>{c.icon}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════
//  CTA SECTION — ANIMATED
// ════════════════════════════════════════════════
function CtaSection({ t, WA_URL, EMAIL }: { t: typeof T['es']; WA_URL: string; EMAIL: string }) {
  const ref = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [particles, setParticles] = useState<{x:number;y:number;size:number;speed:number;opacity:number}[]>([])

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.2 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Generate floating particles
  useEffect(() => {
    if (!visible) return
    setParticles(Array.from({length: 18}, (_, i) => ({
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      speed: Math.random() * 8 + 6,
      opacity: Math.random() * 0.25 + 0.05,
    })))
  }, [visible])

  return (
    <section className="cta-section" ref={ref} style={{overflow:'hidden'}}>
      <style>{`
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
        .cta-glow { position:absolute; border-radius:50%; background:radial-gradient(circle, #4ade80 0%, transparent 70%); pointer-events:none; animation:glowPulse 4s ease-in-out infinite; }
      `}</style>

      {/* Dot pattern */}
      <div className="cta-dots"/>

      {/* Glow blobs */}
      <div className="cta-glow" style={{width:400,height:400,top:'-10%',left:'-5%',opacity:.1}}/>
      <div className="cta-glow" style={{width:300,height:300,bottom:'-5%',right:'5%',opacity:.08,animationDelay:'2s'}}/>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div key={i} className="cta-particle" style={{
          left:`${p.x}%`, bottom:`-${p.size*2}px`,
          width:p.size, height:p.size,
          opacity:p.opacity,
          animationDuration:`${p.speed}s`,
          animationDelay:`${Math.random()*6}s`,
        }}/>
      ))}

      <div className="cta-inner" style={{position:'relative',zIndex:2}}>
        <div className={`cta-label-anim${visible?' in':''}`}
          style={{fontSize:12,fontWeight:700,letterSpacing:'.07em',textTransform:'uppercase',color:'rgba(255,255,255,.45)',marginBottom:14}}>
          {t.ctaReady}
        </div>
        <h2 className={`cta-h2 cta-h2-anim${visible?' in':''}`}>{t.ctaTitle}</h2>
        <p  className={`cta-sub cta-sub-anim${visible?' in':''}`}>{t.ctaSub}</p>
        <div className={`cta-btns cta-btns-anim${visible?' in':''}`}>
          <a href={WA_URL} className="cta-btn-white" target="_blank" rel="noopener noreferrer">
            <Phone size={16}/> {t.ctaWa}
          </a>
          <a href={`mailto:${EMAIL}`} className="cta-btn-ghost">
            <Mail size={16}/> {EMAIL}
          </a>
        </div>
      </div>
    </section>
  )
}

// ════════════════════════════════════════════════
//  SHOWCASE ANIMATED COMPONENT
// ════════════════════════════════════════════════
function ShowcaseAnimated({ t }: { t: typeof T['es'] }) {
  const sectionRef = useRef<HTMLElement>(null)
  const [visible, setVisible] = useState(false)
  const [barWidths, setBarWidths] = useState([0, 0, 0, 0])
  const [activeTab, setActiveTab] = useState(0)
  const [typedText, setTypedText] = useState('')
  const [showChip, setShowChip] = useState(false)
  const [activeNav, setActiveNav] = useState(0)
  const [counter, setCounter] = useState(0)
  const tabCycleRef = useRef<any>(null)
  const typeRef = useRef<any>(null)

  const metrics = [
    {name:'Comunicación funcional', pct:82, color:'#16A34A', done:true},
    {name:'Habilidades sociales',   pct:67, color:'#2563EB', done:false},
    {name:'Autorregulación',        pct:54, color:'#7C3AED', done:false},
    {name:'Juego simbólico',        pct:91, color:'#16A34A', done:true},
  ]

  const navItems = ['Inicio','Pacientes','Reportes','ARIA']

  const sidebarContents = [
    {
      label: 'ARIA',
      objective: 'Autorregulación — Semana 4',
      text: 'Mejora del 12% en las últimas 3 sesiones. Se recomienda refuerzo diferencial.',
      chip: '🤖 ARIA sugiere 2 actividades nuevas para casa esta semana.',
    },
    {
      label: 'Reporte',
      objective: 'Comunicación funcional — Mes 3',
      text: 'Objetivo alcanzado: 82%. El paciente mantiene comunicación espontánea en 4 de 5 ensayos.',
      chip: '📄 Reporte mensual listo para enviar a los padres.',
    },
    {
      label: 'Notas',
      objective: 'Juego simbólico — Sesión 14',
      text: 'El niño inició juego simbólico de forma independiente en 3 ocasiones durante la sesión.',
      chip: '✏️ Nota guardada automáticamente por ARIA.',
    },
  ]

  // Intersection observer — trigger when visible
  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) { setVisible(true); obs.disconnect() }
    }, { threshold: 0.25 })
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  // Animate bars when visible
  useEffect(() => {
    if (!visible) return
    const targets = metrics.map(m => m.pct)
    let start: number | null = null
    const duration = 1200
    const ease = (t: number) => 1 - Math.pow(1 - t, 3)
    const step = (ts: number) => {
      if (!start) start = ts
      const progress = Math.min((ts - start) / duration, 1)
      setBarWidths(targets.map(t => Math.round(t * ease(progress))))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [visible])

  // Animate counter (patients)
  useEffect(() => {
    if (!visible) return
    let i = 0
    const interval = setInterval(() => {
      i++
      setCounter(i)
      if (i >= 8) clearInterval(interval)
    }, 80)
    return () => clearInterval(interval)
  }, [visible])

  // Typewriter effect for sidebar text
  const runTypewriter = (text: string) => {
    clearInterval(typeRef.current)
    setTypedText('')
    setShowChip(false)
    let i = 0
    typeRef.current = setInterval(() => {
      i++
      setTypedText(text.slice(0, i))
      if (i >= text.length) {
        clearInterval(typeRef.current)
        setTimeout(() => setShowChip(true), 300)
      }
    }, 18)
  }

  // Auto-cycle sidebar tabs
  useEffect(() => {
    if (!visible) return
    runTypewriter(sidebarContents[0].text)
    tabCycleRef.current = setInterval(() => {
      setActiveTab(prev => {
        const next = (prev + 1) % sidebarContents.length
        runTypewriter(sidebarContents[next].text)
        return next
      })
    }, 4500)
    return () => clearInterval(tabCycleRef.current)
  }, [visible])

  // Auto-cycle nav highlight
  useEffect(() => {
    if (!visible) return
    const items = [0, 1, 2, 3]
    let idx = 0
    const interval = setInterval(() => {
      idx = (idx + 1) % items.length
      setActiveNav(items[idx])
    }, 3000)
    return () => clearInterval(interval)
  }, [visible])

  const cur = sidebarContents[activeTab]

  return (
    <section className="showcase-section" id="aria" ref={sectionRef}>
      <style>{`
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
      `}</style>
      <div className="section-inner">
        <h2 className="showcase-h2">{t.showcaseTitle}</h2>
        <div className="showcase-screen">
          {/* Browser chrome */}
          <div className="showcase-screen-top">
            <div className="sc-dot" style={{background:'#FF5F57'}}/>
            <div className="sc-dot" style={{background:'#FFBD2E'}}/>
            <div className="sc-dot" style={{background:'#28C940'}}/>
            <div className="sc-bar"><span>vanty.app/dashboard</span></div>
          </div>

          <div className="showcase-screen-body">
            {/* LEFT: dashboard */}
            <div className="sc-main">
              <div className="sc-nav">
                <div className="sc-nav-logo"><Brain size={14} color="#fff"/></div>
                {navItems.map((item, i) => (
                  <span key={i}
                    className={`sc-nav-link sc-nav-link-anim${activeNav === i ? ' active' : ''}`}
                    style={{cursor:'default'}}
                  >{item}</span>
                ))}
              </div>

              <div className="sc-dash-title" style={{animation: visible ? 'fadeInUp .5s .1s both' : 'none'}}>
                Panel — Centro ABA
              </div>
              <div className="sc-dash-sub" style={{animation: visible ? 'fadeInUp .5s .2s both' : 'none'}}>
                Semana del 17 al 24 Feb · {visible ? counter : 0} pacientes activos
              </div>

              <div className="sc-metrics" style={{animation: visible ? 'fadeInUp .5s .3s both' : 'none'}}>
                {metrics.map((m, i) => (
                  <div key={i}>
                    <div className="sc-metric-row sc-metric-row-anim">
                      <span style={{fontSize:13, color:'#374151'}}>
                        {m.name}{' '}
                        {m.done && barWidths[i] >= m.pct && (
                          <span style={{color:'#16A34A', fontWeight:700, animation:'fadeInUp .3s both'}}>✓ META</span>
                        )}
                      </span>
                      <span style={{fontSize:13, fontWeight:700, color:m.color, transition:'color .3s'}}>
                        {barWidths[i]}%
                      </span>
                    </div>
                    <div className="sc-metric-bar">
                      <div
                        className="sc-metric-fill sc-bar-fill-anim"
                        style={{width: visible ? `${m.pct}%` : '0%', background: m.color}}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT: ARIA sidebar */}
            <div className="sc-sidebar">
              <div className="sc-sidebar-tabs">
                {sidebarContents.map((s, i) => (
                  <div
                    key={i}
                    className={`sc-stab sc-sidebar-tab-anim${activeTab === i ? ' active' : ''}`}
                    style={{position:'relative'}}
                    onClick={() => {
                      clearInterval(tabCycleRef.current)
                      setActiveTab(i)
                      runTypewriter(sidebarContents[i].text)
                    }}
                  >
                    {s.label}
                  </div>
                ))}
              </div>

              <div className="sc-label" style={{animation: visible ? 'fadeInUp .4s .5s both' : 'none', opacity: visible ? undefined : 0}}>
                Objetivo
              </div>
              <div
                className="sc-input"
                key={cur.objective}
                style={{animation:'fadeInUp .3s both'}}
              >
                {cur.objective}
              </div>

              <div className="sc-label">Análisis ARIA</div>
              <div className="sc-answer" style={{minHeight:56}}>
                <span className="sc-typed-text">{typedText}</span>
                {typedText.length < cur.text.length && <span className="sc-cursor"/>}
              </div>

              {showChip && (
                <div className="sc-aria-chip sc-chip-anim" key={cur.chip}>
                  {cur.chip}
                </div>
              )}
            </div>
          </div>

          {/* Bottom columns */}
          <div className="showcase-cols" style={{borderTop:'1px solid #e5e7eb'}}>
            {t.showcaseCols.map((c, i) => (
              <div key={i} className="sc-col" style={{animation: visible ? `fadeInUp .5s ${0.2 + i * 0.15}s both` : 'none', opacity: visible ? undefined : 0}}>
                <div className="sc-col-title">{c.title}</div>
                <div className="sc-col-desc">{c.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default function VantyLanding() {
  const [lang, setLang]           = useState<LangKey>('es')
  const [scrolled, setScrolled]   = useState(false)
  const [faq, setFaq]             = useState<number|null>(null)
  const [menuOpen, setMenuOpen]   = useState(false)
  const [heroSlide, setHeroSlide] = useState(0)
  const [paused, setPaused]       = useState(false)
  const [priTab, setPriTab]       = useState(0)
  const [langOpen, setLangOpen]   = useState(false)
  const timerRef = useRef<any>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const t = T[lang]
  const WA_MSG_LOCAL = encodeURIComponent(
    lang==='es'?'Hola, vi la página de Vanty y quiero conocer más.':
    lang==='en'?'Hi, I saw the Vanty page and want to learn more.':
    lang==='pt'?'Olá, vi a página da Vanty e quero saber mais.':
    'Bonjour, j\'ai vu la page Vanty et je veux en savoir plus.'
  )
  const WA_URL = `https://wa.me/${WA_NUM}?text=${WA_MSG_LOCAL}`

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    if (!paused) {
      timerRef.current = setInterval(() => setHeroSlide(s => (s+1) % t.hero.slides.length), 5500)
    }
    return () => clearInterval(timerRef.current)
  }, [paused, lang])

  useEffect(() => { setHeroSlide(0); setFaq(null) }, [lang])

  const slide = t.hero.slides[heroSlide]

  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600&display=swap');
        *, *::before, *::after { box-sizing:border-box; margin:0; padding:0; }
        html { scroll-behavior:smooth; }
        body { font-family:'Inter',sans-serif; background:#fff; color:#111; overflow-x:hidden; -webkit-font-smoothing:antialiased; }
        @keyframes fadeUp  { from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)} }
        @keyframes pulse   { 0%,100%{opacity:1}50%{opacity:.4} }
        @keyframes marquee { from{transform:translateX(0)}to{transform:translateX(-50%)} }
        .fu0{animation:fadeUp .7s .0s both} .fu1{animation:fadeUp .7s .15s both} .fu2{animation:fadeUp .7s .28s both} .fu3{animation:fadeUp .7s .4s both}

        .nav { position:sticky; top:0; z-index:300; background:#fff; height:68px; display:flex; align-items:center; padding:0 clamp(16px,4vw,48px); border-bottom:1px solid #e5e7eb; transition:box-shadow .3s; }
        .nav.scrolled { box-shadow:0 2px 12px rgba(0,0,0,.08); border-bottom-color:transparent; }
        .nav-inner { max-width:1400px; margin:0 auto; width:100%; display:flex; align-items:center; justify-content:space-between; gap:8px; }
        .nav-logo { display:flex; align-items:center; gap:10px; text-decoration:none; flex-shrink:0; }
        .nav-links { display:flex; gap:0; list-style:none; }
        @media(max-width:960px){.nav-links{display:none}}
        .nav-links a { display:flex; align-items:center; gap:4px; padding:8px 14px; border-radius:8px; font-size:14px; font-weight:500; color:#374151; text-decoration:none; transition:all .15s; }
        .nav-links a:hover { background:#f3f4f6; color:#111; }
        .nav-right { display:flex; align-items:center; gap:8px; flex-shrink:0; }
        .nav-login { font-size:14px; font-weight:600; color:#374151; text-decoration:none; padding:9px 16px; border-radius:8px; border:1.5px solid #d1d5db; transition:all .15s; }
        .nav-login:hover { border-color:#111; color:#111; }
        .nav-burger { display:none; background:none; border:1.5px solid #d1d5db; border-radius:8px; padding:8px; cursor:pointer; color:#374151; }
        @media(max-width:960px){.nav-burger{display:flex;align-items:center}}
        @media(max-width:600px){.nav-login{display:none}}

        .lang-btn { display:flex; align-items:center; gap:6px; padding:8px 12px; border-radius:8px; border:1.5px solid #d1d5db; background:#fff; font-size:13px; font-weight:700; color:#374151; cursor:pointer; transition:all .15s; font-family:'Poppins',sans-serif; }
        .lang-btn:hover { border-color:#111; color:#111; }
        .lang-wrap { position:relative; }
        .lang-dropdown { position:absolute; top:calc(100% + 8px); right:0; background:#fff; border:1.5px solid #e5e7eb; border-radius:12px; box-shadow:0 8px 32px rgba(0,0,0,.12); padding:6px; min-width:160px; z-index:500; }
        .lang-option { display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:8px; font-size:14px; font-weight:500; color:#374151; cursor:pointer; transition:background .15s; }
        .lang-option:hover { background:#f3f4f6; }
        .lang-option.active { background:#f0fdf4; color:#166534; font-weight:700; }

        .mobile-menu { position:fixed; top:68px; left:0; right:0; z-index:299; background:#fff; border-bottom:1px solid #e5e7eb; padding:16px clamp(16px,4vw,48px) 24px; }
        .mobile-menu a { display:flex; align-items:center; justify-content:space-between; padding:14px 0; color:#374151; text-decoration:none; font-size:15px; font-weight:500; border-bottom:1px solid #f3f4f6; }

        .hero { position:relative; overflow:hidden; min-height:clamp(520px,58vw,740px); display:flex; flex-direction:column; background:#0a1a0f; border-radius:0 0 20px 20px; margin:0 8px; }
        @media(max-width:640px){.hero{margin:0;border-radius:0}}
        .hero-video-bg { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
        .hero-overlay { position:absolute; inset:0; background:linear-gradient(to bottom,rgba(0,0,0,.5) 0%,rgba(0,0,0,.3) 45%,rgba(0,0,0,.6) 100%); }
        .hero-body { position:relative; z-index:10; flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; text-align:center; padding:80px clamp(20px,6vw,80px) 56px; }
        .hero-pretitle { display:inline-flex; align-items:center; gap:8px; padding:6px 16px; border-radius:99px; border:1.5px solid rgba(255,255,255,.28); background:rgba(255,255,255,.12); backdrop-filter:blur(10px); font-size:12px; font-weight:700; color:#fff; letter-spacing:.06em; text-transform:uppercase; margin-bottom:24px; }
        .hero-pretitle-dot { width:7px; height:7px; border-radius:50%; background:#4ade80; animation:pulse 2s infinite; flex-shrink:0; }
        .hero-h1 { font-family:'Poppins',sans-serif; font-size:clamp(38px,6vw,78px); font-weight:800; color:#fff; line-height:1.06; letter-spacing:-.03em; white-space:pre-line; margin-bottom:22px; text-shadow:0 2px 24px rgba(0,0,0,.35); }
        .hero-sub { font-size:17px; color:rgba(255,255,255,.78); line-height:1.65; margin-bottom:16px; max-width:520px; }
        .hero-tabbar { position:relative; z-index:10; background:rgba(0,0,0,.38); backdrop-filter:blur(16px); border-top:1px solid rgba(255,255,255,.1); display:flex; align-items:center; padding:0 clamp(20px,5vw,60px); overflow-x:auto; }
        .hero-tab { padding:18px 24px; font-size:13.5px; font-weight:600; color:rgba(255,255,255,.5); background:none; border:none; border-bottom:3px solid transparent; cursor:pointer; transition:all .2s; white-space:nowrap; }
        .hero-tab.on { color:#fff; border-bottom-color:#fff; }
        .hero-tab-flex { flex:1; }
        .hero-tab-right { display:flex; align-items:center; gap:10px; flex-shrink:0; }
        .hero-dot { width:8px; height:8px; border-radius:50%; background:rgba(255,255,255,.3); border:none; cursor:pointer; padding:0; }
        .hero-dot.on { background:#fff; }
        .hero-pause { display:flex; align-items:center; gap:5px; padding:7px 14px; background:rgba(255,255,255,.12); border:1px solid rgba(255,255,255,.2); border-radius:99px; color:rgba(255,255,255,.75); font-size:12px; font-weight:600; cursor:pointer; }

        .trustbar { display:flex; align-items:center; justify-content:center; gap:32px; flex-wrap:wrap; padding:18px clamp(16px,4vw,48px); font-size:13px; font-weight:600; color:#374151; border-bottom:1px solid #e5e7eb; }
        .trustbar-item { display:flex; align-items:center; gap:8px; }
        .trustbar-item svg { color:#1D6F42; }

        .section-inner { max-width:1280px; margin:0 auto; }
        .section-label { display:inline-flex; align-items:center; gap:6px; padding:5px 14px; border-radius:99px; background:#f0fdf4; border:1px solid #bbf7d0; font-size:11.5px; font-weight:700; color:#166534; letter-spacing:.06em; text-transform:uppercase; margin-bottom:16px; }
        .section-h2 { font-family:'Poppins',sans-serif; font-size:clamp(28px,4vw,46px); font-weight:800; color:#111; letter-spacing:-.03em; line-height:1.1; margin-bottom:12px; }
        .section-sub { font-size:16px; color:#6b7280; line-height:1.7; }

        .pri-section { padding:80px clamp(20px,4vw,48px); background:#fff; }
        .pri-h2 { font-family:'Poppins',sans-serif; font-size:clamp(28px,4vw,48px); font-weight:800; text-align:center; color:#111; letter-spacing:-.03em; margin-bottom:36px; }
        .pri-tabs { display:flex; gap:10px; justify-content:center; flex-wrap:wrap; margin-bottom:40px; }
        .pri-tab { padding:10px 22px; border-radius:99px; font-size:14px; font-weight:600; cursor:pointer; border:2px solid #e5e7eb; background:#fff; color:#374151; transition:all .2s; font-family:'Poppins',sans-serif; }
        .pri-tab.on { background:#111; color:#fff; border-color:#111; }
        .pri-grid { display:grid; grid-template-columns:1.1fr 1fr; grid-template-rows:auto auto; gap:16px; }
        @media(max-width:720px){.pri-grid{grid-template-columns:1fr}}
        .pri-main { grid-row:1/3; border-radius:20px; padding:36px; display:flex; flex-direction:column; min-height:380px; border:1px solid rgba(0,0,0,.07); }
        @media(max-width:720px){.pri-main{grid-row:auto;min-height:auto}}
        .pri-small { border-radius:20px; padding:28px; border:1px solid rgba(0,0,0,.07); }
        .pri-icon { font-size:36px; margin-bottom:14px; }
        .pri-title { font-family:'Poppins',sans-serif; font-size:22px; font-weight:800; color:#111; margin-bottom:10px; letter-spacing:-.02em; }
        .pri-desc { font-size:14px; color:#6b7280; line-height:1.65; margin-bottom:14px; }
        .pri-features { list-style:none; display:flex; flex-direction:column; gap:7px; margin-top:8px; }
        .pri-features li { font-size:13px; color:#374151; font-weight:500; }
        .pri-badge { display:inline-flex; align-items:center; padding:4px 12px; border-radius:99px; background:#111; color:#fff; font-size:11px; font-weight:700; letter-spacing:.04em; text-transform:uppercase; margin-bottom:14px; font-family:'Poppins',sans-serif; }

        .showcase-section { padding:80px clamp(20px,4vw,48px); background:#f9fafb; }
        .showcase-h2 { font-family:'Poppins',sans-serif; font-size:clamp(28px,4vw,46px); font-weight:800; text-align:center; color:#111; letter-spacing:-.03em; margin-bottom:48px; }
        .showcase-screen { border-radius:20px; overflow:hidden; background:#fff; border:1px solid #e5e7eb; box-shadow:0 8px 40px rgba(0,0,0,.08); }
        .showcase-screen-top { background:#1e293b; padding:12px 20px; display:flex; align-items:center; gap:8px; }
        .sc-dot { width:12px; height:12px; border-radius:50%; }
        .sc-bar { flex:1; background:rgba(255,255,255,.1); border-radius:6px; height:28px; margin:0 12px; display:flex; align-items:center; padding:0 12px; }
        .sc-bar span { font-size:12px; color:rgba(255,255,255,.5); }
        .showcase-screen-body { display:grid; grid-template-columns:1fr 340px; min-height:320px; }
        @media(max-width:800px){.showcase-screen-body{grid-template-columns:1fr}}
        .sc-main { padding:28px; }
        .sc-nav { display:flex; align-items:center; gap:20px; padding-bottom:20px; border-bottom:1px solid #f3f4f6; margin-bottom:20px; }
        .sc-nav-logo { width:32px; height:32px; border-radius:7px; background:#1D6F42; display:flex; align-items:center; justify-content:center; }
        .sc-nav-link { font-size:13px; color:#6b7280; font-weight:500; }
        .sc-nav-link.active { color:#111; font-weight:700; }
        .sc-dash-title { font-family:'Poppins',sans-serif; font-size:18px; font-weight:800; color:#111; margin-bottom:4px; }
        .sc-dash-sub { font-size:13px; color:#9ca3af; margin-bottom:20px; }
        .sc-metrics { display:flex; flex-direction:column; gap:12px; }
        .sc-metric-row { display:flex; justify-content:space-between; align-items:center; font-size:13px; margin-bottom:4px; }
        .sc-metric-bar { height:8px; background:#f3f4f6; border-radius:99px; overflow:hidden; }
        .sc-metric-fill { height:100%; border-radius:99px; }
        .sc-sidebar { background:#f8fafc; border-left:1px solid #f3f4f6; padding:24px; display:flex; flex-direction:column; gap:14px; }
        @media(max-width:800px){.sc-sidebar{display:none}}
        .sc-sidebar-tabs { display:flex; gap:6px; margin-bottom:4px; }
        .sc-stab { padding:6px 12px; border-radius:6px; font-size:12px; font-weight:700; cursor:pointer; font-family:'Poppins',sans-serif; }
        .sc-stab.active { background:#111; color:#fff; }
        .sc-stab:not(.active) { background:#f3f4f6; color:#6b7280; }
        .sc-label { font-size:11px; font-weight:700; color:#9ca3af; text-transform:uppercase; letter-spacing:.05em; }
        .sc-input { background:#fff; border:1.5px solid #e5e7eb; border-radius:8px; padding:10px 12px; font-size:13px; color:#111; }
        .sc-answer { background:#f0fdf4; border:1px solid #bbf7d0; border-radius:8px; padding:12px; font-size:13px; color:#374151; line-height:1.6; }
        .sc-aria-chip { background:#eff6ff; border:1px solid #bfdbfe; border-radius:8px; padding:10px 12px; font-size:12px; color:#1d4ed8; line-height:1.6; }
        .showcase-cols { display:grid; grid-template-columns:repeat(3,1fr); }
        @media(max-width:680px){.showcase-cols{grid-template-columns:1fr}}
        .sc-col { padding:28px; border-right:1px solid #e5e7eb; }
        .sc-col:last-child { border-right:none; }
        .sc-col-title { font-family:'Poppins',sans-serif; font-size:16px; font-weight:800; color:#111; margin-bottom:8px; }
        .sc-col-desc { font-size:14px; color:#6b7280; line-height:1.65; }

        .why-section { padding:80px clamp(20px,4vw,48px); background:#fff; }
        .why-h2 { font-family:'Poppins',sans-serif; font-size:clamp(28px,4vw,48px); font-weight:800; text-align:center; color:#111; letter-spacing:-.03em; margin-bottom:12px; white-space:pre-line; }
        .why-sub { text-align:center; font-size:16px; color:#6b7280; line-height:1.65; max-width:640px; margin:0 auto 52px; }
        .why-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
        @media(max-width:860px){.why-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:560px){.why-grid{grid-template-columns:1fr}}
        .why-card { background:#f9fafb; border-radius:20px; padding:32px; display:flex; flex-direction:column; justify-content:space-between; min-height:240px; border:1px solid #f3f4f6; transition:all .2s; }
        .why-card:hover { border-color:#d1fae5; box-shadow:0 8px 32px rgba(29,111,66,.08); transform:translateY(-3px); }
        .why-card-title { font-family:'Poppins',sans-serif; font-size:20px; font-weight:800; color:#111; margin-bottom:12px; line-height:1.2; }
        .why-card-desc { font-size:14px; color:#6b7280; line-height:1.7; }
        .why-card-visual { height:80px; border-radius:12px; display:flex; align-items:center; justify-content:center; font-size:40px; background:#fff; border:1px solid #f3f4f6; margin-top:24px; }

        .testimonial-section { padding:0; overflow:hidden; display:grid; grid-template-columns:1fr 1fr; min-height:420px; align-items:stretch; }
        @media(max-width:760px){.testimonial-section{grid-template-columns:1fr}}
        .testimonial-img-wrap { position:relative; background:#e0f2f1; overflow:hidden; min-height:420px; height:100%; }
        .testimonial-name { position:absolute; bottom:24px; left:24px; font-size:13px; font-weight:700; color:#111; background:rgba(255,255,255,.9); padding:6px 12px; border-radius:6px; z-index:2; }
        .testimonial-role { font-size:12px; font-weight:500; color:#374151; }
        .testimonial-body { background:#f0fdf4; padding:60px 48px; display:flex; flex-direction:column; justify-content:center; gap:24px; }
        @media(max-width:760px){.testimonial-body{padding:40px 24px}}
        .testimonial-brand { display:flex; align-items:center; gap:8px; font-family:'Poppins',sans-serif; font-size:15px; font-weight:700; color:#111; }
        .testimonial-brand-dot { width:8px; height:8px; border-radius:50%; background:#1D6F42; }
        .testimonial-quote { font-family:'Poppins',sans-serif; font-size:clamp(20px,3vw,28px); font-weight:800; color:#111; line-height:1.25; letter-spacing:-.02em; }
        .testimonial-quote::before { content:'"'; }
        .testimonial-quote::after { content:'"'; }
        .testimonial-products-label { font-size:12px; font-weight:700; color:#9ca3af; text-transform:uppercase; letter-spacing:.06em; margin-bottom:10px; }
        .testimonial-product-item { display:flex; align-items:center; gap:10px; font-size:14px; color:#374151; font-weight:500; margin-bottom:6px; }
        .testimonial-product-item svg { color:#1D6F42; flex-shrink:0; }

        .marquee-section { background:#0d9488; padding:18px 0; overflow:hidden; border-top:1px solid #0f766e; border-bottom:1px solid #0f766e; }
        .marquee-track { display:flex; white-space:nowrap; animation:marquee 28s linear infinite; width:max-content; }
        .marquee-item { padding:0 32px; font-family:'Poppins',sans-serif; font-size:14px; font-weight:700; color:#fff; letter-spacing:.04em; text-transform:uppercase; display:flex; align-items:center; gap:12px; }
        .marquee-dot { width:6px; height:6px; border-radius:50%; background:rgba(255,255,255,.5); flex-shrink:0; }

        .compare-section { padding:80px clamp(20px,4vw,48px); background:#f9fafb; }
        .cmp-wrap { overflow-x:auto; margin-top:40px; border-radius:16px; border:1px solid #e5e7eb; overflow:hidden; }
        .cmp-table { width:100%; border-collapse:collapse; min-width:580px; }
        .cmp-table th { padding:16px 24px; text-align:left; font-size:13px; font-weight:700; color:#6b7280; background:#f9fafb; border-bottom:2px solid #e5e7eb; font-family:'Poppins',sans-serif; }
        .cmp-table th:last-child { background:#f0fdf4; color:#166534; }
        .cmp-table td { padding:15px 24px; font-size:14px; border-bottom:1px solid #f3f4f6; background:#fff; }
        .cmp-table td:first-child { font-weight:600; color:#111; }
        .cmp-table td:last-child { background:#f9fffe; font-weight:700; }
        .cmp-table tr:last-child td { border-bottom:none; }
        .t-yes{color:#16a34a} .t-no{color:#dc2626} .t-par{color:#d97706}
        @media(max-width:600px){.hide-xs{display:none}}

        .help-section { display:grid; grid-template-columns:1fr 1fr; min-height:380px; align-items:stretch; background:#f0fdfa; overflow:hidden; }
        @media(max-width:720px){.help-section{grid-template-columns:1fr}}
        .help-img-wrap { position:relative; min-height:380px; overflow:hidden; background:#ccfbf1; }
        .help-name { position:absolute; top:20px; left:20px; font-size:12px; font-weight:700; color:#111; z-index:2; }
        .help-role { font-size:11px; color:#374151; font-weight:500; }
        .help-body { padding:60px 48px; display:flex; flex-direction:column; justify-content:center; gap:16px; }
        @media(max-width:720px){.help-body{padding:40px 24px}}
        .help-brand { font-family:'Poppins',sans-serif; font-size:14px; font-weight:700; color:#0d9488; display:flex; align-items:center; gap:6px; }
        .help-h2 { font-family:'Poppins',sans-serif; font-size:clamp(24px,3.5vw,40px); font-weight:800; color:#111; line-height:1.15; letter-spacing:-.02em; white-space:pre-line; }
        .help-desc { font-size:15px; color:#374151; line-height:1.7; }

        .pricing-section { padding:80px clamp(20px,4vw,48px); background:#fff; }
        .pricing-grid { display:grid; grid-template-columns:1fr 1fr; gap:24px; max-width:860px; margin:48px auto 0; }
        @media(max-width:620px){.pricing-grid{grid-template-columns:1fr}}
        .p-card { background:#fff; border:2px solid #e5e7eb; border-radius:20px; padding:36px; position:relative; overflow:hidden; transition:all .2s; }
        .p-card:hover { border-color:#d1fae5; box-shadow:0 12px 40px rgba(29,111,66,.1); }
        .p-card.featured { border-color:#1D6F42; box-shadow:0 8px 40px rgba(29,111,66,.15); }
        .p-badge { position:absolute; top:0; right:28px; background:#1D6F42; color:#fff; font-size:11px; font-weight:700; padding:5px 14px; border-radius:0 0 10px 10px; letter-spacing:.04em; text-transform:uppercase; font-family:'Poppins',sans-serif; }
        .p-label { font-size:12px; font-weight:700; color:#9ca3af; text-transform:uppercase; letter-spacing:.07em; margin-bottom:16px; }
        .p-amt { display:flex; align-items:baseline; gap:4px; margin-bottom:16px; }
        .p-cur { font-size:22px; font-weight:800; color:#111; font-family:'Poppins',sans-serif; }
        .p-num { font-family:'Poppins',sans-serif; font-size:60px; font-weight:900; color:#111; letter-spacing:-.04em; line-height:1; }
        .p-per { font-size:17px; color:#9ca3af; font-weight:500; }
        .p-desc { font-size:14px; color:#6b7280; line-height:1.7; margin-bottom:24px; }
        .p-list { list-style:none; display:flex; flex-direction:column; gap:11px; margin-bottom:28px; }
        .p-list li { display:flex; align-items:center; gap:10px; font-size:14px; color:#374151; }

        .faq-section { padding:80px clamp(20px,4vw,48px); background:#f9fafb; }
        .faq-list { max-width:760px; margin:40px auto 0; }
        .faq-item { background:#fff; border:1.5px solid #e5e7eb; border-radius:14px; margin-bottom:10px; overflow:hidden; cursor:pointer; transition:border-color .2s; }
        .faq-item.open { border-color:#1D6F42; }
        .faq-head { display:flex; align-items:center; justify-content:space-between; padding:20px 24px; gap:12px; }
        .faq-q { font-family:'Poppins',sans-serif; font-size:15px; font-weight:700; color:#111; }
        .faq-chev { transition:transform .25s; color:#9ca3af; flex-shrink:0; }
        .faq-item.open .faq-chev { transform:rotate(180deg); }
        .faq-body { padding:0 24px 20px; font-size:14px; color:#6b7280; line-height:1.75; }

        .cta-section { padding:96px clamp(20px,6vw,80px); text-align:center; background:linear-gradient(135deg,#052e16 0%,#1D6F42 50%,#052e16 100%); position:relative; overflow:hidden; }
        .cta-dots { position:absolute; inset:0; opacity:.05; background-image:radial-gradient(#fff 1px,transparent 1px); background-size:24px 24px; }
        .cta-inner { position:relative; z-index:2; max-width:680px; margin:0 auto; }
        .cta-h2 { font-family:'Poppins',sans-serif; font-size:clamp(30px,5vw,52px); font-weight:800; color:#fff; margin-bottom:16px; letter-spacing:-.03em; white-space:pre-line; }
        .cta-sub { font-size:17px; color:rgba(255,255,255,.72); line-height:1.7; margin-bottom:40px; white-space:pre-line; }
        .cta-btns { display:flex; gap:14px; justify-content:center; flex-wrap:wrap; }
        .cta-btn-white { display:inline-flex; align-items:center; gap:8px; padding:16px 32px; background:#fff; color:#111; border-radius:8px; font-family:'Poppins',sans-serif; font-size:15px; font-weight:700; text-decoration:none; transition:all .2s; }
        .cta-btn-ghost { display:inline-flex; align-items:center; gap:8px; padding:16px 32px; background:transparent; color:#fff; border:2px solid rgba(255,255,255,.35); border-radius:8px; font-family:'Poppins',sans-serif; font-size:15px; font-weight:700; text-decoration:none; transition:all .2s; }
        .cta-btn-ghost:hover { border-color:rgba(255,255,255,.7); background:rgba(255,255,255,.08); }

        .footer { background:#111; padding:56px clamp(20px,4vw,48px) 0; }
        .footer-grid { max-width:1280px; margin:0 auto; display:grid; grid-template-columns:2fr 1fr 1fr 1fr; gap:40px; padding-bottom:48px; }
        @media(max-width:900px){.footer-grid{grid-template-columns:repeat(2,1fr)}}
        @media(max-width:560px){.footer-grid{grid-template-columns:1fr}}
        .footer h4 { font-family:'Poppins',sans-serif; font-size:13px; font-weight:700; color:#9ca3af; text-transform:uppercase; letter-spacing:.07em; margin-bottom:18px; }
        .footer ul { list-style:none; display:flex; flex-direction:column; gap:11px; }
        .footer ul li a { font-size:13.5px; color:#6b7280; text-decoration:none; transition:color .15s; }
        .footer ul li a:hover { color:#fff; }
        .footer-logo { display:flex; align-items:center; gap:10px; margin-bottom:16px; }
        .footer-tagline { font-size:13px; color:#6b7280; line-height:1.7; margin-bottom:22px; max-width:280px; }
        .footer-socials { display:flex; gap:10px; }
        .fsoc { width:36px; height:36px; border-radius:8px; background:#1f2937; color:#9ca3af; display:flex; align-items:center; justify-content:center; text-decoration:none; transition:all .2s; }
        .fsoc:hover { background:#374151; color:#fff; }
        .footer-bottom { max-width:1280px; margin:0 auto; border-top:1px solid #1f2937; padding:24px 0; display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; gap:12px; }
        .footer-bottom p { font-size:12px; color:#4b5563; }
      `}</style>

      {/* NAVBAR */}
      <nav className={`nav${scrolled?' scrolled':''}`}>
        <div className="nav-inner">
          <a href="/" className="nav-logo">
            <img src="/images/logo.png" alt="Vanty" style={{height:'42px',width:'auto',display:'block'}}/>
            <div style={{display:'flex',flexDirection:'column',lineHeight:1.15}}>
              <span style={{fontFamily:'Poppins,sans-serif',fontWeight:800,fontSize:'18px',color:'#111',letterSpacing:'-0.02em'}}>VANTY</span>
              <span style={{fontFamily:'Inter,sans-serif',fontWeight:400,fontSize:'10px',color:'#6b7280',letterSpacing:'0.01em'}}>{t.tagline}</span>
            </div>
          </a>
          <ul className="nav-links">
            <li><a href="#roles">{t.nav.platform} <ChevronDown size={13}/></a></li>
            <li><a href="#diferencial">{t.nav.features}</a></li>
            <li><a href="#aria">{t.nav.aria}</a></li>
            <li><a href="#precios">{t.nav.pricing}</a></li>
            <li><a href="#faq">{t.nav.faq}</a></li>
          </ul>
          <div className="nav-right">
            <a href={WA_URL} className="nav-login" target="_blank" rel="noopener noreferrer">{t.nav.contact}</a>
            <a href="/login" style={{display:'inline-flex',alignItems:'center',gap:'6px',padding:'9px 18px',background:'#1D6F42',color:'#fff',borderRadius:'8px',fontSize:'14px',fontWeight:700,textDecoration:'none',fontFamily:'Poppins,sans-serif',transition:'background .2s'}}
               onMouseOver={e=>(e.currentTarget.style.background='#166534')}
               onMouseOut={e=>(e.currentTarget.style.background='#1D6F42')}>
              {t.lang==='EN'?'Log in':t.lang==='PT'?'Entrar':t.lang==='FR'?'Connexion':'Iniciar sesión'}
            </a>
            <div className="lang-wrap">
              <button className="lang-btn" onClick={()=>setLangOpen(o=>!o)}>
                <Globe size={14}/> {FLAG[lang]} {t.lang} <ChevronDown size={11}/>
              </button>
              {langOpen && (
                <div className="lang-dropdown">
                  {LANGS.map(l=>(
                    <div key={l} className={`lang-option${lang===l?' active':''}`}
                      onClick={()=>{setLang(l);setLangOpen(false)}}>
                      <span>{FLAG[l]}</span> {T[l].langLabel}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <button className="nav-burger" onClick={()=>setMenuOpen(m=>!m)}>
              {menuOpen?<X size={20}/>:<Menu size={20}/>}
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div className="mobile-menu" onClick={()=>setMenuOpen(false)}>
          <a href="#roles">{t.nav.platform} <ChevronRight size={15}/></a>
          <a href="#diferencial">{t.nav.features} <ChevronRight size={15}/></a>
          <a href="#aria">{t.nav.aria} <ChevronRight size={15}/></a>
          <a href="#precios">{t.nav.pricing} <ChevronRight size={15}/></a>
          <a href="#faq">{t.nav.faq} <ChevronRight size={15}/></a>
          <a href={WA_URL} target="_blank" rel="noopener noreferrer">{t.nav.whatsapp} <ChevronRight size={15}/></a>
        </div>
      )}

      {/* HERO */}
      <section className="hero">
        <video ref={videoRef} src={HERO_VIDEO_SRC} poster={HERO_VIDEO_POSTER} className="hero-video-bg" autoPlay muted loop playsInline preload="auto"/>
        <div className="hero-overlay"/>
        <div className="hero-body">
          <div className="hero-pretitle fu0"><span className="hero-pretitle-dot"/>{slide.tag}</div>
          <h1 className="hero-h1 fu1">{slide.title}</h1>
          <p className="hero-sub fu2">{t.hero.sub}</p>
          <p className="hero-sub fu3" style={{fontSize:13,opacity:.6,marginBottom:0}}>{t.hero.note}</p>
        </div>
        <div className="hero-tabbar">
          {t.hero.slides.map((s,i)=>(
            <button key={i} className={`hero-tab${heroSlide===i?' on':''}`} onClick={()=>{setHeroSlide(i);setPaused(true)}}>{s.label}</button>
          ))}
          <span className="hero-tab-flex"/>
          <div className="hero-tab-right">
            {t.hero.slides.map((_,i)=>(
              <button key={i} className={`hero-dot${heroSlide===i?' on':''}`} onClick={()=>{setHeroSlide(i);setPaused(true)}}/>
            ))}
            <button className="hero-pause" onClick={()=>setPaused(p=>!p)}>
              {paused?<><Play size={10}/>{t.hero.resume}</>:<><Pause size={10}/>{t.hero.pause}</>}
            </button>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trustbar">
        {[CheckCircle,Shield,Sparkles,Users,Star].map((Icon,i)=>(
          <div key={i} className="trustbar-item"><Icon size={15}/> {t.trust[i]}</div>
        ))}
      </div>

      {/* PRIORITY */}
      <section className="pri-section" id="roles">
        <div className="section-inner">
          <h2 className="pri-h2">{t.priTitle}</h2>
          <div className="pri-tabs">
            {t.priTabs.map((tab,i)=>(
              <button key={i} className={`pri-tab${priTab===i?' on':''}`} onClick={()=>setPriTab(i)}>{tab}</button>
            ))}
          </div>
          {/* ── TAB 0: Recomendado ── */}
          {priTab === 0 && (
            <div className="pri-grid">
              <div className="pri-main" style={{background:'#e6f4ed'}}>
                <div>
                  <div className="pri-icon">🚀</div>
                  <div className="pri-badge">{lang==='es'?'Más popular':lang==='en'?'Most popular':lang==='pt'?'Mais popular':'Le plus populaire'}</div>
                  <div className="pri-title">{lang==='es'?'Empezar con Vanty':lang==='en'?'Get started with Vanty':lang==='pt'?'Começar com Vanty':'Démarrer avec Vanty'}</div>
                  <div className="pri-desc">{lang==='es'?'Todo lo que necesita tu centro ABA para operar desde el primer día.':lang==='en'?'Everything your ABA center needs to operate from day one.':lang==='pt'?'Tudo o que o seu centro ABA precisa para operar desde o primeiro dia.':'Tout ce dont votre centre ABA a besoin pour fonctionner dès le premier jour.'}</div>
                  <ul className="pri-features">{t.plan1Features.map((f,i)=><li key={i}>✓ {f}</li>)}</ul>
                </div>
              </div>
              <div className="pri-small" style={{background:'#e8f0fb'}}>
                <div>
                  <div style={{fontSize:30,marginBottom:12}}>🤖</div>
                  <div className="pri-badge">{lang==='es'?'Novedad':lang==='en'?'New':lang==='pt'?'Novidade':'Nouveau'}</div>
                  <div className="pri-title" style={{fontSize:18}}>ARIA · IA</div>
                  <div className="pri-desc">{lang==='es'?'Genera reportes clínicos completos en segundos.':lang==='en'?'Generates complete clinical reports in seconds.':lang==='pt'?'Gera relatórios clínicos completos em segundos.':'Génère des rapports cliniques complets en quelques secondes.'}</div>
                  <ul className="pri-features">
                    {(lang==='es'?['✓ Reportes automáticos','✓ Notas clínicas','✓ Resúmenes para familias']:
                      lang==='en'?['✓ Automatic reports','✓ Clinical notes','✓ Family summaries']:
                      lang==='pt'?['✓ Relatórios automáticos','✓ Notas clínicas','✓ Resumos para famílias']:
                      ['✓ Rapports automatiques','✓ Notes cliniques','✓ Résumés familles']
                    ).map((f,i)=><li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
              <div className="pri-small" style={{background:'#fef3e8'}}>
                <div>
                  <div style={{fontSize:30,marginBottom:12}}>📊</div>
                  <div className="pri-title" style={{fontSize:18}}>{lang==='es'?'Datos ABA':lang==='en'?'ABA Data':lang==='pt'?'Dados ABA':'Données ABA'}</div>
                  <div className="pri-desc">{lang==='es'?'Gráficos de dominio con alertas al ≥80%.':lang==='en'?'Domain charts with alerts at ≥80%.':lang==='pt'?'Gráficos de domínio com alertas ao ≥80%.':'Graphiques avec alertes à ≥80%.'}</div>
                  <ul className="pri-features">
                    {(lang==='es'?['✓ Gráficos por objetivo','✓ Alertas automáticas','✓ Excel import']:
                      lang==='en'?['✓ Charts per objective','✓ Auto alerts','✓ Excel import']:
                      lang==='pt'?['✓ Gráficos por objetivo','✓ Alertas automáticas','✓ Import Excel']:
                      ['✓ Graphiques par objectif','✓ Alertes auto','✓ Import Excel']
                    ).map((f,i)=><li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ── TAB 1: Analistas ── */}
          {priTab === 1 && (
            <div className="pri-grid">
              <div className="pri-main" style={{background:'#eff6ff'}}>
                <div>
                  <div className="pri-icon">🧠</div>
                  <div className="pri-badge" style={{background:'#2563EB'}}>{lang==='es'?'Para analistas':lang==='en'?'For analysts':lang==='pt'?'Para analistas':'Pour analystes'}</div>
                  <div className="pri-title">{lang==='es'?'Herramientas para el analista ABA':lang==='en'?'Tools for the ABA analyst':lang==='pt'?'Ferramentas para o analista ABA':'Outils pour l\'analyste ABA'}</div>
                  <div className="pri-desc">{lang==='es'?'Todo lo que necesitas para gestionar programas, registrar sesiones y supervisar el progreso de tus pacientes desde un solo lugar.':lang==='en'?'Everything you need to manage programs, record sessions and monitor your patients\' progress from one place.':lang==='pt'?'Tudo o que você precisa para gerenciar programas, registrar sessões e monitorar o progresso dos seus pacientes.':'Tout ce qu\'il faut pour gérer les programmes, enregistrer les séances et suivre les progrès de vos patients.'}</div>
                  <ul className="pri-features">
                    {(lang==='es'?[
                      '✓ Registro de sesiones ABA en tiempo real',
                      '✓ Programas de intervención por paciente',
                      '✓ Gráficos de dominio automáticos',
                      '✓ Alertas al alcanzar ≥80% por objetivo',
                      '✓ Supervisión de especialistas a distancia',
                      '✓ Importar datos desde Excel',
                    ]:lang==='en'?[
                      '✓ Real-time ABA session recording',
                      '✓ Intervention programs per patient',
                      '✓ Automatic domain charts',
                      '✓ Alerts when reaching ≥80% per goal',
                      '✓ Remote specialist supervision',
                      '✓ Import data from Excel',
                    ]:lang==='pt'?[
                      '✓ Registro de sessões ABA em tempo real',
                      '✓ Programas de intervenção por paciente',
                      '✓ Gráficos de domínio automáticos',
                      '✓ Alertas ao atingir ≥80% por objetivo',
                      '✓ Supervisão de especialistas à distância',
                      '✓ Importar dados do Excel',
                    ]:[
                      '✓ Enregistrement de séances ABA en temps réel',
                      '✓ Programmes d\'intervention par patient',
                      '✓ Graphiques de domaine automatiques',
                      '✓ Alertes à ≥80% par objectif',
                      '✓ Supervision à distance',
                      '✓ Importation depuis Excel',
                    ]).map((f,i)=><li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
              <div className="pri-small" style={{background:'#e8f0fb'}}>
                <div>
                  <div style={{fontSize:30,marginBottom:12}}>🤖</div>
                  <div className="pri-badge" style={{background:'#2563EB'}}>{lang==='es'?'IA para analistas':lang==='en'?'AI for analysts':lang==='pt'?'IA para analistas':'IA pour analystes'}</div>
                  <div className="pri-title" style={{fontSize:18}}>ARIA · {lang==='es'||lang==='pt'?'Reportes IA':lang==='en'?'AI Reports':'Rapports IA'}</div>
                  <div className="pri-desc">{lang==='es'?'Genera reportes de sesión completos y notas clínicas en segundos.':lang==='en'?'Generate complete session reports and clinical notes in seconds.':lang==='pt'?'Gera relatórios de sessão completos e notas clínicas em segundos.':'Générez des rapports de séance complets en quelques secondes.'}</div>
                  <ul className="pri-features">
                    {(lang==='es'?['✓ Reportes automáticos por sesión','✓ Notas SOAP clínicas','✓ Resúmenes para supervisión']:
                      lang==='en'?['✓ Automatic per-session reports','✓ Clinical SOAP notes','✓ Supervision summaries']:
                      lang==='pt'?['✓ Relatórios automáticos por sessão','✓ Notas SOAP clínicas','✓ Resumos para supervisão']:
                      ['✓ Rapports automatiques par séance','✓ Notes SOAP cliniques','✓ Résumés de supervision']
                    ).map((f,i)=><li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
              <div className="pri-small" style={{background:'#f0fdf4'}}>
                <div>
                  <div style={{fontSize:30,marginBottom:12}}>📋</div>
                  <div className="pri-title" style={{fontSize:18}}>{lang==='es'?'Dashboard del analista':lang==='en'?'Analyst dashboard':lang==='pt'?'Dashboard do analista':'Tableau de bord analyste'}</div>
                  <div className="pri-desc">{lang==='es'?'Vista centralizada de todos tus pacientes y su progreso semanal.':lang==='en'?'Centralized view of all your patients and their weekly progress.':lang==='pt'?'Visão centralizada de todos os seus pacientes e seu progresso semanal.':'Vue centralisée de tous vos patients et leurs progrès hebdomadaires.'}</div>
                  <ul className="pri-features">
                    {(lang==='es'?['✓ Lista de pacientes activos','✓ Resumen semanal de sesiones','✓ Notificaciones de metas alcanzadas']:
                      lang==='en'?['✓ Active patient list','✓ Weekly session summary','✓ Goal achievement notifications']:
                      lang==='pt'?['✓ Lista de pacientes ativos','✓ Resumo semanal de sessões','✓ Notificações de metas atingidas']:
                      ['✓ Liste des patients actifs','✓ Résumé hebdomadaire','✓ Notifications d\'objectifs atteints']
                    ).map((f,i)=><li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ── TAB 2: Especialistas ── */}
          {priTab === 2 && (
            <div className="pri-grid">
              <div className="pri-main" style={{background:'#fdf4ff'}}>
                <div>
                  <div className="pri-icon">🩺</div>
                  <div className="pri-badge" style={{background:'#7C3AED'}}>{lang==='es'?'Para especialistas':lang==='en'?'For specialists':lang==='pt'?'Para especialistas':'Pour spécialistes'}</div>
                  <div className="pri-title">{lang==='es'?'Portal del especialista ABA':lang==='en'?'ABA specialist portal':lang==='pt'?'Portal do especialista ABA':'Portail du spécialiste ABA'}</div>
                  <div className="pri-desc">{lang==='es'?'Registra tus sesiones, accede al historial clínico de cada paciente y comunícate con analistas y familias desde un solo portal.':lang==='en'?'Record your sessions, access each patient\'s clinical history and communicate with analysts and families from one portal.':lang==='pt'?'Registre suas sessões, acesse o histórico clínico de cada paciente e comunique-se com analistas e famílias.':'Enregistrez vos séances, accédez à l\'historique clinique et communiquez avec analystes et familles.'}</div>
                  <ul className="pri-features">
                    {(lang==='es'?[
                      '✓ Registro de sesiones propias',
                      '✓ Acceso al historial clínico del paciente',
                      '✓ Comunicación directa con analistas',
                      '✓ Mensajería con padres de familia',
                      '✓ Agenda de citas y sesiones',
                      '✓ Notas clínicas generadas con ARIA',
                    ]:lang==='en'?[
                      '✓ Own session recording',
                      '✓ Access to patient clinical history',
                      '✓ Direct communication with analysts',
                      '✓ Messaging with parents',
                      '✓ Appointment and session calendar',
                      '✓ Clinical notes generated with ARIA',
                    ]:lang==='pt'?[
                      '✓ Registro de sessões próprias',
                      '✓ Acesso ao histórico clínico do paciente',
                      '✓ Comunicação direta com analistas',
                      '✓ Mensagens com pais de família',
                      '✓ Agenda de consultas e sessões',
                      '✓ Notas clínicas geradas com ARIA',
                    ]:[
                      '✓ Enregistrement de ses propres séances',
                      '✓ Accès à l\'historique clinique',
                      '✓ Communication directe avec les analystes',
                      '✓ Messagerie avec les parents',
                      '✓ Agenda des rendez-vous',
                      '✓ Notes cliniques générées par ARIA',
                    ]).map((f,i)=><li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
              <div className="pri-small" style={{background:'#ede9fe'}}>
                <div>
                  <div style={{fontSize:30,marginBottom:12}}>📅</div>
                  <div className="pri-title" style={{fontSize:18}}>{lang==='es'?'Agenda inteligente':lang==='en'?'Smart calendar':lang==='pt'?'Agenda inteligente':'Agenda intelligente'}</div>
                  <div className="pri-desc">{lang==='es'?'Gestiona tus citas, sesiones y seguimientos en un solo lugar.':lang==='en'?'Manage your appointments, sessions and follow-ups in one place.':lang==='pt'?'Gerencie seus compromissos, sessões e acompanhamentos em um só lugar.':'Gérez vos rendez-vous, séances et suivis en un seul endroit.'}</div>
                  <ul className="pri-features">
                    {(lang==='es'?['✓ Vista semanal y mensual','✓ Recordatorios automáticos','✓ Historial de citas por paciente']:
                      lang==='en'?['✓ Weekly and monthly view','✓ Automatic reminders','✓ Appointment history per patient']:
                      lang==='pt'?['✓ Vista semanal e mensal','✓ Lembretes automáticos','✓ Histórico de consultas por paciente']:
                      ['✓ Vue hebdomadaire et mensuelle','✓ Rappels automatiques','✓ Historique des rendez-vous']
                    ).map((f,i)=><li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
              <div className="pri-small" style={{background:'#fef3e8'}}>
                <div>
                  <div style={{fontSize:30,marginBottom:12}}>💬</div>
                  <div className="pri-title" style={{fontSize:18}}>{lang==='es'?'Comunicación integrada':lang==='en'?'Integrated communication':lang==='pt'?'Comunicação integrada':'Communication intégrée'}</div>
                  <div className="pri-desc">{lang==='es'?'Mensajería interna con el equipo y los padres, sin salir de la plataforma.':lang==='en'?'Internal messaging with the team and parents, without leaving the platform.':lang==='pt'?'Mensagens internas com a equipe e os pais, sem sair da plataforma.':'Messagerie interne avec l\'équipe et les parents, sans quitter la plateforme.'}</div>
                  <ul className="pri-features">
                    {(lang==='es'?['✓ Chat con analistas','✓ Mensajes a padres','✓ Notificaciones push']:
                      lang==='en'?['✓ Chat with analysts','✓ Messages to parents','✓ Push notifications']:
                      lang==='pt'?['✓ Chat com analistas','✓ Mensagens para pais','✓ Notificações push']:
                      ['✓ Chat avec les analystes','✓ Messages aux parents','✓ Notifications push']
                    ).map((f,i)=><li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          )}

          {/* ── TAB 3: Familias ── */}
          {priTab === 3 && (
            <div className="pri-grid">
              <div className="pri-main" style={{background:'#fff7ed'}}>
                <div>
                  <div className="pri-icon">👨‍👩‍👧</div>
                  <div className="pri-badge" style={{background:'#EA580C'}}>{lang==='es'?'Para familias':lang==='en'?'For families':lang==='pt'?'Para famílias':'Pour familles'}</div>
                  <div className="pri-title">{lang==='es'?'Portal familiar nativo':lang==='en'?'Native family portal':lang==='pt'?'Portal familiar nativo':'Portail familial natif'}</div>
                  <div className="pri-desc">{lang==='es'?'Los padres se mantienen conectados al progreso de su hijo en tiempo real, sin necesitar conocimientos técnicos. Transparencia total con el equipo clínico.':lang==='en'?'Parents stay connected to their child\'s progress in real time, without needing technical knowledge. Full transparency with the clinical team.':lang==='pt'?'Os pais ficam conectados ao progresso do filho em tempo real, sem precisar de conhecimentos técnicos.':'Les parents restent connectés aux progrès de leur enfant en temps réel, sans connaissances techniques.'}</div>
                  <ul className="pri-features">
                    {(lang==='es'?[
                      '✓ Ver el progreso del paciente en tiempo real',
                      '✓ Acceso a reportes y resúmenes de sesión',
                      '✓ Mensajería directa con el especialista',
                      '✓ Agenda de citas y sesiones',
                      '✓ Actividades recomendadas para el hogar',
                      '✓ Notificaciones de metas alcanzadas',
                    ]:lang==='en'?[
                      '✓ View patient progress in real time',
                      '✓ Access to session reports and summaries',
                      '✓ Direct messaging with the specialist',
                      '✓ Appointment and session calendar',
                      '✓ Recommended home activities',
                      '✓ Goal achievement notifications',
                    ]:lang==='pt'?[
                      '✓ Ver o progresso do paciente em tempo real',
                      '✓ Acesso a relatórios e resumos de sessão',
                      '✓ Mensagens diretas com o especialista',
                      '✓ Agenda de consultas e sessões',
                      '✓ Atividades recomendadas para casa',
                      '✓ Notificações de metas atingidas',
                    ]:[
                      '✓ Voir les progrès du patient en temps réel',
                      '✓ Accès aux rapports de séance',
                      '✓ Messagerie directe avec le spécialiste',
                      '✓ Agenda des rendez-vous',
                      '✓ Activités recommandées à domicile',
                      '✓ Notifications d\'objectifs atteints',
                    ]).map((f,i)=><li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
              <div className="pri-small" style={{background:'#fef9c3'}}>
                <div>
                  <div style={{fontSize:30,marginBottom:12}}>📈</div>
                  <div className="pri-title" style={{fontSize:18}}>{lang==='es'?'Progreso visible':lang==='en'?'Visible progress':lang==='pt'?'Progresso visível':'Progrès visible'}</div>
                  <div className="pri-desc">{lang==='es'?'Gráficos claros del avance de tu hijo por cada objetivo ABA.':lang==='en'?'Clear charts of your child\'s progress for each ABA goal.':lang==='pt'?'Gráficos claros do avanço do seu filho por cada objetivo ABA.':'Graphiques clairs des progrès de votre enfant par objectif ABA.'}</div>
                  <ul className="pri-features">
                    {(lang==='es'?['✓ Gráficos por objetivo','✓ Porcentaje de avance semanal','✓ Alertas de metas cumplidas']:
                      lang==='en'?['✓ Charts per goal','✓ Weekly progress percentage','✓ Goal completion alerts']:
                      lang==='pt'?['✓ Gráficos por objetivo','✓ Porcentagem de avanço semanal','✓ Alertas de metas cumpridas']:
                      ['✓ Graphiques par objectif','✓ Pourcentage de progrès hebdomadaire','✓ Alertes d\'objectifs atteints']
                    ).map((f,i)=><li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
              <div className="pri-small" style={{background:'#fce7f3'}}>
                <div>
                  <div style={{fontSize:30,marginBottom:12}}>🏠</div>
                  <div className="pri-title" style={{fontSize:18}}>{lang==='es'?'Actividades en casa':lang==='en'?'Home activities':lang==='pt'?'Atividades em casa':'Activités à domicile'}</div>
                  <div className="pri-desc">{lang==='es'?'Recibe guías y actividades personalizadas para reforzar el trabajo terapéutico en el hogar.':lang==='en'?'Receive personalized guides and activities to reinforce therapeutic work at home.':lang==='pt'?'Receba guias e atividades personalizadas para reforçar o trabalho terapêutico em casa.':'Recevez des guides et activités personnalisés pour renforcer le travail thérapeutique à domicile.'}</div>
                  <ul className="pri-features">
                    {(lang==='es'?['✓ Guías semanales personalizadas','✓ Actividades sugeridas por ARIA','✓ Seguimiento de tareas en casa']:
                      lang==='en'?['✓ Personalized weekly guides','✓ Activities suggested by ARIA','✓ Home task tracking']:
                      lang==='pt'?['✓ Guias semanais personalizados','✓ Atividades sugeridas por ARIA','✓ Acompanhamento de tarefas em casa']:
                      ['✓ Guides hebdomadaires personnalisés','✓ Activités suggérées par ARIA','✓ Suivi des tâches à domicile']
                    ).map((f,i)=><li key={i}>{f}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* SHOWCASE — ANIMATED */}
      <ShowcaseAnimated t={t} />

      {/* WHY VANTY — ANIMATED */}
      <WhySection t={t} />

      {/* TESTIMONIAL */}
      <TestimonialSection t={t} />

      {/* MARQUEE */}
      <div className="marquee-section">
        <div className="marquee-track">
          {[...Array(2)].map((_,rep)=>t.marqueeItems.map((item,i)=>(
            <div key={`${rep}-${i}`} className="marquee-item"><span className="marquee-dot"/>{item}</div>
          )))}
        </div>
      </div>

      {/* CENTROS QUE CONFÍAN */}
      <TrustedCentersSection t={t} />

      {/* COMPARE */}
      <CompareSection t={t} />

      {/* HELP BANNER */}
      <div className="help-section">
        <div className="help-img-wrap" style={{position:'relative',overflow:'hidden',minHeight:'380px'}}>
          <img src="/images/banner.png" alt={t.helpTeam} style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',objectFit:'cover',objectPosition:'center'}}/>
          <div className="help-name">{t.helpTeam}<br/><span className="help-role">{t.helpRole}</span></div>
        </div>
        <div className="help-body">
          <div className="help-brand"><Globe size={16}/> {t.helpBrand}</div>
          <h2 className="help-h2">{t.helpTitle}</h2>
          <p className="help-desc">{t.helpDesc}</p>
        </div>
      </div>

      {/* PRICING */}
      <PricingSection t={t} />

      {/* FAQ */}
      <FaqSection t={t} faq={faq} setFaq={setFaq} />

      {/* CTA FINAL — ANIMATED */}
      <CtaSection t={t} WA_URL={WA_URL} EMAIL={EMAIL} />

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-grid">
          <div>
            <div className="footer-logo">
              <img src="/images/logo.png" alt="Vanty" style={{height:'38px',width:'auto',display:'block'}}/>
              <div style={{display:'flex',flexDirection:'column',lineHeight:1.15}}>
                <span style={{fontFamily:'Poppins,sans-serif',fontWeight:800,fontSize:'18px',color:'#fff',letterSpacing:'-0.02em'}}>VANTY</span>
                <span style={{fontFamily:'Inter,sans-serif',fontWeight:400,fontSize:'10px',color:'#9ca3af',letterSpacing:'0.01em'}}>{t.tagline}</span>
              </div>
            </div>
            <p className="footer-tagline">{t.footerTagline}</p>
            <div className="footer-socials">
              <a href={WA_URL} className="fsoc" target="_blank" rel="noopener noreferrer"><Phone size={16}/></a>
              <a href={`mailto:${EMAIL}`} className="fsoc"><Mail size={16}/></a>
              <a href="#" className="fsoc"><Instagram size={16}/></a>
              <a href="#" className="fsoc"><Facebook size={16}/></a>
            </div>
          </div>
          {t.footerCols.map((col,i)=>(
            <div key={i}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map((l,j)=>(
                  <li key={j}>
                    <a href={l.href==='wa'?WA_URL:l.href==='mail'?`mailto:${EMAIL}`:l.href}
                       target={l.href==='wa'?'_blank':undefined}
                       rel={l.href==='wa'?'noopener noreferrer':undefined}>
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h4> </h4>
            <div style={{padding:'14px 16px',background:'rgba(29,111,66,.12)',border:'1px solid rgba(29,111,66,.2)',borderRadius:12}}>
              <p style={{fontSize:11,color:'#4ade80',fontWeight:700,marginBottom:4,fontFamily:'Poppins,sans-serif'}}>{t.footerAllied}</p>
              <p style={{fontSize:13,color:'#6b7280',marginBottom:8}}>{t.footerAlliedName}</p>
              <a href="#aliados" style={{fontSize:11,color:'#4ade80',fontWeight:700,textDecoration:'none',display:'flex',alignItems:'center',gap:4}}>
                {t.lang==='EN'?'See our network →':t.lang==='PT'?'Ver nossa rede →':t.lang==='FR'?'Voir notre réseau →':'Ver nuestra red →'}
              </a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>{t.footerCopy}</p>
          <p>{t.footerMade}</p>
        </div>
      </footer>
    </>
  )
}
