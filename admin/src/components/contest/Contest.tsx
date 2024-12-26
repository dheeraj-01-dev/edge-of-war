"use client";
import React, { useState } from "react";
import styles from "./styles/contest.module.css";
import { useSwipeable } from "react-swipeable";
import NotAvailableTemplate from "../temp/NotAvailableTemplate";
import UpcomingBattle from "./UpcomingBattle";

interface contestType {
  onHost: ({ apikey, authorization, roomId, roomPass, battle }: {
    apikey: string | undefined;
    authorization: string | undefined;
    roomId: string | number | undefined;
    roomPass: string | number | undefined;
    battle: string | undefined;
}) => Promise<responseType<string>>;
  upcomingBattles: battleType[] | undefined;
  completedBattles: battleType[] | undefined;
  authorization: string | undefined,
  apikey: string | undefined
}

const Contest: React.FC<contestType> = ({
  onHost,
  authorization,
  apikey,
  upcomingBattles,
  completedBattles,
}) => {
  // const [upcomingPage, setUpcomingPage] = useState(true);
  const [page, setPage] = useState(0);

  const handlePageToggle = (page: number) => {
    setPage(page);
  };

  const handler = useSwipeable({
    onSwipedLeft: () => {
      setPage(1);
    },
    onSwipedRight: () => {
      setPage(0);
    },
  });

  const handleHost = async ({ roomId, roomPass, battle }: {roomId: string|number|undefined, roomPass: string|number|undefined, battle: string|undefined}) => {
    const res = await onHost({authorization, apikey, roomId, roomPass, battle});
    return res;
  }

  return (
    <div className={styles.contestContainer} id="pageContainer">
      <div className={styles.pageHeadlines}>
        <div
          className={styles.headlineText}
          onClick={() => handlePageToggle(0)}
        >
          UPCOMING
        </div>
        <div
          className={styles.headlineText}
          onClick={() => handlePageToggle(1)}
        >
          COMPLETED
        </div>
      </div>
      <div
        className={`${styles.highLighter} ${
          page === 1 && styles.highLightCompleted
        } contestHighLighter`}
      ></div>
      <div {...handler} className={styles.contest}>
        <div
          className={`${styles.upcoming} ${page === 1 && styles.upcomingPage}`}
        >
          {upcomingBattles ? (
            <UpcomingBattle handleHost={handleHost} battles={upcomingBattles} />
          ) : (
            <NotAvailableTemplate
              style={{ height: "calc(100% - 20px)", background: "none" }}
            />
          )}
        </div>
        <div className={styles.completed}>
          {completedBattles ? (
            <div></div>
          ) : (
            <NotAvailableTemplate
              style={{ height: "calc(100% - 20px)", background: "none" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Contest;
