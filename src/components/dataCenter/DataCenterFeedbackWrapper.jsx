"use client";
import dynamic from "next/dynamic";

const DataCenterFeedback = dynamic(
  () => import("@/components/dataCenter/DataCenterFeedback"),
  { ssr: false }
);

export default function DataCenterFeedbackWrapper() {
  return <DataCenterFeedback />;
}
