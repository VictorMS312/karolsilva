# Karol UGC — Portfólio Digital

Site profissional para Karol Luz, criadora de conteúdo UGC (User Generated Content).

## 🚀 Stack Tecnológico

- **Framework:** Next.js 14+ (App Router)
- **Linguagem:** TypeScript
- **Estilo:** Tailwind CSS 3
- **Fontes:** Google Fonts (Cormorant Garamond, Plus Jakarta Sans)
- **Deploy:** Vercel (recomendado)

## 📋 Seções

1. **Hero** — Apresentação principal com chamada à ação
2. **Sobre** — Biografia e diferenciais
3. **Portfólio** — Reels do Instagram (embeds)
4. **Galeria** — Fotos de trabalhos realizados
5. **Parceiros** — Logo/nomes de marcas parceiras
6. **Contato CTA** — Seção de chamada para ação final
7. **Footer** — Links sociais e informações

## 🛠️ Instalação & Setup

```bash
# Instalar dependências
npm install

# Rodar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Iniciar servidor de produção
npm start

# Lint
npm run lint
```

## ⚙️ Configurações Iniciais

Edite as constantes em [app/page.tsx](app/page.tsx):

```typescript
const WHATSAPP  = "5551996910253"   // Seu número com DDD
const EMAIL     = "seu-email@example.com"
const IG_URL    = "https://www.instagram.com/seu-usuario/"
```

## 🎨 Cores & Variáveis

As cores e fonts estão definidas em [globals.css](globals.css) como variáveis CSS:

```css
--color-cream:    #FEFAF6
--color-rose:     #C94B76
--color-gold:     #D9855A
--color-dark:     #1C1917
--color-muted:    #78716C
```

## 📁 Estrutura

```
app/
├── layout.tsx       # RootLayout com metadata e fonts
├── page.tsx         # Componente principal
globals.css          # Estilos globais e classes utilitárias
images/
├── logos/           # Logos de parceiros
├── karolhero.jpg    # Foto principal
└── (outras imagens)
.gitignore
package.json
tsconfig.json
tailwind.config.ts
postcss.config.mjs
next.config.mjs
```

## 🔧 Bugs Corrigidos (v17.03.2026)

1. ✅ Estrutura Next.js 14+ — Movido arquivos para diretório `app/`
2. ✅ Tailwind Config — Atualizado paths para processar todos os arquivos
3. ✅ Diretivas CSS — Corrigido `@tailwind` vs `@layer` 
4. ✅ Imports desnecessários — Removido import vazio
5. ✅ Dependências — Removido `geist` não utilizado
6. ✅ Arquivo `.gitignore` — Criado com padrão correto

## 🚀 Deploy

### Vercel (Recomendado)

1. Push para GitHub
2. Conecte o repositório no [Vercel Dashboard](https://vercel.com)
3. Vercel detectará Next.js automaticamente
4. Configure variáveis de ambiente se necessário
5. Deploy automático em cada push para `main`

### Outros Hosts

O projeto está pronto para deploy em:
- Netlify
- AWS Amplify
- Azure Static Web Apps

## 📞 Contato & Suporte

- **Email:** silvaluzkaroline@gmail.com
- **WhatsApp:** +55 51 99691-0253
- **Instagram:** @eukaroluz

---

**Desenvolvido com 💛 para conectar marcas e pessoas.**
