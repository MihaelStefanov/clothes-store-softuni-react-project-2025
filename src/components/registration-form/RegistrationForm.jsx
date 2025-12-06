import "./registration-form.css"

export default function RegistrationForm() {
  return (
    <div className="register-page">

      <h2>Register</h2>

      <form className="register-form">

        {/* First Name */}
        <label>Име:</label>
        <input
          type="text"
          placeholder="Въведи име"
        />

        {/* Last Name */}
        <label>Фамилия:</label>
        <input
          type="text"
          placeholder="Въведи фамилия"
        />

        {/* Email */}
        <label>Имейл:</label>
        <input
          type="email"
          placeholder="example@gmail.com"
        />

        {/* Password */}
        <label>Парола:</label>
        <input
          type="password"
          placeholder="Парола"
        />

        {/* Gender */}
        <label>Пол:</label>
        <select>
          <option value="">--Избери--</option>
          <option value="men">Мъж</option>
          <option value="women">Жена</option>
        </select>

        <button type="button">Регистрация</button>
      </form>
    </div>
  );
}
