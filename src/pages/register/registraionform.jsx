import { useState } from "react";

const RegisterForm = () => {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("✅ Data captured (API coming later)");
    console.log(formData); // future POST API call here
  };

  return (
    <section id="register" className="bg-gray-100 py-16 px-4 text-center">
      <h2 className="text-3xl font-bold mb-6 text-green-800">रजिस्टर करें</h2>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto text-left">
        <input
          type="text"
          name="name"
          placeholder="नाम"
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300"
        />
        <input
          type="tel"
          name="phone"
          placeholder="फ़ोन नंबर"
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300"
        />
        <input
          type="email"
          name="email"
          placeholder="ईमेल"
          onChange={handleChange}
          className="w-full p-3 rounded border border-gray-300"
        />
        <button type="submit" className="w-full bg-green-700 text-white py-3 rounded hover:bg-green-600">
          Submit
        </button>
      </form>
    </section>
  );
};

export default RegisterForm;
