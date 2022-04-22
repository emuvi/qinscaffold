import { QinColumn, QinSplitter, QinString } from "qinpel-cps";

class QinScaffold extends QinColumn {
  public constructor() {
    super();
    let field1 = new QinString();
    field1.style.putAsMinWidth(100);
    let field2 = new QinString();
    field2.style.putAsMinWidth(100);
    let splitter = new QinSplitter({sideA: field1, sideB: field2});
    splitter.install(this);
    splitter.setVertical();
    splitter.style.putAsFlexMax();
  }
}

new QinScaffold().style.putAsBody();
