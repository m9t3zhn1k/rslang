import { BaseComponent } from '../../components/base-component/base-component';
import { constants } from '../../constants/constants';
import { Router } from '../../router/router';
import { IHeader } from '../../types/types';

export class Main extends BaseComponent {
  public currentPageID: string = constants.DEFAULT_PAGE;

  constructor(parent: HTMLElement, navigationButtons: HTMLElement[], header: IHeader) {
    super(parent, 'main', ['main']);
    new Router(this.element, navigationButtons, header, this.currentPageID);
  }
}
