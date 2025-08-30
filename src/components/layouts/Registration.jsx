import React, { useState } from "react";
import { useTranslation } from "react-i18next";

const statesWithCities = {
  "Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi"],
  Maharashtra: ["Mumbai", "Pune", "Nagpur"],
  Delhi: ["New Delhi", "Dwarka", "Rohini"],
  Bihar: ["Patna", "Gaya", "Bhagalpur"],
  Punjab: ["Amritsar", "Ludhiana", "Jalandhar"],
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

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      Name: formData.Name,
      Email: formData.Email,
      Phone: formData.Phone,
      State: formData.State,
      City: formData.City,
      Role: formData.Role,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycby-jYpAy-O9i-hJOV7AhSZsnEq_7p1xBiD45ukeejz3qANRE0kZlmfQKE5kxs1tYaH1pQ/exec",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
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

      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Name */}
        <input
          type="text"
          name="Name"
          value={formData.Name}
          onChange={handleChange}
          placeholder={t("registration_name")}
          required
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />

        {/* Phone */}
        <input
          type="tel"
          name="Phone"
          pattern="[0-9]{10}"
          placeholder={t("registration_phone")}
          value={formData.Phone}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        />

        {/* Email */}
        <input
          type="email"
          name="Email"
          value={formData.Email}
          onChange={handleChange}
          placeholder={t("registration_email")}
          required
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 md:col-span-2"
        />

        {/* State */}
        <select
          name="State"
          value={formData.State}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        >
          <option value="">{t("registration_state")}</option>
          {Object.keys(statesWithCities).map((st) => (
            <option key={st} value={st}>
              {st}
            </option>
          ))}
        </select>

        {/* City */}
        <select
          name="City"
          value={formData.City}
          onChange={handleChange}
          required
          disabled={!formData.State}
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500"
        >
          <option value="">{t("registration_city")}</option>
          {formData.State &&
            statesWithCities[formData.State].map((ct) => (
              <option key={ct} value={ct}>
                {ct}
              </option>
            ))}
        </select>

        {/* Role */}
        <select
          name="Role"
          value={formData.Role}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded-lg focus:ring-2 focus:ring-green-500 md:col-span-2"
        >
          <option value="">{t("registration_role")}</option>
          <option value="Buyer">{t("registration_buyer")}</option>
          <option value="Seller">{t("registration_seller")}</option>
        </select>

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
