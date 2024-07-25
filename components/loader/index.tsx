import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Spinner } from "./spinner";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type LoaderProps = {
  loading?: boolean;
  children: React.ReactNode;
  className?: string;
  noPadding?: boolean;
};

export const Loader = ({
  loading,
  children,
  noPadding,
  className,
}: LoaderProps) => {
  return loading ? (
    <div className={cn(className || "w-full py-5 flex justify-center")}>
      <Spinner noPadding={noPadding} />
    </div>
  ) : (
    children
  );
};
