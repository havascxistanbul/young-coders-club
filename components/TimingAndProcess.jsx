import React from 'react'

const TimingAndProcess = () => {
  return (
    <div className="lg:mx-44 lg:mt-20 mx-16 mt-8">
      <div className="flex justify-between relative">
        <div className="shrink-0 max-w-[14.375rem]">
          <div className="bg-ycc-green w-12 h-12 border-2 border-ycc-green flex items-center justify-center shrink-0">
            <span className="text-white text-4xl text-bold nums">1</span>
          </div>
          <div className="page__content">
              <h4>APPLY</h4>
              <p>Send us your GitHub link and LinkedIn profile via Apply Now section.</p>
          </div>
        </div>
        {/* <div className="border border-ycc-green h-0 w-[30%] left-16 mt-6 absolute" /> */}
        <div className="shrink-0 max-w-[14.375rem]">
          <div className="bg-ycc-green w-12 h-12 border-2 border-ycc-green flex items-center justify-center shrink-0">
            <span className="text-white text-4xl text-bold nums">2</span>
          </div>
          <div className="page__content">
            <h4>TEST</h4>
            <p>We will send you a technical test and ask you to complete it in the given time.</p>
          </div>
        </div>
        {/* <div className="border border-ycc-green h-0 w-[30%] left-16 mt-6 absolute" /> */}
        <div className="shrink-0  max-w-[14.375rem]">
          <div className="bg-ycc-green w-12 h-12 border-2 border-ycc-green flex items-center justify-center shrink-0">
            <span className="text-white text-4xl text-bold nums">3</span>
          </div>
          <div className="page__content">
            <h4>INTERVIEW</h4>
            <p>We will conduct a short interview with you.</p>
        </div>
        </div>
      </div>
      {/* <div className="flex gap-x-[9.75rem]">
        
        
        
      </div> */}
    </div>

  )
}

export default TimingAndProcess
