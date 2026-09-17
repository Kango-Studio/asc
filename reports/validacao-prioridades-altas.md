# Validação das cinco melhorias de alta prioridade

> Atualização solicitada pelo cliente: o verde original #00B74F e a variação #00A376 foram restaurados. A hero voltou a autoplay incondicional, sem controles de pausa/reprodução. Os resultados de contraste da paleta escura e de pausa/movimento reduzido da hero abaixo são históricos e não descrevem mais a configuração atual. O carrossel mantém seus controles.

Implementadas localmente em 17/09/2026. Não foi realizado deploy.

## Resultado

- Rodapé: duas colunas em tablets, quatro a partir de 1280 px; e-mail e Instagram quebram dentro da coluna. As sete páginas passaram em viewport de 768 px sem rolagem horizontal.
- Contraste: token verde forte `#006B38`, com contraste de 6,65:1 contra branco; hover `#00532C` e gradientes até `#005A40`. Textos, botões, seleção e indicadores atualizados. Cabeçalho com fundo claro para preservar leitura sobre o vídeo. Badges translúcidos usam branco a 10%.
- Contato: uma navegação na aba atual para o WhatsApp, sem abertura duplicada. O formulário não limpa o texto imediatamente ao tentar navegar.
- Vídeos: H.264, 30 fps, yuv420p, faststart, sem faixa de áudio desnecessária. Desktop 1920 × 1080: 21.724.849 → 3.486.244 bytes (**84,0% menor**). Mobile 720 × 1280: 21.730.111 → 1.447.111 bytes (**93,3% menor**). A apresentação foi mantida, com aproximadamente 16,5 segundos. Arquivos originais preservados; a hero utiliza apenas as versões `*-web.mp4`.
- Movimento: controle de pausa/reprodução da hero; controle de rotação e botões anterior/próximo no carrossel. Movimento reduzido impede autoplay e download inicial do vídeo; reprodução manual continua possível. Carrossel suspende avanço com foco, ponteiro sobre a área ou aba oculta, e para após navegação manual.

## Verificações concluídas

- Build de produção e TypeScript: passaram.
- ESLint completo e `git diff --check`: passaram.
- Chrome: sete páginas em 768 × 844 sem overflow.
- Hero em 320 × 740, 390 × 844, 1024 × 768, 1920 × 1080 e 3840 × 2160: reprodução, pausa, frame preservado e retomada passaram.
- Movimento reduzido: sem requisição inicial do vídeo e sem avanço automático do carrossel; navegação manual passou.
- Alteração da preferência durante reprodução: vídeo pausou.
- Rede bloqueada e autoplay bloqueado: fallback permaneceu visível.
- Recuperação após falha de rede: botão reproduzir voltou a carregar e tocar o vídeo.
- Formulário: exatamente uma navegação externa interceptada, zero popups; nenhuma mensagem foi enviada.
- Axe, regra color-contrast: nenhuma violação automática nas sete páginas. Gradientes geraram verificações inconclusivas e foram complementados pela inspeção visual e cálculo dos tons utilizados. Isso não representa certificação de acessibilidade de todo o site.
- Detector visual: apenas o gradiente decorativo preexistente da página 404, fora do problema funcional de contraste corrigido.

## Evidências

- [Rodapé em tablet](./prioridades-altas-assets/tablet-rodape.png)
- [Hero em desktop](./prioridades-altas-assets/desktop-hero.png)
- [Fallback mobile](./prioridades-altas-assets/mobile-fallback.png)
- [Carrossel mobile](./prioridades-altas-assets/mobile-carrossel.png)

A validação em Chrome não substitui testes em todos os navegadores e dispositivos físicos. Os demais achados de prioridade média/baixa da auditoria continuam fora desta implementação.
