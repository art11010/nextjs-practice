export default function Register() {
  return (
    <div>
      <h4>회원가입</h4>
      <form action="/api/post/new" method="POST">
        <div className="flex flex-col items-start gap-4 mt-4 pt-4 border-t border-gray-300">
          <input
            type="text"
            name="id"
            className="text-black"
            placeholder="ID"
          />
          <input
            type="text"
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
