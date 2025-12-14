import Head from 'next/head';
import Script from 'next/script';
import { useState, useCallback, useRef, useEffect } from 'react';

console.log('✅ pages/index.js carregado com sucesso');

const NUMEROLOGY_DATA = {
  1: { name: "Vermelho", hex: "#ff5252", archetype: "O Pioneiro", tags: ["Iniciativa", "Fogo", "Ação"], desc: "Seu 2026 pede **Chama Viva**. O número 1 é o Big Bang pessoal. O **Vermelho** te dá a voltagem necessária para sair da inércia, liderar sem pedir licença e queimar qualquer insegurança." },
  2: { name: "Laranja", hex: "#ff9800", archetype: "O Diplomata", tags: ["Conexão", "Calor", "Fluxo"], desc: "[ANO] [MÊS]: será sobre **Fusão**. O **Laranja** ativa seu magnetismo social, atraindo parcerias férteis e amores leves. É a cor que dissolve barreiras e cria pontes douradas." },
  3: { name: "Amarelo", hex: "#ffeb3b", archetype: "O Criador", tags: ["Brilho", "Expansão", "Sol"], desc: "[ANO] [MÊS]: é o ano do **Palco**. O universo quer te ver brilhar. O **Amarelo** atua como um holofote solar, destravando a abundância que vem através da sua voz e da sua imagem." },
  4: { name: "Verde", hex: "#4caf50", archetype: "O Construtor", tags: ["Raiz", "Saúde", "Terra"], desc: "[ANO] [MÊS]: exige **Alicerce**. É hora de materializar. O **Verde** acalma a mente ansiosa e traz a frequência de cura necessária para que seus projetos cresçam sólidos como árvores antigas." },
  5: { name: "Azul Claro", hex: "#40c4ff", archetype: "O Explorador", tags: ["Ar", "Liberdade", "Voo"], desc: "[ANO] [MÊS]: traz **Ventos de Mudança**. A estagnação acabou. O **Azul Claro** é seu oxigênio: ele permite navegar por transformações rápidas com a leveza de quem sabe voar." },
  6: { name: "Azul Índigo", hex: "#536dfe", archetype: "O Guardião", tags: ["Profundidade", "Lealdade", "Mar"], desc: "[ANO] [MÊS]: foca no **Coração**. É hora de proteger o que importa. O **Azul Índigo** traz a autoridade serena do oceano profundo, curando relações e trazendo nobreza à sua presença." },
  7: { name: "Violeta", hex: "#e040fb", archetype: "O Místico", tags: ["Intuição", "Magia", "Éter"], desc: "[ANO] [MÊS]: é sobre **Oculto**. Enquanto todos olham fora, você vê além. O **Violeta** blinda sua aura e aguça o terceiro olho para encontrar tesouros onde ninguém mais está procurando." },
  8: { name: "Rosa", hex: "#ff4081", archetype: "O Visionário", tags: ["Poder", "Império", "Ambição"], desc: "[ANO] [MÊS]: é o ano da **Coroação**. O sucesso material te espera. O **Rosa** equilibra sua ambição com humanidade, garantindo que você conquiste o trono sem perder a alma." },
  9: { name: "Dourado", hex: "#ffd740", archetype: "O Mestre", tags: ["Glória", "Finalização", "Ouro"], desc: "[ANO] [MÊS]: é a **Transmutação**. Um ciclo se fecha com chave de ouro. O **Dourado** atrai a vitória final e a sabedoria suprema, limpando o caminho para uma nova era." }
};

const getMonthName = (monthNum) => {
  const months = [
    'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
  ];
  return months[monthNum - 1] || 'mês atual';
};

const MASTER_LINK = "https://s.shopee.com.br/8fLHdaHSxg";

// ========== FUNÇÕES DE NUMEROLOGIA CORRIGIDAS ==========
const reduceTo1to9 = (n) => {
  let num = Math.abs(Number(n) || 0);
  while (num > 9) {
    num = String(num).split('').reduce((a, b) => a + Number(b), 0);
  }
  return num || 1;
};

const getUniversalYearNumber = (year = 2026) => {
  return reduceTo1to9(String(year).split('').reduce((a, b) => a + Number(b), 0));
};

const calcPersonalYear = (birthDate, year = 2026) => {
  const [, m, d] = birthDate.split('-').map(Number);
  const universal = getUniversalYearNumber(year);
  const py = reduceTo1to9(reduceTo1to9(d) + reduceTo1to9(m) + universal);
  console.log(`📊 Ano Pessoal 2026: dia=${d}, mês=${m}, universal=${universal} → ${py}`);
  return py;
};

const calcPersonalMonth = (birthDate, year = 2026, month = new Date().getMonth() + 1) => {
  const py = calcPersonalYear(birthDate, year);
  const pm = reduceTo1to9(py + month);
  console.log(`📊 Mês Pessoal: AP=${py}, mês=${month} → ${pm}`);
  return pm;
};

const calcPersonalDay = (birthDate, year = 2026) => {
  const monthNum = new Date().getMonth() + 1;
  const dayNum = new Date().getDate();
  const pm = calcPersonalMonth(birthDate, year, monthNum);
  const pd = reduceTo1to9(pm + dayNum);
  console.log(`📊 Dia Pessoal: MP=${pm}, dia=${dayNum} → ${pd}`);
  return pd;
};
// ========== FIM FUNÇÕES NUMEROLOGIA ==========

export default function OracleHome() {
  const [result, setResult] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const formTracked = useRef(false);
  const toastRef = useRef(null);

  useEffect(() => {
    try {
      console.log('🛡️ Protegendo window de extensões...');
      if (typeof window !== 'undefined') {
        Object.defineProperty(window, 'ethereum', {
          value: window.ethereum || {},
          writable: false,
          configurable: true
        });
        Object.defineProperty(window, 'tronLink', {
          value: window.tronLink || {},
          writable: false,
          configurable: true
        });
      }
      console.log('✅ Window protegido!');
    } catch (e) {
      console.warn('⚠️ Erro ao proteger window:', e);
    }
  }, []);

  const calculateNumerology = useCallback((birthDate) => {
    console.log('📊 Calculando numerologia para:', birthDate);
    const [y, m, d] = birthDate.split('-').map(Number);
    let num = d + m + 1;
    while (num > 9) {
      num = num.toString().split('').reduce((a, b) => parseInt(a) + parseInt(b), 0);
    }
    console.log('✅ Resultado numerológico (REVEILLON):', num);
    return num;
  }, []);

  const handleFormStart = useCallback(() => {
    console.log('📝 Formulário iniciado');
    if (!formTracked.current && typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'form_start');
      formTracked.current = true;
    }
  }, []);

  const handleCalculate = useCallback((e) => {
    e.preventDefault();
    console.log('🎯 Botão "Revelar Energia" clicado');
    setIsLoading(true);

    const birthdate = document.getElementById('birthdate')?.value;
    const occasion = document.getElementById('occasion')?.value;
    const gender = document.getElementById('gender')?.value;

    console.log('📋 Dados capturados:', { birthdate, occasion, gender });

    if (!birthdate) {
      alert('Por favor, escolha uma data para o Oráculo.');
      setIsLoading(false);
      return;
    }

    try {
      let num;

      // ========== LÓGICA DE CÁLCULO POR OCASIÃO ==========
      if (occasion === 'reveillon') {
        // Réveillon usa o cálculo original (Ano Pessoal base)
        num = calculateNumerology(birthdate);
        console.log(`🎆 REVEILLON → Usando cálculo original: ${num}`);
      } else if (occasion === 'work' || occasion === 'home') {
        // Work e Home usam Mês Pessoal
        num = calcPersonalMonth(birthdate, 2026);
        console.log(`${occasion === 'work' ? '💼' : '🏠'} ${occasion.toUpperCase()} → Mês Pessoal: ${num}`);
      } else if (occasion === 'love' || occasion === 'gym') {
        // Love e Gym usam Dia Pessoal
        num = calcPersonalDay(birthdate, 2026);
        console.log(`${occasion === 'love' ? '💘' : '⚡'} ${occasion.toUpperCase()} → Dia Pessoal: ${num}`);
      }
      // ========== FIM LÓGICA ==========

      const data = NUMEROLOGY_DATA[num];

      if (!data) throw new Error('Cor não encontrada');

      // Substitui [ANO] [MÊS] se não for Réveillon
      let finalDesc = data.desc;
      if (occasion !== 'reveillon') {
        const currentMonth = getMonthName(new Date().getMonth() + 1);
        const currentYear = new Date().getFullYear();
        finalDesc = finalDesc
          .replace('[ANO]', `${currentYear}`)
          .replace('[MÊS]:', `${currentMonth}:`);
      }

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'form_complete', {
          result_number: num,
          result_color: data.name,
          user_focus: occasion,
        });
      }

      let term = '';
      const suffix = gender === 'male' ? 'Masculina' : gender === 'female' ? 'Feminina' : '';
      if (gender === 'uni' || occasion === 'home') {
        term = `Decoração ${data.name} Casa`;
      } else {
        switch (occasion) {
          case 'reveillon':
            term = `Look ${data.name} ${suffix} Reveillon`;
            break;
          case 'work':
            term = `Camisa Social ${data.name} ${suffix}`;
            break;
          case 'love':
            term = `Look ${data.name} ${suffix} Elegante`;
            break;
          case 'gym':
            term = `Roupa Academia ${data.name} ${suffix}`;
            break;
          default:
            term = `Look ${data.name} ${suffix}`;
        }
      }

      console.log('🎨 Cor revelada:', data.name, '| Search term:', term);
      setResult({ ...data, num, desc: finalDesc });
      setSearchTerm(term.trim());

      setTimeout(() => {
        document.getElementById('result')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 100);
    } catch (error) {
      console.error('❌ Erro ao calcular:', error);
      alert('Erro ao processar. Tente novamente.');
    } finally {
      setIsLoading(false);
    }
  }, [calculateNumerology]);

  const handleCopyAndGo = useCallback(async () => {
    if (!searchTerm) return;

    console.log('📋 Copiando search term:', searchTerm);
    const btn = document.getElementById('btnAction');
    const originalText = btn?.innerHTML;

    if (btn) {
      btn.innerHTML = '<i class="fas fa-check"></i> Copiado! Abrindo...';
      btn.style.background = '#00e676';
      btn.style.color = '#003300';
    }

    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(searchTerm);
      } else {
        const textarea = document.createElement('textarea');
        textarea.value = searchTerm;
        document.body.appendChild(textarea);
        textarea.select();
        document.execCommand('copy');
        document.body.removeChild(textarea);
      }

      console.log('✅ Texto copiado!');

      if (toastRef.current) {
        toastRef.current.classList.add('show');
        setTimeout(() => toastRef.current?.classList.remove('show'), 4000);
      }

      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'click_vitrine', {
          term: searchTerm,
          color: result?.name,
        });
      }

      setTimeout(() => {
        console.log('🌐 Abrindo Shopee...');
        const newWindow = window.open(MASTER_LINK, '_blank');
        if (!newWindow || newWindow.closed) {
          window.location.href = MASTER_LINK;
        }

        if (btn && originalText) {
          setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.background = '#fff';
            btn.style.color = '#121212';
          }, 1000);
        }
      }, 2000);
    } catch (err) {
      console.error('❌ Erro ao copiar:', err);
      window.location.href = MASTER_LINK;
    }
  }, [searchTerm, result]);

  const handleShare = useCallback(() => {
    if (!result) return;

    const occasion = document.getElementById('occasion')?.value;
    const occasionNames = {
      reveillon: '🎆 Réveillon',
      work: '💼 Carreira',
      love: '💘 Amor',
      gym: '⚡ Treino',
      home: '🏠 Lar'
    };

    const occasionEmoji = occasionNames[occasion] || '✨ Ocasião';
    const tagsText = result.tags.join(' • ');
    const descSnippet = result.desc.replace(/\[MÊS\]:/g, '').substring(0, 80).trim();

    console.log('📱 Compartilhando no WhatsApp:', result.name);
    const text = `🔮 Minha vibração para ${occasionEmoji} em 2026 é **${result.name.toUpperCase()}**!\n\n${result.archetype}\n${tagsText}\n\n"${descSnippet}..."\n\nQual é a SUA cor para cada ocasião?\n\nDescubra grátis aqui: ${typeof window !== 'undefined' ? window.location.href : 'https://oraculo-cores.vercel.app'}`;
    const url = `https://wa.me/?text=${encodeURIComponent(text)}`;

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'share_intent', {
        platform: 'whatsapp',
        color: result.name,
        occasion: occasion,
      });
    }

    window.open(url, '_blank');
  }, [result]);

  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="A Numerologia revela a cor exata para destravar sua prosperidade em 2026. Faça o teste gratuito agora." />
        <link rel="canonical" href="https://oraculo-cores.vercel.app/" />
        <meta property="og:site_name" content="Oráculo 2026" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://oraculo-cores.vercel.app/" />
        <meta property="og:title" content="Qual é a sua Cor da Virada 2026? 🔮" />
        <meta property="og:description" content="Veja sua cor para Réveillon 2026 e mais ocasiões! Descubra agora." />
        <meta property="og:image" content="https://oraculo-cores.vercel.app/api/og" />
        <meta property="og:image:secure_url" content="https://oraculo-cores.vercel.app/api/og" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content="https://oraculo-cores.vercel.app/" />
        <meta name="twitter:title" content="Qual é a sua Cor da Virada 2026? 🔮" />
        <meta name="twitter:description" content="Veja sua cor para Réveillon 2026 e mais ocasiões! Descubra agora." />
        <meta name="twitter:image" content="https://oraculo-cores.vercel.app/api/og" />
        <link rel="shortcut icon" href="/img/favicon.ico" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/img/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="192x192" href="/img/android-chrome-192x192.png" />
        <link rel="icon" type="image/png" sizes="512x512" href="/img/android-chrome-512x512.png" />
        <title>Oráculo 2026 | Sua Cor do Poder</title>
        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;500;700;900&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="/styles.css" />
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6341691198145403" crossOrigin="anonymous"></script>
      </Head>

      <Script src="https://www.googletagmanager.com/gtag/js?id=G-Z7BKYJSJN6" strategy="afterInteractive" />
      <Script id="gtag-init" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-Z7BKYJSJN6');` }} />

      <div className="container">
        <h1><i className="fas fa-moon"></i> Oráculo 2026</h1>
        <p className="sub">Descubra a frequência cromática que vai sintonizar sua prosperidade no próximo ciclo.</p>
        <form onSubmit={handleCalculate}>
          <div className="form-group">
            <label htmlFor="birthdate">Sua Data de Nascimento</label>
            <input type="date" id="birthdate" onFocus={handleFormStart} required />
          </div>
          <div className="form-group">
            <label htmlFor="occasion">Seu Foco Principal</label>
            <select id="occasion" defaultValue="reveillon">
              <option value="reveillon">✨ Réveillon (A Grande Virada)</option>
              <option value="work">💼 Carreira & Poder</option>
              <option value="love">💘 Amor, Date & Sedução</option>
              <option value="gym">⚡ Energia Vital & Treino</option>
              <option value="home">🏠 Harmonia do Santuário</option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="gender">Seu Estilo</label>
            <select id="gender" defaultValue="male">
              <option value="male">Masculino</option>
              <option value="female">Feminino</option>
              <option value="uni">Decoração / Objeto</option>
            </select>
          </div>
          <button type="submit" className="btn-calc" disabled={isLoading}>
            {isLoading ? '⏳ PROCESSANDO...' : 'REVELAR ENERGIA'}
          </button>
        </form>
        {result && (
          <div id="result" style={{ display: 'block' }}>
            <div className="archetype-title">ARQUÉTIPO: {result.archetype}</div>
            <div className="badge" style={{ boxShadow: `0 0 50px ${result.hex}`, borderColor: result.hex }}>{result.num}</div>
            <h2 className="color-hero" style={{ color: result.hex, textShadow: `0 0 30px ${result.hex}90` }}>{result.name}</h2>
            <div className="insight-card" style={{ borderLeftColor: result.hex }}>
              <div className="insight-text" dangerouslySetInnerHTML={{ __html: result.desc.replace(/\*\*(.*?)\*\*/g, `<b style="color:${result.hex}">$1</b>`).replace(/([A-Z][a-z]+o)\:/g, `<strong style="color:${result.hex}">$1</strong>:`) }} />
              <div className="tags-container">
                {result.tags.map((tag) => (
                  <span key={tag} className="tag" style={{ borderColor: result.hex }}>{tag}</span>
                ))}
              </div>
            </div>
            <div className="copy-box">
              <span style={{ fontSize: '0.65rem', textTransform: 'uppercase', color: '#aaa', fontWeight: 700 }}>
                <i className="fas fa-magic"></i> Sua busca de poder (Copiada!)
              </span>
              <div className="search-preview">{searchTerm}</div>
            </div>
            <button className="btn-shopee" id="btnAction" onClick={handleCopyAndGo}>
              Ver Vitrine de Ideias <i className="fas fa-images"></i>
            </button>
            <button className="btn-share" onClick={handleShare}>
              <i className="fab fa-whatsapp"></i> Compartilhar no WhatsApp
            </button>
          </div>
        )}
      </div>
      <div id="toast" ref={toastRef}>
        <i className="fas fa-check-circle"></i>
        <span>Look copiado! Cole na Shopee.</span>
      </div>
    </>
  );
}