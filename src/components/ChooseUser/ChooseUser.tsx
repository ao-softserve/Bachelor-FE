/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from "react";
import { observer } from "mobx-react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  RadioGroup,
  FormControlLabel,
  Button,
  Radio,
  DialogActions,
  FormHelperText
} from "@material-ui/core";
import { useQuery, useSubscription, useMutation } from "@apollo/react-hooks";
import { Users, USERS_QUERY, User } from "../../api/resources/query";
import { StoreContext } from "../..";
import { RootStore } from "../../stores";
import { SET_USER_TAKEN, SetUserTaken } from "../../api/resources/mutation";
import { USERS_CHANGED_SUBSCRIPTION } from "../../api/resources/subscription";

export const ChooseUser: React.FC = observer(() => {
  const { common } = React.useContext<RootStore>(StoreContext);

  const { data } = useQuery<Users>(USERS_QUERY);

  const [setUserTaken, mutation] = useMutation<SetUserTaken>(SET_USER_TAKEN);

  const subscriptionData = useSubscription<{ usersChanged: User[] }>(USERS_CHANGED_SUBSCRIPTION);

  const usersChanged = subscriptionData.data && subscriptionData.data.usersChanged;

  const users = usersChanged ? usersChanged : data && data.users;

  const getIsTaken = (name: string) => users && users.find((user) => user.name === name)!.taken;

  const getUserId = (name: string) => users && users.length && users.find((user) => user.name === name)!.id;

  const [userSelected, setUserSelected] = React.useState("");
  const [errorMsg, setErrorMsg] = React.useState("");

  const handleRadio = (e: any) => {
    e.persist();
    setUserSelected(e.target.value);
  };

  React.useEffect(() => {
    if (userSelected) {
      getIsTaken(userSelected) ? setErrorMsg("This user is already taken") : setErrorMsg("");
    }
    //eslint-disable-next-line
  }, [usersChanged, userSelected]);

  React.useEffect(() => {
    //@ts-ignore
    const userId = parseInt(getUserId(userSelected));

    mutation.data && mutation.data.setUserTaken && userId && common.setUserId(userId);
    mutation.data && mutation.data.setUserTaken && common.setUserName(userSelected);
    //eslint-disable-next-line
  }, [mutation.data]);

  const handleOk = () => {
    //@ts-ignore
    const userId = parseInt(getUserId(userSelected));
    setUserTaken({ variables: { userId: userId } });
  };

  const canSubmit = !!userSelected && !errorMsg.length;

  const userRadio = (user: User) => <FormControlLabel value={user.name} key={user.id} control={<Radio />} label={user.name} />;

  const button = (
    <Button onClick={handleOk} color="primary" disabled={!canSubmit} variant="contained">
      Ok
    </Button>
  );

  const dialogContent = (
    <DialogContent dividers>
      <RadioGroup aria-label="user-type" name="user-type" value={userSelected} onChange={handleRadio}>
        {users?.length && users.map((user) => userRadio(user))}
      </RadioGroup>
    </DialogContent>
  );

  const errorMessage = <FormHelperText error={!!errorMsg.length}>{errorMsg}</FormHelperText>;

  return (
    <Dialog disableBackdropClick disableEscapeKeyDown maxWidth="xs" aria-labelledby="choose-user-title" open={true}>
      <DialogTitle id="choose-user-title">Choose User</DialogTitle>
      {dialogContent}
      <DialogActions>
        {errorMessage}
        {button}
      </DialogActions>
    </Dialog>
  );
});
