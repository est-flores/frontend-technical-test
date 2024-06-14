"use client"

import { useState, FormEvent } from 'react'

const SubscribeForm = () => {
  const [email, setEmail] = useState<string>('')
  const [submittedEmail, setSubmittedEmail] = useState<string>('')
  const [error, setError] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      setError('Please enter a valid email address.')
      return
    }

    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmittedEmail(email)
      setEmail('')
      setError('')
    }, 1000)
  }

  return (
    <div className="max-w-md mx-auto mt-10 p-4">
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="p-2 border border-gray-300 rounded-md"
          disabled={isSubmitting}
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-md disabled:opacity-50"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Submitting...' : 'Subscribe'}
        </button>
      </form>
      {submittedEmail && (
        <p className="mt-4 text-green-500">
          Successfully subscribed with email: {submittedEmail}
        </p>
      )}
    </div>
  )
}

export default SubscribeForm
