# DN Soldas - Landing Page de Conversão

Landing page moderna para captação de leads e matrículas nos cursos da DN Soldas, com foco total em conversão para atendimento no WhatsApp.

## Objetivo do Projeto

A página foi construída para:

- apresentar os cursos de soldagem de forma clara e persuasiva;
- destacar benefícios, prova social e diferenciais da empresa;
- reduzir dúvidas com FAQ em formato accordion;
- direcionar o usuário para ação imediata via WhatsApp.

## Proposta e Direção Visual

- linguagem visual industrial e profissional;
- alto contraste para leitura e destaque de CTA;
- paleta obrigatória com dominância de azul nos fundos e amarelo nos botões;
- layout mobile-first com adaptação para desktop.

## Tecnologias Utilizadas

- HTML5 semântico
- CSS3 (Flexbox + Grid)
- JavaScript Vanilla (sem bibliotecas)
- IntersectionObserver API

## Restrições Atendidas

Este projeto **não utiliza**:

- React
- Vue
- Angular
- Tailwind
- Bootstrap
- jQuery
- bibliotecas externas de animação/UI

## Estrutura de Arquivos

```text
/index.html
/style.css
/script.js
```

## Seções da Página

A ordem da landing page segue a especificação original:

1. Header fixo
2. Hero Section
3. Como Funciona
4. Cursos
5. Benefícios
6. Sobre a Empresa
7. Depoimentos
8. FAQ
9. CTA Final
10. Footer

## Animações e Interações

### Entrada de elementos (scroll)

- implementação com **um único** `IntersectionObserver`;
- `threshold: 0.2`;
- adiciona classe `.show` quando entra na viewport;
- classe não é removida na saída.

### Hero

- headline: fade-in + `translateY`;
- subheadline com delay;
- lista com delay progressivo;
- CTA com efeito de scale-in.

### Botões CTA

- botão principal amarelo com hover (`translateY(-3px)`);
- glow suave;
- pseudo-elemento com animação pulse infinita via `@keyframes`.

### Seções com animação

- Como Funciona: cards alternando entrada da esquerda/direita;
- Cursos: hover com elevação e CTA pulsante;
- Benefícios: fade-in com leve zoom;
- Sobre: imagem e texto com entrada lateral;
- FAQ: accordion em JavaScript puro com rotação de ícone.

## Performance

- imagens com `loading="lazy"`;
- animações priorizando `transform` e `opacity`;
- código separado por responsabilidade (HTML, CSS, JS).

## Responsividade

- abordagem mobile-first;
- grids colapsam para coluna única em telas menores;
- botões com largura total no mobile (com ajustes pontuais no header);
- manutenção das animações em todos os breakpoints.

## WhatsApp de Conversão

Todos os CTAs estão configurados para:

`https://wa.me/5511974434436`

## Como Executar

1. Abra a pasta do projeto.
2. Execute o arquivo `index.html` no navegador.

Opcionalmente, use uma extensão de servidor local (ex.: Live Server) para desenvolvimento com auto-reload.

## Personalização Rápida

- textos e seções: `index.html`
- estilos, cores e animações: `style.css`
- comportamento de scroll e FAQ: `script.js`
