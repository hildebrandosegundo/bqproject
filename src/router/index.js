import Hello from '@/components/Hello'

import ProvasList from '@/components/Provas/List'
import ProvasView from '@/components/Provas/View'
import ProvasCreate from '@/components/Provas/Create'
import ProvasEdit from '@/components/Provas/Edit'

import QuestoesList from '@/components/Questoes/List'
import QuestoesView from '@/components/Questoes/View'
import QuestoesCreate from '@/components/Questoes/Create'
import QuestoesEdit from '@/components/Questoes/Edit'

const routes = [
  {path: '/', name: 'Hello', component: Hello},
  {path: '/provas', component: ProvasList},
  { path: '/provas/novo', component: ProvasCreate },
  { path: '/provas/:id', component: ProvasView },
  { path: '/provas/:id/editar', component: ProvasEdit },

  {path: '/questoes', component: QuestoesList},
  { path: '/questoes/novo', component: QuestoesCreate },
  { path: '/questoes/:id', component: QuestoesView },
  { path: '/questoes/:id/editar', component: QuestoesEdit }
]

export default routes
