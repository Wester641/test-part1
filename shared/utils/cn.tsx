import clsxEngine from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...params: Parameters<typeof clsxEngine>) =>
  twMerge(clsx(params));

export const clsx = (...params: Parameters<typeof clsxEngine>) =>
  clsxEngine(params);
