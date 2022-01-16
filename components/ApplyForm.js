import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';

const ApplyForm = () => {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [github, setGithub] = useState('');
  const [cv, setCv] = useState(null);

  const { register, handleSubmit, reset } = useForm();
  const [submitting, setSubmitting] = useState(false);

  // const sendMail = async (e, data) => {
  //   e.preventDefault();

  //   axios.post('/api/email', data).then(
  //     (res) => {
  //       alert('Form submitted su')
  //       setName('');
  //       setSurname('');
  //       setEmail('');
  //       setGithub('');
  //       setCv('');
  //     }
  //   ).catch(
  //     (e) => console.log(e)
  //   );
  // }

  return (
    <section className="lg:m-20 m-8">
      <form className="w-full lg:max-w-4xl mt-16" onSubmit={handleSubmit(async (data) => {
        setSubmitting(true);
        axios.post('/api/email', data).then(
          (res) => {
            alert('Form submitted')
            // setName('');
            // setSurname('');
            // setEmail('');
            // setGithub('');
            // setCv('');
          }
        ).catch(
          (e) => console.log(e)
        );
        setSubmitting(false);
        reset();
      })}>
        <div className="flex flex-col relative justify-center mt-14">
          <input {...register("name", { required: true })} id="name" className="p-1 rounded" type="text" />
          <label htmlFor="name" className="absolute p-1 flex">Name</label>
        </div>
        <div className="flex flex-col relative justify-center mt-14">
          <input {...register("surname", { required: true })} id="surname" className="p-1 rounded" type="text" />
          <label htmlFor="surname" className="absolute p-1">Surname</label>
        </div>
        <div className="flex flex-col relative justify-center mt-14">
          <input {...register("email", { required: true })} id="email" className="p-1 rounded" type="email" />
          <label htmlFor="email" className="absolute p-1">Email</label>
        </div>
        <div className="flex flex-col relative justify-center mt-14">
          <input {...register("github", { required: true })} id="github" className="p-1 rounded" type="text" />
          <label htmlFor="github" className="absolute p-1">Github (URL)</label>
        </div>
        {/* <div className="flex flex-col relative justify-center mt-14">
          <input {...register("cv")} id="cv" type="file" accept="application/pdf"></input>
          <label htmlFor="cv" className="absolute p-1">CV (PDF)</label>
        </div> */}
        <button type="submit" disabled={submitting} className="w-full lg:w-3/5 h-10 relative rounded group overflow-hidden font-medium border-2 border-ycc-pink text-ycc-pink inline-block mt-14 hover:underline hover:text-white">
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-ycc-pink group-hover:h-full"></span>
          <span className="relative group-hover:text-white">Submit</span>
        </button>
      </form>
    </section>
  )
}

export default ApplyForm
