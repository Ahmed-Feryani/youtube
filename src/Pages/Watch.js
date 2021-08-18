import React from "react";
import Layout from "../Components/Layout/Layout";
import VidCard from "../Components/VidCard/VidCard";
import WatchVid from "../Components/WatchVid/WatchVid";

const vidList = [
  {
    title: "the title",
    owner: "the owner",
    views: "351K vues",
    date: "il y a 3 mois",
  },
  {
    title: "the title",
    owner: "the owner",
    views: "351K vues",
    date: "il y a 3 mois",
  },
  {
    title: "the title",
    owner: "the owner",
    views: "351K vues",
    date: "il y a 3 mois",
  },
  {
    title: "the title",
    owner: "the owner",
    views: "351K vues",
    date: "il y a 3 mois",
  },
  {
    title: "the title",
    owner: "the owner",
    views: "351K vues",
    date: "il y a 3 mois",
  },
  {
    title: "the title",
    owner: "the owner",
    views: "351K vues",
    date: "il y a 3 mois",
  },
  {
    title: "the title",
    owner: "the owner",
    views: "351K vues",
    date: "il y a 3 mois",
  },
  {
    title: "the title",
    owner: "the owner",
    views: "351K vues",
    date: "il y a 3 mois",
  },
  {
    title: "the title",
    owner: "the owner",
    views: "351K vues",
    date: "il y a 3 mois",
  },
  {
    title: "the title",
    owner: "the owner",
    views: "351K vues",
    date: "il y a 3 mois",
  },
  {
    title: "the title",
    owner: "the owner",
    views: "351K vues",
    date: "il y a 3 mois",
  },
  {
    title: "the title",
    owner: "the owner",
    views: "351K vues",
    date: "il y a 3 mois",
  },
  {
    title: "the title",
    owner: "the owner",
    views: "351K vues",
    date: "il y a 3 mois",
  },
  {
    title: "the title",
    owner: "the owner",
    views: "351K vues",
    date: "il y a 3 mois",
  },
];

const RenderVidList = (list) => {
  return list.map((vid) => {
    return (
      <VidCard
        title={vid.title}
        owner={vid.owner}
        views={vid.views}
        date={vid.date}
      ></VidCard>
    );
  });
};

const Watch = () => {
  return (
    <Layout aside={RenderVidList(vidList)}>
      <WatchVid></WatchVid>
    </Layout>
  );
};

export default Watch;
