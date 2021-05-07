import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { BasicComponent } from "../basic/basic.component";
import { Error404Component } from "./component/error-404/error-404.component";
import { NavBarComponent } from "./component/nav-bar/nav-bar.component";

@NgModule({
    declarations: [
        NavBarComponent,
        Error404Component
    ],
    imports: [
        RouterModule.forChild([      
            {
                path: 'basic', component: BasicComponent
            },
            {
                path: '', redirectTo: 'courses', pathMatch: 'full' //Caminho padrão
            },
            {
                path: '**', component: Error404Component //Quando a rota não for encontrada.
            }
        ])
    ],
    exports: [
        NavBarComponent
    ]
})
export class CoreModule{

}