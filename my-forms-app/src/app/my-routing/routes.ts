import { Route, Routes } from "@angular/router";
import { FormsComponent } from "../forms/forms.component";
import { ReactiveFormsComponent } from "../reactive-forms/reactive-forms.component";
import { NgFormsComponent } from "../ng-forms/ng-forms.component";

const formRoute:Route =  {
    path: "",
    component: FormsComponent
   }

const reactriveFormRoute:Route = {
    path: "reactive-form",
    component: ReactiveFormsComponent
}

const ngFormRoute: Route = {
    path: "ng-form",
    component: NgFormsComponent
}

export const routes: Routes = [
    formRoute,
    reactriveFormRoute,
    ngFormRoute
];


