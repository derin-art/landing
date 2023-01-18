import { memo } from "react";
import { Handle, Position } from "reactflow";

function CustomNodeI({ data }: any) {
  return (
    <div className="font-inter text-4xl">
      I
      <Handle
        type="target"
        position={Position.Bottom}
        className="w-16 bg-teal-500"
      />
    </div>
  );
}

export default memo(CustomNodeI);
