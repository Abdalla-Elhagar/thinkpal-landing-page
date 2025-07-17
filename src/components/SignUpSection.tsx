import React from 'react'
import MyButton from './MyButton'

function SignUpSection() {
  return (
    <section className='py-20 bg-[#ff6600]'>
        <div className="container centralize-content flex-col gap-6 text-center">
            <h2 className='text-3xl text-white font-bold'>Let ThinkPal Guide Your Learning Journey</h2>
            <MyButton text='Create Your Free Account' styles='' bgColor='var(--main-color)' textColor='black' onClick={console.log("clicked")} />
        </div>
    </section>
  )
}

export default SignUpSection