import React from "react";
import { observer } from "mobx-react";
import { StoreContext } from "../..";
import { useMutation, useQuery, useSubscription } from "@apollo/react-hooks";
import { ORDER_RES } from "../../api/resources/mutation";
import { RootStore } from "../../stores";
import { USERS_QUERY, User, Users } from "../../api/resources/query";
import { USERS_CHANGED_SUBSCRIPTION } from "../../api/resources/subscription";

export const SimulateFinalTaker = observer(() => {
  const { common } = React.useContext<RootStore>(StoreContext);

  const [timer, setTimer] = React.useState();

  const [orderResource] = useMutation(ORDER_RES);

  const { data } = useQuery<Users>(USERS_QUERY);

  const subscriptionData = useSubscription<{ usersChanged: User[] }>(USERS_CHANGED_SUBSCRIPTION);

  const usersChanged = subscriptionData.data && subscriptionData.data.usersChanged;

  const users = usersChanged ? usersChanged : data && data.users;

  const getRandomOrder = () => Math.floor(Math.sin(Math.random() * 3.14) * 100);
  //  @ts-ignore
  const finalTakerId = users && !!users.length && parseInt(users.find((usr) => parseInt(usr.id) === users.length)!.id) + 1;

  const handleBuy = (qty: number) => {
    //@ts-ignore
    finalTakerId && orderResource({ variables: { userId: parseInt(finalTakerId), qty: parseInt(qty) } });
  };

  React.useEffect(() => {
    if (common.allUsersReady && common.userId === finalTakerId - 1) {
      const timerNo = setInterval(() => {
        handleBuy(getRandomOrder());
      }, 30000);
      setTimer(timerNo);
    }
    return clearInterval(timer);
    //eslint-disable-next-line
  }, [common.allUsersReady]);

  return <></>;
});
