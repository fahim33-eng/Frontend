import { AgoraVideoPlayer } from "agora-rtc-react";

export default function VideoPlayer(props) {
  const { users, tracks } = props;

  return (
    <div className="flex" style={{ height: "100%" }}>
      <div className=" gap-4">
        <AgoraVideoPlayer
          videoTrack={tracks[1]}
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      {users.length > 0 &&
        users.map((user) => {
          if (user.videoTrack) {
            return (
              <div className="gap-4">
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