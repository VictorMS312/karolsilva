# 🚀 KarolUGC — Instruções de atualização

## O que foi mudado
- ✅ Idade atualizada para 20 anos
- ✅ Experiência atualizada para 4+ anos
- ✅ Tom claro com fundo creme/branco
- ✅ Efeitos glass em cards, nav, hero e seção de contato
- ✅ 10 reels do Instagram — **sem barra de rolagem** nos iframes
- ✅ Galeria de fotos nova (seção dedicada)
- ✅ Todas as marcas parceiras mantidas + 3 novas clientes adicionadas
- ✅ Copy profissional voltado para empresas/marcas
- ✅ Fontes editoriais: Cormorant Garamond (display) + Plus Jakarta Sans (corpo)
- ✅ Nav sticky com glass ao rolar
- ✅ Botão "Copiar e-mail" funcional
- ✅ Animações de entrada suaves

---

## ⚙️ Passo 1 — Preencha suas informações

Abra o arquivo `app/page.tsx` e edite as 3 constantes no topo do arquivo:

```ts
const WHATSAPP  = "5551999999999"   // ← coloque seu número com DDI+DDD
const EMAIL     = "seu@email.com"   // ← coloque seu e-mail
const IG_URL    = "https://www.instagram.com/eukaroluz/"  // ← já está correto
```

---

## 📁 Passo 2 — Substitua os arquivos no seu projeto

Copie os 3 arquivos desta pasta para dentro do seu projeto:

```
app/
  layout.tsx   → substitui o seu app/layout.tsx
  globals.css  → substitui o seu app/globals.css
  page.tsx     → substitui o seu app/page.tsx
```

---

## 🖼️ Passo 3 — Verifique as imagens

O site usa as mesmas imagens do site anterior. Confirme que as imagens existem em:

```
public/
  images/
    karolhero.jpg
    dominguesmimos.jpg
    xis.jpg
    karol-photo-new.jpg
    logos/
      pri-store-logo.png
      tropical-logo.png
      lavei-logo.jpg
      voke-agency-logo.png
  domingues-mimos-gift-store-logo.jpg
```

Para adicionar mais fotos na galeria, localize o array `GALLERY` em `page.tsx`
e adicione novos objetos seguindo o padrão:

```ts
{ src: "/images/sua-foto.jpg", alt: "Descrição", label: "Categoria", tall: false }
```

---

## ☁️ Passo 4 — Deploy no Vercel

```bash
git add .
git commit -m "redesign: novo visual profissional"
git push
```

O Vercel detecta automaticamente e faz o deploy. ✅

---

## 💡 Dica sobre os Reels

Os iframes do Instagram carregam o conteúdo diretamente da plataforma.
Se um reel for deletado ou tornar-se privado, o espaço ficará vazio —
é normal. Basta remover o ID do array `REELS` em `page.tsx`.

Para adicionar novos reels, copie o shortcode da URL:
`https://www.instagram.com/reel/**DV5-7-jEWsG**/` → adicione `"DV5-7-jEWsG"` ao array.
