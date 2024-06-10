import React from 'react'

const CuratedOffers = () => {

    const images =[
        "https://cms.landmarkshops.in/cdn-cgi/image/w=450,q=85,fit=cover/LS-Fest/LS-new/LS-UberHP-PromoWidget43-Common-Banner1-04Jun24.jpg",
        "https://cms.landmarkshops.in/cdn-cgi/image/w=450,q=85,fit=cover/LS-Fest/LS-new/LS-UberHP-PromoWidget43-Common-Banner2-04Jun24.jpg",
        "https://cms.landmarkshops.in/cdn-cgi/image/w=450,q=85,fit=cover/LS-Fest/LS-new/LS-UberHP-PromoWidget43-Common-Banner3-04Jun24.jpg",
        "https://cms.landmarkshops.in/cdn-cgi/image/w=450,q=85,fit=cover/LS-Fest/LS-new/LS-UberHP-PromoWidget43-Common-Banner4-04Jun24.jpg" 
    ];

  return (
    <>
    <div className='p-6 ml-24'>
      <h2 className='text-2xl font-bold mb-4'>Curated Offers</h2>
      <div className='border-b-4 border-yellow-500 w-16 mb-6'></div>
      <div className='flex justify-items gap-4'>
        {images.map((url,index) =>(
            <img key={index} src={url} alt={`pic${index}`} className='w-[18.5rem] rounded-xl'/>
        ))}
      </div>
    </div>
    <div className='flex justify-center p-4'>
        <img src='https://lmsin.net/cdn-cgi/image/w=1232,q=70,fit=cover/https://70415bb9924dca896de0-34a37044c62e41b40b39fcedad8af927.lmsin.net/LS-Fest/LS-new/Uber-HP-Desktop-PromoStrip3-25Mar2023.jpg' alt='offerss 50%' className='rounded-xl'/>
    </div>
    <div className='p-6 ml-24'>
      <h2 className='text-2xl font-bold mb-4'>Featured Brand</h2>
      <div className='border-b-4 border-yellow-500 w-16 mb-6'></div>
      <div className='flex'>
            <img  src="https://cms.landmarkshops.in/cdn-cgi/image/w=1232,q=85,fit=cover/LS-Fest/LS-new/LS-UberHP-PromoWidget50-Desk-Banner1-06Jun24.gif" alt="featured brand" className=' rounded-xl'/>
      </div>
    </div>
    </>
    
  )
}

export default CuratedOffers
