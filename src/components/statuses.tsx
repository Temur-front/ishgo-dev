import Icons from "@/public/svg";

export const Statuses = ({
  status = "new",
}: {
  status: "new" | "print" | "complain";
}) => {
  return status === "new" ? (
    <div className="flex items-center text-xs">
      <Icons.New_status />
      <span className="h-[22px] mt-[1px] font-medium inline-flex justify-center items-center px-[7px] bg-slate-100 rounded text-green-main">
        New
      </span>
    </div>
  ) : status === "print" ? (
    <div className="flex items-center text-xs">
      <Icons.Print />
      <span className="h-[22px] mt-[1px] font-medium inline-flex justify-center items-center px-[7px] bg-slate-100 rounded text-blue-main">
        Print CV
      </span>
    </div>
  ) : status === "complain" ? (
    <div className="flex items-center text-xs">
      <Icons.Complain />
      <span className="h-[22px] mt-[1px] font-medium inline-flex justify-center items-center px-[7px] bg-slate-100 rounded text-orange-main">
        Complain
      </span>
    </div>
  ) : (
    ""
  );
};
