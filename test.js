import React, { useEffect, useState } from 'react'
import { config, useClient, useMicrophoneAndCameraTracks, channelName } from './AgoraSettings';
import VideoPlayer from './VideoPlayer';
import VideoControls from './VideoControls'

export default function VideoCall(props) {
  const { setInCall } = props;
  const [users, setUsers] = useState([]);
  const [start, setStart] = useState(false);
  const client = useClient();
  const { ready, tracks } = useMicrophoneAndCameraTracks();

  useEffect(() => {
    let init = async (name) => {
      client.on("user-published", async (user, mediaType) => {
        await client.subscribe(user, mediaType);
        if (mediaType === "video") {
          setUsers((prevUsers) => {
            return [...prevUsers, user];
          });
        }
        if (mediaType === "audio") {
          user.audioTrack.play();
        }
      });

      client.on("user-unpublished", (user, mediaType) => {
        if (mediaType === "audio") {
          if (user.audioTrack) user.audioTrack.stop();
        }
        if (mediaType === "video") {
          setUsers((prevUsers) => {
            return prevUsers.filter((User) => User.uid !== user.uid);
          });
        }
      });

      client.on("user-left", (user) => {
        setUsers((prevUsers) => {
          return prevUsers.filter((User) => User.uid !== user.uid);
        });
      });

      try {
        await client.join(config.appId, name, config.token, null);
      } catch (error) {
        console.log("error");
      }

      if (tracks) await client.publish([tracks[0], tracks[1]]);
      setStart(true);
    };

    if (ready && tracks) {
      try {
        init(channelName);
      } catch (error) {
        console.log(error);
      }
    }
  }, [channelName, client, ready, tracks]);

  return (
    <div className='h-[100%] flex flex-col w-[100%]'>
      <div style={{ height: "15%" }}>
        {ready && tracks && (
          <VideoControls tracks={tracks} setStart={setStart} setInCall={setInCall} />
        )}
      </div>
      <div style={{ height: "85%" }}>
        {start && tracks && <VideoPlayer tracks={tracks} users={users} />}
      </div>
    </div>
  );
}










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