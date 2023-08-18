import { AgoraVideoPlayer } from "agora-rtc-react";

export default function VideoPlayer(props) {
  const { users, tracks } = props;

  return (
    <div className="flex h-screen w-full">
      <div className=" gap-4 w-full h-screen">
        <AgoraVideoPlayer
          videoTrack={tracks[1]}
          style={{ height: "100%", width: "100%" }}
          className="h-[100%] w-[100%]"
        />
      </div>
      {users.length > 0 &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
              <div className="gap-4 w-full h-full">
                <AgoraVideoPlayer
                  videoTrack={user.videoTrack}
                  key={user.uid}
                  style={{ height: "100%", width: "100%" }}
                />
              </div>
            );
          } else return null;
        })}
    </div>
  );
}