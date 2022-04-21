import {
  QinAsset,
  QinButton,
  QinColumn,
  QinIcon,
  QinIconPick,
  QinLabel,
  QinLine
} from "qinpel-cps";

class QinScaffold extends QinColumn {
  public constructor() {
    super();
    let line1 = new QinLine();
    line1.install(this);
    let btn1 = new QinButton({ label: new QinLabel("1") });
    btn1.install(line1);
    let btn2 = new QinButton({ label: new QinLabel("2") });
    btn2.install(line1);
    let btn3 = new QinButton({ label: new QinLabel("3") });
    btn3.install(line1);
    let btn4 = new QinButton({ label: new QinLabel("4") });
    btn4.install(line1);
    let line2 = new QinLine();
    line2.install(this);
    let pick = new QinIconPick();
    pick.install(line2);
    let icon1 = new QinIcon(QinAsset.FaceAdd);
    pick.addIcon(icon1);
    let icon2 = new QinIcon(QinAsset.FaceAttach);
    pick.addIcon(icon2);
    let icon3 = new QinIcon(QinAsset.FaceBell);
    pick.addIcon(icon3);
    btn1.addAction((ev) => {
      if (ev.isPrimary) {
        pick.setData(QinAsset.FaceAdd);
      }
    });
    icon2.addAction((ev) => {
      if (ev.isPrimary) {
        pick.setData(QinAsset.FaceAttach);
      }
    });
    btn3.addAction((ev) => {
      if (ev.isPrimary) {
        pick.setData(QinAsset.FaceBell);
      }
    });
    btn4.addAction((ev) => {
      if (ev.isPrimary) {
        pick.setData(null);
      }
    });
  }
}

new QinScaffold().style.putAsBody();
