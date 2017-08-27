/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

interface JQuery {
  niceScroll(options?: any, instance?: Object) : any;
  getNiceScroll(): any;
  selectBox(options?:Object);
}
