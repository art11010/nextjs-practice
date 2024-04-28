export default function Register() {
  return (
    <div>
      <h4>회원가입</h4>
      <form action="/api/post/new" method="POST">
        <div className="flex flex-col items-start gap-4 mt-4 pt-4 border-t border-gray-300">
          <input
            type="text"
            name="name"
            className="text-black"
            placeholder="Name"
          />
          <input
            type="email"
            name="email"
            className="text-black"
            placeholder="Email"
          />
          <input
            type="password"
            name="password"
            className="text-black"
            placeholder="Password"
          />
        </div>
        <button type="submit" className="mt-2">
          Submit
        </button>
      </form>
    </div>
  );
}
