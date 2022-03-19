import {
  QinLine,
  QinColumn,
  QinLabel,
  QinButton,
  QinMenu,
  QinMenuItem,
  QinIcon,
  QinAsset,
} from "qinpel-cps";
import { QinGrandeur } from "qinpel-res";

class QinScaffold extends QinColumn {
  private qinTopBar = new QinLine();
  private qinTest = new QinButton({ label: new QinLabel("Test") });
  private qinMenu = new QinMenu();

  public constructor() {
    super();
    this.qinTopBar.install(this);
    this.qinTopBar.style.putAsFlexMin();
    this.qinTest.install(this.qinTopBar);
    this.qinTest.addAction((ev) => {
      if (ev.isPrimary) {
        let item = new QinMenuItem(
          new QinIcon(QinAsset.FaceBag, QinGrandeur.LARGE),
          new QinLabel("Bag of the multifarios bagged.")
        );
        item.addAction((ev) => {
          if (ev.isSecondary) {
            item.swapSelect();
          }
        });
        this.qinMenu.putItem(item);
      }
    });
    this.qinMenu.install(this);
    this.qinMenu.style.putAsFlexMax();
  }
}

new QinScaffold().style.putAsBody();
