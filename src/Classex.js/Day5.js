import React from 'react'

export default function Day5() {
    var sweets=["kajukatli","rasagula","gulabjamun","ladoo"]
    var displaysweets=sweets.map(fname=>{return <li>{fname}</li>})/*outside the function */
    const stuinfo=[{id:1,name:"Anjana"},{id:2,name:"Bindhu"},{id:3,name:"Kavya"},{id:4,name:"Jeni"},{id:5,name:"Sweety"}]
  return (
    
    <div>{displaysweets}
    {stuinfo.map((sinfo)=>{return <li key={sinfo.id}>{sinfo.id}   {sinfo.name}</li>})}
    </div>
  )
}