import React from 'react'

// Linkedin 
import { LinkedinUrl } from '../auth/Linkedin';

const LoginViaLinkedin = () => {
  return (
    <section className="lg:m-20 m-8">
      <div>
        <a className="px-4 py-4 rounded bg-linkedin-blue flex items-center w-max hover:scale-105 hover:transition-all duration-200" href={LinkedinUrl}>
          <div className="w-8 mr-4">
            <img className="w-full" src="/linkedin.png" alt="linkedin logo"/>
          </div>
          <span className="text-white">Continue with LinkedIn</span>
        </a>
      </div>
    </section>
  )
}

export default LoginViaLinkedin