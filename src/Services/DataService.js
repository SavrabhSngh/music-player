import { BehaviorSubject } from "rxjs";
import { useQuery, gql } from "@apollo/client";
import { saveTracks } from "../Store/Track/action";
import { saveSongs } from "../Store/Songs/action";
export class DataService {
  static serviceBehaviour;

  static SetServiceBehaviour(behaviourOpts) {
    DataService.serviceBehaviour = behaviourOpts;
  }

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

  static getPlayList = async () => {
    const PlayList = gql`
      {
        getPlaylists {
          id
          title
        }
      }
    `;
    // eslint-disable-next-line no-unused-vars
    const { data, loading, error } = await useQuery(PlayList);
    if (data?.getPlaylists.length) {
      DataService.serviceBehaviour &&
        DataService.serviceBehaviour.AppStore.dispatch(
          saveTracks(data.getPlaylists)
        );
    }
  };

  static getSongsList = async (playlistId) => {
    const SongsList = gql` {
      getSongs(playlistId: ${playlistId}) {
        _id
        title
        photo
        url
        duration
        artist
      }
    }
    `;
    // eslint-disable-next-line no-unused-vars
    const { data, loading, error } = await useQuery(SongsList);
    if (data?.getSongs.length) {
      DataService.serviceBehaviour &&
        DataService.serviceBehaviour.AppStore.dispatch(
          saveSongs(data.getSongs)
        );
    }
  };
}
