import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';

export interface CanComponentDeactivate {
  hasUnsavedChanges: () => boolean;
}

@Injectable({
  providedIn: 'root'
})
export class CanDeactivateGuard implements CanDeactivate<CanComponentDeactivate> {
  canDeactivate(component: CanComponentDeactivate): boolean {
    if (component.hasUnsavedChanges ? component.hasUnsavedChanges() : false) {
      return window.confirm('You have unsaved changes. Do you really want to leave?');
    }
    return true;
  }
}
