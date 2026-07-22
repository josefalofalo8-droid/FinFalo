# FinFalo - Gestão Financeira Familiar

Uma plataforma moderna e profissional de gestão financeira familiar desenvolvida em **React + TypeScript**, com design minimalista, elegante e totalmente responsivo.

## 🎯 Características

✅ **Splash Screen** animada com Framer Motion
✅ **Autenticação** segura (Login, Registro, Recuperação de Senha)
✅ **Onboarding Inteligente** com 8 passos de configuração
✅ **Dashboard** profissional e minimalista
✅ **Gestão de Receitas e Despesas**
✅ **Metas Financeiras** com progresso visual
✅ **Relatórios** com gráficos interativos
✅ **Calculadoras Financeiras** especializadas
✅ **Educação Financeira** (Blog, Artigos, Vídeos)
✅ **Consultoria** com agendamento
✅ **IA - Assistente Fina** com recomendações
✅ **Gamificação** com conquistas
✅ **Tema Dark/Light** personalizável
✅ **100% Responsivo** (Mobile, Tablet, Desktop)

## 🚀 Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Forms**: React Hook Form + Zod
- **Charts**: Recharts
- **Icons**: Lucide React
- **State Management**: Zustand
- **Database**: Firebase/Supabase
- **Authentication**: Firebase Auth
- **Routing**: React Router v6

## 📁 Estrutura do Projeto

```
finfalo/
├── src/
│   ├── components/          # Componentes reutilizáveis
│   ├── pages/              # Páginas principais
│   ├── layouts/            # Layouts
│   ├── hooks/              # Custom hooks
│   ├── services/           # Firebase, Supabase, APIs
│   ├── store/              # Zustand stores
│   ├── types/              # TypeScript types
│   ├── utils/              # Funções utilitárias
│   ├── App.tsx             # Componente principal
│   ├── main.tsx            # Entry point
│   └── index.css           # Estilos globais
├── public/                 # Assets estáticos
├── vite.config.ts          # Configuração Vite
├── tsconfig.json           # Configuração TypeScript
├── tailwind.config.js      # Configuração Tailwind
└── package.json            # Dependências
```

## 🎨 Identidade Visual

```
Azul Escuro: #081423
Verde: #16C784
Branco: #FFFFFF
Cinza Claro: #F4F7FA
```

## 🔧 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/finfalo.git
cd finfalo
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.example .env.local
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## 🛠️ Scripts Disponíveis

```bash
npm run dev           # Inicia o servidor de desenvolvimento
npm run build         # Cria a build de produção
npm run preview       # Visualiza a build de produção
npm run lint          # Executa o linter
npm run type-check    # Verifica tipos TypeScript
```

## 📱 Responsividade

A aplicação é totalmente responsiva e otimizada para:
- 📱 Telemóvel (320px - 767px)
- 📱 Tablet (768px - 1023px)
- 💻 Desktop (1024px+)

## 🔐 Segurança

- Autenticação segura com Firebase
- Validação de formulários com Zod
- Proteção contra CSRF
- HTTPS obrigatório em produção
- Variáveis sensíveis em arquivo .env

## 📊 Módulos Principais

### Dashboard
Resumo visual do status financeiro com cards informativos e gráficos.

### Gestão de Receitas
Registro, edição e análise de fontes de rendimento.

### Gestão de Despesas
Controle de gastos com categorização automática e alertas.

### Metas Financeiras
Definição e acompanhamento de objetivos com progresso visual.

### Relatórios
Análises detalhadas com gráficos interativos (Pizza, Barras, Linhas).

### Calculadoras
- Orçamento
- Poupança
- Fundo de Emergência
- Quitação de Dívidas
- Objetivos Financeiros

### Assistente IA (Fina)
Recomendações personalizadas baseadas em análise de dados.

## 🎮 Gamificação

Conquistas desbloqueáveis:
- Primeira Meta Criada
- Primeiros 100.000 Kz poupados
- 7 dias consecutivos registrando despesas
- Meta concluída

## 🌙 Tema

Suporta Dark Mode e Light Mode com persistência de preferência.

## 📄 Licença

Este projeto é de código aberto sob a licença MIT.

## 👥 Contribuições

Contribuições são bem-vindas! Por favor:

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📞 Contato

- Email: contato@finfalo.com
- Website: www.finfalo.com
- GitHub: https://github.com/josefalofalo8-droid/finfalo

---

Desenvolvido com ❤️ por **José Falo**
