import { DashboardComponent } from "../dashboard/dashboard.component";
import { NewRegistryComponent } from "../new-registry/new-registry.component";
import { OutgoingComponent } from "../outgoing/outgoing.component";

export const routes: Routes = [
  {path: 'dashboard', component: DashboardComponent},
  {path: 'new-registry', component: NewRegistryComponent},
  {path: 'outgoing', component: OutgoingComponent}
]
