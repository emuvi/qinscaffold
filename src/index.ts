import { QinColumn, QinTable } from "qinpel-cps";

class QinScaffold extends QinColumn {
  public constructor() {
    super();
    let table = new QinTable();
    table.install(this);
    table.setHead(["Name", "Age", "City"]);
    table.addLine(["John", "25", "New York"]);
    table.addLine(["Jane", "24", "Paris"]);
    table.addLine(["Jack", "26", "London"]);
  }
}

new QinScaffold().style.putAsBody();
