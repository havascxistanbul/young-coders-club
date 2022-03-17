import React, { useState } from 'react';
import axios from 'axios';
// import Confetti from '../components/Confetti';
import ConfettiExplosion from 'react-confetti-explosion';

const ApplyForm = (props) => {
  const [submitting, setSubmitting] = useState(false);
  const [fire, setFire] = useState(false);

  const resetForm = () => {
    document.getElementById('form').reset();
  }

  return (
    <section className="lg:m-20 m-8">
      <form id="form" className="w-full lg:max-w-4xl mt-16" encType="multipart/form-data" onSubmit={(async (e) => {
        e.preventDefault();

        setSubmitting(true);

        const formData = new FormData();

        formData.append("name", e.target.name.value);
        formData.append("surname", e.target.surname.value);
        formData.append("email", e.target.email.value);
        formData.append("github", e.target.github.value);
        formData.append("files", e.target.files.files[0]);
        console.log(formData);
       
        const config = {
          headers: { 'content-type': 'multipart/form-data;' },
        };
        await axios.post('/api/uploads', formData, config).then(
          (res) => {
            document.getElementById('name').value = '';
            document.getElementById('surname').value = '';
            resetForm();
            setFire(true);
          }
        ).catch(
          (e) => console.log(e)
        );

        setSubmitting(false);
      })}>
        <div className="flex flex-col relative justify-center mt-14">
          <input id="name" required disabled className="p-1 rounded" type="text" name="name" value={props.name} />
          <label htmlFor="name" className="absolute p-1 flex">Name</label>
        </div>
        <div className="flex flex-col relative justify-center mt-14">
          <input id="surname" required disabled className="p-1 rounded" type="text" name="surname" value={props.lastName} />
          <label htmlFor="surname" className="absolute p-1">Surname</label>
        </div>
        <div className="flex flex-col relative justify-center mt-14">
          <input id="email" required className="p-1 rounded" type="email" name="email" />
          <label htmlFor="email" className="absolute p-1">Email</label>
        </div>
        <div className="flex flex-col relative justify-center mt-14">
          <input id="github" required className="p-1 rounded" type="text" name="github" />
          <label htmlFor="github" className="absolute p-1">Github (URL)</label>
        </div>
        <div className="flex flex-col relative justify-center mt-14">
          <input id="files" required type="file" name="files" accept="application/pdf" ></input>
          <label htmlFor="cv" className="absolute p-1">CV (PDF)</label>
        </div>
        <div className="flex flex-col relative justify-center">
          <div className="absolute left-1/2 lg:left-1/4 top-8">
            {fire && <ConfettiExplosion />}
          </div>
        </div>
        <button type="submit" disabled={submitting} className="w-full lg:w-3/5 h-10 relative rounded group overflow-hidden font-medium border-2 border-ycc-pink text-ycc-pink inline-block mt-14 hover:underline hover:text-white">
          <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-ycc-pink group-hover:h-full"></span>
          <span className="relative group-hover:text-white">Submit</span>
        </button>
      </form>
    </section>
  )
}

export default ApplyForm
