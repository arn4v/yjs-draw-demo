import * as React from "react";
import { User } from "../types";

export interface UserCursorProps {
  user: User;
}

export const UserCursor = React.memo(({ user }: UserCursorProps) => {
  return (
    <circle
      key={user.id}
      cx={user.point[0]}
      cy={user.point[1]}
      r={4}
      fill={user.isActive ? user.color : "grey"}
    />
  );
});
