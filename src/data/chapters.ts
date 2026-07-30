import type { LucideIcon } from 'lucide-react'
import { BrainCircuit, CircleDollarSign, Compass, Gauge, MapPin, Target } from 'lucide-react'

export type Accent = 'emerald' | 'sky' | 'violet' | 'amber' | 'rose'

export interface Lesson { title: string; duration: string; completed?: boolean }
export interface ContentSection { heading: string; paragraphs: string[]; example?: { label: string; text: string } }
export interface Quiz { question: string; options: string[]; answer: number; explanation: string }

export interface Chapter {
  id: string
  number: number
  title: string
  eyebrow: string
  description: string
  objective: string
  icon: LucideIcon
  accent: Accent
  estimatedMinutes: number
  lessons: Lesson[]
  progress: number
  takeaway: string
  content?: ContentSection[]
  coachTip?: string
  commonMistakes?: string[]
  exercise?: { title: string; prompt: string; checklist: string[] }
  quiz?: Quiz
}

export const chapters: Chapter[] = [
  { id: 'fundamentos', number: 1, title: 'Fundamentos dos Micro Stakes', eyebrow: 'A base que protege seu bankroll', description: 'Construa uma rotina simples, lucrativa e repetível antes de buscar jogadas avançadas.', objective: 'Entender o ambiente micro e adotar decisões consistentes.', icon: Compass, accent: 'emerald', estimatedMinutes: 30, progress: 33, lessons: [{ title: 'O que torna os micro stakes diferentes', duration: '8 min', completed: true }, { title: 'Seu plano de jogo inicial', duration: '12 min' }, { title: 'Erros caros que você pode eliminar hoje', duration: '10 min' }], takeaway: 'Nos micro stakes, disciplina vence criatividade: jogue bons ranges, cobre valor e simplifique decisões.' },
  { id: 'pre-flop', number: 2, title: 'Estratégia Pré-flop', eyebrow: 'Entre no flop com vantagem', description: 'Ranges práticos de abertura, 3-bet e defesa para as situações que mais aparecem nos MTTs.', objective: 'Tomar decisões pré-flop rápidas, objetivas e adaptadas ao field.', icon: Target, accent: 'sky', estimatedMinutes: 40, progress: 0, lessons: [{ title: 'Ranges de abertura por posição', duration: '15 min' }, { title: '3-bet: valor antes de blefe', duration: '14 min' }, { title: 'Defendendo o big blind sem exagerar', duration: '11 min' }], takeaway: 'Uma seleção pré-flop sólida faz o pós-flop ficar mais fácil — e seus fichas durarem mais.' },
  {
    id: 'gestao-bankroll', number: 3, title: 'Gestão de Bankroll', eyebrow: 'Proteja o jogo que você quer jogar amanhã', description: 'Transforme sua banca em uma ferramenta de decisão, não em um placar emocional.', objective: 'Definir limites de compra e regras objetivas para subir ou descer de stake.', icon: CircleDollarSign, accent: 'amber', estimatedMinutes: 18, progress: 0,
    lessons: [{ title: 'O bankroll é sua munição', duration: '6 min' }, { title: 'Regras de buy-in para MTTs', duration: '7 min' }, { title: 'Quando subir e quando recuar', duration: '5 min' }], takeaway: 'Seu limite é definido pelo bankroll, não pelo último torneio que você ganhou.',
    content: [
      { heading: 'Bankroll não é saldo disponível', paragraphs: ['Bankroll é o dinheiro separado exclusivamente para jogar poker. Ele não paga contas, não cobre um impulso e não deve mudar porque você teve um domingo bom ou ruim.', 'Em MTTs, a distribuição dos resultados é extrema. Você pode jogar bem por semanas sem uma premiação relevante; o papel da gestão é manter você no jogo durante esse intervalo.'] },
      { heading: 'Uma regra simples para os micro stakes', paragraphs: ['Para um calendário regular de MTTs, trabalhe com pelo menos 100 buy-ins do seu torneio médio. Se o seu ABI (average buy-in) é US$ 2, sua banca de poker deve começar perto de US$ 200.', 'Prefira registrar o ABI real da semana, e não o torneio mais barato da grade. Isso evita que alguns tiros caros distorçam sua exposição.'], example: { label: 'Exemplo prático', text: 'Com US$ 150 de banca, mantenha ABI de até US$ 1,50. Um torneio de US$ 5 só cabe como satélite, promoção ou exceção planejada — não como hábito.' } },
      { heading: 'Subir de limite é uma decisão de processo', paragraphs: ['Suba quando a banca sustentar o novo ABI e você tiver amostra suficiente de execução disciplinada. Uma boa sequência não prova que você “venceu” o limite.', 'Ao perder 20 a 25 buy-ins do novo nível, reduza o ABI imediatamente. Descer não é fracasso: é a regra que torna possível voltar preparado.'] },
    ], coachTip: 'Crie uma carteira ou conta separada para o bankroll. A separação física reduz decisões emocionais antes que elas apareçam na mesa.', commonMistakes: ['Usar a banca para despesas pessoais e repor depois.', 'Aumentar o buy-in para recuperar uma sessão ruim.', 'Olhar apenas o total em dólares e ignorar o número de buy-ins.'], exercise: { title: 'Defina sua regra de jogo', prompt: 'Anote sua banca atual e calcule o ABI máximo usando 100 buy-ins.', checklist: ['Banca atual ÷ 100 = ABI máximo', 'Escolhi uma grade que respeita este ABI', 'Defini o gatilho de recuo em 25 buy-ins'] }, quiz: { question: 'Com uma banca de US$ 300, qual ABI respeita uma regra de 100 buy-ins?', options: ['US$ 1', 'US$ 3', 'US$ 10'], answer: 1, explanation: 'US$ 300 ÷ 100 = US$ 3. O objetivo é sobreviver à variância sem mudar seu jogo por medo.' },
  },
  {
    id: 'variancia', number: 4, title: 'Variância', eyebrow: 'Resultados curtos não contam a história toda', description: 'Aprenda a separar qualidade da decisão, sorte de curto prazo e sinais reais de evolução.', objective: 'Criar respostas saudáveis para downswings e evitar decisões guiadas por resultados isolados.', icon: Gauge, accent: 'violet', estimatedMinutes: 16, progress: 0,
    lessons: [{ title: 'O que a variância faz com seus resultados', duration: '5 min' }, { title: 'Downswing sem tilt', duration: '6 min' }, { title: 'Medindo processo, não sorte', duration: '5 min' }], takeaway: 'Variância é o preço de jogar um jogo de longo prazo; processo é o que você controla.',
    content: [
      { heading: 'Poker é uma série, não uma mão', paragraphs: ['Você pode colocar todas as fichas com 80% de chance de vencer e perder. Isso não torna a decisão ruim; torna o resultado uma das possibilidades previstas.', 'Em torneios, grandes resultados concentram boa parte do lucro. Por isso, uma amostra curta é especialmente enganosa: uma vitória não confirma excelência e uma sequência de eliminação não confirma incapacidade.'] },
      { heading: 'O antídoto é avaliar a decisão', paragraphs: ['Depois da sessão, substitua “ganhei?” por perguntas observáveis: meu range de abertura foi consistente? Eu respeitei meu tamanho de aposta? Reconheci spots de valor?', 'Use um registro curto. Marque três mãos por sessão: uma boa, uma difícil e uma que gerou emoção. Revise quando estiver fora da mesa.'], example: { label: 'Exemplo prático', text: 'Você paga all-in no flop com overpair e 75% de equidade, mas perde. A revisão correta é confirmar pot odds, ranges e equidade — não mudar a linha porque o river foi ruim.' } },
      { heading: 'Downswing pede redução de ruído', paragraphs: ['Durante uma sequência negativa, reduza a quantidade de mesas se isso melhora sua atenção. Mantenha o ABI dentro da regra e preserve as pausas programadas.', 'Não tente “consertar” o gráfico em uma noite. A próxima decisão é sempre menor e mais controlável do que o resultado da próxima sessão.'] },
    ], coachTip: 'Antes de abrir o lobby, escreva uma meta de processo: “vou marcar três mãos para revisar”. Ela continua válida mesmo que a sessão termine cedo.', commonMistakes: ['Mudar uma estratégia vencedora após poucas derrotas.', 'Aumentar volume e buy-ins para recuperar dinheiro.', 'Usar o resultado de uma mão como prova de que a leitura estava errada.'], exercise: { title: 'Seu protocolo de downswing', prompt: 'Escreva a ação que você tomará após três sessões frustrantes.', checklist: ['Reduzir ABI ou volume, se necessário', 'Marcar mãos e revisar fora da sessão', 'Não alterar a estratégia sem evidência de amostra'] }, quiz: { question: 'Qual é a melhor forma de avaliar uma mão perdida com grande vantagem de equidade?', options: ['Mudar a linha para nunca perder novamente', 'Avaliar ranges, odds e a qualidade da decisão', 'Dobrar o buy-in na próxima sessão'], answer: 1, explanation: 'A variância afeta o resultado. Ranges, odds e execução permitem avaliar a decisão de modo útil.' },
  },
  {
    id: 'posicoes', number: 5, title: 'Posições', eyebrow: 'Informação é uma vantagem que se joga', description: 'Use sua posição na mesa para abrir melhor, controlar potes e extrair mais valor.', objective: 'Ajustar ranges e planos de mão conforme a quantidade de jogadores que ainda podem agir.', icon: MapPin, accent: 'rose', estimatedMinutes: 20, progress: 0,
    lessons: [{ title: 'Ordem de ação e informação', duration: '6 min' }, { title: 'Ranges por posição', duration: '8 min' }, { title: 'Jogando no botão e nos blinds', duration: '6 min' }], takeaway: 'Quanto mais tarde você age, mais informação possui e mais mãos pode jogar com lucro.',
    content: [
      { heading: 'Posição muda o valor das cartas', paragraphs: ['A mesma mão não vale o mesmo em todas as cadeiras. Em UTG, vários jogadores ainda podem acordar com uma mão forte; no botão, você verá como todos agem antes de decidir no pós-flop.', 'Jogar em posição permite controlar o tamanho do pote, escolher melhor os blefes e fazer apostas por valor com menos incerteza.'] },
      { heading: 'Abra mais tarde, aperte mais cedo', paragraphs: ['Use um range mais forte nas primeiras posições e expanda gradualmente até o botão. Nos micro stakes, não é necessário abrir mãos marginais em UTG para ser explorável; ganhar fichas de jogadores que pagam demais já é uma grande fonte de lucro.', 'Nos blinds, você estará fora de posição no pós-flop. Defenda com critério: preço bom não transforma uma mão fraca em fácil de jogar.'], example: { label: 'Exemplo prático', text: 'A♠9♠ pode ser um fold confortável em UTG numa mesa cheia, mas uma abertura natural no botão quando todos passam. A força relativa vem da posição e dos jogadores restantes.' } },
      { heading: 'Planeje o pós-flop antes de abrir', paragraphs: ['Antes de colocar fichas no pote, pergunte: se receber call, em quais posições ficarei? quais flops favorecem meu range? Essa pausa simples elimina muitas aberturas automáticas.', 'Em posição, prefira linhas que deixem o adversário errar. Fora de posição, simplifique: menos blefes sem equidade e mais apostas claras por valor.'] },
    ], coachTip: 'Coloque uma etiqueta visual na tela para lembrar: botão = pressão; blinds = disciplina. O objetivo não é decorar charts, mas internalizar o motivo de cada ajuste.', commonMistakes: ['Abrir o mesmo range em todas as posições.', 'Defender o big blind só porque já investiu uma blind.', 'Ignorar quem ainda pode agir depois de você.'], exercise: { title: 'Auditoria de ranges', prompt: 'Na próxima sessão, marque uma abertura de UTG e uma do botão. Compare as mãos e explique por que cada uma pertence ao range.', checklist: ['Identifiquei os jogadores restantes', 'Considerei se ficarei em posição', 'Escrevi um plano para o flop'] }, quiz: { question: 'Por que o botão permite abrir mais mãos do que UTG?', options: ['Porque o botão sempre recebe cartas melhores', 'Porque agirá por último no pós-flop e há menos jogadores para enfrentar', 'Porque os blinds não podem dar call'], answer: 1, explanation: 'No botão há menos jogadores restantes no pré-flop e você terá posição sobre os adversários que pagarem.' },
  },
  { id: 'pos-flop', number: 6, title: 'Pós-flop sem Complicar', eyebrow: 'Planos claros para cada textura', description: 'Aprenda a apostar por valor, controlar o pote e identificar spots de blefe rentáveis.', objective: 'Transformar informação de textura e posição em linhas simples.', icon: BrainCircuit, accent: 'violet', estimatedMinutes: 35, progress: 0, lessons: [], takeaway: 'Em desenvolvimento.' },
]

export const dashboardStats = [
  { label: 'Progresso do curso', value: '8%', detail: '1 de 18 aulas concluída' },
  { label: 'Tempo de estudo', value: '8 min', detail: 'Nesta semana' },
  { label: 'Sequência atual', value: '1 dia', detail: 'Seu melhor: 3 dias' },
]

export const getChapter = (id: string | undefined): Chapter | undefined => chapters.find((chapter) => chapter.id === id)
