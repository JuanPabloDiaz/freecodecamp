import { useEffect, useState } from "react";
import axios from "axios";
import Layout from "@/Components/Layout";

const twitchUsers = [
  "ESL_SC2",
  "OgamingSC2",
  "cretetion",
  "freecodecamp",
  "storbeck",
  "habathcx",
  "RobotCaleb",
  "noobs2ninjas",
];

function TwitchUser({ username }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    axios
      .get(
        `https://twitch-proxy.freecodecamp.rocks/helix/users?login=${username}`,
      )
      .then((response) => {
        setUser(response.data.data[0]);
      });
  }, [username]);

  if (!user) return null;

  return (
    <div className="flex flex-col items-center justify-between gap-6 px-4 py-2 sm:flex-row">
      <a
        className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-white"
        href={`https://www.twitch.tv/${username}`}
      >
        <img
          className="h-10 w-10 rounded-full"
          src={user.profile_image_url}
          alt={user.display_name}
        />
      </a>
      <a
        className="w-full font-bold text-dark-orange transition duration-200 hover:text-dark-orange/60 sm:w-1/6"
        href={`https://www.twitch.tv/${username}`}
      >
        {user.display_name}
      </a>
      <p className="w-full font-semibold sm:w-3/6">
        {user.description.split(" ").slice(0, 18).join(" ")}
      </p>
    </div>
  );
}

function Twitch() {
  return (
    <>
      <Layout>
        <div className="relative mb-4 flex items-center justify-center">
          <h1 className="text-xl font-medium text-black sm:text-2xl md:text-3xl">
            TwitchTV JSON API
          </h1>
        </div>
        <section className="flex w-full min-w-min flex-col items-center justify-center rounded-xl bg-black p-3 text-[#C6DAF1] sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/6">
          <div className="flex flex-col items-center justify-around gap-2 sm:flex-row sm:gap-3 md:gap-4 lg:gap-6">
            <div className="">
              {twitchUsers.map((username) => (
                <TwitchUser key={username} username={username} />
              ))}
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Twitch;
