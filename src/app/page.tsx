"use client"

import Parent from "@/components/Parent";
import { CounterContext } from "@/context/CounterContext";
import { use, useContext } from "react";

export default function Home() {

  const { state, dispatch } = use(CounterContext)
  // console.log(state)

  return (
    <div>
      <Parent state={state} />
    </div>
  )
}
