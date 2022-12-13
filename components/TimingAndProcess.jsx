import React from 'react'

const TimingAndProcess = () => {
  return (
    <div className="lg:mx-44 lg:mt-20 mx-16 mt-8">
      <div className="grid grid-cols-1 grid-rows-3 lg:grid-rows-1 lg:grid-cols-3 gap-10 justify-between relative">
          <div className="flex flex-row items-start lg:flex-col">
            <div className="flex flex-col lg:flex-row items-center lg:justify-center shrink-0 mr-10 lg:mr-0 lg:w-full">
              <span className="text-white w-12 h-12 bg-ycc-green text-4xl text-bold nums flex items-center justify-center shrink-0 ">1</span>
              <span className="w-px h-20 mt-10 lg:mt-0 lg:h-px lg:w-full bg-ycc-green lg:ml-10"></span>
            </div>
            <div className="page__content page__content--timing-and-process">
                <h4 className="mt-0 lg:mt-5">APPLY</h4>
                <p>Send us your GitHub link and LinkedIn profile via Apply Now section.</p>
            </div>
          </div>
          <div className="flex flex-row items-start lg:flex-col">
            <div className="flex flex-col lg:flex-row items-center lg:justify-center shrink-0 mr-10 lg:mr-0 lg:w-full">
              <span className="text-white w-12 h-12 bg-ycc-green text-4xl text-bold nums flex items-center justify-center shrink-0 ">2</span>
              <span className="w-px h-20 mt-10 lg:mt-0 lg:h-px lg:w-full bg-ycc-green lg:ml-10"></span>
            </div>
            <div className="page__content page__content--timing-and-process">
                <h4 className="mt-0 lg:mt-5">TEST</h4>
                <p>After your application, we will send you test and ask you to complete it the given time.</p>
            </div>
          </div>
          <div className="flex flex-row items-start lg:flex-col">
            <div className="flex flex-col lg:flex-row items-center lg:justify-center shrink-0 mr-10 lg:mr-0">
              <span className="text-white w-12 h-12 bg-ycc-green text-4xl text-bold nums flex items-center justify-center shrink-0 ">3</span>
            </div>
            <div className="page__content page__content--timing-and-process">
                <h4 className="mt-0 lg:mt-5">INTERVIEW</h4>
                <p>We will conduct an online interview with the students who completed their test with successs and the will start our education program with the students who passed the interview.</p>
            </div>
          </div>
        </div>
      </div>

  )
}

export default TimingAndProcess
