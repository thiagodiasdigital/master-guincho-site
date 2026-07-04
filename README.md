# Master Guincho

Site institucional da Master Guincho, estruturado em Next.js para conversao, SEO local e cobertura geografica.

## Uso correto
Este repositorio e a matriz.
Para evolucoes futuras, mantenha os dados reais em `config/` e `data/` e preserve a experiencia do hero.

Pontos de entrada:
- `docs/template/guides/MANUAL-DE-INSTRUCOES-DO-PROJETO.md`
- `docs/template/guides/README-TEMPLATE.md`
- `docs/internal/README.md`

## Stack
- Next.js App Router
- TypeScript
- Tailwind CSS
- componentes reutilizaveis
- configuracao via `config/`
- conteudo via `data/`
- assets por cliente em `public/clients/`

## Como usar em um novo cliente
Atualize primeiro:
- `config/site.config.ts`
- `config/seo.config.ts`
- `config/theme.config.ts`
- `data/home.data.ts`
- `data/showcase.data.ts`
- `data/services.data.ts`
- `data/locations.data.ts`
- `data/faq.data.ts`
- `public/images/`, `public/sequences/`

## Estrutura
- `app/`, `components/`, `config/`, `data/`, `lib/`, `public/`: runtime do template
- `docs/template/`: guias de uso e parametrizacao
- `docs/internal/`: historico, checklists e material operacional interno, quando aplicavel

## Comandos
```bash
npm install
npm run lint
npm run build
npm run dev
```

## Variaveis de ambiente
Use `.env.example` como referencia.

## Estado atual
- Home, hubs e paginas internas estao neutralizados para uso institucional.
- Os assets da Master Guincho estao em `public/images/` e `public/sequences/`.
- O Hero premium permanece como modulo sensivel.
- O runtime foi parametrizado para a operacao real da Master Guincho.
