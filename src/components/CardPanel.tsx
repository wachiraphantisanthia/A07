'use client'

import { useReducer } from "react"
import Card from "./Card"
import Link from "next/link"

const venues = [
  {
    vid: "001",
    name: "The Bloom Pavilion",
    image: "/bloom.jpg"
  },
  {
    vid: "002",
    name: "Spark Space",
    image: "/sparkspace.jpg"
  },
  {
    vid: "003",
    name: "The Grand Table",
    image: "/grandtable.jpg"
  }
]

type Action =
  | { type: "rate"; venue: string; value: number }
  | { type: "remove"; venue: string }

function reducer(state: Map<string, number>, action: Action) {

  const newMap = new Map(state)

  if (action.type === "rate") {
    newMap.set(action.venue, action.value)
  }

  if (action.type === "remove") {
    newMap.delete(action.venue)
  }

  return newMap
}

export default function CardPanel() {

  const initialState = new Map<string, number>([
    ["The Bloom Pavilion", 0],
    ["Spark Space", 0],
    ["The Grand Table", 0]
  ])

  const [venueRatings, dispatch] = useReducer(reducer, initialState)

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {venues.map((venue) => (

          <Link key={venue.vid} href={`/venue/${venue.vid}`}>

            <Card
              venueName={venue.name}
              imgSrc={venue.image}
              rating={venueRatings.get(venue.name) || 0}
              onRatingChange={(name, value) =>
                dispatch({
                  type: "rate",
                  venue: name,
                  value: value ?? 0
                })
              }
            />

          </Link>

        ))}

      </div>

      {/* Rating List */}
      <div className="mt-10 space-y-3">

        <h2 className="text-2xl font-semibold text-white">
          Venue List with Ratings : {venueRatings.size}
        </h2>

        {[...venueRatings.entries()].map(([name, value]) => (
          <div
            key={name}
            data-testid={name}
            className="cursor-pointer bg-white text-black p-3 rounded shadow"
            onClick={() =>
              dispatch({
                type: "remove",
                venue: name
              })
            }
          >
            {name} : {value}
          </div>
        ))}

      </div>

    </div>
  )
}