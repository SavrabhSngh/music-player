import { BehaviorSubject } from "rxjs";

export class DataService {
  static ServiceInst = new BehaviorSubject({
    msgType: "Dashboard",
    payLoad: "",
  });

  static initializeSubscriber(nextHandler, errorHandler) {
    DataService.resetSubscriber();
    DataService.ServiceInst.subscribe(nextHandler, errorHandler);
  }

  static resetSubscriber() {
    if (!DataService.ServiceInst.isStopped) {
      DataService.ServiceInst.complete();
    }
    DataService.ServiceInst = new BehaviorSubject({
      msgType: "Dashboard",
      payLoad: "",
    });
  }
}