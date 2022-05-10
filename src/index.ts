import { QinButton, QinColumn, QinLabel, QinString } from "qinpel-cps";

class QinScaffold extends QinColumn {
  public constructor() {
    super();
    let test = new QinString();
    test.install(this);
    let put = new QinButton({ label: new QinLabel("Put") });
    put.install(this);
    put.addActionMain(() => {
      test.setData("City");
    });
    let get = new QinButton({ label: new QinLabel("Get") });
    get.install(this);
    get.addActionMain(() => {
      console.log(test.getData());
    });
  }
}

new QinScaffold().style.putAsBody();
