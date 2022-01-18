import { CloudUploadIcon, DocumentTextIcon } from "@heroicons/react/outline";
import { excelIcon, fileUploadIcon } from "../../assets";
import styles from "./DragAndDropSection.module.css";
import React, { useState } from "react";
import Image from "next/image";
import { Button, Input } from "..";

const DragAndDropSection = () => {
  const [studentFileDisplayName, setStudentFileDisplayName] = useState<
    string | null
  >(null);
  const [dropAreaIcon, setDropAreaIcon] = useState(
    <DocumentTextIcon className="h-12 mb-3 text-slate-500" />
  );
  const acceptedFileTypes = ["xlsx", "xls", "csv"];

  const uploadFile = (e: {
    target: { value: React.SetStateAction<string> };
  }) => {
    const filename = e.target.value.toString().split("\\").pop() || "";
    const extension = filename.split(".").pop() || "";
    acceptedFileTypes.includes(extension)
      ? setStudentFileDisplayName(filename)
      : console.log("Please upload an excel file");
  };

  const drag = () => {
    setDropAreaIcon(<CloudUploadIcon className="h-12 mb-3 text-slate-500" />);
  };
  const leave = () => {
    setDropAreaIcon(<DocumentTextIcon className="h-12 mb-3 text-slate-500" />);
  };

  return (
    <>
      {/* Drag and drop area */}
      <div className={styles.dropSectionInner}>
        <p className="text-slate-700 text-base mb-2 font-semibold">
          Drop your spread sheet here, or browse
        </p>
        {dropAreaIcon}
        <p className="text-slate-400 text-xs">
          {studentFileDisplayName
            ? studentFileDisplayName
            : "Supports CSV, XLS, XLSX"}
        </p>
        <input
          onDragOver={drag}
          onDragLeave={leave}
          onDrop={leave}
          type="file"
          onChange={uploadFile}
        />
      </div>
      <div className="my-4 w-1/3 gap-4 flex flex-row justify-center">
        {/* Drop Down */}
        <Input type="number" placeHolder="Group into" padding="px-3 py-2" />
        {/* Generate Button */}
        <Button value="Generate" padding="px-3 py-2" />
      </div>
    </>
  );
};

export default DragAndDropSection;
