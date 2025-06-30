"use client"

import { useState } from "react"
import Swal from "sweetalert2"

export default function ContactForm() {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const form = e.currentTarget
    const formData = new FormData(form)

    const response = await fetch("https://formspree.io/f/meokngeg", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })

    if (response.ok) {
      Swal.fire("Success!", "Your message has been sent!", "success")
      form.reset()
    } else {
      Swal.fire("Error", "Something went wrong. Try again later.", "error")
    }

    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="max-w-xl mx-auto p-4 space-y-4">
      <input
        name="name"
        type="text"
        placeholder="Your Name"
        required
        className="w-full border p-2 rounded"
      />
      <input
        name="email"
        type="email"
        placeholder="Your Email"
        required
        className="w-full border p-2 rounded"
      />
      <textarea
        name="message"
        rows={5}
        placeholder="Your Message"
        required
        className="w-full border p-2 rounded"
      ></textarea>
      <button
        type="submit"
        disabled={loading}
        className="bg-primary text-white px-4 py-2 rounded hover:opacity-90"
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}
