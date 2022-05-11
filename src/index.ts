import {
  QinButton,
  QinColumn,
  QinInteger,
  QinLabel,
  QinLine,
  QinString,
} from "qinpel-cps";

class QinScaffold extends QinColumn {
  private _edit = new QinButton({ label: new QinLabel("Edit") });
  private _read = new QinButton({ label: new QinLabel("Read") });
  private _line1 = new QinLine({ items: [this._edit, this._read] });

  private _int = new QinInteger();
  private _str = new QinString();
  private _line2 = new QinLine({ items: [this._int, this._str] });

  public constructor() {
    super();
    this._line1.install(this);
    this._line2.install(this);
    this._edit.addActionMain(() => {
      this._int.turnEditable();
      this._str.turnEditable();
    });
    this._read.addActionMain(() => {
      this._int.turnReadOnly();
      this._str.turnReadOnly();
    });
  }
}

new QinScaffold().style.putAsBody();
