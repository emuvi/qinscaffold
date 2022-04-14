import { QinStack, QinPanel } from "qinpel-cps";

class QinScaffold extends QinStack {
  public constructor() {
    super();
    let panel1 = new QinPanel();
    panel1.style.putAsBackground("green");
    this.add(panel1);
    let panel2 = new QinPanel();
    panel2.style.putAsBackground("yellow");
    this.add(panel2);
    let panel3 = new QinPanel();
    panel3.style.putAsBackground("red");
    this.add(panel3);
    setTimeout(() => {
      panel1.style.putAsZIndex(10);
    }, 3000);
    setTimeout(() => {
      panel2.style.putAsZIndex(10);
    }, 6000);
    setTimeout(() => {
      panel3.style.putAsZIndex(10);
    }, 9000);
  }
}

new QinScaffold().style.putAsBody();
