import { QinButton, QinColumn, QinLabel, QinLine } from "qinpel-cps";

class QinScaffold extends QinColumn {
  private _btnInfo = new QinButton({ label: new QinLabel("Show Info") }).styled({
    width: "800px",
  });
  private _btnError = new QinButton({ label: new QinLabel("Show Error") });
  private _line1 = new QinLine({ items: [this._btnInfo, this._btnError] });

  public constructor() {
    super();
    this._line1.install(this);
    this._btnInfo.addActionMain(() => {
      this.qinpel.jobbed.showInfo("This is a test");
    });
    this._btnError.addActionMain(() => {
      this.qinpel.jobbed.showError(
        { why: "This an error with a reason" },
        "{qinscaffold}(ErrCode-000001)"
      );
    });
  }
}

new QinScaffold().style.putAsBody();
