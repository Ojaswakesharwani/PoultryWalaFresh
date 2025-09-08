import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const statesWithCities = {
  MadhyaPradesh: ["Bhopal", "Indore", "Jabalpur"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Gujarat: ["Ahmedabad", "Surat", "Vadodara"],
};

function Registration() {
  const { t } = useTranslation();

  const [formData, setFormData] = useState({
    Name: "",
    Phone: "",
    Email: "",
    State: "",
    City: "",
    Role: "",
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  // ✅ individual field validation
  const validateField = (name, value) => {
    let error = "";

    switch (name) {
      case "Name":
        if (!value.trim()) error = "Name is required";
        else if (!/^[A-Za-z\s]+$/.test(value))
          error = "Name must contain only letters";
        break;

      case "Phone":
        if (!value.trim()) error = "Phone is required";
        else if (!/^[0-9]{10}$/.test(value))
          error = "Phone must be exactly 10 digits";
        break;

      case "Email":
        if (!value.trim()) error = "Email is required";
        else if (!/^\S+@\S+\.\S+$/.test(value))
          error = "Invalid email address";
        break;

      case "State":
        if (!value) error = "Please select a state";
        break;

      case "City":
        if (!value.trim()) error = "City is required";
        else if (!/^[A-Za-z\s]+$/.test(value))
          error = "City must contain only letters";
        break;

      case "Role":
        if (!value) error = "Please select a role";
        break;

      default:
        break;
    }

    return error;
  };

  // ✅ full form validation before submit
  const validateForm = () => {
    const newErrors = {};
    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // ✅ input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // real-time validation
    const error = validateField(name, value);
    setErrors({ ...errors, [name]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setLoading(true);

    const data = { ...formData };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby-jYpAy-O9i-hJOV7AhSZsnEq_7p1xBiD45ukeejz3qANRE0kZlmfQKE5kxs1tYaH1pQ/exec",
        {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: new URLSearchParams(data),
        }
      );

      const result = await response.json();
      alert(result.message);

      setFormData({
        Name: "",
        Phone: "",
        Email: "",
        State: "",
        City: "",
        Role: "",
      });
      setErrors({});
    } catch (err) {
      console.error(err);
      alert("Error ❌: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md md:max-w-xl lg:max-w-2xl mx-auto bg-white p-6 md:p-10 rounded-xl shadow-lg">
      <h2 className="text-2xl md:text-3xl font-bold text-green-700 mb-6 text-center">
        {t("registration_title")}
      </h2>

      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        {/* Name */}
        <div>
          <input
            type="text"
            name="Name"
            value={formData.Name}
            onChange={handleChange}
            placeholder={t("registration_name")}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
          {errors.Name && (
            <p className="text-red-500 text-sm mt-1">{errors.Name}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <input
            type="tel"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
            placeholder={t("registration_phone")}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
          {errors.Phone && (
            <p className="text-red-500 text-sm mt-1">{errors.Phone}</p>
          )}
        </div>

        {/* Email */}
        <div className="md:col-span-2">
          <input
            type="email"
            name="Email"
            value={formData.Email}
            onChange={handleChange}
            placeholder={t("registration_email")}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
          {errors.Email && (
            <p className="text-red-500 text-sm mt-1">{errors.Email}</p>
          )}
        </div>

        {/* State */}
        <div>
          <select
            name="State"
            value={formData.State}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          >
            <option value="">{t("registration_state")}</option>
            {Object.keys(statesWithCities).map((st) => (
              <option key={st} value={st}>
                {st}
              </option>
            ))}
          </select>
          {errors.State && (
            <p className="text-red-500 text-sm mt-1">{errors.State}</p>
          )}
        </div>

        {/* City */}
        <div>
          <input
            name="City"
            type="text"
            value={formData.City}
            onChange={handleChange}
            placeholder={t("registration_city")}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          />
          {errors.City && (
            <p className="text-red-500 text-sm mt-1">{errors.City}</p>
          )}
        </div>

        {/* Role */}
        <div className="md:col-span-2">
          <select
            name="Role"
            value={formData.Role}
            onChange={handleChange}
            className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
          >
            <option value="">{t("registration_role")}</option>
            <option value="Buyer">{t("registration_buyer")}</option>
            <option value="Seller">{t("registration_seller")}</option>
          </select>
          {errors.Role && (
            <p className="text-red-500 text-sm mt-1">{errors.Role}</p>
          )}
        </div>

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="w-full md:col-span-2 bg-green-600 text-white py-2 rounded-lg font-bold hover:bg-green-700 transition"
        >
          {loading ? t("registration_submitting") : t("registration_submit")}
        </button>
      </form>
    </div>
  );
}

export default Registration;
