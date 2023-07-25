"use client";
import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div>
      <TailSpin
        height="30"
        width="30"
        color="#4fa94d"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
}
