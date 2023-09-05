import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { ContactComponent } from "./contact/contact.component";
import { Observable } from "rxjs";


export interface IDeactivateComponent
{
  canExit:()=>Observable<boolean> | Promise<boolean> | boolean;  
}
export class CanDeactivateCourseGuardService implements CanDeactivate<IDeactivateComponent>{
    canDeactivate(component: IDeactivateComponent,
                 currentRoute: ActivatedRouteSnapshot, 
                 currentState: RouterStateSnapshot, 
                 nextState: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
      return component.canExit();
    }

}