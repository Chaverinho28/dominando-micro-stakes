# Produto — Dominando os Micro Stakes

## Objetivo

Transformar estudo de poker em uma prática diária, mensurável e motivadora para jogadores de MTT micro stakes.

## Público-alvo

Jogadores iniciantes e intermediários que querem sair do estudo passivo e desenvolver decisões pré-flop e pós-flop consistentes.

## Visão

Uma plataforma de aprendizagem de poker com a clareza de uma escola, a motivação de um produto de hábitos e a prática deliberada de uma ferramenta de treino.

## Roadmap

1. Conteúdo e progresso local — concluído.
2. Missões, XP, sequência e treino diário — concluído.
3. Autenticação, sincronização e histórico por usuário.
4. Biblioteca de cenários, revisão espaçada e rankings opcionais.
5. Analytics de aprendizagem e conteúdo adaptativo.

## Arquitetura do produto

A interface é data-driven: módulos vêm de `src/data`, progresso de stores Zustand e componentes reutilizáveis cuidam da apresentação. Essa separação permite conectar uma API, adicionar cenários e personalizar recomendações sem reescrever a Home ou os layouts de estudo.
