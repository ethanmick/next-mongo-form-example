import Head from 'next/head'
import Image from 'next/image'
import { useForm } from 'react-hook-form'
import styles from '../styles/Home.module.css'

export default function Home() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: '',
      email: '',
      cookie: ''
    }
  })

  const onSubmit = async (data) => {
    try {
      const res = await fetch('/api/submit', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      alert('Data submitted successfully, check the server logs for more.')
    } catch (err) {
      console.error(err)
      alert('Error:', err?.message)
    }
  }

  return (
    <>
      <Head>
        <title>Mongo Form Demo</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
          <div className={styles.inputWrapper}>
            <label htmlFor="name">Name</label>
            <input className={styles.input} {...register('name')} />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="email">Email</label>
            <input
              className={styles.input}
              {...register('email')}
              type="email"
            />
          </div>
          <div className={styles.inputWrapper}>
            <label htmlFor="cookue">What is your favorite cookie?</label>
            <input className={styles.input} {...register('cookie')} />
          </div>
          <div>
            <button type="submit">Submit Form</button>
          </div>
        </form>
      </main>
    </>
  )
}
