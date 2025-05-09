# Instruções para Deploy e Customização do Site Pessoal

Olá! Este é o seu site pessoal desenvolvido com Next.js, TypeScript e Tailwind CSS, com animações em Framer Motion.

Como o deploy automatizado não pôde ser concluído, preparei os arquivos para que você possa fazer o deploy manualmente em uma plataforma de sua escolha (Vercel e Netlify são altamente recomendadas para projetos Next.js) e também personalizar o conteúdo.

## 1. Preparando o Ambiente Local

1.  **Descompacte o arquivo:** Extraia o conteúdo do arquivo `meu-portfolio-pessoal-final.tar.gz` que você recebeu.
2.  **Navegue até a pasta do projeto:** Abra um terminal ou prompt de comando e navegue até o diretório `meu-portfolio-pessoal` que foi extraído.
3.  **Instale as dependências:** Execute o comando abaixo para instalar todas as dependências do projeto. A pasta `node_modules` não foi incluída no arquivo compactado para reduzir o tamanho do download.
    ```bash
    pnpm install
    ```
    Se você não tiver o `pnpm` instalado, pode instalá-lo globalmente com `npm install -g pnpm` ou usar `npm install` ou `yarn install` (pode ser necessário ajustar o arquivo `pnpm-lock.yaml` ou removê-lo se usar npm/yarn).

4.  **Execute o projeto localmente (opcional, mas recomendado para testes):
    ```bash
    pnpm dev
    ```
    Abra seu navegador e acesse `http://localhost:3000` para ver o site funcionando localmente.

## 2. Fazendo o Deploy (Exemplo com Vercel)

Vercel é uma plataforma otimizada para Next.js e oferece um processo de deploy muito simples.

1.  **Crie uma conta:** Se ainda não tiver, crie uma conta gratuita em [vercel.com](https://vercel.com).
2.  **Conecte seu repositório Git (Recomendado):**
    *   Crie um repositório no GitHub (ou GitLab/Bitbucket) e envie o código do seu projeto para lá.
    *   No dashboard da Vercel, clique em "Add New..." -> "Project".
    *   Importe o repositório Git que você criou.
    *   A Vercel geralmente detecta automaticamente que é um projeto Next.js e configura tudo para você. Siga as instruções na tela.
3.  **Deploy Manual (Alternativa sem Git):**
    *   Instale a Vercel CLI: `npm install -g vercel`
    *   Navegue até a pasta do seu projeto no terminal.
    *   Execute `vercel login` e siga as instruções para autenticar.
    *   Execute `vercel` para iniciar o processo de deploy. Siga as instruções, confirmando as configurações para um projeto Next.js.
4.  **Domínio Personalizado:** Após o deploy, a Vercel fornecerá um link padrão (ex: `seu-projeto.vercel.app`). Você pode adicionar um domínio personalizado (como `williamnunes.com`) nas configurações do projeto na Vercel. Você precisará ter o domínio já registrado.

## 3. Customizando o Conteúdo

Todo o conteúdo do site é fictício e está organizado em componentes React dentro da pasta `src/components/`. Você pode editar esses arquivos para adicionar suas informações reais.

*   **`src/components/HeroSection.tsx`**: Edite o nome, título e subtítulo na seção principal.
    *   Nome: `Alex Silva` (substitua pelo seu nome)
    *   Descrição: `Desenvolvedor Full-Stack...` (substitua pela sua descrição)
*   **`src/components/Timeline.tsx`**: Modifique o array `experiences` com sua trajetória profissional e acadêmica.
    *   Cada objeto no array representa um item na linha do tempo (`date`, `title`, `company`, `description`).
*   **`src/components/Skills.tsx`**: Atualize os arrays `technicalSkills` e `softSkills` com suas habilidades e respectivos níveis (0-100).
*   **`src/components/Projects.tsx`**: Altere o array `projectData` para listar seus projetos.
    *   Cada objeto contém `title`, `description`, `imageUrl` (link para uma imagem do projeto) e `projectUrl` (link para o projeto ao vivo ou repositório).
    *   **Imagens dos Projetos:** Substitua as URLs das imagens de placeholder por links para as imagens reais dos seus projetos. Você pode hospedá-las em serviços como Imgur, Cloudinary, ou no próprio repositório se forem pequenas.
*   **`src/components/ContactForm.tsx`**: Atualmente, o formulário de contato simula o envio. Para fazê-lo funcionar de verdade, você precisará integrá-lo com um serviço de backend ou um serviço de terceiros para envio de formulários (ex: Formspree, Netlify Forms, ou criar sua própria API endpoint).
    *   Descomente e ajuste a seção `fetch("/api/contact", ...)` se você criar um endpoint de API no Next.js (em `src/app/api/contact/route.ts`, por exemplo).
*   **`src/app/page.tsx`**: Este é o arquivo principal da página. Ele importa e organiza todos os componentes. O rodapé (`<footer>`) também pode ser personalizado aqui.
*   **Modo Claro/Escuro:** O `DarkModeToggle.tsx` já está configurado. O tema é gerenciado pela biblioteca `next-themes` e as classes de estilo `dark:` do Tailwind CSS.

## 4. Customizando Animações

As animações são feitas com `framer-motion`. Você pode ajustar os parâmetros de animação (duração, tipo, delay, etc.) diretamente nos componentes onde `motion.div` ou outros elementos `motion.` são usados.

*   **`variants`**: Muitos componentes usam objetos `variants` para definir estados de animação (ex: `hidden`, `visible`).
*   **`initial`, `animate`, `whileInView`, `whileHover`, `transition`**: São props do Framer Motion usadas para controlar as animações.

## 5. Considerações Adicionais

*   **Favicon:** Para alterar o ícone que aparece na aba do navegador, substitua o arquivo `public/favicon.ico` e outros ícones relevantes em `public/`.
*   **Metadados SEO:** Edite o arquivo `src/app/layout.tsx` para atualizar os metadados do site (título, descrição) para melhor SEO.
    ```typescript
    export const metadata: Metadata = {
      title: "Portfólio de Alex Silva", // Mude para o seu nome
      description: "Site pessoal e portfólio de Alex Silva, Desenvolvedor Full-Stack.", // Mude para sua descrição
    };
    ```

Se tiver qualquer dúvida durante o processo, pode me perguntar!

Boa sorte com seu novo site!
