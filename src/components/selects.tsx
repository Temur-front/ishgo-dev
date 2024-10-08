import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Option } from "@/TS";

export const SelectComponent = ({
  options = [],
  placeholder = "",
}: {
  options?: Option[];
  placeholder?: string;
}) => {
  return (
    <Select>
      <SelectTrigger className="shadow-main">
        <SelectValue placeholder={placeholder} />
      </SelectTrigger>
      <SelectContent>
        {options.map((opt) => (
          <SelectItem key={opt.value} value={opt.value}>
            {opt.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
