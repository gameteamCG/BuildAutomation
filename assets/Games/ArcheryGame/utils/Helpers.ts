import { enableDebuggers, enableLogs, LogTypes } from "./Constants";

class DebugHelpers {
  /* *INFO: write debug and utility functions here, for docs, search with HELPER
  you can add more log types when the project becomes complex */
  public log(msg: any, type: string) {
    if (!enableLogs) {
      return;
    }
    let background = "";
    let typeName = "";
    switch (type) {
      case LogTypes.INFO:
        background = "background: green;";
        typeName = LogTypes.INFO;
        break;
      case LogTypes.ERROR:
        background = "background: red;";
        typeName = LogTypes.ERROR;
        break;
      case LogTypes.TRACK:
        background = "background: purple;";
        typeName = LogTypes.TRACK;
        break;
      case LogTypes.CREATION:
        background = "background: teal;";
        typeName = LogTypes.CREATION;
        break;
      case LogTypes.DESTRUCTION:
        background = "background: orange;";
        typeName = LogTypes.DESTRUCTION;
        break;
      default:
        background = "";
        break;
    }
    console.log(`%c${typeName}`, `font-weight: bold; ${background}`);
    console.log(`%c${msg}`, `${background}`);

    if (typeName == LogTypes.ERROR) {
      console.trace("Error Stack Trace: ");
    }
  }

  public customDebugger() {
    if (enableDebuggers) {
      debugger;
    }
  }
}

const debug = new DebugHelpers();

export default debug;
