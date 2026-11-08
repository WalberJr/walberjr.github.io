# Executáveis do KStudio

Este branch guarda **apenas** os executáveis do KStudio. Ele não faz parte do site.

Sempre que um arquivo `.exe` ou `.AppImage` muda aqui, o workflow
`.github/workflows/release.yml` cria (ou atualiza) automaticamente um **Release** com os dois
arquivos. O logo do KStudio no site baixa sempre a versão mais recente.

## Como publicar uma versão nova (pelo navegador)

1. No GitHub, troque para o branch **kstudio-builds**.
2. Apague os executáveis antigos (abra o arquivo → ícone de lixeira → *Commit changes*).
3. *Add file → Upload files* → envie o novo `KStudio.exe` e o novo `KStudio-X.Y.Z-x86_64.AppImage`.
4. Pronto: em ~1 minuto o release `kstudio-vX.Y.Z` aparece na página *Releases*.

A versão é lida do nome do AppImage (`KStudio-1.3.0-x86_64.AppImage` → `1.3.0`).
Para forçar outro número, crie um arquivo `VERSION` contendo, por exemplo, `1.4.0`.
