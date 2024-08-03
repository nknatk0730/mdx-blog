import { FC } from "react";

export type Post = {
  title: string;
  createdAt: string;
  content: FC;
  id: string;
}