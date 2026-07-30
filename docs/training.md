# Treinamento inteligente

## Visão geral

O Centro de Treinamento é uma experiência de prática deliberada. Ele apresenta uma situação, coleta uma decisão e devolve explicação, conceitos e condições em que a decisão muda. O objetivo é ensinar o raciocínio, não apenas marcar certo ou errado.

## Estrutura

```text
src/features/training/
  data/situations.ts        banco inicial de situações
  services/situationService.ts
  components/TrainingFilters.tsx
  types.ts                  contrato de dados
src/stores/trainingStore.ts estatísticas e filtros persistidos
```

`TrainingSituation` é o contrato central. Ele inclui identificação, categoria, posição, stack, blind, cartas do herói, board, vilões, ação correta, explicação, conceitos, dificuldade e recompensa. O contrato suporta spots pré-flop agora e pode acomodar pós-flop preenchendo `board` e contexto de ação.

## Escalabilidade

O componente não conhece o banco de dados: ele chama `situationService`. Hoje esse serviço filtra seeds locais; futuramente pode consultar uma API paginada, cache local ou CMS sem modificar a página. Para mais de 5.000 situações, recomenda-se API com filtros indexados por posição, stack, categoria e dificuldade, além de seleção sem repetição baseada no histórico do aluno.

## Estado e métricas

`trainingStore` persiste filtros e estatísticas no navegador. Cada resposta registra situações resolvidas, corretas, sequência, XP e segundos treinando. Em uma futura autenticação, esse store será o adaptador local de uma API de progresso.

## Acessibilidade e performance

As opções usam `radiogroup` e feedback com `aria-live`. A rota permanece carregada via `React.lazy`; filtros selecionam apenas situações compatíveis e a lista é memoizada na página.
