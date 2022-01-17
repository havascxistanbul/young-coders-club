import React, { useState } from 'react';
import axios from 'axios';

const ApplyForm = () => {
  // const [name, setName] = useState('');
  // const [surname, setSurname] = useState('');
  // const [email, setEmail] = useState('');
  // const [github, setGithub] = useState('');
  // const [cv, setCv] = useState(null);
  const [submitting, setSubmitting] = useState(false);
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

        const config = {
          headers: { 'content-type': 'multipart/form-data;' },
        };
        await axios.post('/api/uploads', formData, config).then(
          (res) => {
            alert('Form submitted');
            // setName('');
            // setSurname('');
            // setEmail('');
            // setGithub('');
            // setCv('');
            resetForm();
          }
        ).catch(
          (e) => console.log(e)
        );

        setSubmitting(false);
      })}>
        <div className="flex flex-col relative justify-center mt-14">
          <input id="name" className="p-1 rounded" type="text" name="name" />
          <label htmlFor="name" className="absolute p-1 flex">Name</label>
        </div>
        <div className="flex flex-col relative justify-center mt-14">
          <input id="surname" className="p-1 rounded" type="text" name="surname" />
          <label htmlFor="surname" className="absolute p-1">Surname</label>
        </div>
        <div className="flex flex-col relative justify-center mt-14">
          <input id="email" className="p-1 rounded" type="email" name="email" />
          <label htmlFor="email" className="absolute p-1">Email</label>
        </div>
        <div className="flex flex-col relative justify-center mt-14">
          <input id="github" className="p-1 rounded" type="text" name="github" />
          <label htmlFor="github" className="absolute p-1">Github (URL)</label>
        </div>
        <div className="flex flex-col relative justify-center mt-14">
          <input id="files" type="file" name="files" ></input>
          <label htmlFor="cv" className="absolute p-1">CV (PDF)</label>
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
