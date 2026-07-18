import { Link } from 'react-router-dom';

function Profile() {
  return (
    <main className="min-h-screen bg-slate-50 px-6 py-12 md:px-8">
      <div className="mx-auto w-full max-w-3xl rounded-[32px] border border-slate-200 bg-white p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-950">Profile</h1>
            <p className="mt-2 text-slate-700">Manage your account information and settings.</p>
          </div>
          <Link to="/" className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white hover:bg-slate-900">
            Back to home
          </Link>
        </div>
        <div className="mt-10 space-y-6">
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-600">Account</p>
            <p className="mt-2 text-base text-slate-700">Username: <span className="font-semibold">jordan.osas</span></p>
          </div>
          <div className="rounded-[28px] border border-slate-200 bg-slate-50 p-6">
            <p className="text-sm uppercase tracking-[0.24em] text-slate-600">Email</p>
            <p className="mt-2 text-base text-slate-700">you@example.com</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Profile;

