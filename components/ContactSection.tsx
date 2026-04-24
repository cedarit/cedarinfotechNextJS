"use client";

import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle, AlertCircle } from "lucide-react";
import { COMPANY, CONTACT_FORM_ENDPOINT } from "@/lib/constants";

type FormState = "idle" | "submitting" | "success" | "error";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  organization: "",
  currentSystem: "",
  message: "",
};

export default function ContactSection() {
  const [form, setForm] = useState(initialForm);
  const [status, setStatus] = useState<FormState>("idle");
  const [errors, setErrors] = useState<Partial<typeof initialForm>>({});

  const validate = () => {
    const e: Partial<typeof initialForm> = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      e.email = "Enter a valid email";
    if (!form.message.trim()) e.message = "Message is required";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [e.target.name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("submitting");
    try {
      const res = await fetch(CONTACT_FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus("success");
        setForm(initialForm);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass = (field: keyof typeof initialForm) =>
    `w-full px-4 py-3 rounded-lg border text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
      errors[field]
        ? "border-red-300 focus:ring-red-200"
        : "border-gray-200 focus:ring-[#4A9EFF]/30 focus:border-[#4A9EFF]"
    } bg-white`;

  return (
    <section id="contact" className="py-24 bg-[#F4F6FA]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — info */}
          <div>
            <p className="text-[#4A9EFF] text-sm font-semibold uppercase tracking-widest mb-4">
              Get in Touch
            </p>
            <h2
              className="text-[#0A0A0A] font-bold tracking-tight mb-6"
              style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
            >
              Let&apos;s Talk About Your System
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-10">
              Describe what you&apos;re working with. Whether it&apos;s a legacy migration,
              AI adoption, or team training, we&apos;ll respond with a practical
              perspective—not a sales pitch.
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EEF3FF] flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-[#1A3EAF]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">
                    Email
                  </p>
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-[#0A0A0A] font-medium hover:text-[#4A9EFF] transition-colors"
                  >
                    {COMPANY.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-11 h-11 rounded-xl bg-[#EEF3FF] flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-[#1A3EAF]" />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">
                    Location
                  </p>
                  <p className="text-[#0A0A0A] font-medium">{COMPANY.location}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-sm">
            {status === "success" ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-12">
                <CheckCircle size={48} className="text-[#4A9EFF] mb-4" />
                <h3 className="text-[#0A0A0A] font-bold text-xl mb-2">
                  Message Received
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                  Thanks for reaching out. We&apos;ll review your message and get
                  back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-6 text-[#1A3EAF] hover:text-[#4A9EFF] text-sm font-medium transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1.5">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={inputClass("name")}
                    />
                    {errors.name && (
                      <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1.5">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@company.com"
                      className={inputClass("email")}
                    />
                    {errors.email && (
                      <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1.5">
                      Phone
                    </label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXX XXXXX"
                      className={inputClass("phone")}
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1.5">
                      Organization
                    </label>
                    <input
                      name="organization"
                      value={form.organization}
                      onChange={handleChange}
                      placeholder="Your organization"
                      className={inputClass("organization")}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1.5">
                    Current System / Challenge
                  </label>
                  <input
                    name="currentSystem"
                    value={form.currentSystem}
                    onChange={handleChange}
                    placeholder="e.g. Drupal 7, legacy ERP, CiviCRM..."
                    className={inputClass("currentSystem")}
                  />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 font-semibold uppercase tracking-wider mb-1.5">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us what you're working with and what you'd like to achieve..."
                    className={`${inputClass("message")} resize-none`}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-xs mt-1">{errors.message}</p>
                  )}
                </div>

                {status === "error" && (
                  <div className="flex items-center gap-2 text-red-500 text-sm bg-red-50 px-4 py-3 rounded-lg">
                    <AlertCircle size={16} />
                    Something went wrong. Please email us directly at{" "}
                    <a href={`mailto:${COMPANY.email}`} className="underline">
                      {COMPANY.email}
                    </a>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="flex items-center justify-center gap-2.5 w-full py-3.5 bg-[#1A3EAF] hover:bg-[#4A9EFF] disabled:opacity-60 text-white font-semibold rounded-lg transition-all duration-200 text-sm shadow-md hover:shadow-lg"
                >
                  {status === "submitting" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
