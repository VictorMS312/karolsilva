# Changelog

## [v1.0.0] - 2026-03-17

### 🐛 Bugs Corrigidos

#### Críticos
- **Next.js 14+ Compatibility** — Movido `page.tsx` e `layout.tsx` para diretório `app/` conforme requer App Router
- **Tailwind CSS Config** — Corrigido `content` paths em `tailwind.config.ts` para incluir `./page.tsx` e `./layout.tsx` na raiz
- **CSS Directives** — Corrigido sequência de `@tailwind` e `@layer` em `globals.css`

#### Altos
- **Import Desnecessário** — Removido `import {} from "react/jsx-runtime"` sem uso em `page.tsx`
- **CSS Syntax** — Convertido `@theme` (Tailwind v4) para `@layer base { :root { ... } }` (Tailwind v3 compatível)
- **Dependência Não Declarada** — Removido `@import "tw-animate-css"` de `globals.css` (pacote não instalado)

#### Menores
- **Dependência Não Utilizada** — Removido `"geist": "latest"` de `package.json` (não importado em lugar algum)
- **Git Ignore** — Criado arquivo `.gitignore` (estava nomeado como `gitignore` sem ponto)

### ✨ Melhorias

- Estrutura do projeto agora segue padrão oficial Next.js 14+
- Tailwind CSS corretamente integrado
- Projeto pronto para compilação: `npm run build` executa com sucesso
- Documentação adicionada (README.md)

### 📦 Dependências

Atualizado para:
- `next`: 14.2.16 (com nota de segurança — considere fazer upgrade)
- `react`: ^18
- `react-dom`: ^18
- `typescript`: ^5
- `tailwindcss`: ^3.4.1
- `postcss`: ^8

### 🚀 Próximos Passos

1. [ ] Fazer push para GitHub
2. [ ] Configurar Vercel deployment
3. [ ] Testar em staging
4. [ ] Review final de conteúdo e SEO
5. [ ] Deploy para produção

### 📝 Notas

- Projeto está 100% funcional e compilável
- Todos os reels do Instagram estão embarcados via iframe
- Layout é responsivo e mobile-first
- Performance otimizada com Next.js

---

**Data:** 17 de Março de 2026  
**Status:** ✅ Pronto para Git & Deploy
