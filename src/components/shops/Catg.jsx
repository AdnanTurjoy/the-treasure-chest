import React from "react"

const Catg = () => {
  const data = [
    {
     
      cateName: "Romantic",
    },
    {
     
      cateName: "Thriller",
    },
    {
     
      cateName: "Horror",
    },
    {
     
      cateName: "Novel",
    },
    {
     
      cateName: "Poem",
    },
   
  ]
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1 className="text-[#0f3460] text-2xl font-semibold">Category </h1>
          
        </div>
        {data.map((value, index) => {
          return (
            <div className='box f_flex' key={index}>
              <img src={value.cateImg} alt='' />
              <span>{value.cateName}</span>
            </div>
          )
        })}
        <div className='box box2'>
          <button>View All Brands</button>
        </div>
      </div>
    </>
  )
}

export default Catg
