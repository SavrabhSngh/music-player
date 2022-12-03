import { BehaviorSubject } from "rxjs";
import axios from "axios";
import { saveTracks } from "../Store/Track/action";
import { saveSongs } from "../Store/Songs/action";
import { API_BASE_URL } from "../envconfig";
export class DataService {
  static serviceBehaviour;

  static SetServiceBehaviour(behaviourOpts) {
    DataService.serviceBehaviour = behaviourOpts;
  }

  static ServiceInst = new BehaviorSubject({
    msgType: "Song",
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

  static getPlayList = async () => {
    axios({
      method: "post",
      url: API_BASE_URL,
      data: {
        query: `
        {
          getPlaylists {
            id
            title
          }
        }
        `,
      },
    }).then((resp) => {
      DataService.serviceBehaviour &&
        DataService.serviceBehaviour.AppStore.dispatch(
          saveTracks(resp.data.data.getPlaylists)
        );
    });
  };

  static getSongsList = async (playlistId) => {
    axios({
      method: "post",
      url: API_BASE_URL,
      data: {
        query: `
        {
          getSongs(playlistId: ${playlistId}) {
            _id
            title
            photo
            url
            duration
            artist
          }
        }
        `,
      },
    }).then((resp) => {
      DataService.serviceBehaviour &&
        DataService.serviceBehaviour.AppStore.dispatch(
          saveSongs(resp.data.data.getSongs)
        );
    });
  };
}
