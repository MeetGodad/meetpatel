import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionStatus, setSubmissionStatus] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmissionStatus('Submitting...');

    const templateParams = {
      name: name,
      email: email,
      message: message,
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_USER_ID
    )
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setSubmissionStatus('Message sent successfully!');
    })
    .catch((error) => {
      console.error('FAILED...', error);
      setSubmissionStatus('Failed to send message. Please try again later.');
    })
    .finally(() => {
      setIsSubmitting(false);
      // Clear form fields after submission
      setName('');
      setEmail('');
      setMessage('');
    });
  };

  return (
    <section className="m-14">
      <div className="max-w-lg mx-auto  p-8 rounded shadow-xl">
        <h2 className="text-3xl font-bold text-white mb-4">Contact Me</h2>
        <p className="text-gray-300 mb-4">
          Please note: <strong>This message will be sent directly to my Email.</strong>
        </p>
        <form onSubmit={handleSubmit}>
          <div className="relative mb-4">
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="peer border p-2 w-full rounded bg-gray-700 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Name"
              required
            />
            <label className="absolute top-0 left-0 p-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-blue-500">
              Name
            </label>
          </div>
          <div className="relative mb-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="peer border p-2 w-full rounded bg-gray-700 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email"
              required
            />
            <label className="absolute top-0 left-0 p-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-blue-500">
              Email
            </label>
          </div>
          <div className="relative mb-4">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="peer border p-2 w-full rounded bg-gray-700 text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Message"
              required
            ></textarea>
            <label className="absolute top-0 left-0 p-2 text-gray-500 transition-all peer-placeholder-shown:top-2 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:-top-4 peer-focus:text-blue-500">
              Message
            </label>
          </div>
          <button
            type="submit"
            className={`bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300 ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </button>
          {submissionStatus && (
            <div className="mt-4 text-center text-white">
              {submissionStatus}
            </div>
          )}
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
