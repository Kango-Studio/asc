# Auditoria do site ASC — 17/09/2026

Revisão solicitada de layout, usabilidade, SEO, acessibilidade e desempenho. Sem alterações no código do site nesta auditoria.

## Escopo e limites

Código das sete páginas públicas, componentes compartilhados, arquivos de mídia, HTML exportado e consulta ao domínio publicado. Verificações responsivas em Chrome headless sobre o export local. Não é certificação WCAG nem medição de Core Web Vitals de usuários reais. Nenhuma mensagem ou formulário foi enviado. Recursos externos foram bloqueados durante a inspeção local.

## Parecer de integridade

**Parcial: a identidade da ASC é consistente, mas a implementação ainda não passa integralmente.** Verde, tipografia e navegação se repetem, porém existem dois cabeçalhos separados, cores de marca fora dos tokens e lacunas nos fluxos de contato e consentimento. O detector apontou texto em gradiente na página 404 e em `herto-text.tsx`; o segundo componente não está ativo na home e foi descartado como problema do site visível. A estética do gradiente da 404, isoladamente, não é tratada como falha funcional.

## Avaliação técnica orientativa

| Dimensão | Nota / 4 | Principal limitação |
|---|---:|---|
| Acessibilidade | 2 | Contraste e movimento sem pausa |
| Desempenho | 2 | Vídeos de 21,7 MB e imagens sem otimização |
| Responsividade | 2 | Rodapé excede a tela em 768 px |
| Tokens e tema | 2 | Tokens existem, mas a marca é aplicada principalmente por valores literais |
| Integridade da implementação | 2 | Duplicação e falhas nos fluxos de contato/consentimento |
| **Total** | **10/20** | **Base aproveitável, com melhorias significativas necessárias** |

Nota editorial desta auditoria, não uma pontuação Lighthouse ou uma certificação. **15 achados: 0 P0, 5 P1, 9 P2 e 1 P3.** SEO e conversão estão detalhados adicionalmente; não compõem uma pontuação de ranking.

## Evidência responsiva

Foram feitas **22 combinações de página e viewport**: sete páginas em 390 × 844, 768 × 844 e 1920 × 1080; home também em 3840 × 1080, proporção ultralarga. Esta última verifica largura de 3840 px, mas **não equivale a testar uma tela 4K 3840 × 2160**.

- 390 px: largura do documento de 390 px nas sete páginas.
- 768 px: largura do documento de **880 px nas sete páginas**.
- 1920 px: largura do documento de 1920 px nas sete páginas.
- 3840 px: largura do documento de 3840 px na home.
- Vídeo carregado e reproduzindo no Chrome: mobile 1080 × 1920; desktop 1920 × 1080. Isso não garante reprodução em todo hardware/navegador nem resolução nativa 4K.
- Slides fora da área visível do carrossel e o honeypot escondido foram identificados e **não contados como overflow indevido**.

Capturas: [rodapé em 768 px](./auditoria-site-assets/tablet-rodape.png), [contato em 768 px](./auditoria-site-assets/tablet-contato.png), [home em 390 px](./auditoria-site-assets/mobile-hero.png). O mapa vazio da captura decorre do bloqueio de recursos externos do teste, não de um defeito confirmado do site.

## Prioridades

### 1. [P1] Rodapé quebra o layout em tablets

**Local:** `components/Footer.tsx:12` e `components/Footer.tsx:61`.

**Evidência:** a grade muda para quatro colunas já em 768 px. O e-mail sem quebra ultrapassa a coluna e chega à coordenada horizontal de 880 px. O problema aparece nas sete páginas verificadas.

**Impacto:** rolagem lateral e dados de contato cortados. **Recomendação:** duas colunas em tablets, quatro apenas quando houver espaço, `min-width: 0` nas colunas e quebra adequada de e-mail. O menu superior coube na captura; não foi classificado como quebrado. **Comando:** `$impeccable adapt`.


### 2. [P1] Contraste insuficiente nos botões, links e blocos verdes

**Local:** `components/CookieConsent.tsx:93`, `components/screens/home/hero-video.tsx:84`, `app/servicos/page.tsx:165`, `app/contato/page.tsx:431` e outros blocos equivalentes.

**Evidência:** branco sobre `#00B74F` tem contraste calculado de **2,66:1**; sobre `#00A376`, **3,23:1**. O verde principal também falha quando usado como texto sobre branco. Texto comum precisa de 4,5:1; texto grande, 3:1. O botão Aceitar é um caso direto, sem depender da interpretação de um gradiente.

**Impacto:** leitura difícil, especialmente com baixa visão ou sob luz forte. **Recomendação:** criar variante de verde mais escura para texto/botões e testar todos os estados. Preservar o verde atual em decoração quando apropriado. **Comando:** `$impeccable harden`.

### 3. [P1] Abertura duplicada do WhatsApp no formulário

**Local:** `app/contato/page.tsx:182`.

**Evidência:** `window.open` usa `noopener,noreferrer`; com `noopener`, o retorno pode ser nulo mesmo quando a abertura funciona. O código interpreta nulo como bloqueio e chama também `window.location.assign`.

**Impacto:** pode abrir a conversa em outra aba e tirar o usuário da página original ao mesmo tempo. **Recomendação:** usar um único fluxo de navegação; não usar esse retorno para detectar bloqueio. Preservar os dados preenchidos até a transição e explicar que o envio termina no WhatsApp. **Comando:** `$impeccable harden`.

### 4. [P1] Vídeos compatíveis, mas ainda muito pesados

**Local:** `public/videos/site-h264.mp4`, `public/videos/mobile-h264.mp4`, `components/screens/home/hero-video.tsx:102`.

**Evidência:** aproximadamente **21,7 MB por arquivo (20,7 MiB)**, com `preload="auto"`. Cada dispositivo seleciona um arquivo, não os dois. H.264 e metadados no início já corrigem compatibilidade e início de leitura; não substituem compressão.

**Impacto:** consumo de dados e demora em redes lentas. **Recomendação:** reduzir duração/bitrate mantendo a qualidade necessária, comprimir o mobile separadamente e avaliar uma imagem de capa leve. Os HEVC antigos ocupam espaço no export, mas não são baixados pela hero atual. **Comando:** `$impeccable optimize`.

### 5. [P1] Movimento contínuo sem controle de pausa

**Local:** `components/screens/home/hero-video.tsx:97`, `components/screens/home/clients-feedback.tsx:22`.

**Evidência:** vídeo em loop e carrossel avançando a cada 2,5 segundos, sem botão para parar. A preferência de movimento reduzido está ligada ao MotionConfig, mas não interrompe o vídeo nem o intervalo do carrossel.

**Impacto:** distração e dificuldade de leitura; ausência de controle para movimento automático prolongado. **Recomendação:** oferecer pausa, respeitar movimento reduzido e suspender avanço do carrossel durante interação. **Comando:** `$impeccable harden`.

### 6. [P2] Chamada principal desaparece quando o vídeo toca

**Local:** `components/screens/home/hero-video.tsx:57`.

**Evidência:** a apresentação textual e o botão Fale com a ASC recebem `invisible` quando o vídeo começa. O H1 permanece para leitores de tela, mas não há chamada textual visível independente do vídeo.

**Impacto:** primeira tela sem uma ação comercial clara; depende do conteúdo e do momento do vídeo. **Recomendação:** manter título e CTA sobre uma área de contraste previsível, respeitando o enquadramento. Avaliar também a legibilidade do cabeçalho transparente sobre cenas escuras. **Comando:** `$impeccable layout`.

### 7. [P2] Banner de cookies cobre o WhatsApp no celular

**Local:** `components/CookieConsent.tsx:67`, `components/FloatingWhatsApp.tsx:14`.

**Evidência:** banner inferior em z-index 70 sobre botão em z-index 50; sobreposição observada na captura de 390 px.

**Impacto:** o acesso rápido ao contato fica encoberto na primeira visita. **Recomendação:** reposicionar o botão acima do banner enquanto ele estiver aberto, considerando sua altura real e a área segura do celular. **Comando:** `$impeccable adapt`.

### 8. [P2] Revogar cookies não desativa explicitamente as tags já carregadas

**Local:** `components/CookieConsent.tsx:45`.

**Evidência:** aceitar injeta GTM; recusar depois altera o estado local, mas não comunica revogação às tags já executadas. Retirar o componente Script não desfaz JavaScript previamente carregado.

**Impacto:** as preferências exibidas podem divergir do comportamento das tags durante a sessão. **Recomendação:** implementar atualização de consentimento e verificar a configuração real do GTM. `localStorage` também precisa de tratamento de falhas, inclusive no formulário. Não foi realizada conclusão jurídica nem inspeção do contêiner GTM. **Comando:** `$impeccable harden`.

### 9. [P2] SEO local incompleto

**Local:** `app/layout.tsx:91`, `app/contato/page.tsx:210`, `lib/site.ts`.

**Evidência:** JSON-LD tem rua e país, mas falta cidade, estado e CEP; o endereço da página Contato e a consulta do mapa também omitem a cidade. Três Cachoeiras, RS já aparece nas páginas institucionais de política/termos.

**Impacto:** localização menos clara para pessoas e mecanismos de busca. **Recomendação:** centralizar endereço completo, telefone e horários; completar AccountingService com dados reais, incluir cidade no mapa e no conteúdo relevante. Confirmar CEP/coordenadas antes de usar. Não há promessa de ganho de posição. **Comando:** `$impeccable clarify`.

### 10. [P2] Páginas internas sem imagem Open Graph

**Local:** `app/sobre/layout.tsx`, `app/servicos/layout.tsx`, `app/clientes/layout.tsx`, `app/contato/layout.tsx`.

**Evidência:** inspeção do HTML exportado: essas páginas têm título/URL Open Graph, mas não `og:image`. A home tem imagem. Os objetos de metadados das rotas não preservam a imagem global.

**Impacto:** prévias de links inconsistentes em aplicativos sociais. **Recomendação:** compartilhar um objeto completo de metadados e criar uma imagem social própria, com boa leitura em miniatura. Isso é qualidade de compartilhamento, não penalidade comprovada de ranking. **Comando:** `$impeccable harden`.

### 11. [P2] Serviços com poucos caminhos de navegação e conversão

**Local:** `app/servicos/page.tsx:157`, `app/page.tsx`, `components/Footer.tsx:44`.

**Evidência:** sete serviços ficam na mesma página; os cards não têm CTA específico nem âncoras; a lista do rodapé não é clicável. O botão geral fica depois da lista.

**Impacto:** quem procura um serviço específico precisa percorrer mais conteúdo. **Recomendação:** links/âncoras por serviço, contato contextual e, quando houver conteúdo original suficiente, páginas próprias com dúvidas frequentes e processo de atendimento. Evitar criar páginas rasas apenas para palavras-chave. **Comando:** `$impeccable clarify`.

### 12. [P2] Formulário exige muito antes de encaminhar ao WhatsApp

**Local:** `app/contato/page.tsx:59`, `components/ui/input.tsx:14`.

**Evidência:** nome, e-mail, telefone, assunto e mensagem são obrigatórios; ao final, o usuário ainda precisa enviar no WhatsApp. Campos usam fonte de 14 px e altura de 40 px.

**Impacto:** mais esforço para iniciar contato; fonte pequena prejudica conforto no celular. **Recomendação:** avaliar com o negócio quais dados são necessários no primeiro contato, explicar o destino antes dos campos, usar fonte de 16 px e alvos confortáveis. Levar o foco ao primeiro campo inválido. **Comando:** `$impeccable clarify` / `$impeccable adapt`.

### 13. [P2] Conteúdo principal depende da execução de animações

**Local:** `app/servicos/page.tsx:137`, `app/contato/page.tsx:244`, `app/sobre/page.tsx` e páginas legais.

**Evidência:** grandes blocos começam em `opacity: 0` e só são revelados pelo JavaScript. O HTML contém o texto, mas a aparência inicial fica oculta.

**Impacto:** falha ou atraso na hidratação pode manter conteúdo invisível. Não significa que todas essas páginas deixem de ser indexadas. **Recomendação:** conteúdo visível por padrão e animação como melhoria progressiva. **Comando:** `$impeccable harden`.

### 14. [P2] Imagens servidas sem otimização automática

**Local:** `next.config.js:4`, `public/clients`, `components/Footer.tsx:22`.

**Evidência:** export estático com `images.unoptimized`; há logos como `borges-bananas.png` com 623 KB, exibidos em dimensões pequenas. Logo do rodapé usa prioridade mesmo estando abaixo da dobra.

**Impacto:** bytes desnecessários em redes móveis. **Recomendação:** pré-otimizar imagens para WebP/AVIF quando apropriado, dimensionar os logos e reservar prioridade para recursos necessários na primeira tela. **Comando:** `$impeccable optimize`.

### 15. [P3] Navegação duplicada e tokens inconsistentes

**Local:** `app/page.tsx`, `components/Navigation.tsx`, `app/globals.css`.

**Evidência:** a home possui cabeçalho próprio; as outras páginas usam Navigation. Cores são repetidas em valores literais, enquanto o token primary é quase preto. A campanha de setembro está fixada nos dois cabeçalhos.

**Impacto:** correções e mudanças de campanha precisam ser repetidas, favorecendo divergências. **Recomendação:** cabeçalho compartilhado com variantes e tokens semânticos. Setembro é a campanha correta para a data desta revisão; o risco é manutenção futura. Não há necessidade de criar dark mode para corrigir isso. **Comando:** `$impeccable document`.

## Pontos positivos

- Idioma `pt-BR`, link para pular ao conteúdo e landmark principal.
- Títulos, descrições e URLs canônicas específicos nas páginas principais.
- `robots.txt`, sitemap e dados estruturados já existem.
- Labels, autocomplete e associação de erros nos campos de contato.
- Botões de aceitar/recusar cookies e acesso às preferências.
- Imagens de clientes têm textos alternativos; mapa tem título e lazy loading.
- Vídeos H.264 com fallback renderizado no HTML inicial; não há mais espera obrigatória por um spinner.
- Build, TypeScript e lint haviam passado na correção imediatamente anterior.

## Padrões e direção visual

Há repetição de cartões arredondados, sombras, gradientes e hover em blocos que não são clicáveis. Como direção de layout, vale reduzir essa repetição, dar mais destaque à proposta e ao contato, e usar fotos reais da equipe/escritório e depoimentos autorizados. Isso é recomendação editorial, não defeito medido. O componente de depoimentos com avatares externos está desativado e não foi contado como conteúdo publicado.

## Sequência sugerida

1. `$impeccable harden`: contraste, WhatsApp, movimento, consentimento e conteúdo visível.
2. `$impeccable adapt`: navegação/rodapé responsivos, banner e campos.
3. `$impeccable optimize`: vídeos e imagens.
4. `$impeccable clarify`: contato, serviços e informação local.
5. `$impeccable layout`: chamada persistente da hero e hierarquia.
6. `$impeccable polish`: acabamento após as correções.

Reexecutar `$impeccable audit` após a implementação. Os grupos podem ser executados individualmente ou em conjunto.

## Consulta ao site publicado

Requisições diretas retornaram HTTP 200 para home, Sobre, Serviços, Clientes, Contato, robots.txt e sitemap.xml. O HTML atual da home não contém o carregador antigo “Carregando apresentação…”. A consulta inicial pelo buscador ainda exibia esse texto em uma cópia anterior; a resposta direta mais recente prevalece. Não é possível atribuir nota de velocidade real apenas a esses status.

Não foram acessados Search Console, analytics ou configurações privadas do GTM. Indexação efetiva, conversões, Core Web Vitals e revogação das tags em produção permanecem pontos de validação operacional.

## Referências verificadas

- [W3C — contraste mínimo](https://www.w3.org/WAI/WCAG22/Understanding/contrast-minimum.html): critérios de contraste usados no cálculo.
- [MDN — window.open](https://developer.mozilla.org/en-US/docs/Web/API/Window/open): retorno com noopener.
- [W3C — Pause, Stop, Hide](https://www.w3.org/WAI/WCAG22/Understanding/pause-stop-hide.html): controles de movimento automático.
- [Google — Local Business](https://developers.google.com/search/docs/appearance/structured-data/local-business): endereço e dados locais.
