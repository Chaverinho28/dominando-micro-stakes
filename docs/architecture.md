# Arquitetura

## Estrutura

```text
src/
  components/       componentes de domínio e UI reutilizável
  components/ui/    primitives do design system
  data/             catálogo tipado de capítulos e conteúdo
  pages/            limites de rota carregados sob demanda
  stores/           estado global persistido com Zustand
  theme/            tokens de design centralizados
```

## Decisões técnicas

O catálogo de conteúdo vive em `data/chapters.ts`. A página de capítulo é dirigida pelos dados, portanto um novo módulo pode reutilizar o mesmo layout, cards, exercícios, flashcards e quiz sem replicar componentes.

O estado global foi separado por domínio: `userStore` contém a interface pronta para autenticação; `progressStore` controla conclusão e sequência; `courseStore` mantém favoritos; `settingsStore` mantém preferências. Apenas progresso, curso e settings são persistidos no navegador para não acoplar a aplicação a uma API antes da autenticação existir.

`components/ui` concentra APIs pequenas e acessíveis para componentes visuais. O CSS preserva classes de domínio nas páginas e primitives de UI em nomes `ui-*`, evitando dependência de uma biblioteca externa de componentes.

## Crescimento

Para centenas de páginas, mova o conteúdo de `data/` para uma API/CMS mantendo as interfaces `Chapter`, `Flashcard` e `QuizQuestion`. As rotas continuam lazy-loaded; uma futura camada de serviço pode hidratar stores sem alterar os componentes de apresentação.
