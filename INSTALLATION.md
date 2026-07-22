# Guia de Inicialização - FinFalo

## 🚀 Primeiros Passos

### 1. Pré-requisitos

- Node.js 16+ instalado
- npm ou yarn
- Git
- Conta Firebase ou Supabase (opcional para desenvolvimento)

### 2. Clone e Configure

```bash
# Clone o repositório
git clone https://github.com/josefalofalo8-droid/finfalo.git
cd finfalo

# Instale as dependências
npm install

# Configure as variáveis de ambiente
cp .env.example .env.local
```

### 3. Configure Firebase (Opcional)

Se deseja usar autenticação real:

1. Crie um projeto em [Firebase Console](https://console.firebase.google.com/)
2. Ative autenticação por Email/Senha
3. Copie as credenciais para `.env.local`:

```env
VITE_FIREBASE_API_KEY=sua_api_key
VITE_FIREBASE_AUTH_DOMAIN=seu_auth_domain
VITE_FIREBASE_PROJECT_ID=seu_project_id
VITE_FIREBASE_STORAGE_BUCKET=seu_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=seu_messaging_sender_id
VITE_FIREBASE_APP_ID=seu_app_id
```

### 4. Inicie o Servidor

```bash
npm run dev
```

A aplicação abrirá em `http://localhost:3000`

---

## 📁 Estrutura de Pastas

```
src/
├── components/          # Componentes reutilizáveis
│   ├── Button.tsx
│   ├── Input.tsx
│   ├── Card.tsx
│   ├── SplashScreen.tsx
│   ├── LoginForm.tsx
│   ├── SignupForm.tsx
│   ├── OnboardingWizard.tsx
│   └── ...
├── pages/              # Páginas da aplicação
│   ├── Auth.tsx        # Autenticação
│   ├── Dashboard.tsx   # Dashboard principal
│   ├── Receitas.tsx
│   ├── Despesas.tsx
│   ├── Metas.tsx
│   ├── Relatorios.tsx
│   ├── Calculadoras.tsx
│   ├── Educacao.tsx
│   ├── Consultoria.tsx
│   └── Perfil.tsx
├── layouts/            # Layouts
│   ├── AuthLayout.tsx
│   └── DashboardLayout.tsx
├── hooks/              # Custom hooks
│   ├── useLocalStorage.ts
│   ├── useMediaQuery.ts
│   ├── useAsync.ts
│   ├── useForm.ts
│   └── useDebounce.ts
├── services/           # Serviços
│   ├── firebase.ts
│   ├── supabase.ts
│   ├── authService.ts
├── store/              # Zustand stores
│   └── index.ts
├── types/              # TypeScript types
│   └── index.ts
├── utils/              # Funções utilitárias
│   ├── formatters.ts   # Formatação
│   ├── calculations.ts # Cálculos financeiros
│   └── mocks.ts        # Mocks para desenvolvimento
├── App.tsx             # Componente principal
├── main.tsx            # Entry point
└── index.css           # Estilos globais
```

---

## 🎨 Cores da FinFalo

```
Azul Escuro:  #081423 (finfalo-dark)
Verde:        #16C784 (finfalo-green)
Branco:       #FFFFFF (finfalo-white)
Cinza Claro:  #F4F7FA (finfalo-gray)
```

---

## 📝 Scripts Disponíveis

```bash
# Desenvolvimento
npm run dev              # Inicia o servidor de desenvolvimento

# Build
npm run build            # Cria a build de produção
npm run preview          # Visualiza a build localmente

# Qualidade de código
npm run lint             # Executa o linter (ESLint)
npm run type-check       # Verifica tipos TypeScript
```

---

## 🔧 Componentes Principais

### Button
Botão reutilizável com múltiplas variantes.

```tsx
import { Button } from '@components/index';

<Button variant="primary" size="md" onClick={() => {}}>
  Clique aqui
</Button>
```

### Input
Campo de entrada com validação.

```tsx
import { Input } from '@components/index';

<Input
  label="Email"
  type="email"
  error={errors.email}
  {...register('email')}
/>
```

### Card
Cartão com estilo consistente.

```tsx
import { Card } from '@components/index';

<Card hover={true}>
  Conteúdo do cartão
</Card>
```

### ProgressBar
Barra de progresso animada.

```tsx
import { ProgressBar } from '@components/index';

<ProgressBar percentage={65} />
```

### StatsCard
Cartão para exibir estatísticas.

```tsx
import { StatsCard } from '@components/index';
import { Wallet } from 'lucide-react';

<StatsCard
  title="Saldo"
  value="850.000 Kz"
  icon={<Wallet size={24} />}
  trend={12}
/>
```

---

## 🪝 Custom Hooks

### useLocalStorage
Persistir dados no localStorage.

```tsx
const [theme, setTheme] = useLocalStorage('theme', 'light');
```

### useMediaQuery
Responsividade com media queries.

```tsx
const isMobile = useMediaQuery('(max-width: 768px)');
```

### useAsync
Gerir promises assincronamente.

```tsx
const { data, loading, error } = useAsync(() => fetchData());
```

### useForm
Gerir estado de formulários.

```tsx
const form = useForm({ email: '', password: '' });
```

### useDebounce
Debouncear valores.

```tsx
const debouncedValue = useDebounce(searchTerm, 500);
```

---

## 📊 Cálculos Financeiros Disponíveis

```tsx
import {
  calculateCompoundInterest,
  calculateEMI,
  calculateSavingsGoalTime,
  calculateEmergencyFund,
  calculateDebtPayoff,
  calculateBudgetAllocation,
  calculateInflationImpact,
} from '@utils/calculations';

// Exemplo: Calcular juros compostos
const futureValue = calculateCompoundInterest(
  100000,  // Principal
  5,       // Taxa anual
  10,      // Anos
  12       // Frequência (mensal)
);
```

---

## 🎯 Próximos Passos

1. **Integrar Firebase/Supabase**: Implemente a autenticação real
2. **Adicionar Banco de Dados**: Implemente CRUD para receitas, despesas e metas
3. **Relatórios em PDF**: Integre biblioteca para exportar PDF
4. **IA (Fina)**: Implemente recomendações inteligentes
5. **Notificações**: Configure push notifications
6. **Mobile App**: Considere criar app nativa com React Native

---

## 📱 Responsividade

A aplicação segue os breakpoints do Tailwind:

- **Mobile**: < 640px
- **Tablet**: 640px - 1024px
- **Desktop**: > 1024px

---

## 🚀 Deploy

### Vercel (Recomendado)

```bash
# Instale Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Netlify

```bash
# Instale Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy
```

---

## 🐛 Troubleshooting

### Porta 3000 em uso
```bash
npm run dev -- --port 3001
```

### Limpar cache
```bash
rm -rf node_modules
npm install
```

### Erro de tipos TypeScript
```bash
npm run type-check
```

---

## 📞 Suporte

Para dúvidas ou problemas:
- Email: contato@finfalo.com
- GitHub Issues: [Criar issue](https://github.com/josefalofalo8-droid/finfalo/issues)

---

## 📄 Licença

MIT © 2024 FinFalo

---

Desenvolvido com ❤️ por **José Falo**
