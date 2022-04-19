import { QinPanel, QinColumn, QinLine, QinButton, QinLabel, QinTable } from "qinpel-cps";

class QinScaffold extends QinColumn {
  public constructor() {
    super();
    let line = new QinLine();
    line.install(this);
    let button = new QinButton({ label: new QinLabel("Click me!") });
    button.install(line);
    let table = new QinTable();
    table.install(this);
    table.setHead(["Name", "Current Age", "Current Age", "Current Age", "Current Age", "Current Age", "Current Age", "Current Age", "Current Age", "Current Age", "Current Age", "Current Age", "Current Age", "Current Age"]);
    table.addLine(["John", "251", "251", "251", "251", "251", "251", "251", "251", "251", "251", "251", "251", "251"]);
    table.addLine(["Jane", "242", "242", "242", "242", "242", "242", "242", "242", "242", "242", "242", "242", "242"]);
  }
}

new QinScaffold().style.putAsBody();
