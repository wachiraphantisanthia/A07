'use client'

import Image from 'next/image'
import InteractiveCard from './InteractiveCard'
import Rating from '@mui/material/Rating'

interface CardProps {
  venueName: string
  imgSrc: string
  rating: number
  onRatingChange: (venueName: string, value: number | null) => void
}

export default function Card({ venueName, imgSrc, rating, onRatingChange }: CardProps) {
  return (
    <InteractiveCard className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 hover:-translate-y-1">

      <div className="relative w-full h-56">
        <Image
          src={imgSrc}
          alt={venueName}
          fill
          className="object-contain rounded-t-lg"
        />
      </div>

      <div className="p-4 text-center">

        <p className="text-lg font-semibold text-blue-600 mb-2">
          {venueName}
        </p>

        <Rating
  value={rating}
  onChange={(e,newValue)=>{
    e.stopPropagation()
    onRatingChange(venueName,newValue)
  }}
  onClick={(e)=>e.stopPropagation()}
  id={venueName + " Rating"}
  name={venueName + " Rating"}
  data-testid={venueName + " Rating"}
/>

      </div>

    </InteractiveCard >
  )
}