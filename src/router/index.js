import Hello from '@/components/Hello'

import AccountsList from '@/components/Provas/List'
import AccountsView from '@/components/Provas/View'
import AccountsCreate from '@/components/Provas/Create'
import AccountsEdit from '@/components/Provas/Edit'
const routes = [
  {path: '/', name: 'Hello', component: Hello},
  {path: '/provas', component: AccountsList},
  { path: '/provas/novo', component: AccountsCreate },
  { path: '/provas/:id', component: AccountsView },
  { path: '/provas/:id/editar', component: AccountsEdit }
]

export default routes
