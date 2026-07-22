import { useEffect } from 'react';
import { DashboardLayout } from '@layouts/index';
import { Card, Button, Input } from '@components/index';
import { motion } from 'framer-motion';
import { User, Mail, Lock, Bell, Palette, LogOut } from 'lucide-react';
import { useState } from 'react';

export const Perfil = () => {
  useEffect(() => {
    document.title = 'Perfil - FinFalo';
  }, []);

  const [activeTab, setActiveTab] = useState<'personal' | 'security' | 'notifications' | 'settings'>('personal');

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <DashboardLayout>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="space-y-8"
      >
        {/* Header with Profile */}
        <motion.div variants={itemVariants}>
          <Card className="flex items-start gap-6 md:flex-row flex-col">
            <div className="w-24 h-24 bg-gradient-to-br from-finfalo-green to-finfalo-green/70 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-5xl font-bold text-finfalo-white">JF</span>
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-finfalo-dark mb-2">José Falo</h1>
              <p className="text-finfalo-gray-300 mb-4">josefalofalo8@gmail.com</p>
              <div className="flex gap-3">
                <Button variant="primary" size="sm">
                  Editar Foto
                </Button>
                <Button variant="outline" size="sm">
                  Descarregar Dados
                </Button>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Tabs */}
        <motion.div variants={itemVariants} className="flex gap-4 border-b border-finfalo-gray-100 overflow-x-auto pb-0">
          {[
            { id: 'personal', label: 'Dados Pessoais', icon: <User size={20} /> },
            { id: 'security', label: 'Segurança', icon: <Lock size={20} /> },
            { id: 'notifications', label: 'Notificações', icon: <Bell size={20} /> },
            { id: 'settings', label: 'Definições', icon: <Palette size={20} /> },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`pb-4 px-4 font-semibold transition-colors flex items-center gap-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'border-b-2 border-finfalo-green text-finfalo-green'
                  : 'text-finfalo-gray-300 hover:text-finfalo-text'
              }`}
            >
              {tab.icon}
              {tab.label}
            </button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div variants={itemVariants}>
          {activeTab === 'personal' && (
            <Card>
              <h2 className="text-2xl font-bold text-finfalo-dark mb-6">Dados Pessoais</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Nome Completo"
                    defaultValue="José Falo"
                    icon={<User size={20} />}
                  />
                  <Input
                    label="Email"
                    defaultValue="josefalofalo8@gmail.com"
                    icon={<Mail size={20} />}
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input label="Data de Nascimento" type="date" />
                  <Input label="Telefone" placeholder="+244 9xx xxx xxx" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-finfalo-text mb-2">
                    Moeda Preferida
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-finfalo-gray-100 rounded-lg focus:border-finfalo-green focus:outline-none">
                    <option>Kwanza (Kz)</option>
                    <option>Dólar Americano ($)</option>
                    <option>Euro (€)</option>
                  </select>
                </div>
                <Button variant="primary" className="w-full md:w-auto">
                  Guardar Alterações
                </Button>
              </form>
            </Card>
          )}

          {activeTab === 'security' && (
            <Card>
              <h2 className="text-2xl font-bold text-finfalo-dark mb-6">Segurança da Conta</h2>
              <div className="space-y-6">
                <div className="p-4 bg-finfalo-gray rounded-lg">
                  <h3 className="font-semibold text-finfalo-dark mb-2">Palavra-passe</h3>
                  <p className="text-finfalo-gray-300 text-sm mb-4">
                    Última alteração há 3 meses
                  </p>
                  <Button variant="outline" size="sm">
                    Alterar Palavra-passe
                  </Button>
                </div>
                <div className="p-4 bg-finfalo-gray rounded-lg">
                  <h3 className="font-semibold text-finfalo-dark mb-2">Autenticação Dupla</h3>
                  <p className="text-finfalo-gray-300 text-sm mb-4">
                    Reforce a segurança da sua conta
                  </p>
                  <Button variant="outline" size="sm">
                    Ativar 2FA
                  </Button>
                </div>
                <div className="p-4 bg-finfalo-gray rounded-lg">
                  <h3 className="font-semibold text-finfalo-dark mb-2">Sessões Ativas</h3>
                  <p className="text-finfalo-gray-300 text-sm mb-4">
                    1 sessão ativa neste dispositivo
                  </p>
                  <Button variant="outline" size="sm">
                    Sair de Todas as Sessões
                  </Button>
                </div>
              </div>
            </Card>
          )}

          {activeTab === 'notifications' && (
            <Card>
              <h2 className="text-2xl font-bold text-finfalo-dark mb-6">Preferências de Notificações</h2>
              <div className="space-y-4">
                {[
                  { label: 'Resumo Diário', description: 'Receba um resumo das suas atividades' },
                  { label: 'Alerta de Orçamento', description: 'Notificação ao atingir limite de despesas' },
                  { label: 'Alerta de Metas', description: 'Aviso quando estiver perto de suas metas' },
                  { label: 'Novas Dicas', description: 'Notificações de conteúdo educacional' },
                  { label: 'Promoções', description: 'Ofertas e promoções especiais' },
                ].map((notif, idx) => (
                  <label key={idx} className="flex items-center gap-3 p-4 bg-finfalo-gray rounded-lg cursor-pointer hover:bg-finfalo-gray-200 transition-colors">
                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded" />
                    <div className="flex-1">
                      <p className="font-semibold text-finfalo-dark">{notif.label}</p>
                      <p className="text-sm text-finfalo-gray-300">{notif.description}</p>
                    </div>
                  </label>
                ))}
              </div>
            </Card>
          )}

          {activeTab === 'settings' && (
            <Card>
              <h2 className="text-2xl font-bold text-finfalo-dark mb-6">Definições</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-finfalo-text mb-2">
                    Tema
                  </label>
                  <div className="flex gap-4">
                    {['Light', 'Dark', 'Auto'].map((theme) => (
                      <label key={theme} className="flex items-center gap-2 cursor-pointer">
                        <input type="radio" name="theme" defaultChecked={theme === 'Auto'} className="w-4 h-4" />
                        <span className="text-finfalo-text">{theme}</span>
                      </label>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-finfalo-text mb-2">
                    Idioma
                  </label>
                  <select className="w-full px-4 py-3 border-2 border-finfalo-gray-100 rounded-lg focus:border-finfalo-green focus:outline-none">
                    <option>Português (Angola)</option>
                    <option>Inglês</option>
                    <option>Espanhol</option>
                  </select>
                </div>
                <div className="pt-6 border-t border-finfalo-gray-100">
                  <Button
                    variant="ghost"
                    className="text-red-600 hover:text-red-700 flex items-center gap-2"
                  >
                    <LogOut size={20} />
                    Sair da Conta
                  </Button>
                </div>
              </div>
            </Card>
          )}
        </motion.div>
      </motion.div>
    </DashboardLayout>
  );
};
