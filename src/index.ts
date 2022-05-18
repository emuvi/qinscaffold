import { QinButton, QinColumn, QinLabel, QinLine, QinTable } from "qinpel-cps";

class QinScaffold extends QinColumn {
  private _button = new QinButton({ label: new QinLabel("Get Row 3") });
  private _line1 = new QinLine({ items: [this._button] });

  private _table = new QinTable();
  private _line2 = new QinLine({ items: [this._table] });

  public constructor() {
    super();
    this._line1.install(this);
    this._line2.install(this);
    this._table.setHead(["Name", "Age", "Address"]);
    this._table.setLines([
      ["John", "20", "London"],
      ["Jane", "20", "London"],
      ["Jack", "20", "London"],
    ]);
    this._button.addActionMain(() => {
      console.log(this._table.getLinesSize());
    });
  }
}

new QinScaffold().style.putAsBody();
