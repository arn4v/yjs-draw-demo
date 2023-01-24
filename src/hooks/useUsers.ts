import * as React from "react";
import { User } from "../types";
import { awareness } from "../y";

/**
 * Subscribe to the presence of other users within the provider's awareness API.
 */
export function useUsers() {
  const [users, setUsers] = React.useState<User[]>([]);

  React.useEffect(() => {
    function updateUsersState() {
      const states = awareness.getStates();

      setUsers(Array.from(states.values() as IterableIterator<User>));
    }

    updateUsersState();

    awareness.on("change", updateUsersState);
    return () => {
      awareness.off("change", updateUsersState);
    };
  }, []);

  return { users };
}
