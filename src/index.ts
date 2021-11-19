import { QinColumn, QinLabel } from "qinpel-cps"

class QinScaffold extends QinColumn {

    private qinHello: QinLabel = new QinLabel("Hello, world!");

    public constructor() {
        super();
        this.qinHello.install(this);
    }

}

new QinScaffold().putAsBody();