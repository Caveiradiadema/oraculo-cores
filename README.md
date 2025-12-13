# 🔮 Oráculo 2026 - Numerologia Interativa

Descubra a cor que vai sintonizar sua prosperidade em 2026!

Um teste numerológico interativo que revela qual cor do poder corresponde à sua data de nascimento e seus objetivos para o próximo ano. Integrado com Shopee para encontrar looks perfeitos na cor revelada.

---

## ✨ Funcionalidades

- 🎨 **9 Cores Numerológicas** - Cada uma com seu próprio arquétipo e significado profundo
- 📅 **Cálculo Numerológico Preciso** - Baseado na redução numerológica de sua data de nascimento
- 🎯 **Personalizações Completas** - Escolha sua ocasião:
  - ✨ Réveillon (A Grande Virada)
  - 💼 Carreira & Poder
  - 💘 Amor, Date & Sedução
  - ⚡ Energia Vital & Treino
  - 🏠 Harmonia do Santuário
- 👥 **Estilo Flexível** - Adapte para Masculino, Feminino ou Decoração/Objeto
- 🛒 **Integração Shopee** - Copie a busca gerada e encontre looks na cor revelada
- 📱 **Compartilhamento WhatsApp** - Divulgue seu resultado com amigos e familiares
- 📊 **Google Analytics** - Rastreamento completo de eventos e comportamento do usuário
- 🎬 **Open Graph Dinâmico** - Imagens customizadas para compartilhamento em redes sociais
- 📱 **Responsivo** - Funciona perfeitamente em mobile, tablet e desktop

---

## 🎨 As 9 Cores do Poder 2026

| Número | Cor | Arquétipo | Tema | Significado |
|--------|-----|-----------|------|------------|
| 1 | 🔴 Vermelho | O Pioneiro | Chama Viva | Iniciativa, Fogo, Ação |
| 2 | 🟠 Laranja | O Diplomata | Fusão | Conexão, Calor, Fluxo |
| 3 | 🟡 Amarelo | O Criador | Palco | Brilho, Expansão, Sol |
| 4 | 🟢 Verde | O Construtor | Alicerce | Raiz, Saúde, Terra |
| 5 | 🔵 Azul Claro | O Explorador | Ventos de Mudança | Ar, Liberdade, Voo |
| 6 | 🔷 Azul Índigo | O Guardião | Coração | Profundidade, Lealdade, Mar |
| 7 | 🟣 Violeta | O Místico | Oculto | Intuição, Magia, Éter |
| 8 | 🌸 Rosa | O Visionário | Coroação | Poder, Império, Ambição |
| 9 | 💛 Dourado | O Mestre | Transmutação | Glória, Finalização, Ouro |

---

## 🛠️ Stack Técnico

- **Next.js 16** - Framework React moderna com Turbopack
- **React 18** - Biblioteca de UI com Hooks
- **CSS Customizado** - Design system próprio com variáveis CSS
- **Vercel OG** - Geração dinâmica de imagens Open Graph
- **Google Tag Manager** - Analytics e tracking de eventos
- **Font Awesome 6** - Ícones de alta qualidade
- **Google Fonts** - Tipografia Outfit

---

## 📦 Estrutura do Projeto

```
oraculo-cores/
├── pages/
│   ├── index.js              # Componente principal do Oráculo
│   └── api/
│       └── og.js             # Gerador de Open Graph images dinâmicas
├── public/
│   ├── styles.css            # CSS global com design system
│   ├── img/
│   │   ├── favicon.ico
│   │   ├── favicon-32x32.png
│   │   ├── favicon-16x16.png
│   │   ├── apple-touch-icon.png
│   │   ├── android-chrome-192x192.png
│   │   └── android-chrome-512x512.png
├── next.config.js            # Configuração do Next.js
├── package.json              # Dependências do projeto
└── README.md                 # Este arquivo
```

---

## 🚀 Como Rodar Localmente

### Pré-requisitos
- Node.js 18+ instalado
- npm ou yarn

### Instalação

```bash
# Clone o repositório
git clone https://github.com/SEU_USUARIO/oraculo-cores.git
cd oraculo-cores

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

---

## 🔨 Scripts Disponíveis

```bash
# Desenvolvimento com Hot Reload
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Verificar linting (se configurado)
npm run lint
```

---

## 📊 Como Funciona

1. **Entrada do Usuário**
   - Data de nascimento (obrigatória)
   - Ocasião/Foco (Réveillon, Carreira, Amor, Treino, Casa)
   - Estilo (Masculino, Feminino, Decoração/Objeto)

2. **Cálculo Numerológico**
   - Soma o dia + mês + 1 (ano base)
   - Reduz a um dígito único (1-9)
   - Busca a cor correspondente

3. **Exibição de Resultado**
   - Número calculado com halo colorido
   - Nome e cor em destaque
   - Arquétipo e significado personalizados
   - Tags com temas principais
   - Search term gerado automaticamente

4. **Ações do Usuário**
   - Copiar search term (automático)
   - Abrir Shopee com link de afiliado
   - Compartilhar no WhatsApp

---

## 🌐 Deploy no Vercel

### Método 1: Deploy Automático (Recomendado)

1. Faça push do seu código para GitHub
2. Acesse [Vercel.com](https://vercel.com)
3. Clique em "New Project"
4. Selecione seu repositório GitHub
5. Clique "Deploy"
6. Pronto! Seu site está live em `oraculo-cores.vercel.app`

### Método 2: Deploy via CLI

```bash
# Instale Vercel CLI globalmente
npm i -g vercel

# Faça login
vercel login

# Deploy
vercel
```

---

## 📈 Analytics & Rastreamento

O projeto integra **Google Tag Manager** com os seguintes eventos:

- `form_start` - Usuário clica no campo de data
- `form_complete` - Formulário é submetido com sucesso
- `click_vitrine` - Usuário clica em "Ver Vitrine de Ideias"
- `share_intent` - Usuário clica em compartilhar WhatsApp

Configure sua propriedade do Google Analytics no `pages/index.js`:
```javascript
gtag('config', 'G-XXXXXXX'); // Substitua com seu ID
```

---

## 🎨 Customização

### Mudar Cores
Edite o objeto `NUMEROLOGY_DATA` em `pages/index.js`:
```javascript
1: { 
  name: "Vermelho", 
  hex: "#ff5252", // Mude este valor
  archetype: "O Pioneiro",
  // ...
}
```

### Mudar Link da Shopee
Edite `MASTER_LINK` em `pages/index.js`:
```javascript
const MASTER_LINK = "https://s.shopee.com.br/seu-link-aqui";
```

### Mudar Ocasiões
Adicione novas opções no `<select id="occasion">`:
```javascript
<option value="nova">🎯 Nova Ocasião</option>
```

Depois atualize a lógica em `handleCalculate()`.

---

## 🔒 Segurança & Performance

- ✅ Proteção contra XSS com `dangerouslySetInnerHTML` seguro
- ✅ Bloqueio de extensões conflitantes (TronLink, MetaMask)
- ✅ Compressão automática de assets
- ✅ Otimização de imagens
- ✅ Cache dinâmico no Vercel
- ✅ HTTPS por padrão

---

## 📱 Compatibilidade

- ✅ Chrome/Edge 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Mobile Safari (iOS 14+)
- ✅ Android Chrome

---

## 🤝 Contribuindo

Sugestões e melhorias são bem-vindas!

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

---

## 📝 Licença

Este projeto está sob a licença **MIT**. Você é livre para usar, modificar e distribuir, desde que mantenha a atribuição original.

---

## 👨‍💻 Desenvolvedor

**Seu Nome**  
Web Developer | Digital Content Creator  
📧 seu.email@exemplo.com  
🔗 [Portfolio](https://seu-portfolio.com)  
📱 [@seu_instagram](https://instagram.com/seu_instagram)

---

## 🙏 Agradecimentos

- 🎨 Inspiração em numerologia moderna
- 🛒 Integração Shopee para monetização
- 📊 Google para analytics
- 🚀 Vercel pela plataforma incrível
- 💙 Next.js pela excelente DX

---

## 📞 Suporte

Encontrou um bug? Abra uma issue no GitHub!

Se tiver dúvidas, envie um email ou abra uma discussão no repo.

---

## 🎉 Changelog

### v1.0.0 - 13 de Dezembro de 2025
- ✅ Lançamento inicial
- ✅ 9 cores numerológicas
- ✅ Integração Shopee completa
- ✅ Compartilhamento WhatsApp
- ✅ Analytics Google
- ✅ Open Graph dinâmico
- ✅ Design responsivo
- ✅ Proteger contra extensões

---

**Desenvolvido com ❤️ e muita numerologia mágica.**

🔮 Descubra sua cor de poder para 2026! 🔮
