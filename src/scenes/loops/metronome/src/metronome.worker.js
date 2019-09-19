/* eslint-env worker */
/* eslint-disable no-restricted-globals */

const worker = () => {
  const START_WORKER = "START";
  const STOP_WORKER = "STOP";
  const ACTION_UPDATE = "UPDATE";
  const WORKER_TICK = "TICK";

  const SCHEDULER_INTERVAL = 25;
  let timer = null;

  self.onmessage = event => {
    const {
      data: { action }
    } = event;

    switch (action) {
      case START_WORKER:
        timer = setInterval(
          () => self.postMessage(WORKER_TICK),
          SCHEDULER_INTERVAL
        );
        break;

      case STOP_WORKER:
        clearInterval(timer);
        timer = null;
        break;

      case ACTION_UPDATE:
        if (timer) {
          clearInterval(timer);
          timer = setInterval(
            () => self.postMessage(WORKER_TICK),
            SCHEDULER_INTERVAL
          );
        }
        break;

      default:
        throw new Error(
          `Action must be of type: ${START_WORKER}, ${STOP_WORKER} or ${ACTION_UPDATE} (received ${action}).`
        );
    }
  };
};

let code = worker.toString();
code = code.substring(code.indexOf("{") + 1, code.lastIndexOf("}"));

const blob = new Blob([code], { type: "application/javascript" });
const workerScript = URL.createObjectURL(blob);

export default workerScript;
