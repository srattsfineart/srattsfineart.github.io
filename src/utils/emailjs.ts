import emailjs from '@emailjs/browser';

// Initialize EmailJS with your public key
export const initEmailJS = () => {
  // TODO: Replace 'YOUR_PUBLIC_KEY' with your actual EmailJS public key
  emailjs.init('YOUR_PUBLIC_KEY');
};
