import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { ListProductsComponent, ViewProductComponent } from "./views"

const routes: Routes = [
	{ path: "", redirectTo: "/products/all", pathMatch: "full" },
	{ path: "products/:viewmode", component: ListProductsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
